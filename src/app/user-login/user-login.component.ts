import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Logincredentials} from '../logincredentials';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  User:Logincredentials= new Logincredentials();

  constructor(private router: Router, private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  Loginsubmit(){
    //debugger;
    //console.log(this.User);
    this.registerService.UserLogin(this.User).subscribe((data)=>{ 
      if(data==1)
      {
        alert("Login successful");
        this.router.navigateByUrl('Dashboard');
      }
      else
      {
        alert("Invalid login");
       // this.router.navigateByUrl('UserLogin');
      }
     })
   
   

  
  }

}
