import jwt, { JwtPayload } from "jsonwebtoken"
import "dotenv/config"

export const generateToken = async(payload: JwtPayload)=>{
    const secret = process.env.TOKEN_SECRET
    if (!secret) throw new Error("TOKEN_SECRET is not configured")
    return jwt.sign(
       { id: payload.id },
       secret,
       { expiresIn: "1h" }
    )
}

export const verifyToken = async(token: any)=>{
    const secret = process.env.TOKEN_SECRET
    if(!secret) throw new Error("TOKEN_SECRET is not configured")
    jwt.verify(token, secret)
}