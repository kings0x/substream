// src/types/bullmq.d.ts
import { Redis } from "ioredis";
export {}; // ensure this file is treated as a module

declare module "bullmq" {
  interface QueueOptions {
    createClient?: (
      type: "client" | "subscriber" | "bclient",
      redisOpts?: any
    ) => Redis | import("ioredis").RedisOptions | any;
  }
}
