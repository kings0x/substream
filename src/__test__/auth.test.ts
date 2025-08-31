import { email, string } from "zod";
import {signup} from "../controllers/auth.controllers.ts"
import { Response, Request } from "express";
import {prisma} from "../models/models.ts"
import bcrypt from "bcrypt";
import transporter from "../config/nodemailer.config.ts";
import { generateCode, hashGeneratedCode } from "../utils/hashing.util.ts";
import { verifyCode } from "../controllers/auth.controllers.ts";


jest.mock("../models/models.ts", ()=>({
    prisma:{
        users:{
            findUnique:jest.fn(),
            update:jest.fn(),
            create:jest.fn()
        }
    }
}))
    
    
jest.mock("bcrypt");

jest.mock("../config/nodemailer.config.ts");

jest.mock("../utils/hashing.util.ts");

describe("signup flow", () => {

    const mockRequest = {
        body:{
            firstName:"Kingsley",
            lastName: "Agul",
            email:"agukingsley@gmail.com",
            password: "Akc21#agu"
        }
            
    }as unknown as Request;



    const mockResponse ={

        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis()

    } as unknown as Response;



    test("error thrown when request fields are missing", () => {
        const mockRequest = {
            body:{
                lastname: "",
                email: "",
                password: ""
            }
            
        } as unknown as Request;

        

        signup(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({message: "required fields missing"});
    })

    test("test zod signup schema parses and finds errors well", ()=>{
        const mockRequest = {
            body:{
                firstName:"ba",
                lastName: "la",
                email:"ribosome",
                password: "1234567"
            }
            
        }as unknown as Request

        signup(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledWith(400);

        expect(mockResponse.json).toHaveBeenCalledWith({
            errors: expect.arrayContaining([
                expect.objectContaining({field: "firstName", message: "First name must be at least 3 characters long"}),

                expect.objectContaining({field: "lastName", message: "Last name must be at least 3 characters long"}),

                expect.objectContaining({field: "email", message: "Invalid email address format"}),

                expect.objectContaining({field: "password", message: "Password must be at least 8 characters long"})
            ])
        })
        
    })

    //to mock a database or external function we use the jest.mock take the path as the first parameter and optionally a function that rewrites the rules of the mock

    


    test("test code is sent and user is updated when user already exists and isVerified is false", async ()=> {


        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce({
                id: "1",
                email:"agukingsley@gmail.com",
                is_verified: false
            
        }).mockResolvedValueOnce(null);

        (prisma.users.update as jest.Mock).mockResolvedValue(
            {
                email:"agukingsley@gmail.com" 
            }
        );

        (bcrypt.genSalt as jest.Mock).mockResolvedValue("salt");

        (bcrypt.hash as jest.Mock).mockResolvedValue("hash");

        (transporter.sendMail as jest.Mock).mockResolvedValue(
            {
                from: "agukingsley450@gmail.com",
                to: "agukingsley@gmail.com",
                subject :"Your Verification Code",
                html: "sends html template with code"
            }
        );

        await signup(mockRequest, mockResponse);


        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "code has been sent to user email please verify"
        });
    })        


    test("test for loop fails and errors after 10 runs if code and is verified false already exits", async()=>{


        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce({
            id: "1",
            email:"agukingsley@gmail.com",
            is_verified: false
        }).mockResolvedValue({
            email:"agukingsley@gmail.com",
            code: "hashcode",
            is_verified: false
        });

        (generateCode as jest.Mock).mockImplementation(() => "code");
        (hashGeneratedCode as jest.Mock).mockImplementation(() => "hashcode");

        await signup(mockRequest, mockResponse);


        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message: "something went wrong try again"
        });
    })

    test("test generate code and hash code works fine", async()=>{
        const real = jest.requireActual("../utils/hashing.util.ts") as typeof import("../utils/hashing.util.ts");
        const code = real.generateCode();
        const hashCode = real.hashGeneratedCode(code);

        expect(typeof code).toBe("string");
        expect(code).toHaveLength(6);
        expect(code).not.toBe(hashCode);
        expect(typeof hashCode).toBe("string");
        expect(hashCode).toMatch(/^[a-f0-9]{64}$/);
        
    })

    test("test that error is shown correctly if sendmail fails", async()=>{

        (transporter.sendMail as jest.Mock).mockRejectedValue(new Error("sendmail failed"))
        const mailOptions = {
            from: "agukingsley450@gmail.com",
            to: "agukingsley@gmail.com",
            subject :"Your Verification Code",
            html: "sends html template with code"
        };

        await transporter.sendMail(mailOptions).catch((err) =>{
            expect(err.message).toBe("sendmail failed");
        })

    })

    test("database call findUnique, errors correctly if it fails", async()=>{

        (prisma.users.findUnique as jest.Mock).mockRejectedValueOnce(new Error("database call findUnique failed"));

        await signup(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message: "Something went wrong"
        });
    })

    test("test database call update, errors correctly if it fails", async()=>{
        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce({
            id: "1",
            email:"agukingsley@gmail.com",
            is_verified: false
        }).mockResolvedValueOnce(null);

        (transporter.sendMail as jest.Mock).mockResolvedValue(
            {
                from: "agukingsley450@gmail.com",
                to: "agukingsley@gmail.com",
                subject :"Your Verification Code",
                html: "sends html template with code"
            }
        );

        (prisma.users.update as jest.Mock).mockRejectedValueOnce(new Error("database call update failed"));

        await signup(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message: "Something went wrong"
        });
        
    })

    test("test flow errors if is verified is true and email exists", async()=>{

        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce({
            id: "1",
            email:"agukingsley@gmail.com",
            is_verified: true
        })

        await signup(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledWith(409);
        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "User already exists"
        })
    })

    test("user is created if signup flow goes smoothly", async()=>{
        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce(null).mockResolvedValueOnce(null);

        (bcrypt.genSalt as jest.Mock).mockResolvedValue("salt");

        (bcrypt.hash as jest.Mock).mockResolvedValue("hash");

        (transporter.sendMail as jest.Mock).mockResolvedValue(
            {
                from: "agukingsley450@gmail.com",
                to: "agukingsley@gmail.com",
                subject :"Your Verification Code",
                html: "sends html template with code"
            }
        );

        (prisma.users.create as jest.Mock).mockResolvedValueOnce({
            id: "1",
            email:"agukingsley@gmail.com",
            is_verified: false
        });


        await signup(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: true,
            message: "User has been created",
            user: {
                userId: expect.any(String),
                firstName: mockRequest.body.firstName,
                lastName: mockRequest.body.lastName,
                email: mockRequest.body.email
            }
        });
    })


    test("test errors correctly if database call create fails", async()=>{

        (prisma.users.findUnique as jest.Mock).mockResolvedValueOnce(null).mockResolvedValueOnce(null);

        (bcrypt.genSalt as jest.Mock).mockResolvedValue("salt");
        (bcrypt.hash as jest.Mock).mockResolvedValue("hash");

        (transporter.sendMail as jest.Mock).mockResolvedValue(
            {
                from: "agukingsley450@gmail.com",
                to: "agukingsley@gmail.com",
                subject :"Your Verification Code",
                html: "sends html template with code"
            }
        );

        (prisma.users.create as jest.Mock).mockRejectedValueOnce(new Error("database call create failed"));

        await signup(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message: "Something went wrong"
        })
    })
    
});


describe.only("code verification flow", ()=>{

    const mockRequest = {
        body: {
            code: 1234
        }
    } as unknown as Request


    const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    } as unknown as Response

    test("flow errors if code was not supplied", ()=>{
        const mockRequest = {
            body: {
                
            }
        } as unknown as Request

        

        verifyCode(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message: "required field missing"
        })
    })

    test("flow errors if code is a string", ()=>{
        const mockRequest = {
            body:{
                code :"1234"
            }
        }as unknown as Request;

        verifyCode(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            success: false,
            message:`something went wrong `
        })
    })
})

//if you default import a module you cannot specify properties for it as a mock 