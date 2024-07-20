import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutUsServicesService } from './about_us_services.service';
import { CreateAboutUsServiceDto } from './dto/create-about_us_service.dto';
import { UpdateAboutUsServiceDto } from './dto/update-about_us_service.dto';

@Controller('about-us-services')
export class AboutUsServicesController {
  constructor(private readonly aboutUsServicesService: AboutUsServicesService) {}

  @Post()
  create(@Body() createAboutUsServiceDto: CreateAboutUsServiceDto) {
    return this.aboutUsServicesService.create(createAboutUsServiceDto);
  }

  @Get()
  findAll() {
    return this.aboutUsServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutUsServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutUsServiceDto: UpdateAboutUsServiceDto) {
    return this.aboutUsServicesService.update(+id, updateAboutUsServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutUsServicesService.remove(+id);
  }
}
