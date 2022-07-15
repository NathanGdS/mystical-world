import { SpecieRepositoryInMemory } from "../../../infra/repositories/InMemory/SpecieRepositoryInMemory";
import { CreateSpecieInput, CreateSpecieOutput, CreateSpecieUseCase } from "../CreateSpecie/CreateSpecieUseCase";
import { FindOneSpecieUseCase } from "../FindOneSpecie/FindOneSpecieUseCase";
import { RemoveSpecieUseCase } from "./RemoveSpecieUseCase";


let removeSpecieUseCase: RemoveSpecieUseCase;
let createSpecieUseCase: CreateSpecieUseCase;
let findOneSpecieUseCase: FindOneSpecieUseCase;
let specieRepository: SpecieRepositoryInMemory;

describe ("RemoveSpecieUseCase", () => {

    beforeEach(() => {
        specieRepository = new SpecieRepositoryInMemory();
        removeSpecieUseCase = new RemoveSpecieUseCase(specieRepository)
        createSpecieUseCase = new CreateSpecieUseCase(specieRepository)
        findOneSpecieUseCase = new FindOneSpecieUseCase(specieRepository)
    })

    it('Should be able to remove an specie', async () => {
        const obj: CreateSpecieInput = {
            mythology: 'Some epic mythology',
            shortDescription: 'Epic'
        }
        const specie: CreateSpecieOutput = await createSpecieUseCase.execute(obj)
        expect(await findOneSpecieUseCase.execute(specie.id)).toStrictEqual(specie)

        await removeSpecieUseCase.execute(specie.id)
        try {
           await findOneSpecieUseCase.execute(specie.id)
        } catch (error) {
            expect(error.message).toEqual('Id not found')
            expect(error).toBeInstanceOf(Error)
        }
    })

})