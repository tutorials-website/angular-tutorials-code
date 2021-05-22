import { Component, OnInit } from '@angular/core';
import {EmpsalaryService} from '../empsalary.service';

@Component({
  selector: 'app-child-component',
  providers:[],
  viewProviders:[],
  //templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  template:`<div class="infoBox">
  <h3>Child Component Salary: =>{{randomSalary}}</h3>

  </div>`
})
export class ChildComponentComponent implements OnInit {

  randomSalary;
  constructor(private objSalary:EmpsalaryService){
    this.randomSalary=objSalary.getEmpRandSalary();
  }

  ngOnInit(): void {
  }

}
