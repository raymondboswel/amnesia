import { BookSearchResult } from './../models/book-search-result';
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

    constructor(public http: HttpProvider, public authService: AuthService) {

    }

    searchBooks(bookTitle) {
        let response = this.http.get('api/books?search=' + encodeURI(bookTitle));
        return response.map(res => res.json().data);
    }

    createBook(book: Book) {
        let response = this.http.post("api/books", JSON.stringify({"book": book}));
        return response.map(res => res.json());
    }

    getTop10Books(): Observable<Array<Book>>{
        let response = this.http.get("api/books?count=10");
        return response.map(res => res.json().data);
    }

    addGBookToMyBooks(bookSearchResult: BookSearchResult): Observable<BookSearchResult> {
      let user_id = this.authService.currentUser.id;
      let book: any = bookSearchResult;
      book.user_id = user_id;
      let body = {book: book};
      return this.http.post("api/books", body).map(res => {
        let result = res.json().data;
        return new BookSearchResult(result.title,
                                    result.subtitle,
                                    [],
                                    result.cover_url,
                                    result.id,
                                    result.google_id);
      });
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

    removeFromMyBooks(book: BookSearchResult) {
      let book_id = book.id;
      let response = this.http.delete(`api/books/${book_id}`);
      return response.map(res => {
          return res.json();
      });
    }

    getMyBooks(): Observable<BookSearchResult[]> {
      let user_id = this.authService.currentUser.id;
      let response = this.http.get(`api/books?user_id=${user_id}`);
      return response.map(res => {
          let result = res.json().data;
          return result.map(bsr => {
            return new BookSearchResult(
              bsr.title,
              bsr.subtitle,
              [],
              bsr.cover_url,
              bsr.id,
              bsr.google_id
            );
          }
      );
    });
  };
}
