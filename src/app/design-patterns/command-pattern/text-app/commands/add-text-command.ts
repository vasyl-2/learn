import {TextCommand} from '../text-command';
import {Editor} from '../editor';
import {BaseCommand} from './base-command';

export class AddTextCommand extends BaseCommand implements TextCommand {

  constructor(protected override editor: Editor, private text: string) {
    super(editor);
  }

  doExecute(): void {
    this.editor.setText(this.editor.getText() + this.text);
  }
}
