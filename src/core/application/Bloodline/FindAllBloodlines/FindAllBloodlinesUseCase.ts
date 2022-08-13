import { Bloodline } from "../../../domain/models/Bloodline";
import { IBloodlineRepository } from "../../../domain/repositories/IBloodlineRepository";

export class FindAllBloodlinesUseCase {
    constructor (
        private readonly _repository: IBloodlineRepository
    ) { }

    async execute(): Promise<FindAllBloodlinesOutput> {
        return await this._repository.findAll()
    }
}


export type FindAllBloodlinesOutput= Bloodline[] & { }