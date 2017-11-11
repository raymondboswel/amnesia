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

 class BookView extends Book {
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
  myBooks: Array<BookView>;
  searchResults: BookSearchResult[];
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

    this.bookService.getMyBooks(this.authService.currentUser).subscribe((res: Array<BookView>) => {
      this.myBooks = res;
      console.log(this.myBooks);
      this.bookService.getTop10Books().subscribe((res: Array<BookView>) => {
        this.books = res.map(b => {
          if (this.myBooks.find(myBook => myBook.id == b.id)) {
            b.inMyBooks = true;
            console.log(b);

          } else {
          };
          if (b.authors) {
            b.authorsString = b.authors.reduce((res, author, i) => { return res +  author.surname + ", " + author.name[0] + "; "}, "");
          } else {
            b.authorsString = "";
          }
          return b;
        });
        console.log(this.books);
      });
    });
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
    this.bookService.addToMyBooks(book, this.authService.currentUser).subscribe(res => {
      this.books = this.books.map(b => {
        if (b.id == book.id) {
          b.inMyBooks = true;
          return b;
        } else {
          return b;
        }
      })
    });
  }

    removeFromMyBooks(book: Book) {
    this.bookService.removeFromMyBooks(book, this.authService.currentUser).subscribe(res => {
      this.books.map(b => {
        if (b.id == book.id) {
          b.inMyBooks = false;
          return b;
        } else {
          return b;
        }
      })
    });
  }

}
