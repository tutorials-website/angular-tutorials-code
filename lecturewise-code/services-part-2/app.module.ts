import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CustomerModule } from './customer/customer.module';
import { CustompipePipe } from './custompipe.pipe';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './userdata.service';
import {UseraddressService} from './useraddress.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustompipePipe,
    HomeComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [UseraddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
