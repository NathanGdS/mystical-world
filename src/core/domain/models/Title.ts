import { randomUUID } from "node:crypto"

export type TitleProps = {
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UpdateTitleProps = {
    name: string;
    description: string;
}

export class Title {
    private readonly props: Required<TitleProps>
    public readonly id: string;

    constructor(props: TitleProps, id?: string) {
        this.id = id || randomUUID()
        this.props = {
            ... props,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    }

    get name (): string {
        return this.props.name;
    }

    private set name (value: string) {
        this.props.name = value;
    }


    get description (): string {
        return this.props.description;
    }

    private set description (value: string) {
        this.props.description = value;
    }

    get updatedAt (): Date {
        return this.props.updatedAt;
    }

    private set updatedAt (value: Date) {
        this.props.updatedAt = value
    }

    get createdAt (): Date {
        return this.props.createdAt;
    }


    update({name, description}: UpdateTitleProps) {
        if (name) this.name = name;
        if (description) this.description = description;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props
        }
    }
}