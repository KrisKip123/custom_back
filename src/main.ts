import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle('Example')
    .setDescription('Example descript')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, documentSwagger);

  await app.listen(3000);
}
bootstrap();
