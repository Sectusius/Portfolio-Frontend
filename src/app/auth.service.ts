import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.baseApiUrl + '/users'
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

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expires')
    this.router.navigate(['/Login'])
  }

}
