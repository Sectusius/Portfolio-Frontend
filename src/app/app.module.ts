import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule} from "@angular/material/input";
import {  MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './components/message/message.component';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "../environments/environment";
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PictureEditComponent } from './components/picture-edit/picture-edit.component';
import { BackgroundEditComponent } from './components/background-edit/background-edit.component';
import { ProfileTextEditComponent } from './components/profile-text-edit/profile-text-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    NavigationHeaderComponent,
    LoginWindowComponent,
    MessageComponent,
    ErrorPageComponent,
    ScrollToTopComponent,
    ProfileEditComponent,
    HomeComponent,
    RegisterPageComponent,
    PictureEditComponent,
    BackgroundEditComponent,
    ProfileTextEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
