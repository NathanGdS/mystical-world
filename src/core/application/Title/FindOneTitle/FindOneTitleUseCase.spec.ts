import { TitleRepositoryInMemory } from '../../../infra/repositories/InMemory/TitleRepositoryInMemory';
import { CreateTitleUseCase } from '../CreateTitle/CreateTitleUseCase';
import { FindOneTitleUseCase } from './FindOneTitle';

let repository: TitleRepositoryInMemory;
let useCase: FindOneTitleUseCase;
let createTitleUseCase: CreateTitleUseCase;

describe('FindOneTitleUseCase', () => {
  beforeEach(() => {
    repository = new TitleRepositoryInMemory();
    useCase = new FindOneTitleUseCase(repository);
    createTitleUseCase = new CreateTitleUseCase(repository);
  });

  it('Should be able to return an specific title', async () => {
    const obj = {
      name: 'New Title',
      description: 'Full history of this title',
    };
    const newTitle = await createTitleUseCase.execute(obj);

    const result = await useCase.execute(newTitle.id);

    expect(result).toStrictEqual(newTitle);
  });
});
