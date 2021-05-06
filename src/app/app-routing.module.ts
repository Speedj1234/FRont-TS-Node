import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditActorsComponent } from './components/edit-actors/edit-actors.component';
import{ActorsComponent} from './components/actors/actors.component';
import{UsersComponent} from './components/users/users.component';
import{EditUsersComponent} from './components/edit-users/edit-users.component';
import{FourhofourComponent} from './components/fourhofour/fourhofour.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MainComponent } from './components/main/main.component';





const routes: Routes = [
  {path : 'auth', component: AuthComponent},

  {path: 'actors', canActivate:[AuthGuardService], component: ActorsComponent},
   {path: 'edit-actors',canActivate:[AuthGuardService], component: EditActorsComponent},
   {path: 'edit-actors/:id', canActivate:[AuthGuardService], component: EditActorsComponent},

   {path: 'users', canActivate:[AuthGuardService], component: UsersComponent},
   {path: 'edit-users', component: EditUsersComponent},
   {path: 'edit-users/:id', canActivate:[AuthGuardService], component: EditUsersComponent},


   {path: '', component: MainComponent},
   {path: 'not-found', component: FourhofourComponent},
   {path: '**',  redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
