import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';


interface image{
  url:String
  des:String
}


@Component({
  selector: 'app-background-edit',
  templateUrl: './background-edit.component.html',
  styleUrls: ['./background-edit.component.css']
})
export class BackgroundEditComponent implements OnInit {

  private URL = 'https://portfolio-backend-petraccaro.herokuapp.com'+'/images'
  backgroundImg: image={url:"", des:"background"}

  constructor(private http: HttpClient, private authService: AuthService,private router: Router) {
   }

  onFileChange(event: any) {
    this.backgroundImg.url = URL.createObjectURL(event.target.files[0])
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
      this.backgroundImg.url = 'data:image/png;base64,' + base64String
    }

    reader.readAsArrayBuffer(inputNode.files[0])
  }

  uploadBackground() {
    this.http.post<any>(this.URL + '/upload', this.backgroundImg).subscribe(
      (res) => {
        return this.backgroundImg
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

}
