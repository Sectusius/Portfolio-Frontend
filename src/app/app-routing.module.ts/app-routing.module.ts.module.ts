import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginWindowComponent } from '../login-window/login-window.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';

const routes: Routes=[
  {path: 'Home', component:HomeComponent},
  {path: 'Login', component: LoginWindowComponent},
  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path: 'profile', component:ProfileEditComponent, canActivate:[AuthGuard]},
  {path: '**', component: ErrorPageComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
