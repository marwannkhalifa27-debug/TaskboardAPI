import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthDto, loginDto } from './dto/create-auth.dto.js';
import { UpdateAuthDto } from './dto/update-auth.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema.js';
import bcrypt from "bcrypt"
import { generateToken } from '../utils/token.js';



@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  findOne(args: any) {
    return this.userModel.findOne(args);
  }

  async signup(createAuthDto: CreateAuthDto) {

    const exists = await this.findOne({ email: createAuthDto.email.toLowerCase() });
    if(exists){
      throw new ConflictException("This email is already registered")
    }

    const hashed = await bcrypt.hash(createAuthDto.password, 10)

    try {
      await this.userModel.create({
        fullName: createAuthDto.fullName,
        email: createAuthDto.email,
        password: hashed,
        age: createAuthDto.age,
        gender: createAuthDto.gender as any,
      });
      return {
        message: 'Registered successfully',
        email: createAuthDto.email,
      };
    } catch (error: any) {
      if (error?.code === 11000) {
        throw new ConflictException('Email already registered');
      }
      throw error;
    }
  }

  async login(dto: loginDto){
    const user = this.findOne({ email: dto.email.toLowerCase() })
    if(!user){
      throw new Error("This email isn't registered before")
    }

    const token = generateToken(user)

    return {
      message: "Logged in successfully",
      token: token
    }
  }
}
