import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";



export class RemoveSpecieUseCase {
    constructor(
        private readonly _specieRepository: ISpecieRepository
    ) {}

    async execute(id: string): Promise<void> {
        await this._specieRepository.remove(id)
    }
}