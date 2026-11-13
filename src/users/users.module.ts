import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchmema } from './schemas/user.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchmema }])],
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule {}
