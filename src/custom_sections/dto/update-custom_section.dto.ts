import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomSectionDto } from './create-custom_section.dto';

export class UpdateCustomSectionDto extends PartialType(CreateCustomSectionDto) {}
