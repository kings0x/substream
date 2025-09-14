/* eslint-disable n/no-process-env */
import path from 'path';
import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
import { z } from 'zod';
import fs from 'fs';

const root = process.cwd();
const distPath = path.join(root, 'dist');
const distSrc = path.join(distPath, 'src');
const distConfig = path.join(distPath, 'config.js');
const srcPath = path.join(root, 'src');
const srcConfig = path.join(root, 'config.ts');

// Use dist aliases only if the dist folder and dist/config.js exist
const useDist = fs.existsSync(distPath) && fs.existsSync(distConfig);


// Check the env
const RUNTIME_NODE_ENV = (process.env.NODE_ENV ?? 'development');



const envPath = path.join( root, '/config/.env.' + RUNTIME_NODE_ENV);



// Load .env only if it exists
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.warn(`Environment file not found at: ${envPath}`);
}

if (useDist) {
  moduleAlias.addAlias('@src', distSrc);
  moduleAlias.addAlias('@config', distConfig);
} else {
  moduleAlias.addAlias('@src', srcPath);
  moduleAlias.addAlias('@config', srcConfig);
}


const envSchema = z.object({
    NODE_ENV: z.string().default("developement"),
    EMAIL: z.string(),
    PASSWORD: z.string(),
    REDIS_HOST: z.string(),

    REDIS_PORT: z.preprocess((val)=> {
      if(typeof val === "string") return Number(val)
      return val;
    }, z.number().int().positive()), 
    
    REDIS_PASSWORD: z.string(),
    MAIL_QUEUE_NAME: z.string(),
});

const parsedEnvSchema = envSchema.safeParse(process.env);

if (!parsedEnvSchema.success) {
  console.error('Env validation failed:', parsedEnvSchema.error.format());
  throw new Error('Invalid environment variables');
}

export const {
    NODE_ENV, 
    EMAIL, 
    PASSWORD, 
    REDIS_HOST, 
    REDIS_PORT, 
    REDIS_PASSWORD, 
    MAIL_QUEUE_NAME, 
} = parsedEnvSchema.data;
