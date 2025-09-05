import {Component, input, model, output} from '@angular/core';

@Component({
  selector: 'app-be-created-dynamically',
  imports: [],
  templateUrl: './be-created-dynamically.html',
  styleUrl: './be-created-dynamically.scss'
})
export class BeCreatedDynamically {

  title = input.required<string>();
  description = input.required<string>();

  collapsed = model(false);
  closed = output<void>();

  setCollapsed(isCollapsed: boolean) {
    console.log('IS_COLLAPSED____: ', isCollapsed);
    this.collapsed.set(isCollapsed);
  }
}
