// import { AccountStatement } from './Acc-Statement';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AccountStatementComponent } from './AccState.component';
import { AccountStatememt } from './AccState';

@Injectable() //Dependency Injection
export class AccountStatementService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
    retrieveFromServer(url:string): Observable<AccountStatememt[]>
    {
       return this.http.get<AccountStatememt[]>(url)
    } 
    

}