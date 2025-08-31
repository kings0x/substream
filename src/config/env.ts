import { config } from "dotenv";
import {z} from "zod"

config({ path: `.env`});

const envSchema = z.object({
    PORT:z.string(),

    NODE_ENV : z.string().default("developement"),

    JWT_SECRET : z.string(),

    HASH_SECRET: z.string().min(8),

    DATABASE_URL : z.string(),

    REFRESH_TOKEN_BYTES: z.preprocess((val) => {
        if (typeof val === 'string') return Number(val);
            return val;
    }, z.number().int().positive().default(64)),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GOOGLE_CALLBACK_URL: z.string(),

    EMAIL: z.string(),
    PASSWORD: z.string(),

    REFRESH_TOKEN_EXPIRES_IN: z.number().int().positive(), 
    ACCESS_TOKEN_EXPIRES_IN: z.number().int().positive()

})

const parsedEnvSchema = envSchema.safeParse(process.env)

if (!parsedEnvSchema.success) {
  console.error('Env validation failed:', parsedEnvSchema.error.format());
  throw new Error('Invalid environment variables');
}


export const {PORT,NODE_ENV, JWT_SECRET, HASH_SECRET, REFRESH_TOKEN_BYTES, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, EMAIL, PASSWORD, REFRESH_TOKEN_EXPIRES_IN, ACCESS_TOKEN_EXPIRES_IN} = parsedEnvSchema.data;
