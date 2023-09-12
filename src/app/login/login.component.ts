import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clippingParents } from '@popperjs/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:ActivatedRoute){

  }

  ngOnInit(): void {
    console.log('login');
  }

}
