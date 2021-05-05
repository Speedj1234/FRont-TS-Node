import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditActorsComponent } from './components/edit-actors/edit-actors.component';
import{ActorsComponent} from './components/actors/actors.component'



const routes: Routes = [
   {path: 'edit-actors',  component: EditActorsComponent},
   {path: 'actors',  component: ActorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
