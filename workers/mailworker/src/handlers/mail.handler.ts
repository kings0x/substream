import { Job, JobProgress, Worker } from "bullmq";
import transporter from "../setup/nodemailer.setup";

export async function sendEmail (job:Job){
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
        

    }