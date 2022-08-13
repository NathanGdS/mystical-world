import { BloodlineRepositoryInMemory } from "../../../infra/repositories/InMemory/BloodlineRepositoryInMemory";
import { FindAllBloodlinesUseCase } from "./FindAllBloodlinesUseCase";

let _repository: BloodlineRepositoryInMemory;
let _findAllUseCase: FindAllBloodlinesUseCase;

describe ("FindAllBloodlinesUseCase", () => {

    beforeEach(() => {
        _repository = new BloodlineRepositoryInMemory();
        _findAllUseCase = new FindAllBloodlinesUseCase(_repository)
    });

    it("Should be able to return all bloodlines", async () => {
        const result = await _findAllUseCase.execute()
        expect(result).toStrictEqual([])
    })

})