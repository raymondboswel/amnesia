import { HttpProvider } from './../providers/http/http';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { User } from '../models/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../providers/auth-service/auth-service';
  
@Injectable()
export class BookService {     
    selectedBook: Book;
  
    constructor(private http: HttpProvider) {
         
    }
  
    searchBooks(bookTitle) {
        let response = this.http.get('api/books?search=' + encodeURI(bookTitle));
        return response.map(res => res.json().data);                
    }

    createBook(title: string, subtitle: string) {        
        let response = this.http.post("api/books", JSON.stringify({"book": {"title": title, "subtitle": subtitle}}));
        return response.map(res => res.json());
    }

    getTop10Books(): Observable<Array<Book>>{        
        let response = this.http.get("api/books?count=10");
        return response.map(res => res.json().data);        
    }

    addToMyBooks(book: Book, user: User) {
        let json = {user_book: {book_id: book.id, user_id: user.id}};
        let response = this.http.post("api/user_books", json);
        return response.map(res => {
            return res.json();
        });
    }

    updateBook(book: Book) {
        let response  = this.http.put(`api/books/${book.id}`, JSON.stringify({book: book}));
        return response.map(res => {
            return res.json();
        });
    }

    removeFromMyBooks(book: Book, user: User) {
        let user_id = user.id
        let book_id = book.id;
        let response = this.http.delete(`api/user_books?user_id=${user_id}&book_id=${book_id}`);
        return response.map(res => {
            return res.json();
        });
    }

    getMyBooks(user: User): Observable<Array<Book>> {
        let user_id = user.id;
        let response = this.http.get(`api/user_books?user_id=${user_id}`);
        return response.map(res => {
            return res.json().data;
        });
    }
}