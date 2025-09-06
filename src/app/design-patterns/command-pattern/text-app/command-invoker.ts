import { Injectable } from '@angular/core';
import {TextCommand} from './text-command';

@Injectable({
  providedIn: 'root'
})
export class CommandInvoker {
  private history: TextCommand[] = [];
  private undone: TextCommand[] = [];

  execute(command: TextCommand) {
    command.execute();
    this.history.push(command);
    this.undone = []; // clear redo stack
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.undone.push(command);
    }
  }

  redo() {
    const command = this.undone.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}
