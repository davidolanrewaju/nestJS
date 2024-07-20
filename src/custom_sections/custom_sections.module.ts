import { Module } from '@nestjs/common';
import { CustomSectionsService } from './custom_sections.service';
import { CustomSectionsController } from './custom_sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomSection } from './entities/custom_section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomSection])],
  controllers: [CustomSectionsController],
  providers: [CustomSectionsService],
})
export class CustomSectionsModule {}
