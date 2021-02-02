import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './customer/login/login.component';
import {RegisterComponent} from './customer/register/register.component';
import { HomeComponent } from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
{
  path:"about", redirectTo:"signup", pathMatch:"full"
},
{
  path:"login", 
  component:LoginComponent
},
{
  path:"signup",
  component:RegisterComponent
},
{
  path:"profile",
  component:AboutComponent
},
{
  path:"profile/:username",
  component:AboutComponent
},
{
  path:"profile/:username/:userid",
  component:AboutComponent
},
{
  path:"**",
  component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
