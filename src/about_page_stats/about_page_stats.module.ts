import { Module } from '@nestjs/common';
import { AboutPageStatsService } from './about_page_stats.service';
import { AboutPageStatsController } from './about_page_stats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutPageStat } from './entities/about_page_stat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AboutPageStat])],
  controllers: [AboutPageStatsController],
  providers: [AboutPageStatsService],
})
export class AboutPageStatsModule {}
