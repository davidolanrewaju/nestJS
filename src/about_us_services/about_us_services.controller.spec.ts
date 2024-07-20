import { Test, TestingModule } from '@nestjs/testing';
import { AboutUsServicesController } from './about_us_services.controller';
import { AboutUsServicesService } from './about_us_services.service';

describe('AboutUsServicesController', () => {
  let controller: AboutUsServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutUsServicesController],
      providers: [AboutUsServicesService],
    }).compile();

    controller = module.get<AboutUsServicesController>(AboutUsServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
