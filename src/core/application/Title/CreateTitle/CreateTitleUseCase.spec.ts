import { ITitleRepository } from '../../../domain/repositories/ITitleRepository';
import { TitleRepositoryInMemory } from '../../../infra/repositories/InMemory/TitleRepositoryInMemory';
import { CreateTitleUseCase } from './CreateTitleUseCase';

let titleRepository: ITitleRepository;
let createTitleUseCase: CreateTitleUseCase;

describe('CreateTitleUseCase', () => {
  beforeEach(() => {
    titleRepository = new TitleRepositoryInMemory();
    createTitleUseCase = new CreateTitleUseCase(titleRepository);
  });

  it('Should be able to create a new Title', async () => {
    const obj = {
      name: 'New Title',
      description: 'Full history of this title',
    };

    const title = await createTitleUseCase.execute(obj);

    expect(title.id).toBeDefined();
    expect(title.createdAt).toBeDefined();
    expect(title.updatedAt).toBeDefined();

    expect(title.name).toStrictEqual(obj.name);
    expect(title.description).toStrictEqual(obj.description);
  });
});
