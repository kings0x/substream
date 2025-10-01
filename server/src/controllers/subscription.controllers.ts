import { Request, Response } from "express";
import { prisma } from "../models/models";
import { generateInvoiceNumber } from "../utils/hashing.util";
import { check, success } from "zod";
import subscriptionQueue from "@src/queues/subscriptionQueue";

export const createSubscription = async(req: Request, res: Response) => {
    //check for email an userid in the req.user
    //check for a plan id in the req.body
    //check wether the plan id is valid and the plan is active
    //check wether the user has an active subscription plan
    //if he does return an error
    //check wether the user has a pending subscription,
    //do an upsert, if he has do nothing, if he does not create a new subscripiton plan
    //check wether an invoice has already been created
    //if it has not, create a new invoice for the user 
    //send a success message to the user 
    const {planId} = req.body;
    const ONE_HOUR = 60 * 60 * 1000;
    if (!planId) {
        return res.status(400).json({
            success: false,
            message: "required fields missing"
        })
    }

    try{
        if(!req.user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const { userId, email } = req.user as {
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
        };

        if(!userId || !email) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const plan = await prisma.plans.findFirst({
            where:{
                id: planId,
                is_active: true
            }
        })

        if(!plan) {
            return res.status(400).json({
                success: false,
                message: "plan id is invalid"
            })
        }

        const checkSubscription = await prisma.subscriptions.findFirst({
            where: {
                user_id: userId,
                status: "active"
            }
        })

        if (checkSubscription) {
            return res.status(400).json({
                success: false,
                message: "user already has an active subscription"
            })
        }

        //we have to do something incase a user has a pending subscription
        const checkPendingSubscription = await prisma.subscriptions.findFirst({
            where: {
                status: "trailing",
                user_id: userId
            },
        })


        if(checkPendingSubscription){
            if(planId !== checkPendingSubscription.plan_id){
                await prisma.subscriptions.update({
                    where: {
                        id: checkPendingSubscription.id
                    },
                    data: {
                        user_id: userId,
                        plan_id: planId,
                        status: "trailing"
                    }
                })
            }
            
            return res.status(200).json({
                success: true,
                message: "subscription successful"
            })

        }

        const {subscription, invoice} = await prisma.$transaction(async (tx) => {
            const subscription = await tx.subscriptions.create({
                data: {
                    user_id: userId,
                    plan_id: planId,
                    status: "trailing"
                }
            })

            const amountDueInCents = plan.price_cents
            //generate invoiceNumber
            const invoiceNumber = generateInvoiceNumber(userId)

            const invoice = await tx.invoices.create({
                data: {
                    user_id: userId,
                    subscription_id: subscription.id,
                    amount_due_cents: amountDueInCents,
                    status: "draft",
                    due_date: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    invoiceJobId:"",
                    invoice_number: invoiceNumber
                }
            })

            

            //try and include logic to handle recurring subscription
            //include logic to handle free trials

            return {subscription, invoice}
        })

        await subscriptionQueue.add("invoice checking",
                {
                    subscriptionId: subscription.id!,
                    invoiceId: invoice.id!
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
                    },

                    delay: ONE_HOUR
                }
            )


        return res.status(200).json({
            success: true,
            message: "subscription successful"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "someting went wrong"
        })
    }
    
    
}

export const createRecurringSubscription = async(req: Request, res: Response) => {
    
}

export const cancelSubscription = async(req: Request, res: Response) => {
    //check wether there is a req.user
    //check wether the user has an active or pending subscription plan
    //cancel the subscription plan for the user 
    //send a success message to the user 

    try{
        const userId = req.params.id;

        //for trailing subscription cancel it and its invoice
        const checkSubscription = await prisma.subscriptions.findFirst({
            where: {
                user_id: userId,
                status: { in: ["active", "trailing"] }
            }
        })

        
        if(!checkSubscription) {
            return res.status(400).json({
                success: false,
                message: "user does not have an active or pending subscription"
            })
        }

        if(checkSubscription.status === "trailing"){
            const findInvoice = await prisma.invoices.findFirst({
                where: {
                    subscription_id: checkSubscription.id
                }
            })

            if(!findInvoice){
                return res.status(400).json({
                    success: false,
                    message: "invoice not found"
                })
            }

            const invoice = await prisma.invoices.update({
                where: {
                    id: findInvoice.id
                },
                data: {
                    status: "void"
                }
            })
        }
    //if he does has an active or pending subscripiton, update it to cancelled and update the date
        const subscription = await prisma.subscriptions.update({
            where: {
                id: checkSubscription.id
            },
            data: {
                status: "cancelled",
                end_date: new Date()
            }
        })

        return res.status(200).json({
            success: true,
            message: "subscription cancelled"
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "someting went wrong"
        })
    }
    
    
}

export const getAllSubscription = async(req: Request, res: Response) => {
    try{
        
        const allSubscriptions = await prisma.subscriptions.findMany();
        res.status(200).json({
            success: true,
            message: allSubscriptions
        })

    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "someting went wrong"
        })
    }

    
}

export const getUserSubscription = async(req: Request, res: Response) => {
    try{
       const userId = req.params.id;

        const userSubscription = await prisma.subscriptions.findMany({
            where: {
                user_id: userId
            }
        })

        return res.status(200).json({
            success: true,
            message: userSubscription
        })

    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            message: "someting went wrong"
        })

    }
    
}

export const deleteUserSubscriptions = async(req: Request, res: Response) => {
    try{
       const userId = req.params.id;

        const userSubscription = await prisma.subscriptions.deleteMany({
            where: {
                user_id: userId
            }
        })

        return res.status(200).json({
            success: true,
            message: userSubscription
        })

    }
    catch(error){

        console.log(error);
        return res.status(500).json({
            message: "someting went wrong"
        })

    }
}