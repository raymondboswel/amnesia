import { GoogleBookSearchProvider } from './../../providers/google-book-search/google-book-search';
import { BookSearchResult } from './../../models/book-search-result';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Book } from '../../models/book';
import { NewBookPage } from '../new-book/new-book';
import { BookService } from '../../services/book.service';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the FindBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 class BookView extends BookSearchResult {
   authorsString: string;
 }

@IonicPage()
@Component({
  selector: 'page-find-book',
  templateUrl: 'find-book.html',
})
export class FindBookPage {
  @ViewChild(Nav) nav: Nav;
  search = '';
  myBooks: Book[] = [];
  searchResults: BookSearchResult[] = [];
  books: Array<BookView> = [];
  filteredBooks: Array<BookView> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public bookService: BookService,
              public authService: AuthService,
              public googleBookSearchProvider: GoogleBookSearchProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindBookPage');
    this.bookService.getMyBooks().subscribe(res => this.myBooks = res);
  }

  performBookSearch(query: string) {
    console.log("performing book search query");
    this.googleBookSearchProvider.getBookSearchResults(query).subscribe(res => {
      console.log(res);
      this.searchResults = res;
    });
  }

  filterBooks() {
    console.log(this.search);
    this.bookService.searchBooks(this.search).subscribe(res => {
      this.books = res;
    });
  }

  addNewBook() {
    this.navCtrl.push(NewBookPage);
  }

  addToMyBooks(book: Book) {
    console.log("Adding book");
    console.log(book);
    this.bookService.addGBookToMyBooks(book.bookSearchResult).subscribe((res: Book) => {
      this.myBooks = this.myBooks.concat(res);
      console.log("Added result to my books: ");
      console.log(this.myBooks);
    });
  }

  removeFromMyBooks(book: Book) {
    console.log("Removing book:")
    console.log(book);
    this.bookService.removeFromMyBooks(book.id).subscribe(res => {
      this.myBooks = this.myBooks.filter(b => book.id != b.id);
    });
  }

}
