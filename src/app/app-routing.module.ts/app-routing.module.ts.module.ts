import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginWindowComponent } from '../login-window/login-window.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes=[
  {path: 'Home', component:AppComponent},
  {path: 'Login', component:LoginWindowComponent},
  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path: '**',component:ErrorPageComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{}
