import { TitleRepositoryInMemory } from "../../../infra/repositories/InMemory/TitleRepositoryInMemory";
import { CreateTitleUseCase } from "../CreateTitle/CreateTitleUseCase";
import { FindOneTitleUseCase } from "../FindOneTitle/FindOneTitle";
import { RemoveTitleUseCase } from "./RemoveTitleUseCase";



let repository: TitleRepositoryInMemory;
let createUseCase: CreateTitleUseCase;
let findOneUseCase: FindOneTitleUseCase;
let removeUseCase: RemoveTitleUseCase;


describe("RemoveTitleUseCase", () => {
    beforeEach(() => {
        repository = new TitleRepositoryInMemory();
        createUseCase = new CreateTitleUseCase(repository);
        findOneUseCase = new FindOneTitleUseCase(repository);
        removeUseCase = new RemoveTitleUseCase(repository);
    })

    it("Should be able to remove an Title", async () => {
        const obj = {
            name: "New Title",
            description: "Full history of this title"
        }
        const newTitle = await createUseCase.execute(obj);

        await removeUseCase.execute(newTitle.id);

        try {
            await findOneUseCase.execute(newTitle.id)
        } catch (error) {
            expect(error.message).toStrictEqual("Id not found")
        }
    })

    it("Should not be able to remove an entity that does not exists", async () => {
        try {
            await removeUseCase.execute("throw");
        } catch (error) {
            expect(error.message).toStrictEqual("Id not found")
        }
    })

})