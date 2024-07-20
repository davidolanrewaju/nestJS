// import { SeedService } from './seed/seed.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  // const seedService = app.get(SeedService);
  // await seedService.seed();
  await app.listen(3000);
}
bootstrap();
