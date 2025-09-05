import { Component, signal } from '@angular/core';
import {Playground} from './playground/playground';

@Component({
  selector: 'app-root',
  imports: [Playground],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('learn');
}
