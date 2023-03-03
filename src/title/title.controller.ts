import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { TitleService } from './title.service';

@Controller('title')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Post()
  async create(@Body() createTitleDto: CreateTitleDto) {
    return await this.titleService.create(createTitleDto);
  }

  @Get()
  async findAll() {
    return await this.titleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.titleService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTitleDto: UpdateTitleDto,
  ) {
    return await this.titleService.update(id, updateTitleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.titleService.remove(id);
  }
}
