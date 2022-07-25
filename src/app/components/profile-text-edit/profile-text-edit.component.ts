import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

interface Texto{
  textBody:String
  textLocation:String
}

@Component({
  selector: 'app-profile-text-edit',
  templateUrl: './profile-text-edit.component.html',
  styleUrls: ['./profile-text-edit.component.css']
})
export class ProfileTextEditComponent implements OnInit {

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

  uploadAbout(){
    console.log(this.about)
    this.http.post<any>(this.URL + '/uploadText', this.about).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  uploadExperience(){
    this.http.post<any>(this.URL + '/uploadText', this.experience).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  uploadProyects(){
    this.http.post<any>(this.URL + '/uploadText', this.proyects).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  uploadSkills(){
    this.http.post<any>(this.URL + '/uploadText', this.skills).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  uploadEducation(){
    this.http.post<any>(this.URL + '/uploadText', this.education).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

}
