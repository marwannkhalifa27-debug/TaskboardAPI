import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto.js';
import { UpdateAuthDto } from './dto/update-auth.dto.js';
import { userModel } from '../DB/models/user.model.js';

@Injectable()
export class AuthService {
  signup(createAuthDto: CreateAuthDto) {
    if(!createAuthDto.email || !createAuthDto.password){
      return 'Email or password inaccurate'
    }
    const user = userModel.create(createAuthDto)
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
