
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interfaces';

@Injectable({providedIn: 'root'})
export class dbzService {
    public characters:Character[] = [{
        id: uuid(),
        name:"krilin",
        power:1000
    },{
        id: uuid(),
        name:"Goku",
        power:10000

}];

onNewCharacter2(character:Character): void{
    const newCharacter: Character={ id: uuid(), ...character};
    this.characters.push(newCharacter);
    console.log(newCharacter)
}

// onDeletePersonaje(index:number){
//     this.characters.splice(index,1)
//     console.log(this.characters)

// }  

deleteCharacterByID(id:string){
    this.characters= this.characters.filter(character => character.id !== id);  
    console.log(id)
}
   
    
}