import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../Models/user.model';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  redirectUrl: string;

  constructor(private http: ServerService, private router: Router) 
  {
    this.isLoggedIn = sessionStorage.getItem('id_token') != null;
    this.redirectUrl = '/';
  }

  public login(user: User): Observable<boolean>
  {
    return this.http.login(user).pipe(
      map(res => 
        {
          this.isLoggedIn = res;
          return res;
        })
    );
  }

  public logout(): void 
  {
    this.isLoggedIn = false;
    this.http.logout();
    this.redirectUrl = '/';
    this.router.navigate(['/']);
  }


}
