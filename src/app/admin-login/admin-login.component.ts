import { Component, OnInit } from '@angular/core';
import {Logincredentials} from '../logincredentials';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  User:Logincredentials=new Logincredentials();
  constructor(private registerService:RegisterService,private router: Router) { }

  ngOnInit(): void {
  }

  Loginsubmit(){
    debugger;
    console.log(this.User);
    this.registerService.AdminLogin(this.User).subscribe((data)=>{ 
      if(data==1)
      {
        alert("Login successful");
        this.router.navigateByUrl('AdminView');
      }
      else
      {
        alert("Invalid login");
       // this.router.navigateByUrl('UserLogin');
      }
     })
    }

}
