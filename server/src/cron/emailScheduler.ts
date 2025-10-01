import cron from 'node-cron';
import {prisma} from '../models/models';
import emailQueue from '../queues/emailQueue';
import makeSubscriptionEndingEmail from '@src/emailTemplates/subscriptionEnding';
import makeGracePeriodEndingEmail from '@src/emailTemplates/gracePeriodEnding';
import { addDays } from '@src/utils/utils';

type SubscriptionRow = {
  id: string;
  user_id: string;
  start_date?: Date | string;
  end_date?: Date | string;
};

const job = cron.schedule('0 0 * * *', async() => {
    //run through a loop check the db for subscriptions that are due to be cancelled "3 days before, on the day to be cancelled, and 3 days after the grace period elapses"
    //enque the mails

    const threeDaysBeforeEndSubs = await prisma.$queryRawUnsafe<SubscriptionRow[]>(
        `
        SELECT * FROM "Subscriptions" WHERE "end_date"::date = CURRENT_DATE + ${3} AND "status" = 'active'
        `
    )


    if (Array.isArray(threeDaysBeforeEndSubs) && threeDaysBeforeEndSubs.length) {


      for (const subscription of threeDaysBeforeEndSubs) {
        const findUsers = await prisma.users.findUnique({
            where: {
                id: subscription.user_id
            }  
        })

        if(findUsers) {
            emailQueue.add('subscription-ending', {
                firstName: findUsers.first_name,
                emailAddress: findUsers.email,
                html: makeSubscriptionEndingEmail({
                    name: findUsers.first_name,
                    createdAt: subscription.start_date!,
                    expiresAt: subscription.end_date!
                })
            },
            {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: 1000,
                deduplication: {
                    id: subscription.id
                }
            }
        
        );
        }
        else{
            console.log('user not found');
        }
        
      }
    } 

    else {
      console.log('nothing was found 1');
    }



    const endingTodaySubs = await prisma.$queryRawUnsafe<SubscriptionRow[]>(
        `
        SELECT * FROM "Subscriptions" WHERE "end_date"::date = CURRENT_DATE AND "status" = 'active'
        `
    )


    if (Array.isArray(endingTodaySubs) && endingTodaySubs.length) {
      for (const subscription of endingTodaySubs) {
        const findUsers = await prisma.users.findUnique({
            where: {
                id: subscription.user_id
            }  
        })

        if(findUsers) {
            emailQueue.add('subscription-ending', {
                firstName: findUsers.first_name,
                emailAddress: findUsers.email,
                html: makeSubscriptionEndingEmail({
                    name: findUsers.first_name,
                    createdAt: subscription.start_date!,
                    expiresAt: subscription.end_date!
                })
            },
            {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: 1000,

                deduplication: {
                    id: subscription.id
                }
            }
        
        );
        }
        else{
            console.log('user not found');
        }
        
      }
    } 

    else {
      console.log('nothing was found 2');
    }



    const gracePeriodSubs = await prisma.$queryRawUnsafe<SubscriptionRow[]>(
        `
        SELECT * FROM "Subscriptions" WHERE CURRENT_DATE = "end_date"::date + ${3} AND "status" = 'active'
        `
    )

    if (Array.isArray(gracePeriodSubs) && gracePeriodSubs.length) {
      for (const subscription of gracePeriodSubs) {
        const findUsers = await prisma.users.findUnique({
            where: {
                id: subscription.user_id
            }  
        })

        if(findUsers) {
            emailQueue.add('subscription-ending', {
                firstName: findUsers.first_name,
                emailAddress: findUsers.email,
                html: makeGracePeriodEndingEmail({
                    name: findUsers.first_name,
                    createdAt: subscription.start_date!,
                    expiresAt: subscription.end_date!,
                    graceEndsAt: addDays(subscription.end_date!, 7)
                })
            },
            {
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: 1000,
                                
                deduplication: {
                    id: subscription.id
                }
            });
        }
        else{
            console.log('user not found');
        }
        

      }
    }
    
    else {
      console.log('nothing was found 3');
    }

});

export default job