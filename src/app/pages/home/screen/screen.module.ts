import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInternoComponent } from './nav-interno/nav-interno.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    NavInternoComponent,
    MainComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    NavInternoComponent,
    MainComponent
  ]
})
export class ScreenModule { }
