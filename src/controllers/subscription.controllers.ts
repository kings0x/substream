import { Request, Response } from "express";
import { prisma } from "../models/models";

export const createSubscription = async(req: Request, res: Response) => {
    //check wether there is a req.user
    //check for a plan id
    //check wether the plan id is valid and the plan is active
    //check wether the user has an active or pending subscription plan
    //create a new subscription plan for the user 
    //send a success message to the user 
    try{
        if(!req.user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        const { userId, firstName, lastName, email } = req.user as {
            userId: string;
            firstName: string;
            lastName: string;
            email: string;
        };

        if(!userId || !firstName || !lastName || !email) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }


        const {planId} = req.body;

        if (!planId) {
            return res.status(400).json({
                success: false,
                message: "required fields missing"
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
                status: { in: ["active", "trailing"] }
            }
        })

        if (checkSubscription) {
            return res.status(400).json({
                success: false,
                message: "user already has an active or pending subscription"
            })
        }
        //we have to do something incase a user has a pending subscription
        const subscription = await prisma.subscriptions.create({
            data: {
                user_id: userId,
                plan_id: planId,
                status: "trailing",
                start_date: new Date(),
                //add end date
            }
        })
        

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

export const cancelSubscription = async(req: Request, res: Response) => {
    //check wether there is a req.user
    //check wether the user has an active or pending subscription plan
    //cancel the subscription plan for the user 
    //send a success message to the user 

    try{
        const userId = req.params.id;

        //confirm that the user indeed has an active or pending subscription
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