import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api='https://localhost:3000/api';
  token:any;
  constructor(private http: HttpClient, private router: Router) { }
  login(email:string, password:string){
    this.http.post(this.api + '/autenticate', {email:email, password:password}).subscribe((resp:any) => {
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    });
  }
  logout(){
    localStorage.removeItem('auth_token');
  }
  public get logIn():boolean{
    return(localStorage.getItem('auth_token')!==null);
  }
}
