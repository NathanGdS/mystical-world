import { Specie, UpdateProps } from "../models/Specie";
import { IBaseRepository } from "./IBaseRepository";

export interface ISpecieRepository extends IBaseRepository<Specie, UpdateProps> {
}