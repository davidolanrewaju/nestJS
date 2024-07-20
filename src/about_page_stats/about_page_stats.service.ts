import { Injectable } from '@nestjs/common';
import { CreateAboutPageStatDto } from './dto/create-about_page_stat.dto';
import { UpdateAboutPageStatDto } from './dto/update-about_page_stat.dto';

@Injectable()
export class AboutPageStatsService {
  create(createAboutPageStatDto: CreateAboutPageStatDto) {
    return 'This action adds a new aboutPageStat';
  }

  findAll() {
    return `This action returns all aboutPageStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aboutPageStat`;
  }

  update(id: number, updateAboutPageStatDto: UpdateAboutPageStatDto) {
    return `This action updates a #${id} aboutPageStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutPageStat`;
  }
}
