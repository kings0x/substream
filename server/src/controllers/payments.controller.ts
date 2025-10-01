import { Request,Response } from "express";
import {prisma} from "../models/models";
import axios from "axios";
import crypto from "crypto"
import {PAYSTACK_SECRET_KEY } from "@config";
import getRawBody from "raw-body";


export async function intiatePayment(req: Request, res: Response) {
    try{
        //validate the request
        //check wether the user exists
        //check wether the payment method already exists
        //check wether the payment method has expired
        //create the payment method
        const {userId, email} = req.user as {userId: string, email: string};
        const {paymentProvider, paymentType, lastDigits, cardBrand, expiryMonth, expiryYear, currency} = req.body

        if(!userId || !paymentProvider || !paymentType || !lastDigits || !cardBrand || !currency) {
            return res.status(400).json({
                success: false,
                message: "Invalid request"
            })
        }

        let paymentMethodId = "";
        //check wether the payment method has already been saved
        const savedPaymentMethod = await prisma.paymentMethods.findFirst({
            where: {
                user_id: userId,
                provider: paymentProvider,
                type: paymentType,
                brand: cardBrand,
                expiry_month: expiryMonth,
                expiry_year: expiryYear
            }
        })


        if(savedPaymentMethod) {
            paymentMethodId = savedPaymentMethod.id
        }

        else{
            //if no saved payment method, create a new one
            const paymentMethod = await prisma.paymentMethods.create({
                data: {
                    user_id: userId,
                    provider: paymentProvider,
                    type: paymentType,
                }
            })

            if(!paymentMethod) {
                return res.status(400).json({
                    success: false,
                    message: "Payment method not saved"
                })
            }
            
            paymentMethodId = paymentMethod.id
        }


        
        //create a payment intent
        const findSubscription = await prisma.subscriptions.findFirst({
            where: {
                user_id: userId,
                status: "trailing"
            }
        })

        if(!findSubscription) {
            return res.status(400).json({
                success: false,
                message: "User does not have a trailing subscription"
            })
        }

        const subscriptionId = findSubscription.id;
        const planId = findSubscription.plan_id;

        const findAmount = await prisma.plans.findFirst({
            where: {
                id: planId
            }
        })

        if(!findAmount) {
            return res.status(400).json({
                success: false,
                message: "Plan not found"
            })
        }

        const amount_cents = findAmount.price_cents

        const paymentIntent = await prisma.payments.create({

            data: {
                user_id: userId,
                subscription_id: subscriptionId,
                amount_cents: Number(amount_cents),
                currency,
                status: "pending",
                payment_method_id: paymentMethodId,
            }
        })

        if(!paymentIntent) {
            return res.status(400).json({
                success: false,
                message: "Payment not created"
            })
        }

        //initiate the payment with paystack
        const response = await axios.post('https://api.paystack.co/transaction/initialize', 
            {
                email,
                amount : Number(amount_cents),
                channels: [paymentType],
                callback_url: "http://localhost:3000"
            },

            {
                headers:{
                    'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }

        )

        const reference = response.data.data.reference

        const updatePaymentIntent = await prisma.payments.update({
            where: {
                id: paymentIntent.id
            },
            data: {
                transaction_reference: reference
            }
        })

        if(!updatePaymentIntent) {
            return res.status(400).json({
                success: false,
                message: "Payment not updated"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Payment initiated successfully",
            data: response.data.data
        })
        
    }

    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "something went wrong"
        })
    }
}


export async function recievePaymentDetails(req: Request, res: Response){
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

      //send confirmation
      res.sendStatus(200);
    
      // Parse the event
      const event = JSON.parse(req.body.toString());
      console.log('Received event:', event);
    
      // Handle events (e.g., successful charge)
      if (event.event === 'charge.success') {


        //now rewrite this to handle all the updates in a transaction
        //deque the previous job for recurring subscriptions.
        //update job id and enque a job for subscription cancellation after updating 
        

        const data = event.data;
        const payment = await prisma.payments.findFirst({
            where: {
                transaction_reference: data.reference
            }
        })
        
        if(!payment) {
            return res.status(400).json({
                success: false,
                message: "payment not found"
            })
        }

        const subscription = await prisma.subscriptions.findFirst({
            where: {
                id: payment.subscription_id!
            }
        })

        if(!subscription) {
            return res.status(400).json({
                success: false,
                message: "subscription not found"
            })
        }

        const invoice = await prisma.invoices.findFirst({
            where: {
                subscription_id: subscription.id,
            }
        })

        if(!invoice) {
            return res.status(400).json({
                success: false,
                message: "invoice not found"
            })
        }

        //update the invoice
        await prisma.invoices.update({
            where: {
                id: invoice.id
            },
            data: {
                amount_paid_cents: data.amount,
                currency: data.currency,
                // due_date: data.due_date, caluclate this
                paid_at: data.paid_at,
                status: "paid"
            }
        })

        //update the payment
        await prisma.payments.update({
            where: {
                id: payment.id
            },
            data: {
                status: "succeeded",
                amount_cents_paid: Number(data.amount),
                paid_at: data.paid_at,
                transaction_reference: data.reference
            }
        })

        await prisma.subscriptions.update({
            where: {
                id: subscription.id
            },
            data: {
                status: "active",
                start_date: data.paid_at,
                // end_date: calculate this
            }
        })

        await prisma.paymentMethods.update({
            where: {
                id: data.paymentMethod_id
            },
            data:{
                last_digits: data.last4,
                expiry_month: data.exp_month,
                expiry_year: data.exp_year,
                authorization_code: data.authorization_code,
                reusable: data.reusable,
                brand: data.brand
            }
        })

        console.log('Payment successful for reference:', data.reference);
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



export async function getAllPayments(req: Request, res: Response) {

    const allPayments = await prisma.payments.findMany();

    if (!allPayments) {
        return res.status(400).json({
            success: false,
            message: "No payments found"
        })
    }
    return res.status(200).json({
        data: allPayments,
        success: true,
    })
}

export async function getUserPayments(req: Request, res: Response) {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Missing field required"
        })
    }

    const userPayments = await prisma.payments.findMany({
        where: {
            user_id: id
        }
    })

    if (!userPayments) {
        return res.status(400).json({
            success: false,
            message: "No payments found"
        })
    }
    return res.status(200).json({
        data: userPayments,
        success: true,
    })
}