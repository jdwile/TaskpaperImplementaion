import { IEntity } from "./IEntity";

export class Note implements IEntity {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    public print(): string {
        return this.text;
    }
}