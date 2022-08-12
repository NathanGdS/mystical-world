import { Bloodline } from "./Bloodline";

let entity: Bloodline;

describe("BloodlineEntity", () => {
    test("Should be able to create a new entity", () => {
        const obj = new Bloodline({
            name: "Human",
            description: "Bloodline that humans have"
        })

        expect(obj.id).toBeDefined()
        expect(obj.createdAt).toBeDefined()
        expect(obj.updatedAt).toBeDefined()

        entity = obj
    })

    test("Should be able to update an entity with all params", () => {
        const updateData = {name:"New Name", description:"New Description"}
        entity.update(updateData)

        expect(entity.name).toStrictEqual(updateData.name)
        expect(entity.description).toStrictEqual(updateData.description)
    })

    test("Should be able to update the entity partialy", () => {
        const updateDataName = {name:"New Name Partialy", description: null}
        entity.update(updateDataName)

        expect(entity.name).toStrictEqual(updateDataName.name)
        expect(entity.description).not.toBe(updateDataName.description)

        const updateDataDescription = {name: null, description: "New Description Partialy"}
        entity.update(updateDataDescription)


        expect(entity.description).toStrictEqual(updateDataDescription.description)
        expect(entity.name).not.toBe(updateDataDescription.name)

        const expectedResult = {
            id: entity.id,
            name: updateDataName.name,
            description: updateDataDescription.description,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt
        }

        expect(entity.toJSON()).toStrictEqual(expectedResult)

    })

})