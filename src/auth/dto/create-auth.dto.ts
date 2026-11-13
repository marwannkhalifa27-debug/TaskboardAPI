import { IsEmail, IsIn, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString() @MinLength(2) @MaxLength(50)
    fullName: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsInt() @Min(18)
    age:number

    @IsOptional() @IsIn(["male", "female"])
    gender?: string

}
export class loginDto{
    @IsEmail()
    email: string

    @IsString()
    password: string
}
