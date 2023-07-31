import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.componet';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroModule } from './heroes/hero.module';

import { DbzModule } from './dbz/dbz.module';
import { AddComponent } from './dbz/components/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    
       
    
  ],
  imports: [
    BrowserModule,
    HeroModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
