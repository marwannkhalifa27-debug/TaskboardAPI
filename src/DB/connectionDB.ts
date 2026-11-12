import mongoose from "mongoose"
import "dotenv/config"
import { mongo_uri } from "../config/env.config.js"


export const connectionDB = async() => {
    mongoose.connect(mongo_uri!)
        .catch(() => {
            console.log(`Failed to connect to DB`)
            process.exit(1)
        })
}