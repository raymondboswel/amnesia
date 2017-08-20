import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;

  constructor(private http: Http) {

  }
 
  public login(credentials): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');        
      let options = new RequestOptions({ headers: headers });
      return this.http.post("http://localhost:4000/api/users/login", JSON.stringify({user: credentials}), options)
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
      return this.http.post("http://localhost:4000/api/users", JSON.stringify({user: credentials}), options)
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    this.currentUser = null;
  }

}
