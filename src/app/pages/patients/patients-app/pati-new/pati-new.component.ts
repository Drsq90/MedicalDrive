import { Component, OnInit } from '@angular/core';
import { Newcontact } from '../patients-app.module';
import { Option } from '../patients-app.module';
import { NgForm } from '@angular/forms';
import { getFirestore } from 'node_modules/firebase/firestore';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'node_modules/firebase/firestore';

@Component({
  selector: 'app-pati-new',
  templateUrl: './pati-new.component.html',
  styleUrls: ['./pati-new.component.css']
})
export class PatiNewComponent implements OnInit {

  constructor() { }

  title = 'pacientes';
  header = 'Pacientes';
  description = 'Listado';
  numberOfContacts = 0;
  counterStyleColor = 'green';
  counterClass = 'warning';
  formHidden = false;

  public tipodocumento: Option[] = [
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Cedula' },
    { id: 2, description: 'Pasaporte' },
    { id: 3, description: 'RUC' },
    { id: 4, description: 'Cedula de extranjeria' },
    { id: 5, description: 'Otro' }
  ];

  public sexo: Option[] = [
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Masculino' },
    { id: 2, description: 'Femenino' },
  ];

  public civil: Option[] = [
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Soltero' },
    { id: 2, description: 'Casado' },
    { id: 3, description: 'Unión libre' },
    { id: 4, description: 'Divorsiado' },
    { id: 5, description: 'Viudo' },
    { id: 6, description: 'Otro' },
  ];

  public paisdenacimiento: Option[] = [
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Argentina' },
    { id: 2, description: 'Bolivia' },
    { id: 3, description: 'Brasil' },
    { id: 4, description: 'Colombia' },
    { id: 5, description: 'Chile' },
    { id: 6, description: 'Ecuador' },
    { id: 7, description: 'Guyana' },
    { id: 8, description: 'Paraguay' },
    { id: 9, description: 'Perú' },
    { id: 10, description: 'Uruguay' },
    { id: 11, description: 'Venezuela' },
    { id: 12, description: 'Otro' },  
  ];

  public prefijo: Option[] = [
    
    { id: 1, description: '+54' },
    { id: 2, description: '+591' },
    { id: 3, description: '+55' },
    { id: 4, description: '+57' },
    { id: 5, description: '+56' },
    { id: 6, description: '+593' },
    { id: 7, description: '+592' },
    { id: 8, description: '+595' },
    { id: 9, description: '+51' },
    { id: 10, description: '+598' },
    { id: 11, description: '+58' },
     
  ];

  public parentescorepresentante: Option[] = [
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Padre' },
    { id: 2, description: 'Madre' },
    { id: 3, description: 'Hermanol' },
    { id: 4, description: 'Familiar' },
    { id: 5, description: 'Amigo' },
    { id: 6, description: 'Otro' },      
  ];

  public prefijorepresentante: Option[] = [    
    { id: 1, description: '+54' },
    { id: 2, description: '+591' },
    { id: 3, description: '+55' },
    { id: 4, description: '+57' },
    { id: 5, description: '+56' },
    { id: 6, description: '+593' },
    { id: 7, description: '+592' },
    { id: 8, description: '+595' },
    { id: 9, description: '+51' },
    { id: 10, description: '+598' },
    { id: 11, description: '+58' },     
  ];

  public generalrepresentante: Option[] = [    
    { id: 0, description: 'Seleccione...' },
    { id: 1, description: 'Opcion 01' }, 
    { id: 2, description: 'Opcion 02' },
    { id: 3, description: 'Opcion 03' },
    { id: 4, description: 'Opcion 04' },       
  ];

  public newcontact: Newcontact = {
    tipodocumento: 0,
    numerodocumento:'',
    numerohistoria: '',
    nombres: '',
    apellidos: '',
    sexo: 0,
    civil: 0,
    paisdenacimiento: 6,
    fechadenacimiento: '',    
    telefono: '',
    prefijo: 6,
    celular: '',
    correo: '',
    direcciondedomicilio: '',
    nombresrepresentante: '',
    apellidosrepresentante: '',
    parentescorepresentante: 0,
    prefijorepresentante: 6,
    celularrepresentante: '',
    correorepresentante: '',
    generalrepresentante: 0,
    convenio: 0,
    comonosconocio: 0,
    campana: 0,
    referidopor: 0,
    alertasynotas: ''
};

public newpatients = {};
public pacientes: Newcontact[] = [];

  ngOnInit(): void {
    this.readPatients(); 
    console.log(this.pacientesfirebase); //ver pacientes de la base de datos
  }

  saveContact() {
    this.pacientes.push({ ...this.newcontact }); //los guarda en un array
    this.newpatients = { ...this.newcontact }; //los guarda en un json
    this.updateCounter();
    
  }
  
  private updateCounter() {
    this.numberOfContacts = this.pacientes.length;
    this.counterClass = this.numberOfContacts === 0 ? 'warning' : 'success';
  }
  
  deleteContact(newcontact: Newcontact) {
    this.pacientes = this.pacientes.filter(c => c.nombres !== newcontact.nombres);
    this.updateCounter();
  }
  
  //borrado de formulario
   onSubmit(formDetailUser: NgForm) {
    formDetailUser.resetForm();  
    this.addPatients();
  }
  
  //agregar pacientes a base de datos
  async addPatients(){
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, "pacientes"),     
      { ...this.newpatients } //guardo el unico json si quisiera un array cambiar por this.pacientes y actualizar el mismo   
      );
      console.log("Documento registrado ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  //leer pacientes de la base de datos
  public pacientesfirebase: any[] = [];
  public pacientesfirebaseid: any[] = [];
  
  async readPatients(){
    const db = getFirestore();  
    let i=0;  
    const querySnapshot = await getDocs(collection(db, "pacientes"));
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      //console.log(doc.data()['nombres']);  //solo mostrar los nombres o un atributo especifico 
      this.pacientesfirebase[i]=doc.data();
      this.pacientesfirebaseid[i]=doc.id;
      i++;
    });  
    
  }
  //Rastreador de id
  rastreadorid(j:number){  
    console.log(this.pacientesfirebaseid[j] + 'este es el indice');
  }
  //Editar un paciente de la base de datos
  
  //Borrar un paciente de la base de datos
  async deleatePatients(n:number){
    const db = getFirestore();
    let DocRef = this.pacientesfirebaseid[n];
    await deleteDoc(doc(db, "pacientes", DocRef));
  }
  


}


