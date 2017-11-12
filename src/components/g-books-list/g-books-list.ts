import { BookSearchResult } from './../../models/book-search-result';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../models/book';

/**
 * Generated class for the GBooksListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
class BookView {
  constructor(public book: Book,
              public inLibrary: boolean) {
  }
}

@Component({
  selector: 'g-books-list',
  templateUrl: 'g-books-list.html'
})
export class GBooksListComponent implements OnInit, OnChanges {
  @Input() bookSearchResults: BookSearchResult[] = [];
  @Input() myBooks: Book[] = [];
  enrichedBooks: BookView[] = [];
  @Output() onBookSelected: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() onBookRemoved: EventEmitter<Book> = new EventEmitter<Book>();
  text: string;

  constructor() {
    console.log('Hello GBooksListComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.enrichedBooks = this.bookSearchResults.map(book => {
      let inLibrary = this.bookSearchResults.some(book => this.myBooks.find(myBook =>
        book.google_id == myBook.bookSearchResult.google_id) != undefined);
      let bookView = new BookView(Book.getBook(book), inLibrary);
      return bookView;
    });
  };

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      console.log("Got changes.." + propName);
      if (propName == "bookSearchResults" || propName == "myBooks") {
        let chng = changes[propName];
        console.log(this.bookSearchResults);
        this.enrichedBooks = this.bookSearchResults.map(book => {
          let bookView = new BookView(Book.getBook(book), false);
          console.log(bookView);
          console.log(this.myBooks);
          let myBook = this.myBooks.find(myBook => myBook.bookSearchResult.google_id == book.google_id);
          if(myBook != undefined) {
            bookView.inLibrary = true;
            bookView.book.id = myBook.id;
          }
          return bookView;
        });
      };
    };
    console.log(this.enrichedBooks);
  }

}
