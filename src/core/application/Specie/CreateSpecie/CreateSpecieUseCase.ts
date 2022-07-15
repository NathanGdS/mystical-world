import { Specie } from "../../../domain/models/Specie";
import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";

export class CreateSpecieUseCase {
    constructor(
        private readonly _repository: ISpecieRepository
    ) { }

    async execute(input: CreateSpecieInput): Promise<CreateSpecieOutput> {
        const specie = new Specie(input)
        await this._repository.create(specie)
        return specie.toJSON()
    }
}

export type CreateSpecieInput = {
    shortDescription: string;
    mythology: string;
}

export type CreateSpecieOutput = {
    id: string;
    shortDescription: string;
    mythology: string;
    createdAt: Date;
    updatedAt: Date;
}