import { Request, NextFunction } from 'express'
import { verifyToken } from '../utils/token.js'

export const authenticate = (req: Request & { user?: ReturnType<typeof verifyToken> }, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return 'No token provided'
    }

    const token = authHeader.split(" ")[1]
    if(!token){
        return `Token doesn't match`
    }

    const decoded = verifyToken(token)
    req.user = decoded
    
    next()
}