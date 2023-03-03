import { ISpecieRepository } from '../../../domain/repositories/ISpecieRepository';
import { SpecieRepositoryInMemory } from '../../../infra/repositories/InMemory/SpecieRepositoryInMemory';
import {
  FindAllSpecieOutput,
  FindAllSpeciesUseCase,
} from './FindAllSpecieUseCase';

let specieRepository: ISpecieRepository;
let findAllSpecieUseCase: FindAllSpeciesUseCase;

describe('FindAllSpeciesUseCase', () => {
  beforeEach(() => {
    specieRepository = new SpecieRepositoryInMemory();
    findAllSpecieUseCase = new FindAllSpeciesUseCase(specieRepository);
  });

  it('Should be to return an array of species', async () => {
    const output: FindAllSpecieOutput[] = await findAllSpecieUseCase.execute();

    expect(output).toStrictEqual([]);
  });
});
