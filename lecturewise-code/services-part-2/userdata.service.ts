import { Injectable } from '@angular/core';
import {UseraddressService} from './useraddress.service';
/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class UserdataService {
userAddress:string='';
  constructor( private useraddressService:UseraddressService) { 
    this.userAddress=this.useraddressService.getUserAddress().address;
  }
  
  getUserData(){
    return{
      name:"Pradeep",
      email:"pradeep@gmail.com",
      mobile:9999999999,
      address:this.userAddress
    }
  }
}
