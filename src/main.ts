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
  console.log(`Application is running on: ${await process.env.APP_URL}`);
  console.log(process.env.MONGODB_URI);
}

bootstrap();
