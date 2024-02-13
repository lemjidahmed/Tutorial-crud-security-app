import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {httpInterceptorProviders} from "./_helpers/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    NavbarComponent,
    TutorialDetailsComponent,
    AddTutorialComponent,
    FilterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
