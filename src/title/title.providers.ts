import { CreateTitleUseCase } from "../core/application/Title/CreateTitle/CreateTitleUseCase";
import { FindAllTitlesUseCase } from "../core/application/Title/FindAllTitles/FindAllTitlesUseCase";
import { FindOneTitleUseCase } from "../core/application/Title/FindOneTitle/FindOneTitle";
import { RemoveTitleUseCase } from "../core/application/Title/RemoveTitle/RemoveTitleUseCase";
import { UpdateTitleUseCase } from "../core/application/Title/UpdateTitle/UpdateTitleUseCase";
import { ITitleRepository } from "../core/domain/repositories/ITitleRepository";
import { TitleRepositoryInMemory } from "../core/infra/repositories/InMemory/TitleRepositoryInMemory";
import { TitleService } from "./title.service";

export namespace TITLE_PROVIDERS {
    const instance = TitleRepositoryInMemory;

    const buildProviders = (useCases: any) => {
        let providers = [];

        let i =0;
        while (useCases[i]) {
            const useCase: any = useCases[i];
            const provider = {
                provide: useCase,
                useFactory: (repository: ITitleRepository) => new useCase(repository),
                inject: [instance]
            }
            providers.push(provider);
            i++;
        }
        return providers
    }

    const repositories = {
        provide: instance,
        useClass: instance
    }

    const providers = buildProviders([
        FindAllTitlesUseCase,
        FindOneTitleUseCase,
        CreateTitleUseCase,
        UpdateTitleUseCase,
        RemoveTitleUseCase
    ])

    export const values = [
        TitleService,
        repositories,
        ...providers
    ]

}