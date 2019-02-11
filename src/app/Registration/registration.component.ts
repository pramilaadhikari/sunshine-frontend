import { Component } from '@angular/core';
import { registration } from './registration';


@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})

export class registrationComponent {

    cust: registration = new registration();
}
   