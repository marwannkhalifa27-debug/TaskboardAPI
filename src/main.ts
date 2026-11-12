import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { connectionDB } from './DB/connectionDB.js';
import { port } from './config/env.config.js';
import { ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await connectionDB()

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))

  app.use(MongooseModule.call(connectionDB()))

  app.setGlobalPrefix("v1/api")
  
  await app.listen(port ?? 3000, () => console.log(`Server is running on port ${port}`));
}
await bootstrap();
