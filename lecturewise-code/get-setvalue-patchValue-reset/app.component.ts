import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';

     
@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  //template:"<h1 style='text-align:center'>Tutorialswebsite.com</h1>",
  styleUrls: ['./app.component.css']
//styles:['h1{color:blue}']
})
export class AppComponent {
  
name:string="";
    email:string="";
mobile:string='';


contactForm:FormGroup;

constructor(private fb: FormBuilder) {

this.contactForm = fb.group({
  yourname: ['',[Validators.required,Validators.minLength(3)]],
  emailid: ['',[Validators.required,Validators.email]],
  mobile: ['',Validators.required],
});  

}

postData(){

   // console.log(val);
   var name= this.contactForm.get('yourname').value;
   var email=this.contactForm.get('emailid').value;
    var mobile=this.contactForm.get('mobile').value;
console.log(name+", "+email+", "+mobile);
  }

setData(){
  this.contactForm.patchValue({
    "yourname":'Pradeep',
    "emailid":'pradeep@yahoo.com'
  })
}

resetData()
{
this.contactForm.reset();
}

}
