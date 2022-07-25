import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginWindowComponent } from '../components/login-window/login-window.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { ProfileEditComponent } from '../components/profile-edit/profile-edit.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { RegisterPageComponent } from 'app/components/register-page/register-page.component';
import { ProfileTextEditComponent } from 'app/components/profile-text-edit/profile-text-edit.component';

const routes: Routes=[
  {path: 'Home', component:HomeComponent},
  {path: 'Login', component: LoginWindowComponent},
  {path: 'Register', component: RegisterPageComponent},
  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path:'edit', component:ProfileTextEditComponent, canActivate:[AuthGuard]},
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
