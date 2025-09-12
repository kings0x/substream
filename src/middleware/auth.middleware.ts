import z, { success } from "zod";
import {prisma} from "../models/models"
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@config";

const jwtPayload = z.object({
    userId: z.uuid()
})


const authMiddleware = async(req :Request, res : Response, next: NextFunction) => {
    try{
        const header  = req.headers['authorization'];
        if (!header){
            return res.status(400).json({
                success: false,
                message: "No token provided"
            })
        }

        const parts = header.split(' ');

        if(parts.length !== 2){
            return res.status(400).json({
                success: false,
                message: "Malformed Header"
            })
        }

        const [scheme, token] = parts;
        if (scheme !== "Bearer" || !token){
            return res.status(401).json({message: "Malformed Authorization header"});
        }

        const payload = jwt.verify(token, JWT_SECRET) as {userId : string};

        const validToken = jwtPayload.parse(payload);

        const user = await prisma.users.findFirst({
            where: {
                id : validToken.userId
            }
        });

        if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        
        req.user = {
            userId : user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email
        };

        next();
    }


    catch(err){
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}

export default authMiddleware;