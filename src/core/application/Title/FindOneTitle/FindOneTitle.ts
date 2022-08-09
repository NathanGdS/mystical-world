import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";

export class FindOneTitleUseCase {
    constructor(
        private readonly _repository: ITitleRepository
    ) { }

    async execute(id: string): Promise<FindOneTitleOutput> {
       const result = await this._repository.findOne(id);
       if (!result) throw new Error("Id not found");
       return result.toJSON()
    }
}

export type FindOneTitleOutput = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

