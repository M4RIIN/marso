import { Module } from '@nestjs/common';
import { NameController } from './name.controller';

@Module({
  controllers: [NameController],
})
export class AppModule {}
