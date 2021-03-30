import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import {PreloadingStrategy} from '@angular/router'
import {CustomerComponent} from './customer/customer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {
    path:"customer",loadChildren:()=>import("./customer/customer.module")
    .then(mod=>mod.CustomerModule),
    component:CustomerComponent
  },
  {
    path:"customerdetails",
    component:CustomerdetailsComponent,
    outlet:"customerList"
  },
 
  {
    path:"order",component:CustomerdetailsComponent,
    outlet:"customerOrderList"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
