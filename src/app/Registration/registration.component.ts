import { Component } from '@angular/core';
import { Registration } from './registration';
import { RegistrationServices } from './registration.service';



@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})

export class UserComponent {
    user: Registration=new Registration();
    response: string;

    constructor(private ms: RegistrationServices){

    }

    store(){
        let url = "http://localhost:8181/customer/add"
        this.ms.sendToServer(url,this.user).subscribe(data => {
         
    });
}
}
   