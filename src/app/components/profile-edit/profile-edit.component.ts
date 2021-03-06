import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';

interface image{
  url:String
  des:String
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {

  private URL = 'https://portfolio-backend-petraccaro.herokuapp.com'+'/images'
  profileImg: image={url:"", des:"profile"}

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) {
   }

  onFileChange(event: any) {
    this.profileImg.url = URL.createObjectURL(event.target.files[0])
    const inputNode: any = document.querySelector('#file')
    const reader = new FileReader()

    reader.onload = (e: any) => {
      let binary = ''
      let bytes = new Uint8Array(e.target.result)
      let len = bytes.byteLength
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
      }
      const base64String = btoa(binary)
      this.profileImg.url = 'data:image/png;base64,' + base64String
    }

    reader.readAsArrayBuffer(inputNode.files[0])
  }

  uploadProfile() {
    this.http.post<any>(this.URL + '/upload', this.profileImg).subscribe(
      (res) => {
        return this.profileImg
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

}
