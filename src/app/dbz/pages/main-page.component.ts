import { Component, } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPage  {

    public characters:Character[] = [{
        name:"krilin",
        power:1000
    },{
        name:"Goku",
        power:10000

}];

onNewCharacter2(character:Character): void{
    console.log('MainPage')
    console.log(character)
}

    
}