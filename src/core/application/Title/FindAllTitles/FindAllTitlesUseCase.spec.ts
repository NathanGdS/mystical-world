import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";
import { TitleRepositoryInMemory } from "../../../infra/repositories/InMemory/TitleRepositoryInMemory";
import { FindAllTitlesUseCase } from "./FindAllTitlesUseCase";



let titleRepository: ITitleRepository;
let findAllTitlesUseCase: FindAllTitlesUseCase;

describe("FindAllTitlesUseCase", () => {
    beforeEach(() => {
        titleRepository = new TitleRepositoryInMemory();
        findAllTitlesUseCase = new FindAllTitlesUseCase(titleRepository);
    })

    it("Should be able to return an array of Titles", async () => {
        expect(await findAllTitlesUseCase.execute()).toStrictEqual([])
    })

})