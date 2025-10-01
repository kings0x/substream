import { Router} from "express";
import { getAllPayments, getUserPayments, intiatePayment} from "../controllers/payments.controller";


const payment = Router();


payment.get("/", getAllPayments)
payment.get("/:id", getUserPayments)
payment.post("/create-paystack-checkout-session", intiatePayment)

// payment.post('/create-checkout-session', stripePayment)

export default payment