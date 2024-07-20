import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutPageStatDto } from './create-about_page_stat.dto';

export class UpdateAboutPageStatDto extends PartialType(CreateAboutPageStatDto) {}
