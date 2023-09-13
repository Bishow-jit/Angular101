import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj:any={
    email:'',
    password:''
  }
  registerUser:any [] = [];

  alert:boolean = false; 

  constructor(private router1:ActivatedRoute,private router2:Router){

  }



  ngOnInit(): void {
   const localData = localStorage.getItem('users');
   if(localData != null){
    this.registerUser = JSON.parse(localData);
   }

  }

  onLogin(){
    console.log(this.registerUser);
   const isUserExist = this.registerUser.find(u => u.email == this.loginObj.email && u.password == this.loginObj.password);
   if(isUserExist){
    this.router2.navigate(['/dashboard']);
   }
   else{
    this.alert=true;
   }
  }

  closeAlert(){
    this.alert=false;
  }

}
