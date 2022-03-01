import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ScheduleComponent } from './pages/schedule/schedule.component';
import { HomeComponent } from './pages/home/home.component';

import { PatientsComponent } from './pages/patients/patients.component';
import { PatiNewComponent } from './pages/patients/patients-app/pati-new/pati-new.component';

import { CashRegisterComponent } from './pages/cash-register/cash-register.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ManagementComponent } from './pages/management/management.component';
import { ReportComponent } from './pages/report/report.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SettingComponent } from './pages/setting/setting.component';
import { TaskComponent } from './pages/task/task.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { PatiProfileComponent } from './pages/patients/patients-app/pati-profile/pati-profile.component';
import { PatiAllComponent } from './pages/patients/patients-app/pati-all/pati-all.component';




const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'schedule', component: ScheduleComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'patients/new', component: PatiNewComponent},
  { path: 'patients/profile', component: PatiProfileComponent},
  { path: 'patients/all', component: PatiAllComponent},

  { path: 'cash-register', component: CashRegisterComponent},
  { path: 'marketing', component: MarketingComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'report', component: ReportComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'task', component: TaskComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'profile', component: ProfileComponent},
  


  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo:'not-found', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
