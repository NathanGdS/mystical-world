import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";


export class FindAllTitlesUseCase {
    constructor(
        private readonly _repository: ITitleRepository
    ) { }

    async execute(): Promise<FindAllTitlesOutput[]> {
        return this._repository.findAll()
    }
}

export type FindAllTitlesOutput = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}