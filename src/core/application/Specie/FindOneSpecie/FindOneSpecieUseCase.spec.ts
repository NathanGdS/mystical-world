import { ISpecieRepository } from '../../../domain/repositories/ISpecieRepository';
import { SpecieRepositoryInMemory } from '../../../infra/repositories/InMemory/SpecieRepositoryInMemory';
import {
  CreateSpecieInput,
  CreateSpecieOutput,
  CreateSpecieUseCase,
} from '../CreateSpecie/CreateSpecieUseCase';
import {
  FindOneSpecieOutPut,
  FindOneSpecieUseCase,
} from './FindOneSpecieUseCase';

let specieRepository: ISpecieRepository;
let findOneSpecieUseCase: FindOneSpecieUseCase;
let createSpecieUseCase: CreateSpecieUseCase;

describe('FindOneSpecieUseCase', () => {
  beforeEach(() => {
    specieRepository = new SpecieRepositoryInMemory();
    findOneSpecieUseCase = new FindOneSpecieUseCase(specieRepository);
    createSpecieUseCase = new CreateSpecieUseCase(specieRepository);
  });

  it('Should be able to return a Specie', async () => {
    const obj: CreateSpecieInput = {
      mythology: 'Some epic mythology',
      shortDescription: 'Epic',
    };
    const specie: CreateSpecieOutput = await createSpecieUseCase.execute(obj);

    const output: FindOneSpecieOutPut = await findOneSpecieUseCase.execute(
      specie.id,
    );

    expect(specie).toStrictEqual(output);
  });
});
