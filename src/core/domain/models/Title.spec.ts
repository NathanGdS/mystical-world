import { Title } from "./Title"

describe ("Title Entity", () => {
    it("constructor", () => {
        const obj = {
            name: "Some Title",
            description: "History/fullDescription of an title"
        }

        const title: Title = new Title(obj);
        const titleJson = title.toJSON();
        
        expect(titleJson.id).toBeDefined()
        expect(titleJson.updatedAt).toBeDefined()
        expect(titleJson.createdAt).toBeDefined()

        expect(titleJson.name).toStrictEqual(obj.name)
        expect(titleJson.description).toStrictEqual(obj.description)
    })

    it("update method", () => {
        const obj = {
            name: "Some Title",
            description: "History/fullDescription of an title"
        }

        const newValues = {
            name: "New Title",
            description: "New Description"
        }

        const title: Title = new Title(obj);
        title.update(newValues)

        expect(title.name).toStrictEqual(newValues.name)
        expect(title.description).toStrictEqual(newValues.description)
    })
})