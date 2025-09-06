export interface TextCommand {
  execute(): void;
  undo(): void;
}
