import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public characters:Character[] = [{
    name:"krilin",
    power:1000
},{
    name:"Goku",
    power:10000

}];

}
