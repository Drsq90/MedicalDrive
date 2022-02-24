import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMainComponent } from './task-main/task-main.component';
import { TaskNavComponent } from './task-nav/task-nav.component';



@NgModule({
  declarations: [
    TaskMainComponent,
    TaskNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskMainComponent,
    TaskNavComponent
  ]
})
export class TaskAppModule { }
