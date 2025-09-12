import { Router } from "express";
import { getAllSubscription, getUserSubscription, createSubscription, cancelSubscription, deleteUserSubscriptions } from "../controllers/subscription.controllers";



const subscription = Router();

subscription.get("/", getAllSubscription)
subscription.get("/:id", getUserSubscription)
subscription.post("/", createSubscription)
// subscription.put("/:id", )//understand how put works well
subscription.delete("/:id", deleteUserSubscriptions)
// subscription.get("/user/:id", )//understand how this would even work 
subscription.put("/:id/cancel", cancelSubscription)
// subscription.get("/upcoming-renewals", )

export default subscription