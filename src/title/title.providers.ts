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

    namespace REPOSITORY {
        export const values = {
            provide: instance,
            useClass: instance
        }
    }

    namespace INDEX_TITLE_USECASE {
        export const values = {
            provide: FindAllTitlesUseCase,
            useFactory: (titleRepository: ITitleRepository) => new FindAllTitlesUseCase(titleRepository),
            inject: [instance]
        }
    }

    namespace FINDONE_TITLE_USECASE {
        export const values = {
            provide: FindOneTitleUseCase,
            useFactory: (titleRepository: ITitleRepository) => new FindOneTitleUseCase(titleRepository),
            inject: [instance]
        }
    }

    namespace CREATE_TITLE_USECASE {
        export const values = {
            provide: CreateTitleUseCase,
            useFactory: (titleRepository: ITitleRepository) => new CreateTitleUseCase(titleRepository),
            inject: [instance]
        }
    }

    namespace UPDATE_TITLE_USECASE {
        export const values = {
            provide: UpdateTitleUseCase,
            useFactory: (titleRepository: ITitleRepository) => new UpdateTitleUseCase(titleRepository),
            inject: [instance]
        }
    }

    namespace REMOVE_TITLE_USECASE {
        export const values = {
            provide: RemoveTitleUseCase,
            useFactory: (titleRepository: ITitleRepository) => new RemoveTitleUseCase(titleRepository),
            inject: [instance] 
        }
    }

    export const values = [
        TitleService,
        REPOSITORY.values,
        INDEX_TITLE_USECASE.values,
        FINDONE_TITLE_USECASE.values,
        CREATE_TITLE_USECASE.values,
        UPDATE_TITLE_USECASE.values,
        REMOVE_TITLE_USECASE.values
    ]

}