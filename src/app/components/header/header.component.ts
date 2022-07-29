import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { AppRoutingModule } from '../../app-routing.module.ts/app-routing.module.ts.module';
import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  usuario: String=''


  private URL: string = 'https://portfolio-backend-petraccaro.herokuapp.com' + '/users'

  constructor(private router:Router, public authService:AuthService, private http: HttpClient) { 
    if (this.isLogged()) {
      this.http.get(this.URL + '/user/' + this.authService.getId()).subscribe(
        (user) => {
           this.usuario=Object.entries(user).filter((e)=>e[0]=="username")[0][1]
        },
        (err) => {}
      )
    }
  }


  isLogged(){
    return this.authService.loggedIn();
  }

  logOut() {
    this.authService.logout()
  }

  ngOnInit(): void {
  }

}
