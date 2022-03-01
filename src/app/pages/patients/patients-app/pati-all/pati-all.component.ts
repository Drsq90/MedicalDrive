import { Component, OnInit } from '@angular/core';
import { getFirestore } from 'node_modules/firebase/firestore';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'node_modules/firebase/firestore';

@Component({
  selector: 'app-pati-all',
  templateUrl: './pati-all.component.html',
  styleUrls: ['./pati-all.component.css']
})
export class PatiAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.readPatients(); 
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


  

}
