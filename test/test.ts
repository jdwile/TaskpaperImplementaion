
import { expect } from 'chai';
import { Taskpaper } from  "../src";
import { Project, Note, Task } from '../src/entities';

describe('Taskpaper Parsing', () => {
  let taskpaper: Taskpaper;
  
  context('for a basic test file', () => {
    const testString = ["Project 1:", "Note 1", "- Task 1", "- Task 2"].join("\n");

    beforeEach(() => {
      taskpaper = new Taskpaper(testString);
    });

    it('should print the document back', () => {
      expect(taskpaper.print()).to.equal(testString);
    });

    it('should have the correct amount of entities', () => {
      expect(taskpaper.entities.length).to.equal(4);
    });

    it('should have the correct type of entities', () => {
      expect(taskpaper.entities[0] instanceof Project).to.equal(true);
      expect(taskpaper.entities[1] instanceof Note).to.equal(true);
      expect(taskpaper.entities[2] instanceof Task).to.equal(true);
      expect(taskpaper.entities[3] instanceof Task).to.equal(true);
    });
  });
});