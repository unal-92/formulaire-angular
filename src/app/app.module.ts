import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { InfoContactComponent } from './info-contact/info-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    InfoContactComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
