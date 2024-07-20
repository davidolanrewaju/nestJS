import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobListingService } from './job_listing.service';
import { CreateJobListingDto } from './dto/create-job_listing.dto';
import { UpdateJobListingDto } from './dto/update-job_listing.dto';

@Controller('job-listing')
export class JobListingController {
  constructor(private readonly jobListingService: JobListingService) {}

  @Post()
  create(@Body() createJobListingDto: CreateJobListingDto) {
    return this.jobListingService.create(createJobListingDto);
  }

  @Get()
  findAll() {
    return this.jobListingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobListingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobListingDto: UpdateJobListingDto) {
    return this.jobListingService.update(+id, updateJobListingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobListingService.remove(+id);
  }
}
