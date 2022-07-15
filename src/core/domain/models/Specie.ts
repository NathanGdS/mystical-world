import {randomUUID} from "crypto"

export type SpecieProps = {
    shortDescription: string;
    mythology: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UpdateProps = {
    mythology: string;
    shortDescription: string;
}

export class Specie {
    public readonly id: string;
    private props: Required<SpecieProps>;

    constructor(props: SpecieProps, id?: string) {
        this.id = id || randomUUID()
        this.props = {
            ...props,
            createdAt: new Date(),
            updatedAt: null
        }
    }

    get shortDescription(): string {
        return this.props.shortDescription
    }

    private set shortDescription(value: string) {
        this.props.shortDescription = value
    }

    get mythology(): string {
        return this.props.mythology
    }

    private set mythology(value: string) {
        this.props.mythology = value
    }

    get createdAt(): Date {
        return this.props.createdAt
    }
    
    get updatedAt(): Date {
        return this.props.updatedAt
    }

    private set updatedAt(value: Date) {
        this.props.updatedAt = value
    }

    updateShortDescription(value: string) {
        this.shortDescription = value;
        this.updatedAt = new Date();
    }

    updateMythology(value: string) {
        this.mythology = value;
        this.updatedAt = new Date();
    }

    updateAll({
        mythology,
        shortDescription
    }: UpdateProps) {
        this.updateMythology(mythology)
        this.updateShortDescription(shortDescription)
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props,
        }
    }


}