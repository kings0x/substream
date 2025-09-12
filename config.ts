/* eslint-disable n/no-process-env */
import path from 'path';
import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
import { z } from 'zod';
import fs from 'fs';
import appRoot from 'app-root-path';

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
    PORT: z.string(),
    NODE_ENV: z.string().default("development"),
    JWT_SECRET: z.string(),
    HASH_SECRET: z.string().min(8),
    DATABASE_URL: z.string(),
    REFRESH_TOKEN_BYTES: z.preprocess((val) => {
        if (typeof val === 'string') return Number(val);
        return val;
    }, z.number().int().positive().default(64)),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GOOGLE_CALLBACK_URL: z.string(),
    EMAIL: z.string(),
    PASSWORD: z.string(),
    REFRESH_TOKEN_EXPIRES_IN: z.preprocess((val) => {
        if (typeof val === 'string') return Number(val);
        return val;
    }, z.number().int().positive()), 
    ACCESS_TOKEN_EXPIRES_IN: z.preprocess((val) => {
        if (typeof val === 'string') return Number(val);
        return val;
    }, z.number().int().positive()),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    REDIS_PASSWORD: z.string(),
    MAIL_QUEUE_NAME: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    PAYSTACK_SECRET_KEY: z.string()
});

const parsedEnvSchema = envSchema.safeParse(process.env);

if (!parsedEnvSchema.success) {
  console.error('Env validation failed:', parsedEnvSchema.error.format());
  throw new Error('Invalid environment variables');
}

export const {
    PORT, 
    NODE_ENV, 
    JWT_SECRET, 
    HASH_SECRET, 
    REFRESH_TOKEN_BYTES, 
    GOOGLE_CLIENT_ID, 
    GOOGLE_CLIENT_SECRET, 
    GOOGLE_CALLBACK_URL, 
    EMAIL, 
    PASSWORD, 
    REFRESH_TOKEN_EXPIRES_IN, 
    ACCESS_TOKEN_EXPIRES_IN, 
    REDIS_HOST, 
    REDIS_PORT, 
    REDIS_PASSWORD, 
    MAIL_QUEUE_NAME, 
    STRIPE_SECRET_KEY,
    PAYSTACK_SECRET_KEY
} = parsedEnvSchema.data;