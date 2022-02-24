import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashNavComponent } from './cash-nav/cash-nav.component';
import { CashMainComponent } from './cash-main/cash-main.component';



@NgModule({
  declarations: [
    CashNavComponent,
    CashMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CashNavComponent,
    CashMainComponent
  ]
})
export class CashAppModule { }
