import { randomUUID } from "node:crypto";

type BloodlineProps = {
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type BloodlineJson = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export type UpdateBloodline = {
    name?: string;
    description?: string;
}

export class Bloodline {
    public readonly id: string;
    private readonly _props: Partial<BloodlineProps>;

    constructor (props: BloodlineProps, id?: string) {
        this.id = id || randomUUID()
        this._props = {
            ...props,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }

    get name (): string {
        return this._props.name;
    }

    private set name (value: string) {
        this._props.name = value;
    }

    get description (): string {
        return this._props.description;
    }

    private set description (value: string) {
        this._props.description = value;
    }

    get createdAt (): Date {
        return this._props.createdAt;
    }

    get updatedAt (): Date {
        return this._props.updatedAt;
    }

    private set updatedAt (value: Date) {
        this._props.updatedAt = value
    }

    update ({name, description}: UpdateBloodline) {
        if (name) this.name = name;
        if (description) this.description = description;
        this.updatedAt = new Date()
    }

    toJSON (): BloodlineJson {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }

}