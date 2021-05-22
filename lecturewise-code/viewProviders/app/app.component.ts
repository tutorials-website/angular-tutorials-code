import { Component} from '@angular/core';
import {EmpsalaryService} from './empsalary.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent {
randomSalary;
constructor(private objSalary:EmpsalaryService){
  this.randomSalary=objSalary.getEmpRandSalary();
}

ngOnInit(): void {
    }


}
