import { Response, Request } from "express";
import {prisma} from "../models/models";
import { signupSchema } from "../schema/auth.schema";
import bcrypt from "bcrypt";
import { success, ZodError, z } from "zod";
import { hashGeneratedCode, generateCode, generateRefreshToken, hashRefreshToken} from "../utils/hashing.util";
import generateVerificationEmail from "../emailTemplates/verifycode.template";
import generateWelcomeEmail from "../emailTemplates/welcome.template";
import jwt from "jsonwebtoken";
import { JWT_SECRET, REFRESH_TOKEN_EXPIRES_IN, ACCESS_TOKEN_EXPIRES_IN} from "@config";
import { Users } from "@src/generated/prisma/index";
import { refreshCookieOptions, REFRESH_COOKIE_NAME } from "../config/cookie.config";
import emailQueue from "../queues/emailQueue"

export async function signup(req:Request, res:Response){

    const {firstName, lastName, email, password} = req.body
    try{
        //check all the fields were sent 
        if(!firstName ||!lastName || !email || !password){
            return res.status(400).json({
                message: "required fields missing"

            })
        }

        //validate using zod 
       signupSchema.parse({firstName, lastName, email, password})


        //check for uniqueness of the required field
        const checkEmail = await prisma.users.findUnique({
            where:{
                email : email
            }
        });

        const salt = await bcrypt.genSalt(10);


        //if the user left without verifying their email with code and comes back this is the section that would run 
        if(checkEmail && checkEmail.is_verified == false){

            const passwordHash :string = await bcrypt.hash(password, salt);
            let code:string = generateCode();
            let hashCode :string = hashGeneratedCode(code);

            
            for (let i = 0; i <= 10; i++){
                const checkCodeExists = await prisma.users.findUnique({
                    where:{
                        code_is_verified:{
                            code: hashCode, 
                            is_verified: false
                        }
                        
                    } 
                })

                if(!checkCodeExists){
                    break
                }

                if(i === 10){
                    return res.status(500).json({
                        success: false,
                        message: "something went wrong try again"
                    })
                }
                code = generateCode();
                hashCode = hashGeneratedCode(code);
            }

            await prisma.users.update({
                where:{
                    email: checkEmail.email
                },

                data:{
                    first_name: firstName,
                    last_name: lastName,
                    password_hash: passwordHash,
                    code : hashCode,
                    code_generated_at: new Date()
                }
            })

            //send the mail setup nodemailer
            
            //use a queue to send the mail
            await emailQueue.add("sendingMail", {
                from: "agukingsley450@gmail.com",
                to:email,
                subject :"Your Verification Code",
                html: generateVerificationEmail("BAD COMPANY", firstName, code)
            },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: false
            }
            );



            return res.status(200).json({message: "code has been sent to user email please verify"})
        }


        if(checkEmail && checkEmail.is_verified == true){
            return res.status(409).json({
                message: "User already exists"
            })
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(password, salt)


        //generate and hash the code, make sure the code is unique 
        let code = generateCode();
        let hashCode = hashGeneratedCode(code);

        for (let i = 0; i <= 10; i++){
            const checkCodeExists = await prisma.users.findUnique({
                where:{
                    code_is_verified:{
                        code: hashCode, 
                        is_verified: false
                    }
                        
                }
            })

            if(!checkCodeExists){
                break
            }

            if(i === 10){
                return res.status(500).json({
                    success: false,
                    message: "something went wrong try again"
                })
            }

            code = generateCode();
            hashCode = hashGeneratedCode(code);
        }
        

        //then create the user in  the database
        const user = await prisma.users.create({
            data:{
                first_name: firstName,
                last_name: lastName,
                email: email,
                password_hash: hashedPassword,
                code: hashCode,
                code_generated_at: new Date(),
            }

        })
        


        await emailQueue.add("sendingMail", {
                from: "agukingsley450@gmail.com",
                to:email,
                subject :"Your Verification Code",
                html: generateVerificationEmail("BAD COMPANY", firstName, code)
            },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: false
            }
        );

        return res.status(201).json({
            success: true,
            message: "User has been created",
            user: {
                userId: user.id,
                firstName: firstName,
                lastName: lastName,
                email: email
            }
            

        })
    }

    catch(error){
        if(error instanceof ZodError){
            return res.status(400).json({
                errors: error.issues.map((issue) => ({
                    field: issue.path.join("."), // e.g., "email"
                    message: issue.message,     // e.g., "Invalid email"
                })),
            });
        }
        return res.status(500).json({
            success: false,
            message: `Something went wrong`
        })
        
    }
    
    
}

//verify code 
export async function verifyCode(req: Request, res: Response) {
    //recieve the code check the params
    //we look for the owner of the code
    //check wether code is expired 
    //if its expired throw an error
    //if it is not expired setIsVerified to true 
    //sendMail of confirmation to the user 
    try{
        const {code} : {code: number} = req.body

        if(!code){
            return res.status(400).json({
                success: false,
                message: "required field missing"
            })
        }


        const hashCode:string = hashGeneratedCode(code.toString());

        const user = await prisma.users.findUnique({
            where : {
                code_is_verified: {
                    code: hashCode, is_verified: false
                }
                
            }
            
        });


        if (!user){
            return res.status(400).json({
                success: false,
                message: "invalid code no owner found"
            })
        }

        const expiryTimeInterval = 5 * 60 * 1000;
        const codeExpired = (Date.now() - user.code_generated_at!.getTime()) > expiryTimeInterval

        if(codeExpired){
            return res.status(400).json({
                success: false,
                message: "code has expired"
            })
        }

        await prisma.users.update({
            where: {id : user.id},

            data: {
                is_verified: true
            }
        })


         //use a queue to send the mail
        await emailQueue.add("sendingMail", {
            from : "agukingsley450@gmail.com",
            to : user.email ,
            subject: "Successfly verified Welcome to Company Name",
            html: generateWelcomeEmail("Company Name", user.first_name)
        },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: false
            }
        );

        

        return res.status(200).json({
            success: true,
            message: "user success fully verified"
        })
    }

    catch(error){
        return res.status(500).json({
            success: false,
            message:`something went wrong `
        })
    }  
    
}

//renew code 

export async function renewCode(req: Request, res: Response){

    //the user id is sent back 
    //check wethere the user exists
    //check wether the code timeout 60s has passed
    //check wether the user is verified
    //remove the existing code
    //generate a new code, hash and store
    //change the codeGenerated at timestamp
    //send the code to the user via email    

    try{
        const{userId} = req.body

        const user = await prisma.users.findUnique({
            where:{
                id:userId
            }
        });

        if(!user){
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        //check wether 60seconds has passed
        const expiryTimeInterval = 60 * 1000;
        const timeElapsed = Date.now() - new Date(user.code_generated_at!).getTime() > expiryTimeInterval

        if(!timeElapsed){
            return res.status(400).json({
                success: false,
                message: "cannot renew code before 60s has passed"
            })
        }

        //check wether user is verified
        if(user.is_verified){
            return res.status(400).json({
                success: false,
                message: "user is verified"
            })
        }

        //generate and hash the code, make sure the code is unique 
        let code = generateCode();
        let hashCode = hashGeneratedCode(code);

        for (let i = 0; i <= 10; i++){
            const checkCodeExists = await prisma.users.findUnique({
                where:{
                    code_is_verified:{
                        code: hashCode, 
                        is_verified: false
                    }
                        
                }
            })

            if(!checkCodeExists){
                break
            }

            if(i === 10){
                return res.status(500).json({
                    success: false,
                    message: "something went wrong try again"
                })
            }

            code = generateCode();
            hashCode = hashGeneratedCode(code);
        }
        

        //then update the database
        await prisma.users.update({
            where: {
                id: user.id
            },

            data:{
                code: hashCode,
                code_generated_at: new Date()
            }

        })
        
        await emailQueue.add("sendingMail", {
            from: "agukingsley450@gmail.com",
            to:user.email,
            subject :"Your Verification Code",
            html: generateVerificationEmail("BAD COMPANY", user.first_name, code)
        },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 1000
                },
                removeOnComplete: true,
                removeOnFail: false
            }
        );



        return res.status(200).json({
            success: true,
            message: "code sent successfully"
        })
    }


    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong`
        })
    }
    

}

//login 
export async function login(req : Request, res : Response) {
    //get and verify the email and password fields
    //check wether the user is verified
    //check for the email and check wether the password matches
    //generate jwt access token and send it 
    //generate refresh token hash it and store and send via cookies
    //fini

    try{
        const{email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "required fields missing"
            })
        }

        const user = await prisma.users.findUnique({
            where:{
                email: email.toLowerCase().trim()
            }
        })
    

        if(!user){
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

        if(!user.is_verified){
            return res.status(400).json({
                success: false,
                message: "user is not verified"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password_hash!)

        if(!passwordMatch){
            return res.status(400).json({
                success: false,
                message: "password is incorrect"
            })
        }


        const refreshToken = generateRefreshToken();
        const hashedRefreshToken = hashRefreshToken(refreshToken);

        const accessToken =  jwt.sign(
            {userId: user.id},
            JWT_SECRET,
            {expiresIn: ACCESS_TOKEN_EXPIRES_IN ? `${ACCESS_TOKEN_EXPIRES_IN}m` : "15m"}
        )

        //update the database with the credentials
        await prisma.users.update({
            where:{
                email: email.toLowerCase().trim()
            },

            data:{
                refresh_token: hashedRefreshToken,
                refresh_generated_at: new Date()
            }
        })
        
        
        res.cookie(REFRESH_COOKIE_NAME, refreshToken, 
            {
                ...refreshCookieOptions,
                maxAge: REFRESH_TOKEN_EXPIRES_IN * 24*60*60*1000,
            }
        );

        res.status(200).json({
            success: true,
            message: "user logged in successfully",
            accessToken, 
            expiresIn: ACCESS_TOKEN_EXPIRES_IN
        })

    }

    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong ${err}`
        })
    }

}

//refresh access and refresh token
export async function refreshAccessToken(req: Request, res: Response) {

    try{
        //check the refresh token in the cookies
        const refreshToken = req.cookies[REFRESH_COOKIE_NAME];

        if(!refreshToken){
            return res.status(401).json({
                success: false,
                message: "refresh token not found"
            })
        }

        const hashedRefreshToken = hashRefreshToken(refreshToken);

        const user = await prisma.users.findFirst({
            where:{
                refresh_token: hashedRefreshToken
            }
        })

        if(!user){
            return res.status(401).json({
                success: false,
                message: "refresh token not valid or user not found please login again"
            })
        }

        const expiryTime = new Date(user.refresh_generated_at!).getTime() + (REFRESH_TOKEN_EXPIRES_IN * 24 * 60 * 60 * 1000);

        // Compare with current time
        if (Date.now() > expiryTime) {
            return res.status(401).json({
                success: false,
                message: "refresh token expired, please login again"
            });
        }

        const accessToken =  jwt.sign(
            {userId: user.id},
            JWT_SECRET,
            {expiresIn: ACCESS_TOKEN_EXPIRES_IN ? `${ACCESS_TOKEN_EXPIRES_IN}m` : "15m"}
        )

        const newRefreshToken = generateRefreshToken();
        const newHashedRefreshToken = hashRefreshToken(newRefreshToken);

        await prisma.users.update({
            where:{
                id: user.id
            },

            data:{
                refresh_token: newHashedRefreshToken,
                refresh_generated_at: new Date()
            }
            
        })


        res.cookie(REFRESH_COOKIE_NAME, newRefreshToken, 
            {
                ...refreshCookieOptions,
                maxAge: REFRESH_TOKEN_EXPIRES_IN * 24*60*60*1000,
            }
        );

        res.status(200).json({
            success: true,
            message: "access token refreshed successfully",
            accessToken, 
            expiresIn: ACCESS_TOKEN_EXPIRES_IN
        })
    }

    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: `something went wrong`
        })
    }

    
}

//forgot password
export async function forgotPassword(req: Request, res: Response) {
    //check wether email is present
    //check wether email exists in the database
    //check wether email is verified
    //generate a token
    //save the token to the db
    //send a mail to the user with a link containing the token as a query param "https://yourfrontend.com/reset-password?token=RAW_TOKEN"
    //second stage is to reset the password
    //the user on the client side opens up a panel from the email link and enters his new password
    //the password is sent to the server as well as the token(extracted from the params of the link) 
    //the token is checked and if it is valid the password is updated
    //send success message to the user
    
    
}


//google auth 
export async function googleAuthCallback(req: Request, res: Response) {
    try{

        if (!req.user) {
            return res.redirect("/login?error=GoogleAuthFailed");
        }

        const {id} = req.user as Users

        const user = prisma.users.findUnique({where:{id: id}})

        if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        //create access token
        const accessToken = jwt.sign(
            {userId: id},
            JWT_SECRET,
            {expiresIn: "1h"}
        )
        
        //create the refresh token 
        const refreshToken = generateRefreshToken();
        const hashedRefreshToken = hashRefreshToken(refreshToken);


        //save the refresh token to the database
        await prisma.users.update({
            where:{
                id : id
            },

            data:{
                refresh_token: hashedRefreshToken,
                refresh_generated_at: new Date()
            }
        })

        

        //send the refresh token to cookies and the access token to the frontend
        res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions);

        return res.status(200).json({
            success: true,
            accessToken,
            message: 'user should be logged in'

        })  

    }

    catch(error){
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
    
}

export async function logout(req: Request, res: Response) {

    //get the refresh token from cookies
    //check wether it is present if its not user is already logged out send success message
    //hash the refresh token
    //remove the refresh token from the database
    //remove the refresh token from the cookies
    //send success message

    try{
        const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
        if (!refreshToken){
            return res.status(200).json({
                success: true,
                message: "user is already logged out"
            })
        }

        const hashedRefreshToken = hashRefreshToken(refreshToken);

        const user = await prisma.users.findFirst({
            where:{
                refresh_token: hashedRefreshToken
            }
        })

        if(!user){
            return res.status(200).json({
                success: true,
                message: "user is already logged out"
            })
        }

        await prisma.users.update({
            where:{
                id: user.id
            },
            data:{
                refresh_token: null
            }
        })
        
        res.clearCookie(REFRESH_COOKIE_NAME);

        return res.status(200).json({
            success: true,
            message: "user logged out successfully"
        })
    }

    catch(err){
        res.status(500).json({
            success: false,
            message: `something went wrong`
        })
    }
}