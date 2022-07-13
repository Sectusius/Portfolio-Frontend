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

  public form: FormGroup;
  public submitted: boolean=false;

  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private router:Router) { 
    this.form=this.formBuilder.group({
      password:['',[Validators.required, 
      Validators.minLength(8)]],
      email:['',[Validators.required, 
      Validators.email]],
    })
  }

  onSend(event: Event){
    event.preventDefault;
    if(this.form.valid){
      alert("todo pillo")
    }
    else{
      this.form.markAllAsTouched;
    }
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }


  ngOnInit(){
  }

}
