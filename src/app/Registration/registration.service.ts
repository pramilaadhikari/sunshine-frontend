
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registration } from './registration';
import { Observable } from 'rxjs';

@Injectable()   

export class registrationServices {

    cust : registration[];
    constructor(private http:HttpClient){

    }
    sendToServer(url : string):Observable<registration[]> {
        
        return this.http.get<registration[]>(url)
        } 
             
        }
    
