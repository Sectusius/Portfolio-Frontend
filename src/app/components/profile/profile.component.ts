import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { BackgroundEditComponent } from '../background-edit/background-edit.component';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

interface image{
  url:String
  des:String
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private URL = 'https://portfolio-backend-petraccaro.herokuapp.com'+'/images'
  profileImg: image={url:"", des:"profile"}
  backgroundImg: image={url:"", des:"background"}

  role:number

  constructor(public popup: MatDialog,private http: HttpClient, private authService: AuthService,private router: Router) {
    this.fetchData();
    this.role=0;
    if(this.authService.loggedIn()){
      this.authService.getUser().subscribe((user)=>{
        this.role=user.role;
      })
    }
  }

  private fetchData(){
    this.http.get<any>(this.URL+'/getImages'+"/background").subscribe(
      (res)=>{
        this.backgroundImg.url=res.imageUrl;
        this.backgroundImg.des=res.imageDesc;
        console.log(this.backgroundImg)
      }
    )
    this.http.get<any>(this.URL+'/getImages'+"/profile").subscribe(
      (res)=>{
        this.profileImg.url=res.imageUrl;
        this.profileImg.des=res.imageDesc;
      }
    )
  }

  updateProfileAttempt(): void {
    const dialogConfig = new MatDialogConfig()
    
      dialogConfig.disableClose = true
      dialogConfig.autoFocus = false
      dialogConfig.width = '500px'
      const referencia = this.popup.open(
        ProfileEditComponent,
        dialogConfig,
      )
      referencia.afterClosed().subscribe((result) => {
        if (result) {
          this.profileImg.url=result
        }
      })
   }

   updateBackgroundAttempt(): void {
    const dialogConfig = new MatDialogConfig()
    
      dialogConfig.disableClose = true
      dialogConfig.autoFocus = false
      dialogConfig.width = '500px'
      const referencia = this.popup.open(
        BackgroundEditComponent,
        dialogConfig,
      )
      referencia.afterClosed().subscribe((result) => {
        if (result) {
          this.backgroundImg.url=result
        }
      })
   }

  isAdmin () : boolean {
    return this.role==1;
  }

  ngOnInit(): void {
  }

}
