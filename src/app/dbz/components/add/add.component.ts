import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public Character: Character = {
    name:"",
    power: 0
  }
  emitCharacter():void{
    console.log(this.Character)

    this.Character.name= "",
    this.Character.power= 0
  }

}
