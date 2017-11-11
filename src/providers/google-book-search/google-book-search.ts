import {  BookSearchResult } from './../../models/book-search-result';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

/*
  Generated class for the GoogleBookSearchProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GoogleBookSearchProvider {

  constructor(public http: Http, @Inject(EnvVariables) public envVariables) {
    console.log('Hello GoogleBookSearchProvider Provider');
  }

  getResults(keyword:string): Observable<string[]> {
    return this.http.get(`${this.envVariables.googleSearchEndPoint}/complete/search?client=books&q=${keyword}&ds=bo`).map(
      res => {
        let body = res.text();
        let results = this.getSuggestions(body);


        return results;
      }
    );
  }

  getBookSearchResults(query: string): Observable<BookSearchResult[]> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .map(res => {
        let resultJson = res.json();
        console.log(resultJson);
        let bookSearchResults: BookSearchResult[] = resultJson.items.map(item => {
        let bookSearchResult: BookSearchResult = new BookSearchResult(
          item.volumeInfo.title,
          item.volumeInfo.subtitle,
          item.volumeInfo.authors,
          item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "https://www.google.com/googlebooks/images/no_cover_thumb.gif",
          "",
          item.id
        );
          return bookSearchResult;
        });
        return bookSearchResults;
      });
  }

  getSuggestions(rawResult: string): string[] {
    let arrayString =  rawResult.substring(rawResult.indexOf("(")+1, rawResult.lastIndexOf(")"));
    let array = JSON.parse(arrayString);
    return array[1].map(arr => arr[0]);
  }


}
