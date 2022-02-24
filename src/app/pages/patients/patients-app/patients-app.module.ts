import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatiNavComponent } from './pati-nav/pati-nav.component';
import { PatiMainComponent } from './pati-main/pati-main.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatiNavComponent,
    PatiMainComponent
  ],
  imports: [
    CommonModule, FormsModule,
  ],
  exports: [
    PatiNavComponent,
    PatiMainComponent
  ]
})
export class PatientsAppModule { }
