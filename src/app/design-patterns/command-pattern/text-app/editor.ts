import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Editor {
  private content = '';

  setText(text: string) {
    this.content = text;
  }

  getText() {
    return this.content;
  }

  clear() {
    this.content = '';
  }
}
