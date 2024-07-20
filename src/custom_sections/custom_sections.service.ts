import { Injectable } from '@nestjs/common';
import { CreateCustomSectionDto } from './dto/create-custom_section.dto';
import { UpdateCustomSectionDto } from './dto/update-custom_section.dto';

@Injectable()
export class CustomSectionsService {
  create(createCustomSectionDto: CreateCustomSectionDto) {
    return 'This action adds a new customSection';
  }

  findAll() {
    return `This action returns all customSections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customSection`;
  }

  update(id: number, updateCustomSectionDto: UpdateCustomSectionDto) {
    return `This action updates a #${id} customSection`;
  }

  remove(id: number) {
    return `This action removes a #${id} customSection`;
  }
}
