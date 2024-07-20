import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sms } from './entities/sms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sms])],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
