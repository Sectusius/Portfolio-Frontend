import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  public email:string ='';
  public password:string='';

  constructor(private dialog: MatDialog, private router:Router) { }

  login(){
    if(this.email === "email@email.com" && this.password === "P@assw0rd"){
      this.router.navigate(['succes']);
    }
    else{
      this.dialog.open(MessageComponent,{data:{message:"Error!"}})
    }
  }
  ngOnInit(): void {
  }

}
