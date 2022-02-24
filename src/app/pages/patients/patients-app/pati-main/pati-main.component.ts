import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pati-main',
  templateUrl: './pati-main.component.html',
  styleUrls: ['./pati-main.component.css']
})

export class PatiMainComponent implements OnInit {

  public workStatuses = [
    { id: 0, description: 'opcion 00' },
    { id: 1, description: 'opcion 01' },
    { id: 2, description: 'opcion 02' },
    { id: 3, description: 'opcion 03' }
  ];

  public contact = { name: '',
  isVIP: false,
  gender: '',
  workStatus: '0',
  company: '',
  education: ''};


  header = 'Contacts';
  description = 'Manage your contact list';
  numberOfContacts = 0;
  counterStyleColor = 'green';
  counterClass = 'warning';
  formHidden = false;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}

