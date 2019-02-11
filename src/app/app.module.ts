import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
 

import { AppComponent } from './app.component';
import { registrationComponent } from './Registration/registration.component';
import { loginComponent } from './Registration/LoginPage/login.component';


@NgModule({
  declarations: [
    AppComponent,
    registrationComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
