import { Module } from '@nestjs/common';
import { SpecieModule } from './specie/specie.module';
import { FileController } from './file/file.controller';

@Module({
  imports: [SpecieModule],
  controllers: [FileController],
})
export class AppModule {}
