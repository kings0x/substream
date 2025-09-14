import { Redis } from "ioredis";
import { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from "@config";


export const redisConfig = {
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
    password: REDIS_PASSWORD,
    maxRetriesPerRequest: null
}

export const sharedClient = new Redis({ ...redisConfig, connectionName: "bullmq-client" });
const sharedSubscriber = new Redis({ ...redisConfig, connectionName: "bullmq-subscriber" });

export const createClient = (type: "client" | "subscriber" | "bclient", redisOpts?: any) => {
  switch (type) {
    case "client":
      return sharedClient;
    case "subscriber":
      return sharedSubscriber;
    case "bclient":
      // must return a NEW connection for blocking commands — return a Redis instance
      return new Redis({ ...redisConfig, ...redisOpts, connectionName: "bullmq-bclient" });
    default:
      throw new Error(`Unexpected connection type: ${type}`);
  }
};
