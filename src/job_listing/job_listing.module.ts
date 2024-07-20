import { Module } from '@nestjs/common';
import { JobListingService } from './job_listing.service';
import { JobListingController } from './job_listing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobListing } from './entities/job_listing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobListing])],
  controllers: [JobListingController],
  providers: [JobListingService],
})
export class JobListingModule {}
