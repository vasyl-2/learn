import {Component, ComponentRef, effect, signal, viewChild, ViewContainerRef} from '@angular/core';
import {BeCreatedDynamically} from './be-created-dynamically/be-created-dynamically';

@Component({
  selector: 'app-create-dynamic',
  templateUrl: './create-dynamic.html',
  styleUrl: './create-dynamic.scss'
})
export class CreateDynamic {

  vcr = viewChild('container', { read: ViewContainerRef });
  compactMode = signal(false);
  #componentRef?: ComponentRef<BeCreatedDynamically>;

  constructor() {
    effect(() => {
      const isCompactMode = this.compactMode();
      this.#componentRef?.setInput('collapsed', isCompactMode);
      // this.#componentRef?.setInput('collapsed', this.compactMode());  won't work, won't be tracked by effect !
    })
  }

  createComponent() {
    this.vcr()?.clear();

    this.#componentRef = this.vcr()!.createComponent(BeCreatedDynamically);

    this.#componentRef?.setInput('collapsed', this.compactMode());
    this.#componentRef?.setInput('description', 'description');
    this.#componentRef?.setInput('collapsed', this.compactMode());

    this.#componentRef?.instance.collapsed.subscribe((isCollapsed) => {
      console.log('CHANGED___________', isCollapsed);
      this.compactMode.set(isCollapsed); // two way binding
    })
  }

  setCollapsed(isCollapsed: boolean) {
    console.log('IS_COLLAPSED____: ', isCollapsed);
    this.compactMode.set(isCollapsed);
  }
}
