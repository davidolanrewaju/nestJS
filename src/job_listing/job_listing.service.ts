import { Injectable } from '@nestjs/common';
import { CreateJobListingDto } from './dto/create-job_listing.dto';
import { UpdateJobListingDto } from './dto/update-job_listing.dto';

@Injectable()
export class JobListingService {
  create(createJobListingDto: CreateJobListingDto) {
    return 'This action adds a new jobListing';
  }

  findAll() {
    return `This action returns all jobListing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobListing`;
  }

  update(id: number, updateJobListingDto: UpdateJobListingDto) {
    return `This action updates a #${id} jobListing`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobListing`;
  }
}
