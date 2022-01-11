import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {
    name: 'Ian Petraccaro Cantero',
    twitter_icon:'https://twitter.com/Sectusius/',
    github_icon:'https://github.com/Sectusius/',
    instagram_icon:'https://www.instagram.com/maquineman/',
    login_button:'LOGIN',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
