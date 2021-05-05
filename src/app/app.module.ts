import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ActorsService} from './services/actors.service';
import{ServerService} from './services/server.service';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { EditActorsComponent } from './components/edit-actors/edit-actors.component';

import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FourhofourComponent } from './components/fourhofour/fourhofour.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    EditActorsComponent,
    FourhofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ActorsService,
    ServerService,
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
