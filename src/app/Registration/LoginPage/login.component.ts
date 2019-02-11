
import { Component } from '@angular/core';
import { User } from './login';
@Component({
    selector : 'login',
    templateUrl  :'./login.component.html'
})
export class loginComponent{
    users: User = new User();

}