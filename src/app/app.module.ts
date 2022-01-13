import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule} from "@angular/material/input";
import {  MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import { AppRouting } from './app-routing.module.ts/app-routing.module.ts.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { HttpClientModule } from '@angular/common/http';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
