import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulaire';
  contacts:Contact[] = [];
  selectedContact:Contact = new Contact("","","")

  constructor(private contactServices : ContactService) {
  }

  ngOnInit() {
this.contacts = this.contactServices.getContacts();
  }
  addPeople(contact:Contact){
this.contacts.push(contact)
    this.contactServices.SetContacts(this.contacts)
    

  }

  onContactSelected(contact:Contact){
    this.selectedContact=contact
  }
  onNameChange(name:string){
    this.selectedContact.name=name;
    this.contactServices.SetContacts(this.contacts);
  }
}
