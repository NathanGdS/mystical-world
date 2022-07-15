import { Module } from '@nestjs/common';
import { SpecieController } from './specie.controller';
import { SPECIE_PROVIDERS } from './specie.providers';

@Module({
  controllers: [SpecieController],
  providers: SPECIE_PROVIDERS.values,
})
export class SpecieModule {}
