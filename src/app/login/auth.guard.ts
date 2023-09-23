import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    const isuserexist = this.loginService.getIsUserExist();
    if (isuserexist) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
