import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
 

import { AppComponent } from './app.component';

import { loginComponent } from './Registration/LoginPage/login.component';
import { RegistrationServices } from './Registration/registration.service';
import { UserComponent } from './Registration/registration.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [RegistrationServices, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
