import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLogged(){
    return this.authService.loggedIn();
  }


  ngOnInit(): void {
  }

}
