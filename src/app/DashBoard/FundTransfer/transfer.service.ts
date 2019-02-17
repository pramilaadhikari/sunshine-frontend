
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';
import { Observable } from 'rxjs';


@Injectable()   

export class TransferServices {
users : Transfer[];
    
    constructor(private http:HttpClient){

    }
    sendToServer(url,users) : Observable<Transfer> {
        
        return this.http.post(url,users)
        } 
             
        }
    
