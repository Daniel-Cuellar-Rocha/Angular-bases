import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';




@NgModule({
  declarations: [
    mainPage,
    ListComponent,
    AddComponent,    
    ],
  exports:[ mainPage],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
