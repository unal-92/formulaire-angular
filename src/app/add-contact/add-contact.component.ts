import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  @Output () addContact =new EventEmitter<Contact>();



  form = new FormGroup ({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]),
    username : new FormControl('',[Validators.required])

  })

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.form)
  const { name, email, username } = this.form.value;
  const contact = new Contact(name,email,username);
  this.addContact.emit(contact);
  this.form.reset();
}
}
