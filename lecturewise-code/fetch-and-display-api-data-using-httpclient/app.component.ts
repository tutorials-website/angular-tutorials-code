import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {UserdataService} from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {

userData:any=[]; 
constructor(private userdataService:UserdataService){

 this.userdataService.getUserData().subscribe(data=>{
   console.log(data);
  this.userData=data;

 })

}

}
