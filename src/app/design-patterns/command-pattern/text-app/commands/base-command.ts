import {TextCommand} from '../text-command';
import {Editor} from '../editor';

export abstract class BaseCommand implements TextCommand {

  protected backup = '';

  protected constructor(protected editor: Editor) {}

  execute(): void {
    this.backup = this.editor.getText();
    this.doExecute();
  }

  undo(): void {
    this.editor.setText(this.backup);
  }

  protected abstract doExecute(): void;
}
