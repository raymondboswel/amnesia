import { HttpProvider } from './../../providers/http/http';
import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthorAutocompleteService implements AutoCompleteService {
  labelAttribute = "name";

  constructor(private http: HttpProvider) {

  }
  getResults(keyword:string) {
    return this.http.get("api/authors?search="+keyword)
      .map(result =>  {
          return result.json().data
            .filter(item => item.name.toLowerCase().startsWith(keyword.toLowerCase()) )
        });
  }
}