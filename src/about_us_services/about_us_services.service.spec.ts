import { Test, TestingModule } from '@nestjs/testing';
import { AboutUsServicesService } from './about_us_services.service';

describe('AboutUsServicesService', () => {
  let service: AboutUsServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutUsServicesService],
    }).compile();

    service = module.get<AboutUsServicesService>(AboutUsServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
