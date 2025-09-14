import express, { Router } from "express";
import {recievePaymentDetails } from "../controllers/payments.controller";

const paymentWebhook = Router()

//paystack webhook
paymentWebhook.post('/webhook/paystack', express.raw({ type: 'application/json' }), recievePaymentDetails)

export default paymentWebhook