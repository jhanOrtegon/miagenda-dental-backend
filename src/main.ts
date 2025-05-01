import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefijo global para rutas: todas serán /api/*
  app.setGlobalPrefix('api');

  // Pipe global para validaciones con class-validator (si usas DTOs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina campos no definidos en DTO
      forbidNonWhitelisted: true, // lanza error si llegan campos desconocidos
      transform: true, // convierte los tipos automáticamente
    }),
  );

  await app.listen(3000);
  console.log(
    `🚀 MiAgenda Dental backend is running at http://localhost:3000/api`,
  );
}

bootstrap();
