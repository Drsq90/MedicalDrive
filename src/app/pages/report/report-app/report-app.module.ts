import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportNavComponent } from './report-nav/report-nav.component';
import { ReportMainComponent } from './report-main/report-main.component';



@NgModule({
  declarations: [
    ReportNavComponent,
    ReportMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReportNavComponent,
    ReportMainComponent
  ]
})
export class ReportAppModule { }
