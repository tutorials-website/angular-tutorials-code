import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
username="";
  name1="";
  name2="";
  userid1="";
  userid2="";
  constructor( private route: ActivatedRoute, ) {}
 

  ngOnInit(): void {

    this.route.params.subscribe(params => {
console.log(params);
      this.name1 = params['username'];
      this.userid1=params['userid'];
    });


    this.route.queryParams.subscribe(params => {
      console.log(params);
            this.name2 = params['username'];
            this.userid2=params['userid'];
          });
    
  }

}
