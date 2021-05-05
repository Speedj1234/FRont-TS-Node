import { Injectable } from '@angular/core';
import{ServerService} from './server.service'
import {Actor} from '../Models/actor.model';
import { Observable } from 'rxjs';
import{ map, catchError } from 'rxjs/operators';
import{Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  

  constructor(private server: ServerService, private router : Router) { 
    
  }

      addActors(body: any):Observable <Actor[]>
      {

          
        // this.server.post('movies/actors/create/',body);
        // this.router.navigate(['actors']).then(()=>location.reload());


        return this.server.post<Actor>('movies/actors/create/',body).pipe(
          map(res=> res.map((m: any) =>new Actor(m))),
          catchError(err=>
           {
             console.error(err);
             return[];
           } )
        );
       
    //throw new Error('Method not implemented.'); TODO : remplacer par un try catch

    
  }

   

public getAll(): Observable<Actor[]>
{
  return this.server.get<Actor[]>('movies/actors/').pipe(
    map(res => res.map((m: any) =>new Actor(m))),
    catchError(err=>
     {
       console.error(err);
       return[];
     } )
  );
}



public getOneById(id: number): Observable<Actor>
{
  return this.server.get<Actor>('movies/actors/'+id).pipe(
    map(res => res.length > 0 ? new Actor(res[0]): new Actor({})),
    catchError(err=>
     {
       console.error(err);
       return[];
     } )
  );
}



}
