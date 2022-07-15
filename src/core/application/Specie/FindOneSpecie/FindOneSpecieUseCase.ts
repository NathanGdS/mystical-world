import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";



export class FindOneSpecieUseCase {
    constructor (
       private readonly _specieRepository: ISpecieRepository
    ) { }

    async execute(id: string): Promise<FindOneSpecieOutPut> {
        const result = await this._specieRepository.findOne(id)
        if(!result) throw new Error('Id not found')

        return result.toJSON()
    }

}

export type FindOneSpecieOutPut = {
    id: string;
    shortDescription: string;
    mythology: string;
    createdAt: Date;
    updatedAt: Date;
}