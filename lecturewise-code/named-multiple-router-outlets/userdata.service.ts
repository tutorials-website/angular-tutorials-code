import { Injectable } from '@angular/core';
import {Customers} from './customers';

const customerData:Customers[]=[
  {"id":1,"name":"Mohan","email":"mohan@gmail.com","phone":9999999999},
  {"id":2,"name":"Sohan","email":"sohan@gmail.com","phone":999923456799},
  {"id":3,"name":"Ramesh","email":"ramesh@gmail.com","phone":9999986599},
  {"id":4,"name":"Suresh","email":"suresh@gmail.com","phone":9987649999},
  {"id":5,"name":"Rajesh","email":"rajesh@gmail.com","phone":9999875999},
];


@Injectable({
  providedIn: 'root'
})

export class UserdataService {


  constructor( ) { 
    
  }

  getCustomerData(){
    return customerData;
  }

}
