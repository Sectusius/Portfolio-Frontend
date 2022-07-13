import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module.ts/app-routing.module.ts.module';
import { AuthGuard } from '../../auth.guard';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  header = {
    name: 'Ian Petraccaro Cantero',
    twitter_icon:'https://twitter.com/Sectusius/',
    github_icon:'https://github.com/Sectusius/',
    instagram_icon:'https://www.instagram.com/maquineman/',
    login_button:'LOGIN',
  }


  constructor(private router:Router, public auth:AuthService) { }

  login(){
    this.router.navigateByUrl('/Login');
  }


  
  ngOnInit(): void {
  }

}
