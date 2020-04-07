import { Project, Task, Note, IEntity} from "./entities";
import * as fs from "fs";

export class Taskpaper {
    public entities: IEntity[];

    constructor(text: string) {
        this.entities = [];
        this.parse(text);
    }

    private parse(text: string) {
        text.split("\n").map((line: string) => {
            if (Project.isProject(line)) {
                this.entities.push(new Project(line));
            } else if (Task.isTask(line)) {
                this.entities.push(new Task(line));
            } else {
                this.entities.push(new Note(line));
            }
        });
    }

    public print(): string {
        return this.entities.map(e => e.print()).join("\n");
    }
}