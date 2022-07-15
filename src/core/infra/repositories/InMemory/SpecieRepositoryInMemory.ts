import { Specie, UpdateProps } from "../../../domain/models/Specie";
import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";

export class SpecieRepositoryInMemory implements ISpecieRepository {
    species: Specie[] = [];

    async findAll(): Promise<Specie[]> {
        return this.species
    }

    async findOne(id: string): Promise<Specie> {
        return this.species.find(element => element.id === id)
        // return this.species[index].toJSON()
    }

    async create(specie: Specie): Promise<void> {
        this.species.push(specie)
    }

    async update(id: string, data: UpdateProps): Promise<void> {
        const index = this.species.findIndex(element => element.id === id)
        this.species[index].updateAll(data)
    }

    async remove(id: string): Promise<void> {
        this.species = this.species.filter(element => element.id != id)
    }
}
