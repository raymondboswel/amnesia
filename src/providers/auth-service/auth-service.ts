import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';

 
@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: HttpProvider) {

  }
 
  public login(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post("api/users/login", JSON.stringify({user: credentials})).map(res => {
        return res.json();
      });
    }
  }
 
  public register(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return this.http.post("api/users", JSON.stringify({user: credentials}))
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
    this.currentUser = null;
  }

}
