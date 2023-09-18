import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class EmployeeService {

  constructor() { }

getRandomInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 generateRandomData(){
  const names = ["John", "Alice", "Bob", "Eve", "Charlie", "Emma", "David","Jon","Jack","Bishow","Saha","Rubi"];
  const country = ["England","USA","Germany","Finland","Iceland","Bangladesh","India","Nepal","Sri Lanka","Pakistan","Bhutan"];
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const randomName = names[this.getRandomInt(0, names.length - 1)];
    const randomCountry = country[this.getRandomInt(0,country.length -1)];
    const randomAge = this.getRandomInt(18, 60);
    
    data.push({ id: i, name: randomName, age: randomAge , country:randomCountry});
  }
  return data;
}



}
