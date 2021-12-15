import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    const contactstr = localStorage.getItem('contacts')
    return JSON.parse (contactstr || '[]'); 
  }

  SetContacts(contacts: Contact[]){
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
