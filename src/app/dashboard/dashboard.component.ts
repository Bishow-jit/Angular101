import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public employees:any [] = [];

  public page = 1;

  public pageSize =10;

constructor(private route:Router,private employeeService : EmployeeService){

}

ngOnInit(): void {
  this.employees=this.employeeService.generateRandomData();
}
  logout(){
   this.route.navigate(['/']);
  }
}
