import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { CashRegisterComponent } from './cash-register/cash-register.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ManagementComponent } from './management/management.component';
import { ReportComponent } from './report/report.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingComponent } from './setting/setting.component';
import { AppRoutingModule } from '../app-routing.module';
import { TaskComponent } from './task/task.component';
import { LayoutModule } from '../layout/layout.module';
import { ScreenModule } from './home/screen/screen.module';
import { CashAppModule } from './cash-register/cash-app/cash-app.module';
import { ManagementAppModule } from './management/management-app/management-app.module';
import { MarketingAppModule } from './marketing/marketing-app/marketing-app.module';
import { PatientsAppModule } from './patients/patients-app/patients-app.module';
import { ReportAppModule } from './report/report-app/report-app.module';
import { ScheduleAppModule } from './schedule/schedule-app/schedule-app.module';
import { SettingAppModule } from './setting/setting-app/setting-app.module';
import { TaskAppModule } from './task/task-app/task-app.module';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';




@NgModule({
  declarations: [
    ScheduleComponent,
    HomeComponent,
    PatientsComponent,
    CashRegisterComponent,
    MarketingComponent,
    ManagementComponent,
    ReportComponent,
    NotFoundComponent,
    SettingComponent,
    TaskComponent,
    ProfileComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    ScreenModule,
    CashAppModule,
    ManagementAppModule,
    MarketingAppModule,
    PatientsAppModule,
    ReportAppModule,
    ScheduleAppModule,
    SettingAppModule,
    TaskAppModule

  ],
  exports: [
    ScheduleComponent,
    HomeComponent,
    PatientsComponent,
    CashRegisterComponent,
    MarketingComponent,
    ManagementComponent,
    ReportComponent,
    NotFoundComponent,
    SettingComponent,
    TaskComponent,
    ProfileComponent,
    NotificationsComponent
  ]
})
export class PagesModule { }
