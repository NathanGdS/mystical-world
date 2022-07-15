import { Injectable } from '@nestjs/common';
import { CreateSpecieInput, CreateSpecieOutput, CreateSpecieUseCase } from '../core/application/Specie/CreateSpecie/CreateSpecieUseCase';
import { FindAllSpecieOutput, FindAllSpeciesUseCase } from '../core/application/Specie/FindAllSpecie/FindAllSpecieUseCase';
import { FindOneSpecieOutPut, FindOneSpecieUseCase } from '../core/application/Specie/FindOneSpecie/FindOneSpecieUseCase';
import { RemoveSpecieUseCase } from '../core/application/Specie/RemoveSpecie/RemoveSpecieUseCase';
import { UpdateSpecieOutPut, UpdateSpecieUseCase } from '../core/application/Specie/UpdateSpecie/UpdateSpecieUseCase';
import { UpdateProps } from '../core/domain/models/Specie';

@Injectable()
export class SpecieService {
  constructor(
    private readonly _findAllSpecieUseCase: FindAllSpeciesUseCase,
    private readonly _findOneSpecieUseCase: FindOneSpecieUseCase,
    private readonly _createSpecieUseCase: CreateSpecieUseCase,
    private readonly _updateSpecieUseCase: UpdateSpecieUseCase,
    private readonly _removeSpecieUseCase: RemoveSpecieUseCase
  ) { }

  async findAll(): Promise<FindAllSpecieOutput[]> {
    return await this._findAllSpecieUseCase.execute()
  }

  async findOne(id: string): Promise<FindOneSpecieOutPut> {
    return await this._findOneSpecieUseCase.execute(id)
  }

  async create(data: CreateSpecieInput): Promise<CreateSpecieOutput> {
    return await this._createSpecieUseCase.execute(data)
  }

  async update(id:string, data: UpdateProps): Promise<UpdateSpecieOutPut> {
    return await this._updateSpecieUseCase.execute(id, data)
  }

  async remove(id: string): Promise<void> {
    await this._removeSpecieUseCase.execute(id)
  }

}
