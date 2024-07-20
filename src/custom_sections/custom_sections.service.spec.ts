import { Test, TestingModule } from '@nestjs/testing';
import { CustomSectionsService } from './custom_sections.service';

describe('CustomSectionsService', () => {
  let service: CustomSectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomSectionsService],
    }).compile();

    service = module.get<CustomSectionsService>(CustomSectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
