import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors({ origin: true });
  const port = Number(process.env['PORT'] ?? 3333);
  await app.listen(port);
  Logger.log(`API server listening on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
