import { Request, Response } from "express";

import { prisma } from "../models/models";


export async function createInvoice(req: Request, res: Response) {
    //query subscription id
    //query amount_due in cents
    //amount paid ==0 until updated
    //paid at ? would be updated
    //set status normally
    //generate the invoice number with the function
    //transaction reference would be updated
   
}