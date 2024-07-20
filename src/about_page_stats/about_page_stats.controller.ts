import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutPageStatsService } from './about_page_stats.service';
import { CreateAboutPageStatDto } from './dto/create-about_page_stat.dto';
import { UpdateAboutPageStatDto } from './dto/update-about_page_stat.dto';

@Controller('about-page-stats')
export class AboutPageStatsController {
  constructor(private readonly aboutPageStatsService: AboutPageStatsService) {}

  @Post()
  create(@Body() createAboutPageStatDto: CreateAboutPageStatDto) {
    return this.aboutPageStatsService.create(createAboutPageStatDto);
  }

  @Get()
  findAll() {
    return this.aboutPageStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutPageStatsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAboutPageStatDto: UpdateAboutPageStatDto) {
    return this.aboutPageStatsService.update(+id, updateAboutPageStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutPageStatsService.remove(+id);
  }
}
