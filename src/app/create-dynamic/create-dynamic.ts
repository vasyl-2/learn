import {
  Component,
  ComponentRef,
  inputBinding,
  outputBinding,
  signal,
  twoWayBinding,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import {BeCreatedDynamically} from './be-created-dynamically/be-created-dynamically';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-create-dynamic',
  templateUrl: './create-dynamic.html',
  styleUrl: './create-dynamic.scss',
  imports: [MatTooltip]
})
export class CreateDynamic {

  vcr = viewChild('container', { read: ViewContainerRef });
  compactMode = signal(false);
  #componentRef?: ComponentRef<BeCreatedDynamically>;

  constructor() {}

  createComponent() {
    this.vcr()?.clear();

    this.#componentRef = this.vcr()!.createComponent(BeCreatedDynamically, {
      bindings: [
        inputBinding('title', () => 'Weather'),
        inputBinding('description', () => 'description'),
        // inputBinding('collapsed', () => this.compactMode()), // more complicated, use next line
        // inputBinding('collapsed', this.compactMode),
        // outputBinding<boolean>('collapsedChange', (isCollapsed: boolean) => this.compactMode.set(isCollapsed)),
        twoWayBinding('collapsed', this.compactMode), // instead of input + output
        outputBinding('closed', (closed) => {
          this.#componentRef?.destroy();
          this.#componentRef = undefined;
        })
      ],
      directives: [
        {
          type: MatTooltip,
          bindings: [
            inputBinding('matTooltip', () => 'Tooltip'),
            inputBinding('matTooltipPosition', () => 'above'),
          ]
        }
      ]
    });
  }

  setCollapsed(isCollapsed: boolean) {
    console.log('IS_COLLAPSED____: ', isCollapsed);
    this.compactMode.set(isCollapsed);
  }
}
