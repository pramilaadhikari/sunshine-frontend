import {Component} from '@angular/core'
//importing product class

//this gets imported when we implement OnInit
import { OnInit } from '@angular/core';
import { AccountStatememt } from './AccState';
import { AccountStatementService } from './AccState.service';


@Component({
    selector: 'account-statement',
    templateUrl: './AccState.component.html'
})

export class AccountStatementComponent implements OnInit{
    statement: AccountStatememt[];
    constructor(private ast: AccountStatementService){

    }
    ngOnInit(){
        this.loadStatement();

     }
    loadStatement()
    {
        // let accountNumber = sessionStorage.getItem("accountNumber");
        let url = "http://localhost:8150/transaction"
        // let url = "http:localhost:8150/transaction/{"+accountNumber+"}";
        this.ast.retrieveFromServer(url).subscribe(data=>{
            this.statement=data;
            console.log(this.statement);
        });
        
    }
  
}
