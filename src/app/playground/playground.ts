import { Component } from '@angular/core';
import {CreateDynamic} from '../create-dynamic/create-dynamic';

@Component({
  selector: 'app-playground',
  imports: [
    CreateDynamic,
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

}
