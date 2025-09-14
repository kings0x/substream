import { Job, JobProgress, Worker } from "bullmq";
import { sharedClient, createClient } from "./setup/bullmq.setup";
import { sendEmail } from "./handlers/mail.handler";
import { MAIL_QUEUE_NAME } from "@config";



const mailWorker = new Worker(MAIL_QUEUE_NAME, 
    sendEmail
    ,
    {
        connection: sharedClient,
        createClient, 
        concurrency:5
    }
)

mailWorker.on("completed", (job:Job, returnValue?: any)=> console.log({
    job: job,
    returned: returnValue
}))

mailWorker.on('progress', (job: Job, progress: JobProgress) => {
    progress
});

mailWorker.on("failed", (job: Job | undefined, error:Error, prev: string)=>{
    error
})

mailWorker.on('error', err => {
  console.error(err);
});

process.on("SIGINT", async()=>{
    await mailWorker.close();  // waits for ongoing jobs to finish
    console.log('Worker closed cleanly.');
    process.exit(0);
})

process.on("SIGTERM", async()=>{
    await mailWorker.close();  // waits for ongoing jobs to finish
    console.log('Worker closed cleanly.');
    process.exit(0);
})