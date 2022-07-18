import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})

export class LoginWindowComponent implements OnInit{

  user={
    username: '',
    password:'',
    role:1,
  }

  public submitted: boolean=false;
  errorMsg="";

  constructor(private authservice: AuthService, private router:Router) { 
  }

  logIn(){
    this.authservice.signIn(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(["/Home"]);
      },
      (err) => {
        this.errorMsg="El Nombre de usuario o la contraseña es invalido";
      }
    )
  }

  ngOnInit(){
  }

}
