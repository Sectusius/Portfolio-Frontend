import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {


  role:number;

  constructor(private authService: AuthService) {
    this.role=0;
    if(this.authService.loggedIn()){
      this.authService.getUser().subscribe((user)=>{
        this.role=user.role;
      })
    }
  }

  isLogged(){
    return this.authService.loggedIn();
  }

  isAdmin () : boolean {
    return this.role==1;
  }
  ngOnInit(): void {
  }

}
