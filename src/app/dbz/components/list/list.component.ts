import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {  
  @Input()
  public listCharacter: Character[] =[{
    name:"Trunks",
    power: 10
    
  }]

  @Output() onDelete = new EventEmitter<number>();

  

  onDeletePersonaje(index: number){     
    this.onDelete.emit(index)
  }

}
