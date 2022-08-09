import { Title, UpdateTitleProps } from "../../../domain/models/Title";
import { ITitleRepository } from "../../../domain/repositories/ITitleRepository";

export class TitleRepositoryInMemory implements ITitleRepository {
    titles: Title[] = [];

    async findAll(): Promise<Title[]> {
        return this.titles
    }

    async findOne(id: string): Promise<Title> {
        return this.titles.find(element => element.id === id)
    }

    async create(specie: Title): Promise<void> {
        this.titles.push(specie)
    }

    async update(id: string, data: UpdateTitleProps): Promise<void> {
        const index = this.titles.findIndex(element => element.id === id)
        this.titles[index].update(data)
    }

    async remove(id: string): Promise<void> {
        this.titles = this.titles.filter(element => element.id != id)
    }
}
