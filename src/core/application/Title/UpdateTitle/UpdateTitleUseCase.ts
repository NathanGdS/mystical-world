import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";

export class UpdateTitleUseCase {
    constructor (
        private readonly _repository: ITitleRepository
    ) { }

    async execute(id: string, data: UpdateTitleInput): Promise<UpdateTitleOutput> {
        const entity = await this._repository.findOne(id)
        if (!entity) throw new Error("Id not found")

        await this._repository.update(entity.id, data)
        return (await this._repository.findOne(id)).toJSON()
    }

}

export type UpdateTitleInput = {
    name: string;
    description: string;
}

export type UpdateTitleOutput = {
    id: string;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}