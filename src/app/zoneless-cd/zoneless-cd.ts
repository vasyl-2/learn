import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-zoneless-cd',
  imports: [CommonModule],
  templateUrl: './zoneless-cd.html',
  styleUrl: './zoneless-cd.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessCd {
  readonly count = signal(0);

  change(): void {
    this.count.set(this.count() + 1);
  }
}
