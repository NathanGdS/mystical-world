import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Put,
} from '@nestjs/common';
import { SpecieService } from './specie.service';
import { CreateSpecieDto } from './dto/create-specie.dto';
import { UpdateSpecieDto } from './dto/update-specie.dto';

@Controller('specie')
export class SpecieController {
  constructor(private readonly specieService: SpecieService) {}

  @Get()
  async findAll() {
    return await this.specieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.specieService.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createSpecieDto: CreateSpecieDto) {
    return await this.specieService.create(createSpecieDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateSpecieDto: UpdateSpecieDto,
  ) {
    return await this.specieService.update(id, updateSpecieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.specieService.remove(id);
  }
}
