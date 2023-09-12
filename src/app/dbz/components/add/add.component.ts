import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Character: Character = {
    name:"",
    power: 0
  }
  emitCharacter():void{

    //debugger;
    console.log(this.Character)
    if(this.Character.name.length === 0)return;
    this.onNewCharacter.emit(this.Character);

    this.Character= {name:"", power:0};
  }

}
