import { Request, Response } from "express";
import { generateInvoiceNumber } from "../utils/hashing.util";
import { prisma } from "../models/models";


export async function createInvoice(req: Request, res: Response) {
    //query subscription id
    //query amount_due in cents
    //amount paid ==0 until updated
    //paid at ? would be updated
    //set status normally
    //generate the invoice number with the function
    //transaction reference would be updated
    const {userId, paymentMethodId, currency, dueDate } = req.body
    //validate the request
    if(!userId || !paymentMethodId || !currency || !dueDate) {
        return res.status(400).json({
            success: false,
            message: "Invalid request"
        })
    }

    //check for an existing trailing subscription
    const userSubscription = await prisma.subscriptions.findFirst({
        where: {
            user_id: userId,
            status: "trailing"
        }
    })

    if(!userSubscription) {
        return res.status(400).json({
            success: false,
            message: "User does not have a trailing subscription"
        })
    }

    //get the subscription id and find the amount to be paid from the plan id of the subscription
    const subscriptionId = userSubscription.id
    const planId = userSubscription.plan_id

    const plan = await prisma.plans.findFirst({
        where: {
            id: planId
        }
    })

    if(!plan){
        return res.status(400).json({
            success: false,
            message: "Plan not found"
        })
    }

    const amountDueInCents = plan.price_cents

    //generate invoiceNumber
    const invoiceNumber = generateInvoiceNumber(userId)

    //create invoice
    const invoice = await prisma.invoices.create({
        data: {
            user_id: userId,
            subscription_id: subscriptionId,
            payment_method_id: paymentMethodId,
            amount_due_cents: amountDueInCents,
            amount_paid_cents: 0,
            currency: currency,
            due_date: dueDate,
            paid_at: null,
            status: "draft",
            invoice_number: invoiceNumber
        }
    })
}