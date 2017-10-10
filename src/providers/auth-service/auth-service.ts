import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
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
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');        
      let options = new RequestOptions({ headers: headers });
      return this.http.post("api/users/login", JSON.stringify({user: credentials}), options).map(res => {
        return res.json();
      });
    }
  }
 
  public register(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');        
      let options = new RequestOptions({ headers: headers });
      return this.http.post("api/users", JSON.stringify({user: credentials}), options)
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    this.currentUser = null;
  }

}
