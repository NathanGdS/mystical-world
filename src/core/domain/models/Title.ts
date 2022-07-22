import { randomUUID } from "node:crypto"

type TitleProps = {
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
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


    update({name, description}: TitleProps) {
        this.name = name;
        this.description = description;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props
        }
    }
}