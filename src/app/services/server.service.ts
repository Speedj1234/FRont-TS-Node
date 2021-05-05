import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Actor } from '../Models/actor.model';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private BASE_URL='http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<any> // <T> : permet de passer un type quelconque
  {
    return this.http.get(this.BASE_URL + url);
  }


/*   public post(url:string, body:any)
  {

    return this.http.post(this.BASE_URL+url, JSON.stringify(body),{headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
    ).subscribe(data => {
      console.log(data);
    });;
  } */

  public post<T>(url:string, body:T): Observable<any>
  {

    return this.http.post(this.BASE_URL+url,(body)
    );
  }



}
