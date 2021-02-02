import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {UserdataService} from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserdataService]
})
export class AppComponent {

  name: string = "";
  email: string = "";
  mobile: string = '';
  address: string = '';

/*
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      yourname: ['', [Validators.required, Validators.minLength(3)]],
      emailid: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
    });

  }

  postData() {

    // console.log(val);
    var name = this.contactForm.get('yourname').value;
    var email = this.contactForm.get('emailid').value;
    var mobile = this.contactForm.get('mobile').value;
    console.log(name + ", " + email + ", " + mobile);
  }

  setData() {
    this.contactForm.patchValue({
      "yourname": 'Pradeep',
      "emailid": 'pradeep@yahoo.com'
    })
  }

  resetData() {
    this.contactForm.reset();
  }
*/

constructor(private userdataService:UserdataService){
let userData=this.userdataService.getUserData();
console.log(userData);
this.name=userData.name;
this.address=userData.address;
}

}
