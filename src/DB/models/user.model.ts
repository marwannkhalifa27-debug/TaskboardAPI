import mongoose, { Model, Schema } from "mongoose";


const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        gender: {
            type: String,
            enum:["male", "female"]
        },
        role: {
            type: String,
            enum: ["Owner", "User", "Admin"]
        }
    },
    {
        timestamps: true
    }
)

export const userModel = mongoose.model("user", userSchema)