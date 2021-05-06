import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ActorsService} from './services/actors.service';
import{ServerService} from './services/server.service';
import{HttpClientModule} from '@angular/common/http'
import{UsersService} from './services/users.service'
import {AuthService} from './services/auth.service'
import { AuthGuardService } from './services/auth-guard.service';
import{JwtModule} from '@auth0/angular-jwt'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { EditActorsComponent } from './components/edit-actors/edit-actors.component';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FourhofourComponent } from './components/fourhofour/fourhofour.component';
import { UsersComponent } from './components/users/users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';

export function tokenGetter() {
  return sessionStorage.getItem('id_token');
}


@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    EditActorsComponent,
    FourhofourComponent,
    UsersComponent,
    EditUsersComponent,
    AuthComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8000"]
      }
    })
  ],
  providers: [
    ActorsService,
    ServerService,
    UsersService,
    AuthService,
    AuthGuardService
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
