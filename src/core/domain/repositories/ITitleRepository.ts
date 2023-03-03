import { Title, UpdateTitleProps } from '../models/Title';
import { IBaseRepository } from './IBaseRepository';

export type ITitleRepository = IBaseRepository<Title, UpdateTitleProps>;
