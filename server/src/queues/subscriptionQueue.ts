// src/queues/emailQueue.ts
import { Queue } from "bullmq";
import { sharedClient, createClient } from "../config/bullmq.config";
import {MAIL_QUEUE_NAME, SUBSCRIPTION_QUEUE_NAME} from "@config"

const subscriptionQueue = new Queue(SUBSCRIPTION_QUEUE_NAME, {
    connection:sharedClient,
    createClient
 });

 export default subscriptionQueue;