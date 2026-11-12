import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  app.setGlobalPrefix("api/v1")

  const port = app.get(ConfigService).get<number>('PORT')?? 3000
  
  await app.listen(port)
  console.log(`Server is running on port ${port}`)

}
await bootstrap();
