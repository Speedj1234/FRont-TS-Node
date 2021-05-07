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
import { UsersCommonService } from './services/users-common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
// import {  MatNativeDateModule} from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
// import {  MatRippleModule} from "@angular/material/r";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";


import { MatActorsComponent } from './components/mat/actors/actors.component';
import { ActorsContainerComponent } from './components/actors-container/actors-container.component';
import{MatEditActorsComponent} from './components/mat/edit-actors/edit-actors.component'

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
    MainComponent,
    MatActorsComponent,
    ActorsContainerComponent,
    MatEditActorsComponent
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // material
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule,
    MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatRadioModule,
    MatTabsModule,
    //
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8000"]
      }
    }),
    BrowserAnimationsModule, 
  ],
  providers: [
    ActorsService,
    ServerService,
    UsersService,
    AuthService,
    AuthGuardService,
    UsersCommonService
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
