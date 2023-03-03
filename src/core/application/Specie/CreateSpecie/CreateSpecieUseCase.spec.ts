import { ISpecieRepository } from '../../../domain/repositories/ISpecieRepository';
import { SpecieRepositoryInMemory } from '../../../infra/repositories/InMemory/SpecieRepositoryInMemory';
import {
  CreateSpecieInput,
  CreateSpecieOutput,
  CreateSpecieUseCase,
} from './CreateSpecieUseCase';

let specieRepository: ISpecieRepository;
let createSpecieUseCase: CreateSpecieUseCase;

describe('CreateSpecieUseCase', () => {
  beforeEach(() => {
    specieRepository = new SpecieRepositoryInMemory();
    createSpecieUseCase = new CreateSpecieUseCase(specieRepository);
  });

  it('Should be able to create a new Specie', async () => {
    const obj: CreateSpecieInput = {
      mythology: 'Some epic mythology',
      shortDescription: 'Epic',
    };
    const output: CreateSpecieOutput = await createSpecieUseCase.execute(obj);

    expect(output.id).toBeDefined();
    expect(output.updatedAt).toBeDefined();
    expect(output.createdAt).toBeDefined();
    expect(output.mythology).toStrictEqual(obj.mythology);
    expect(output.shortDescription).toStrictEqual(obj.shortDescription);
  });
});
