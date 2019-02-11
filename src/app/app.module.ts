import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
 

import { AppComponent } from './app.component';

import { loginComponent } from './Registration/LoginPage/login.component';
import { RegistrationServices } from './Registration/registration.service';
import { RegistrationComponent } from './Registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { Registration } from './Registration/registration';
import { HomePageComponent } from './HomePage/homePage.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegistrationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component:loginComponent}
      ,{path: 'registration', component:RegistrationComponent}
    ])
  ],
  providers: [RegistrationServices, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
