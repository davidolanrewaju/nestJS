import { Module } from '@nestjs/common';
import { AboutUsServicesService } from './about_us_services.service';
import { AboutUsServicesController } from './about_us_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutUsService } from './entities/about_us_service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AboutUsService])],
  controllers: [AboutUsServicesController],
  providers: [AboutUsServicesService],
})
export class AboutUsServicesModule {}
