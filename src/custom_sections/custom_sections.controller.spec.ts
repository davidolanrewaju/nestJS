import { Test, TestingModule } from '@nestjs/testing';
import { CustomSectionsController } from './custom_sections.controller';
import { CustomSectionsService } from './custom_sections.service';

describe('CustomSectionsController', () => {
  let controller: CustomSectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomSectionsController],
      providers: [CustomSectionsService],
    }).compile();

    controller = module.get<CustomSectionsController>(CustomSectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
