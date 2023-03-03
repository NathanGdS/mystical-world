import { CreateSpecieUseCase } from '../core/application/Specie/CreateSpecie/CreateSpecieUseCase';
import { FindAllSpeciesUseCase } from '../core/application/Specie/FindAllSpecie/FindAllSpecieUseCase';
import { FindOneSpecieUseCase } from '../core/application/Specie/FindOneSpecie/FindOneSpecieUseCase';
import { RemoveSpecieUseCase } from '../core/application/Specie/RemoveSpecie/RemoveSpecieUseCase';
import { UpdateSpecieUseCase } from '../core/application/Specie/UpdateSpecie/UpdateSpecieUseCase';
import { ISpecieRepository } from '../core/domain/repositories/ISpecieRepository';
import { SpecieRepositoryInMemory } from '../core/infra/repositories/InMemory/SpecieRepositoryInMemory';
import { SpecieService } from './specie.service';

export namespace SPECIE_PROVIDERS {
  const instance = SpecieRepositoryInMemory;

  namespace REPOSITORY {
    export const values = {
      provide: instance,
      useClass: instance,
    };
  }

  namespace INDEX_SPECIE_USECASE {
    export const values = {
      provide: FindAllSpeciesUseCase,
      useFactory: (specieRepository: ISpecieRepository) =>
        new FindAllSpeciesUseCase(specieRepository),
      inject: [instance],
    };
  }

  namespace FINDONE_SPECIE_USECASE {
    export const values = {
      provide: FindOneSpecieUseCase,
      useFactory: (specieRepository: ISpecieRepository) =>
        new FindOneSpecieUseCase(specieRepository),
      inject: [instance],
    };
  }

  namespace CREATE_SPECIE_USECASE {
    export const values = {
      provide: CreateSpecieUseCase,
      useFactory: (specieRepository: ISpecieRepository) =>
        new CreateSpecieUseCase(specieRepository),
      inject: [instance],
    };
  }

  namespace UPDATE_SPECIE_USECASE {
    export const values = {
      provide: UpdateSpecieUseCase,
      useFactory: (specieRepository: ISpecieRepository) =>
        new UpdateSpecieUseCase(specieRepository),
      inject: [instance],
    };
  }

  namespace REMOVE_SPECIE_USECASE {
    export const values = {
      provide: RemoveSpecieUseCase,
      useFactory: (specieRepository: ISpecieRepository) =>
        new RemoveSpecieUseCase(specieRepository),
      inject: [instance],
    };
  }

  export const values = [
    SpecieService,
    REPOSITORY.values,
    INDEX_SPECIE_USECASE.values,
    FINDONE_SPECIE_USECASE.values,
    CREATE_SPECIE_USECASE.values,
    UPDATE_SPECIE_USECASE.values,
    REMOVE_SPECIE_USECASE.values,
  ];
}
