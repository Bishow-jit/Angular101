import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  users: any [] = [];

  alert : boolean = false;

  usersObj:any={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:''
  }

  onRegister(){
    this.users.push(this.usersObj);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.alert=true;
    this.usersObj = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phone:''
    };
   
}

closeAlert(){
  this.alert=false;
}

}
