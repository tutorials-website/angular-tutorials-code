import { Component, OnInit } from '@angular/core';
import {EmpsalaryService} from '../empsalary.service';
@Component({
  selector: 'app-parent-component',
  providers:[],
  viewProviders:[EmpsalaryService],
  //templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  template:`<div class="infoBox">
  <h3>Parent Component Salary=>{{randomSalary}}</h3>
  <ng-content></ng-content>
  <h3>Child Component</h3>
  <app-child-component>
  </app-child-component>
  </div>`
})
export class ParentComponentComponent implements OnInit {

  randomSalary;
constructor(private objSalary:EmpsalaryService){
  this.randomSalary=objSalary.getEmpRandSalary();
}

  ngOnInit(): void {
  }

}
