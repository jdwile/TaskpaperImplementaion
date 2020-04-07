import { IEntity } from "./IEntity";

export class Project implements IEntity {
    public static isProject(line: string): boolean {
        const PATTERN = new RegExp(/^.+\:$/);
        return PATTERN.test(line);
    }

    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    public print(): string {
        return this.title;
    }
}