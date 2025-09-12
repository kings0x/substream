import { NODE_ENV } from "@config";
import { CookieOptions } from "express";

const REFRESH_COOKIE_NAME = 'refresh_token';
const isProd = NODE_ENV === 'production'

const refreshCookieOptions: CookieOptions = {
  httpOnly: true,                           // Prevent JS access (mitigates XSS)
  secure: isProd, // Only send over HTTPS in prod
  sameSite: isProd ? 'lax' : 'strict',                       // Strongest CSRF protection (use 'lax' if you need cross-site navigation)
  path: '/api/auth/refresh',                 // Only sent to refresh endpoint
  maxAge: 7*24*60*60*1000
};

export { REFRESH_COOKIE_NAME, refreshCookieOptions };