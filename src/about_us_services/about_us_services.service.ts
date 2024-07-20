import { Injectable } from '@nestjs/common';
import { CreateAboutUsServiceDto } from './dto/create-about_us_service.dto';
import { UpdateAboutUsServiceDto } from './dto/update-about_us_service.dto';

@Injectable()
export class AboutUsServicesService {
  create(createAboutUsServiceDto: CreateAboutUsServiceDto) {
    return 'This action adds a new aboutUsService';
  }

  findAll() {
    return `This action returns all aboutUsServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aboutUsService`;
  }

  update(id: number, updateAboutUsServiceDto: UpdateAboutUsServiceDto) {
    return `This action updates a #${id} aboutUsService`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutUsService`;
  }
}
