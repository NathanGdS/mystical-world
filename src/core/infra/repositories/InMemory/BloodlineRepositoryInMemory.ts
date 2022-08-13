import { Bloodline, UpdateBloodline } from "../../../domain/models/Bloodline";
import { IBloodlineRepository } from "../../../domain/repositories/IBloodlineRepository";


export class BloodlineRepositoryInMemory implements IBloodlineRepository {
    items: Bloodline[] = []

    async findAll(): Promise<Bloodline[]> {
        return this.items;
    }

    async findOne(id: string): Promise<Bloodline> {
        return this.items.find(item => item.id === id)
    }

    async create(data: Bloodline): Promise<void> {
        this.items.push(data)
    }

    async update(id: string, data: UpdateBloodline): Promise<void> {
        const index = this.items.findIndex(item => item.id === id)
        this.items[index].update(data)
    }

    async remove(id: string): Promise<void> {
        this.items = this.items.filter(item => item.id != id)
    }

}