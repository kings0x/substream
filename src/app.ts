import express from "express";
import cors from "cors";
import { PORT } from "./config/env.ts";
import passport from "./config/passport.config.ts"
import cookieParser from "cookie-parser";
import authRoutes from "routes/auth.routes.ts";

const allowedOrigins = ["http://localhost:3000", "http://localhost:8000"];

const app = express();

app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: (origin, callback) => {
        
        if (!origin ) {
            callback(null, true);
        }

        if(origin && allowedOrigins.includes(origin)) {
            callback(null, true);
        }

        else {
            callback(new Error("Not allowed by CORS"));
        }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true
}));

app.use(passport.initialize())



app.listen(PORT  || "8000", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
