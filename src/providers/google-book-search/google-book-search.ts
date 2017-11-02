import {  BookSearchResult } from './../../models/book-search-result';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoogleBookSearchProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GoogleBookSearchProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleBookSearchProvider Provider');
  }

  getResults(keyword:string): Observable<BookSearchResult[]> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`).map(
      res => {
        let resultItems = res.json().items;
        let bookSearchResults = resultItems.map(item => {
          let bookSearchResult: BookSearchResult = new BookSearchResult();
          console.log(item);
          bookSearchResult.authors = item.volumeInfo.authors;
          bookSearchResult.title = item.volumeInfo.title;
          return bookSearchResult;
        })
        return bookSearchResults;
      }
    );
  }

}
