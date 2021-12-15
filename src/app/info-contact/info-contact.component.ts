import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styleUrls: ['./info-contact.component.scss']
})
export class InfoContactComponent implements OnInit {
  @Input()contact: Contact = new Contact("","","");
  @Output() nameChange = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event:any){
    const name:string=event.target.value;
    if(name.length>0){
      this.nameChange.emit(name);
    }
  }
}
