import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../userdata.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 customerarray:any;
  constructor(private customerDetails:UserdataService) { }

  ngOnInit(): void {
this.customerarray=this.customerDetails.getCustomerData();
  }

}
