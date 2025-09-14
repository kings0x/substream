import { Router } from "express";
import passport from "../config/passport.config";
import { email } from "zod";
import { signup, googleAuthCallback, login, forgotPassword, logout, verifyCode, renewCode, refreshAccessToken } from "../controllers/auth.controllers";

const authRoutes = Router();
authRoutes.post("/signup", signup)
authRoutes.post("/verifycode", verifyCode)
authRoutes.post("/resendcode", renewCode)
authRoutes.post("/refreshtoken", refreshAccessToken)
authRoutes.post("login", login)
authRoutes.post("/forgot-password", forgotPassword)
authRoutes.post("logout", logout)

//google OAUTH
authRoutes.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }))
authRoutes.get("/google/callback", passport.authenticate("google", { failureRedirect: "/login", session: false }), googleAuthCallback)


export default authRoutes;
