import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementNavComponent } from './management-nav/management-nav.component';
import { ManagementMainComponent } from './management-main/management-main.component';



@NgModule({
  declarations: [
    ManagementNavComponent,
    ManagementMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ManagementNavComponent,
    ManagementMainComponent
  ]
})
export class ManagementAppModule { }
