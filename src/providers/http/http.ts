import { Injectable, Inject } from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider extends Http {

  constructor (backend: XHRBackend, options: RequestOptions, @Inject(EnvVariables) public envVariables) {
    super(backend, options);
    // let token = localStorage.getItem('auth_token'); // your custom token getter function here
    // options.headers.set('Authorization', `Bearer ${token}`);
  }

  request(request: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log(request);
    console.log(this.envVariables);
    
    if (typeof request === 'string') { // meaning we have to add the token to the options, not in url
      // options.headers.set('Authorization', `Bearer ${token}`);
      if (!options) {
        // let's make option object
        let headers = new Headers();
        headers.set('Content-Type', 'application/json');
        options = {headers: headers};
      } 
      request = this.envVariables.apiEndpoint + '/' + request;
    } else {
      request.url = this.envVariables.apiEndpoint + '/' + request.url;
      // we have to add the token to the url object
      // url.headers.set('Authorization', `Bearer ${token}`);
      request.headers.set('Content-Type', 'application/json');
    }    
    
    console.log("Request");       
    console.log(request);
    return super.request(request, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpProvider) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        console.log(res);
      }
      return Observable.throw(res);
    };
  }
}
