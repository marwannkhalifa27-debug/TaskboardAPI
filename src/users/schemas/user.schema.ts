import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsIn, maxLength, minLength } from "class-validator";
import { HydratedDocument } from "mongoose";



@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true, trim: true, lowercase: true})
    email: String

    @Prop({ required: true, trim: true, minlength: 8, maxlength: 100})
    password: String

    @Prop({ required: true, trim: true, minlength: 2, maxlength: 50})
    fullName: String

    @Prop({ required: true, trim: true})
    age: Number

    @Prop({ trim: true}) @IsIn(["male", "female"])
    gender: String
}

export type userDocument = HydratedDocument<User>
export const userSchmema = SchemaFactory.createForClass(User)