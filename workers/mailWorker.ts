import { Job, JobProgress, Worker } from "bullmq";
import { sharedClient, createClient } from "./setup/bullmq.setup";
import transporter from "./setup/nodemailer.setup";
import { MAIL_QUEUE_NAME } from "@config";


const mailWorker = new Worker(MAIL_QUEUE_NAME, 
    async (job:Job) => {
        try{
            const {from, to, subject, html} = job.data;
            const mailOptions = {
                from,
                to,
                subject,
                html
            }

            const sendMail = transporter.sendMail(mailOptions)
            await job.updateProgress(100)

            return {
                success: true, 
                sendMail
            }
        }
        catch(err){
            throw err
        }
        

    },
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