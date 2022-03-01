import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatiNavComponent } from './pati-nav/pati-nav.component';
import { PatiMainComponent } from './pati-main/pati-main.component';
import { PatiNewComponent } from './pati-new/pati-new.component';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/layout/layout.module';
import { RouterModule } from '@angular/router';

import { initializeApp } from "node_modules/firebase/app";
import { getAnalytics } from "node_modules/firebase/analytics";
import { PatiAllComponent } from './pati-all/pati-all.component';
import { PatiProfileComponent } from './pati-profile/pati-profile.component';

//Datos de congiguracion firebase
const firebaseConfig = {
  apiKey: "AIzaSyDX22R2XeEdbr2JbxvfszTVm5GpLqj3T48",
  authDomain: "crud-angular-1a0b6.firebaseapp.com",
  projectId: "crud-angular-1a0b6",
  storageBucket: "crud-angular-1a0b6.appspot.com",
  messagingSenderId: "670879127970",
  appId: "1:670879127970:web:7e4772fab04a43f1e7bafb",
  measurementId: "G-NM5N6WHRZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



@NgModule({
  declarations: [
    PatiNavComponent,
    PatiMainComponent,
    PatiNewComponent,
    PatiAllComponent,
    PatiProfileComponent
  ],
  imports: [
    CommonModule, FormsModule, LayoutModule, RouterModule
  ],
  exports: [
    PatiNavComponent,
    PatiMainComponent,
    PatiNewComponent,
    PatiAllComponent,
    PatiProfileComponent
  ]
})
export class PatientsAppModule { }

export interface Option {
  id: number;
  description: string;
}

export interface Newcontact {
  tipodocumento: number;
  numerodocumento:string;
  numerohistoria: string;
  nombres: string;
  apellidos: string;
  sexo: number;
  civil: number;
  paisdenacimiento: number;
  fechadenacimiento: string;    
  telefono: string;
  prefijo: number;
  celular: string;
  correo: string;
  direcciondedomicilio: string;
  nombresrepresentante: string;
  apellidosrepresentante: string;
  parentescorepresentante: number;
  prefijorepresentante: number;
  celularrepresentante: string;
  correorepresentante: string;
  generalrepresentante: number,
  convenio:number,
  comonosconocio: number;
  campana: number;
  referidopor: number;
  alertasynotas: string;
}


