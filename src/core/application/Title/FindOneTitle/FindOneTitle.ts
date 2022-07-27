import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";



export class FindOneTtitleUseCase {
    constructor(
        private readonly _repository: ITitleRepository
    ) { }

    async execute(id: string): Promise<FindOneTitleOutput> {
        return (await this._repository.findOne(id)).toJSON()
    }
}

export type FindOneTitleOutput = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

