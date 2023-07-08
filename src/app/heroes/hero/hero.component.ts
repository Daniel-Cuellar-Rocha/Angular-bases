import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age:number = 45;
  
  get capilatizarName():string{
    return this.name.toUpperCase();

  }

  get herodescription():string{
    
    return `${this.name}- ${ this.age}`;
  }

  changeHero(value:boolean):void{
    if(value==true)this.name= "Dante";
    return }
    changeAge(value:boolean):void{
      if(value==true)this.age= 25;
  
    }

  

}
