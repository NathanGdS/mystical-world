import { TestingModule, Test } from "@nestjs/testing";
import { SpecieRepositoryInMemory } from "../core/infra/repositories/InMemory/SpecieRepositoryInMemory";
import { SpecieService } from "./specie.service";

describe ("SpecieService", () => {
    let service: SpecieService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
       providers: [
        SpecieService,
         {
           provide: SpecieService,
           useClass: SpecieRepositoryInMemory
         }
       ]
      }).compile();
  
      service = module.get<SpecieService>(SpecieService);
    });


    it("Definitions", async () => {
        expect(service.findAll).toBeDefined()
        expect(service.findOne).toBeDefined()
        expect(service.create).toBeDefined()
        expect(service.update).toBeDefined()
        expect(service.remove).toBeDefined()
    })
})