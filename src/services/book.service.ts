import {Http, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { User } from '../models/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../providers/auth-service/auth-service';
  
@Injectable()
export class BookService {  
    static get parameters() {
        return [[Http]];
    }
    selectedBook: Book;
  
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
        let response = this.http.get("http://localhost:4000/api/books?count=10", this.requestOptions());
        return response.map(res => res.json().data);        
    }

    addToMyBooks(book: Book, user: User) {
        let json = {user_book: {book_id: book.id, user_id: user.id}};
        let response = this.http.post("http://localhost:4000/api/user_books", json, this.requestOptions());
        return response.map(res => {
            return res.json();
        });
    }

    updateBook(book: Book) {
        let response  = this.http.put(`http://localhost:4000/api/books/${book.id}`, JSON.stringify({book: book}), this.requestOptions());
        return response.map(res => {
            return res.json();
        });
    }

    removeFromMyBooks(book: Book, user: User) {
        let user_id = user.id
        let book_id = book.id;
        let response = this.http.delete(`http://localhost:4000/api/user_books?user_id=${user_id}&book_id=${book_id}`, this.requestOptions());
        return response.map(res => {
            return res.json();
        });
    }

    getMyBooks(user: User): Observable<Array<Book>> {
        let user_id = user.id;
        let response = this.http.get(`http://localhost:4000/api/user_books?user_id=${user_id}`, this.requestOptions());
        return response.map(res => {
            return res.json().data;
        });
    }

    requestOptions(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}