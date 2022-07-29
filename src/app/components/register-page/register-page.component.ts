import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user={
    username:'',
    email:'',
    password:'',
    role:'1',
  }

  errorMsg='';

  constructor(private authService: AuthService, private router: Router, private http:HttpClient) { }

  signUp(){
    if(this.isValidPassword()){
      this.authService.signUp(this.user).subscribe(
        (res)=>{
          const expires = moment().add(res.expiresIn);
          localStorage.setItem('token', res.token);
          localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
          this.router.navigate(['/Home']);
          console.log(res);
        },
        (err)=>{
          this.errorMsg="El nombre de usuario ya se encuentra registrado";
          console.log(err);
        }
      )
    }
    else{
      this.errorMsg = 'La contraseña debe tener entre 6-20 caracteres, una mayúscula, una minúscula, y un caracter especial'
    }
  }


  private isValidPassword(): Boolean{
    const regex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/
    return regex.test(this.user.password)
  }

  ngOnInit(): void {
  }

}
