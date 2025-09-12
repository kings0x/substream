import { Request, response, Response } from "express";
import {prisma} from "../models/models";
import axios from "axios";
import Stripe from "stripe";
import crypto from "crypto"
import { STRIPE_SECRET_KEY, PAYSTACK_SECRET_KEY } from "@config";
import { success } from "zod";
import getRawBody from "raw-body";


export async function createPaymentMethod(req: Request, res: Response) {
    //validate the request
    //check wether the user exists
    //check wether the payment method already exists
    //check wether the payment method has expired
    //create the payment method
    
    const {userId, paymentProvider, paymentType, lastDigits, cardBrand, expiryMonth, expiryYear} = req.body

    if(!userId || !paymentProvider || !paymentType || !lastDigits || !cardBrand || !expiryMonth || !expiryYear) {
        return res.status(400).json({
            success: false,
            message: "Invalid request"
        })
    }

    const user = await prisma.users.findUnique({
        where: {id: userId}
    })

    if(!user){
        return res.status(400).json({
            success: false,
            message: "User not found, payment method not saved"
        })
    }

    //check wether the payment method has already been saved
    const savedPaymentMethod = await prisma.paymentMethods.findFirst({
        where: {
            user_id: userId,
            provider: paymentProvider,
            type: paymentType,
            last_digits: lastDigits,
            brand: cardBrand,
            expiry_month: expiryMonth,
            expiry_year: expiryYear
        }
    })



    if(savedPaymentMethod) {
        return res.status(400).json({
            success: false,
            message: "Payment method already exists"
        })
    }

    //check wether it has expired 
    const currentYear = Number(String(new Date().getFullYear()).slice(-2));
    const currentMonth = new Date().getMonth() + 1;

    if(Number(expiryMonth.slice(0, 2)) > currentMonth|| Number(expiryYear.slice(-2)) > currentYear) {
        return res.status(400).json({
            success: false,
            message: "Payment method has expired"
        })
    }

    //if no saved payment method, create a new one
    const paymentMethod = await prisma.paymentMethods.create({
        data: {
            user_id: userId,
            provider: paymentProvider,
            type: paymentType,
            last_digits: lastDigits,
            brand: cardBrand,
            expiry_month: expiryMonth,
            expiry_year: expiryYear
        }
    })
}

export async function createPayment(req: Request, res: Response) {
    //how to query and find the payment method id of the user
    const {userId,subscripitonId, amount, currency, paymentMethodId, invoiceId, transactionReference} = req.body
    //subscription_id
}

export async function recievePaymentDetails (req: Request, res: Response){
    const secret = PAYSTACK_SECRET_KEY as string;
    
      // Verify the signature to ensure the request is from Paystack
      const hash = crypto
        .createHmac('sha512', secret)
        .update(req.body)
        .digest('hex');
    
      const signature = req.headers['x-paystack-signature'] as string;
    
      if (hash !== signature) {
        console.error('Invalid signature!');
        return res.status(401).send('Invalid signature');
      }
    
      // Parse the event
      const event = JSON.parse(req.body.toString());
      console.log('Received event:', event);
    
      // Handle events (e.g., successful charge)
      if (event.event === 'charge.success') {
        const data = event.data;
        // Update your database, send emails, etc.
        console.log('Payment successful for reference:', data.reference);
      }
    
    return res.sendStatus(200);
}

export async function paystackPayment(req: Request, res: Response) {

    const {email, amount } = req.body;
    if(!email || !amount){
        return res.status(409).json({
            success: false,
            message: "Incorrect request"
        })
    }
    try{

        const response = await axios.post('https://api.paystack.co/transaction/initialize', 
            {
                email,
                amount : Number(amount) * 100,
                channels: ["card", "bank"],
                callback_url: "http://localhost:3000"
            },

            {
                headers:{
                    'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }

        )

        return res.status(200).json({
            success: true,
            data: response.data.data
        })

    }
    catch(err: any){
        res.status(500).json({
            success: true,
            message: "something went wrong",
            error: err.response?.data?.message 
        })
    }

    
    
}

// export const stripePayment = async (req:Request, res: Response) => {

//     try{
//         const {items, successUrl, cancelUrl} = req.body

//         if(!Array.isArray(items) || items.length === 0 || !successUrl || !cancelUrl){
//             return res.status(409).json({
//                 message: "Invalid request"
//             })
//         }

//         const YOUR_DOMAIN = 'http://localhost:3000';

//         const stripe = new Stripe(STRIPE_SECRET_KEY as string, {
//             apiVersion: "2025-08-27.basil", // use the latest supported version
//         });

//         const session = await stripe.checkout.sessions.create({
//             line_items: items.map((item : {price: string, quantity: number})=>({
//                 price: item.price, 
//                 quantity: Number(item.quantity)|| 1
//             })),

//             mode: 'payment',

//             success_url: successUrl,
//             cancel_url: cancelUrl,
//         });

//         res.json({
//             url : session.url
//         });

//     }
//     catch(error:any){
//         return res.status(500).json({
//             message: "something went wrong",
//             error: error.message
//         })
//     }
    
// };





