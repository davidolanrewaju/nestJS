import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomSectionsService } from './custom_sections.service';
import { CreateCustomSectionDto } from './dto/create-custom_section.dto';
import { UpdateCustomSectionDto } from './dto/update-custom_section.dto';

@Controller('custom-sections')
export class CustomSectionsController {
  constructor(private readonly customSectionsService: CustomSectionsService) {}

  @Post()
  create(@Body() createCustomSectionDto: CreateCustomSectionDto) {
    return this.customSectionsService.create(createCustomSectionDto);
  }

  @Get()
  findAll() {
    return this.customSectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customSectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomSectionDto: UpdateCustomSectionDto) {
    return this.customSectionsService.update(+id, updateCustomSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customSectionsService.remove(+id);
  }
}
