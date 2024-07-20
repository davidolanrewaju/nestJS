import { Test, TestingModule } from '@nestjs/testing';
import { AboutPageStatsController } from './about_page_stats.controller';
import { AboutPageStatsService } from './about_page_stats.service';

describe('AboutPageStatsController', () => {
  let controller: AboutPageStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutPageStatsController],
      providers: [AboutPageStatsService],
    }).compile();

    controller = module.get<AboutPageStatsController>(AboutPageStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
