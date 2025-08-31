import crypto from 'crypto'
import {HASH_SECRET, REFRESH_TOKEN_BYTES} from "../config/env.ts"



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