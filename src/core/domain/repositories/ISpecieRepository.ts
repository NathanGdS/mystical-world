import { Specie, UpdateProps } from "../models/Specie";

export interface ISpecieRepository {
    findAll(): Promise<Specie[]>
    findOne(id: string): Promise<Specie>
    create(specie: Specie): Promise<void>
    update(id: string, data: UpdateProps): Promise<void>
    remove(id: string): Promise<void>
}