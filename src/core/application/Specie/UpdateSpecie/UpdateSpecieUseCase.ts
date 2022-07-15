import { UpdateProps } from "../../../domain/models/Specie";
import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository";

export class UpdateSpecieUseCase {
    constructor (
       private readonly _specieRepository: ISpecieRepository
    ) { }

    async execute(id: string, data: UpdateProps): Promise<UpdateSpecieOutPut> {
        const validate = await this._specieRepository.findOne(id);
        if (!validate) throw new Error('Id not found')
        
        await this._specieRepository.update(id, data)
        return (await this._specieRepository.findOne(id)).toJSON()
    }

}

export type UpdateSpecieOutPut = {
    id: string;
    shortDescription: string;
    mythology: string;
    createdAt: Date;
    updatedAt: Date;
}