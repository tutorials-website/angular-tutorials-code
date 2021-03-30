import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  customerarray:any;
  constructor(private customerDetails:UserdataService, private router:Router) { }

  ngOnInit(): void {
this.customerarray=this.customerDetails.getCustomerData();
  }
  close(){
    this.router.navigate([{outlets:{'customerList':null,'customerOrderList':null}}]);
  }
}
