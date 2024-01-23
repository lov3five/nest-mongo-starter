/* eslint-disable @typescript-eslint/no-floating-promises */
import 'dotenv/config';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/main/app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set global prefix for all routes
  app.setGlobalPrefix(`${process.env.APP_PREFIX_V1}`);
  // Setup Swagger
  setupSwagger(app);
  // Start application on port 3000
  await app.listen(3000);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap();
