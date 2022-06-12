import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSpecieDto } from './dto/create-specie.dto';
import { UpdateSpecieDto } from './dto/update-specie.dto';
import { Specie } from './entities/specie.entity';

@Injectable()
export class SpecieService {
  species: Specie[] = [];

  async create(createSpecieDto: CreateSpecieDto) {
    const specie = new Specie(
      createSpecieDto.shortDescription,
      createSpecieDto.mythology,
    );

    this.species.push(specie);

    return specie;
  }

  async findAll() {
    return this.species;
  }

  async findOne(id: string) {
    await this.findIndex(id);
    return this.species.filter((specie) => specie.id === id);
  }

  async update(id: string, { mythology, shortDescription }: UpdateSpecieDto) {
    const specieIndex = await this.findIndex(id);

    this.species.map((p) => {
      if (p.id === id) {
        if (mythology) this.species[specieIndex].mythology = mythology;
        if (shortDescription)
          this.species[specieIndex].shortDescription = shortDescription;
      }
    });

    this.species[specieIndex].validate();
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.findIndex(id);
    this.species = this.species.filter((s) => s.id != id);
  }

  private async findIndex(id: string): Promise<number> {
    const specieIndex = this.species.findIndex((specie) => specie.id === id);
    if (specieIndex === -1)
      throw new HttpException('Specie not Found', HttpStatus.NOT_FOUND);
    return specieIndex;
  }
}
