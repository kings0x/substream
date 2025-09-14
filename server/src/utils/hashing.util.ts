import crypto from 'crypto'
import {HASH_SECRET, REFRESH_TOKEN_BYTES} from "@config"
import { randomUUID } from "crypto";


export function generateCode(){
    return crypto.randomInt(100000, 1000000).toString();
}

export function hashGeneratedCode(code: string){
    return crypto.createHmac("sha256", HASH_SECRET).update(code).digest("hex");
}

export function generateRefreshToken(){
    return crypto.randomBytes(REFRESH_TOKEN_BYTES).toString('hex');
}

export function hashRefreshToken(token: string){
    return crypto.createHash('sha256').update(token).digest('hex');
}

export function generateInvoiceNumber(userId: string | number) {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  // Short unique fragment
  const uniquePart = randomUUID().slice(0, 6).toUpperCase();

  return `INV-${userId}-${yyyy}${mm}${dd}-${uniquePart}`;
}