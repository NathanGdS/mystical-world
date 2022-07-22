import { Title } from "../../../domain/models/Title";
import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";

export class CreateTitleUseCase {
    constructor (
        private readonly _repository: ITitleRepository
    ) { }

    async execute(data: CreateTitleInput): Promise<CreateTitleOutput> {
        const title = new Title(data);
        this._repository.create(title);
        return title.toJSON()
    }

}

export type CreateTitleInput = {
    name: string;
    description: string;
}


export type CreateTitleOutput = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}