import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettNavComponent } from './sett-nav/sett-nav.component';
import { SettMainComponent } from './sett-main/sett-main.component';



@NgModule({
  declarations: [
    SettNavComponent,
    SettMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettNavComponent,
    SettMainComponent
  ]
})
export class SettingAppModule { }
