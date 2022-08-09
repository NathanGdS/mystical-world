import { TitleRepositoryInMemory } from "../../../infra/repositories/InMemory/TitleRepositoryInMemory";
import { CreateTitleUseCase } from "../CreateTitle/CreateTitleUseCase";
import { FindOneTitleUseCase } from "../FindOneTitle/FindOneTitle";
import { UpdateTitleUseCase } from "./UpdateTitleUseCase";

let repository: TitleRepositoryInMemory;
let createUseCase: CreateTitleUseCase;
let updateUseCase: UpdateTitleUseCase;
let findOneUseCase: FindOneTitleUseCase;

describe("UpadteTitleUseCase", () => {

    beforeEach(() => {
        repository = new TitleRepositoryInMemory();
        createUseCase = new CreateTitleUseCase(repository);
        updateUseCase = new UpdateTitleUseCase(repository);
        findOneUseCase = new FindOneTitleUseCase(repository);
    })

    it ("Should be able to update an title", async () => {
        const obj = {
            name: "new Title",
            description: "new Description"
        }

        const entity = await createUseCase.execute(obj);

        const newObj = {
            name: "updated Title",
            description: "updated Description"
        }

        const updatedEntity = await updateUseCase.execute(entity.id, newObj);

        const search = await findOneUseCase.execute(entity.id)
        expect(search).toStrictEqual(updatedEntity)

    })

    it("Should not be able to updated an title that does not exists", async () => {
        try {
            const obj = {
                name: "new Title",
                description: "new Description"
            }
            await updateUseCase.execute("throw", obj)
        } catch (error) {
            expect(error.message).toStrictEqual("Id not found")
        }
    })

})