import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }

  private isUserExist : boolean = false;

  setIsUserExist(value: boolean){
    this.isUserExist=value;
  }

  getIsUserExist(){
    return this.isUserExist;
  }
}
