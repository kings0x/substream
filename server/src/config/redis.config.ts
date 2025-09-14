import {Redis} from "ioredis";
import { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from "@config";


export const redisConfig = {
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
    password: REDIS_PASSWORD,
    maxRetriesPerRequest: null
}

