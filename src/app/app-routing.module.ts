import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditActorsComponent } from './components/edit-actors/edit-actors.component';
import{ActorsComponent} from './components/actors/actors.component';
import{UsersComponent} from './components/users/users.component';
import{EditUsersComponent} from './components/edit-users/edit-users.component';
import{FourhofourComponent} from './components/fourhofour/fourhofour.component';



const routes: Routes = [
  {path: 'actors',  component: ActorsComponent},
   {path: 'edit-actors',  component: EditActorsComponent},
   {path: 'edit-actors/:id',  component: EditActorsComponent},

   {path: 'users',  component: UsersComponent},
   {path: 'edit-users',  component: EditUsersComponent},
   {path: 'edit-users/:id',  component: EditUsersComponent},


   {path: '',  component: ActorsComponent},
   {path: 'not-found',  component: FourhofourComponent},
   {path: '**',  redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
