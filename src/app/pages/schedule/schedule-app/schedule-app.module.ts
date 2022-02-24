import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheNavComponent } from './sche-nav/sche-nav.component';
import { ScheMainComponent } from './sche-main/sche-main.component';



@NgModule({
  declarations: [
    ScheNavComponent,
    ScheMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScheNavComponent,
    ScheMainComponent
  ]
})
export class ScheduleAppModule { }
