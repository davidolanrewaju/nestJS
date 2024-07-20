import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutUsServiceDto } from './create-about_us_service.dto';

export class UpdateAboutUsServiceDto extends PartialType(CreateAboutUsServiceDto) {}
