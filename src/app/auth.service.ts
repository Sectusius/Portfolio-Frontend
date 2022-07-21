import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';

interface User {
  username:String
  role:number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'https://portfolio-backend-petraccaro.herokuapp.com' + '/users'
  token:any;
  constructor(private http: HttpClient, private router: Router) { }

  signIn(user : any){
    return this.http.post<any>(this.URL + '/login', user);
  }

  signUp(user: any) {
    return this.http.post<any>(this.URL + '/signup', user)
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token')
  }

  loggedOut(): Boolean {
    return !this.loggedIn()
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expires')
    this.router.navigate(['/Login'])
  }

  private getPayload() {
    let x = this.getToken()?.split(' ')[1].split('.')[1]
    return x ? JSON.parse(atob(x)) : null
  }


  getId() {
    return this.getPayload() ? this.getPayload().sub : -1
  }

  getUser() {
    return this.http.get<User>(this.URL + '/user/' + this.getId());
  }

}
