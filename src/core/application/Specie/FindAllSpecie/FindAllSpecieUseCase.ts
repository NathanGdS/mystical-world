import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";

export class FindAllSpeciesUseCase {
    constructor(
        private readonly _repository: ISpecieRepository
    ) { }

    async execute(): Promise<FindAllSpecieOutput[]> {
        return await this._repository.findAll();
    }
}

export type FindAllSpecieOutput = {
    id: string;
    shortDescription: string;
    mythology: string;
    createdAt: Date;
    updatedAt: Date;
}