import { Router } from "express";
import passport from "../config/passport.config.ts";
import { email } from "zod";
import { signup, googleAuthCallback } from "controllers/auth.controllers.ts";

const authRoutes = Router();

authRoutes.post("/signup", signup)
authRoutes.post("/verifycode",)
authRoutes.post("/resendcode",)
authRoutes.post("/refreshtoken",)
authRoutes.post("login",)
authRoutes.post("/forgo-password",)
authRoutes.post("logout",)

//google OAUTH
authRoutes.get("/google", passport.authenticate("google",{ scope:["profile", "email"]}))
authRoutes.get("/google/callback", passport.authenticate("google", {failureRedirect:"/login", session: false}), googleAuthCallback)


export default authRoutes;
