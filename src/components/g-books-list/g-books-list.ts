import { BookSearchResult } from './../../models/book-search-result';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Generated class for the GBooksListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
class BookView {
  constructor(public book: BookSearchResult,
              public inLibrary: boolean) {
  }
}

@Component({
  selector: 'g-books-list',
  templateUrl: 'g-books-list.html'
})
export class GBooksListComponent implements OnInit, OnChanges {
  @Input() books: BookSearchResult[] = [];
  @Input() myBooks: BookSearchResult[] = [];
  enrichedBooks: BookView[] = [];
  @Output() onBookSelected: EventEmitter<BookSearchResult> = new EventEmitter<BookSearchResult>();
  @Output() onBookRemoved: EventEmitter<BookSearchResult> = new EventEmitter<BookSearchResult>();
  text: string;

  constructor() {
    console.log('Hello GBooksListComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.enrichedBooks = this.books.map(book => {
      let inLibrary = this.books.some(book => this.myBooks.find(myBook => book.google_id == myBook.google_id) != undefined);
      let bookView = new BookView(book, inLibrary);
      return bookView;
    });
  };

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      console.log("Got changes.." + propName);
      if (propName == "books" || propName == "myBooks") {
        let chng = changes[propName];
        this.enrichedBooks = this.books.map(book => {
          let bookView = new BookView(book, false);
          let myBook = this.myBooks.find(myBook => myBook.google_id == book.google_id);
          if(myBook != undefined) {
            bookView.inLibrary = true;
            bookView.book.id = myBook.id;
          }
          return bookView;
        });
      };
    };
  }

}
