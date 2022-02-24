import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkNavComponent } from './mark-nav/mark-nav.component';
import { MarkMainComponent } from './mark-main/mark-main.component';



@NgModule({
  declarations: [
    MarkNavComponent,
    MarkMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MarkNavComponent,
    MarkMainComponent
  ]
})
export class MarketingAppModule { }
