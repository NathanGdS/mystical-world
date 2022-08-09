import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";



export class RemoveTitleUseCase {
    constructor (
        private readonly _repository: ITitleRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.verify(id);
        await this._repository.remove(id);
    }

    private async verify(id: string): Promise<void> {
        const exists = await this._repository.findOne(id);
        if (!exists) throw new Error("Id not found");
    }
}
