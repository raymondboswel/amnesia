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

  getResults(keyword:string): Observable<string[]> {
    return this.http.get(`https://suggestqueries.google.com/complete/search?client=books&q=${keyword}&ds=bo`).map(
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
        let resultItems = res.json();
        let bookSearchResults: BookSearchResult[] = resultItems.map(item => {
          let bookSearchResult: BookSearchResult = new BookSearchResult();
          bookSearchResult.authors = item.volumeInfo.authors;
          bookSearchResult.title = item.volumeInfo.title;
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
