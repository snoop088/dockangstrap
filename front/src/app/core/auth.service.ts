import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginApi = 'http://localhost:1337/auth/local';
  private registerApi = 'http://localhost:1337/auth/local/register';
  constructor(
    private auth: HttpClient
  ) { }
  public login(user: { username: string, password: string }): Observable<any> {
    return this.auth.post(this.loginApi, {
      identifier: user.username,
      password: user.password
    }).pipe(
      tap(res => this.setSession),
      shareReplay()
    );
  }
  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  // public isLoggedIn() {
  //   return moment().isBefore(this.getExpiration());
  // }

  // public isLoggedOut() {
  //   return !this.isLoggedIn();
  // }

  // public getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }
  private setSession(authResult) {
    // const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('user', authResult.user);
    localStorage.setItem('token', authResult.jwt);
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
