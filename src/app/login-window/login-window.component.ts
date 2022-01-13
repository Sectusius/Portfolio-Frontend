import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})

export class LoginWindowComponent{

  public email:string ='';
  public password:string='';

  constructor(private authservice:AuthService, private router:Router) { 
    if(this.authservice.logIn){
       this.router.navigate(['/']);
    }
  }

  login(){
    this.authservice.login(this.email, this.password);
  }

  ngOnInit(): void {
  }

}
