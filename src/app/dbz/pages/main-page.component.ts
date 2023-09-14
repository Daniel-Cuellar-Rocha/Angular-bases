import { Component, } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPage  {

     constructor( private DBZService: dbzService){}

     get characters(): Character[]{
        return [...this.DBZService.characters];
    }
    onDeleteCharacter(id:string):void{
        this.DBZService.deleteCharacterByID(id);
    }

    onNewCharacter(character:Character){
        this.DBZService.onNewCharacter2(character)
    }
}