import { Test, TestingModule } from '@nestjs/testing';
import { AboutPageStatsService } from './about_page_stats.service';

describe('AboutPageStatsService', () => {
  let service: AboutPageStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutPageStatsService],
    }).compile();

    service = module.get<AboutPageStatsService>(AboutPageStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
