import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpsalaryService {
private randomSlary;
  constructor() { 
    this.randomSlary=Math.floor(Math.random()*500);
  }

  getEmpRandSalary(){
    return this.randomSlary;
  }
}
