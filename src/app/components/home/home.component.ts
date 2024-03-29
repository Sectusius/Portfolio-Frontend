import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

interface Texto{
  textBody:String
  textLocation:String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  private URL = 'https://portfolio-backend-petraccaro.herokuapp.com'+'/text'

  about:Texto={textBody:'', textLocation: "about"}
  experience:Texto={textBody:'', textLocation:'experience'}
  education:Texto={textBody:'', textLocation:'education'}
  skills:Texto={textBody:'', textLocation:'skills'}
  proyects:Texto={textBody:'', textLocation:'proyects'}

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) {
    this.fetchData()
   }

  private fetchData(){
    this.http.get<any>(this.URL+'/getText'+"/about").subscribe(
      (res)=>{
        this.about=res
        console.log(this.about)
      }
    )
    this.http.get<any>(this.URL+'/getText'+"/experience").subscribe(
      (res)=>{
        this.experience=res
        console.log(this.about)
      }
    )
    this.http.get<any>(this.URL+'/getText'+"/education").subscribe(
      (res)=>{
        this.education=res
        console.log(this.about)
      }
    )
    this.http.get<any>(this.URL+'/getText'+"/skills").subscribe(
      (res)=>{
        this.skills=res
        console.log(this.about)
      }
    )
    this.http.get<any>(this.URL+'/getText'+"/proyects").subscribe(
      (res)=>{
        this.proyects=res
        console.log(this.about)
      }
    )
  }



  ngOnInit(): void {
  }

}
