import { Module } from '@nestjs/common';
import { TitleController } from './title.controller';
import { TITLE_PROVIDERS } from './title.providers';

@Module({
  controllers: [TitleController],
  providers: TITLE_PROVIDERS.values
})
export class TitleModule {}
