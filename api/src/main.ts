import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con el origen correcto de tu aplicación React
  });
  
  
  await app.listen(3000);
}
bootstrap();
