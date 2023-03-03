import { Injectable } from '@nestjs/common';
import { CreateTitleUseCase } from '../core/application/Title/CreateTitle/CreateTitleUseCase';
import { FindAllTitlesUseCase } from '../core/application/Title/FindAllTitles/FindAllTitlesUseCase';
import { FindOneTitleUseCase } from '../core/application/Title/FindOneTitle/FindOneTitle';
import { RemoveTitleUseCase } from '../core/application/Title/RemoveTitle/RemoveTitleUseCase';
import { UpdateTitleUseCase } from '../core/application/Title/UpdateTitle/UpdateTitleUseCase';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';

@Injectable()
export class TitleService {
  constructor(
    private readonly _createTitleUseCase: CreateTitleUseCase,
    private readonly _findAllTitleUseCase: FindAllTitlesUseCase,
    private readonly _findOneTitleUseCase: FindOneTitleUseCase,
    private readonly _updateTitleUseCase: UpdateTitleUseCase,
    private readonly _removeTitleUseCase: RemoveTitleUseCase,
  ) {}

  async create(createTitleDto: CreateTitleDto) {
    return await this._createTitleUseCase.execute(createTitleDto);
  }

  async findAll() {
    return await this._findAllTitleUseCase.execute();
  }

  async findOne(id: string) {
    return await this._findOneTitleUseCase.execute(id);
  }

  async update(id: string, updateTitleDto: UpdateTitleDto) {
    return await this._updateTitleUseCase.execute(id, updateTitleDto);
  }

  async remove(id: string) {
    await this._removeTitleUseCase.execute(id);
  }
}
