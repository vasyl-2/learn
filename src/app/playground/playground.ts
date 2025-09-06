import { Component } from '@angular/core';
import {CreateDynamic} from '../create-dynamic/create-dynamic';
import {ZonelessCd} from '../zoneless-cd/zoneless-cd';

@Component({
  selector: 'app-playground',
  imports: [
    CreateDynamic,
    ZonelessCd,
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

}
