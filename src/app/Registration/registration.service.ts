
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Registration } from './registration';

@Injectable()   

export class RegistrationServices {

    
    constructor(private http:HttpClient){

    }
    sendToServer(url,user:Registration) {
        
        return this.http.post(url,user)
        } 
             
        }
    
