import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './export';

const port = 3007;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
bootstrap().then(() => console.log(`Listening on port ${port}`));
