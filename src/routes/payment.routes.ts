import { Router, raw } from "express";
import { paystackPayment, recievePaymentDetails } from "../controllers/payments.controller";




const payment = Router();


// payment.get("/")
// payment.get("/:id")
payment.post("/create-paystack-checkout-session", paystackPayment)

// payment.post('/create-checkout-session', stripePayment)

export default payment