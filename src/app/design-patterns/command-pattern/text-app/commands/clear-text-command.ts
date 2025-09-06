import {TextCommand} from '../text-command';
import {Editor} from '../editor';
import {BaseCommand} from './base-command';

export class ClearTextCommand extends BaseCommand implements TextCommand {
  constructor(protected override editor: Editor) {
    super(editor)
  }

  doExecute(): void {
    this.editor.clear();
  }
}
