import { Module } from '@nestjs/common';
import { SpecieModule } from './specie/specie.module';
import { FileController } from './file/file.controller';
import { TitleModule } from './title/title.module';

@Module({
  imports: [SpecieModule, TitleModule],
  controllers: [FileController],
})
export class AppModule {}
