import express from "express";
import cors from "cors";
import { PORT } from "@config";
import passport from "./config/passport.config"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import subscription from "./routes/subscription.routes";
import authMiddleware from "./middleware/auth.middleware";
import payment from "./routes/payment.routes";
import paymentWebhook from "./webhooks/payment.webhooks";
import job from "./cron/emailScheduler";


const allowedOrigins = ["http://localhost:3000", "http://localhost:8000", 'http://localhost:3001' ];

const app = express()
app.set('trust proxy', 1);
app.use(cookieParser())
app.use(cors({
    origin: (origin, callback) => {
        
        if (!origin ) {
            return callback(null, true);
        }

        if(origin && allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        else {
            return callback(new Error("Not allowed by CORS"));
        }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true
}));

//webhooks
app.use("/", paymentWebhook)

//expres.json() from here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use("/api/v1/subscription", authMiddleware, subscription);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/payments",authMiddleware, payment)



app.listen(PORT  || "8000", () => {
    job.start();
    console.log(`Server is running on http://localhost:${PORT}`);
});
