import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'my_portfolio';
  public counter: number = 10;

  incrementar():void{
    this.counter += 1;  
  }
  decrementar():void{
    this.counter -= 1;
  }
  incrementarLine(value:number):void{
    this.counter += value;  
     
  }
  resetmethod(value:boolean){
    if(value=true)this.counter = 10;
  }

}


