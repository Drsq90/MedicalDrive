import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavLeftComponent } from './nav-left/nav-left.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CopyrightComponent,
    SearchComponent,
    NavLeftComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    SearchComponent,
    NavLeftComponent
  ]
})
export class LayoutModule { }
