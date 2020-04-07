import { IEntity } from "./IEntity";

export class Task implements IEntity {
    public static isTask(line: string): boolean {
        const PATTERN = new RegExp(/^\s*- .+$/);
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