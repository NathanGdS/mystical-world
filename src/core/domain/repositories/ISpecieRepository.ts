import { Specie, UpdateProps } from '../models/Specie';
import { IBaseRepository } from './IBaseRepository';

export type ISpecieRepository = IBaseRepository<Specie, UpdateProps>;
