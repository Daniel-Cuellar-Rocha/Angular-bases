import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPage } from './pages/main-page.component';



@NgModule({
  declarations: [mainPage],
  exports:[ mainPage],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
