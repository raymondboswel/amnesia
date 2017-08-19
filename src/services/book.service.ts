import {Http, RequestOptions, Headers} from '@angular/http';
import { Book } from '../models/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
  
export class BookService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    searchBooks(bookTitle) {
        var url = 'http://localhost:4000/api/books?search=' + encodeURI(bookTitle) ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        

        let options = new RequestOptions({ headers: headers });
        let response = this.http.get(url, options);
        return response.map(res => res.json().data);        
        
    }

    createBook(title: string, subtitle: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        

        let options = new RequestOptions({ headers: headers });
        let response = this.http.post("http://localhost:4000/api/books", JSON.stringify({"book": {"title": title, "subtitle": subtitle}}), options);
        return response.map(res => res.json());
    }

    getTop10Books(): Observable<Array<Book>>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        

        let options = new RequestOptions({ headers: headers });
        let response = this.http.get("http://localhost:4000/api/books?count=10", options);
        return response.map(res => res.json().data);        
    }
}