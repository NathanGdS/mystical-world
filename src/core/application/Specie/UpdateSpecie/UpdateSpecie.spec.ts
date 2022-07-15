import { UpdateProps } from "../../../domain/models/Specie";
import { ISpecieRepository } from "../../../domain/repositories/ISpecieRepository"
import { SpecieRepositoryInMemory } from "../../../infra/repositories/InMemory/SpecieRepositoryInMemory";
import { CreateSpecieUseCase, CreateSpecieInput, CreateSpecieOutput } from "../CreateSpecie/CreateSpecieUseCase";
import { FindOneSpecieUseCase } from "../FindOneSpecie/FindOneSpecieUseCase";
import { UpdateSpecieUseCase } from "./UpdateSpecieUseCase";

let specieRepository: ISpecieRepository;
let createSpecieUseCase: CreateSpecieUseCase;
let findOneSpecieUseCase: FindOneSpecieUseCase;
let updateSpecieUseCase: UpdateSpecieUseCase;

describe ("CreateSpecieUseCase", () => {

    beforeEach(() => {
        specieRepository = new SpecieRepositoryInMemory()
        createSpecieUseCase = new CreateSpecieUseCase(specieRepository)
        updateSpecieUseCase = new UpdateSpecieUseCase(specieRepository)
        findOneSpecieUseCase = new FindOneSpecieUseCase(specieRepository)
    })

    it("Should be able to create a new Specie", async () => {
        const obj: CreateSpecieInput = {
            mythology: 'Some epic mythology',
            shortDescription: 'Epic'
        }
        const output: CreateSpecieOutput = await createSpecieUseCase.execute(obj)


        const updateObj: UpdateProps = {
            mythology: 'mythology',
            shortDescription: 'short'
        }
        const updatedObj = await updateSpecieUseCase.execute(output.id, updateObj)
        const findObj = await findOneSpecieUseCase.execute(updatedObj.id)

        expect(findObj).toStrictEqual(updatedObj)

    })

    it('Should not be able to update a specie that does not exists', async () => {
        try {
            const updateObj: UpdateProps = {
                mythology: 'mythology',
                shortDescription: 'short'
            }
            await updateSpecieUseCase.execute("fail", updateObj)
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toStrictEqual('Id not found')
        }
    })

})