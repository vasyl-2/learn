import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

import {Editor} from '../editor';
import {CommandInvoker} from '../command-invoker';
import {AddTextCommand} from '../commands/add-text-command';
import {ClearTextCommand} from '../commands/clear-text-command';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-text',
  imports: [FormsModule],
  templateUrl: './text.html',
  styleUrl: './text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Text {
  inputText = signal('');

  constructor(public editor: Editor, private manager: CommandInvoker) {}

  addText(): void {
    if (this.inputText().trim()) {
      this.manager.execute(new AddTextCommand(this.editor, this.inputText()));
      this.inputText.set('');
    }
  }

  clearText(): void {
    this.manager.execute(new ClearTextCommand(this.editor));
  }

  undo(): void {
    this.manager.undo();
  }

  redo(): void {
    this.manager.redo();
  }
}
