import { Component } from '@angular/core';
import {Router} from '@angular/router';

     
@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  //template:"<h1 style='text-align:center'>Tutorialswebsite.com</h1>",
  styleUrls: ['./app.component.css']
//styles:['h1{color:blue}']
})
export class AppComponent {
  
 users={
    name:"Tutorialsweb",
    email:"test@gmail.com",
    mobile:9999993456
}

  formSubmit(val){

   // console.log(val);
   var name= val.yourname;
   var email=val.email;
    var mobile=val.mobile;
console.log(name+", "+email+", "+mobile);
  }

}
