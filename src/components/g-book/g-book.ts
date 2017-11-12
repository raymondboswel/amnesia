import { BookService } from './../../services/book.service';
import { Observable } from 'rxjs/Rx';
import { BookSearchResult } from './../../models/book-search-result';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';

/**
 * Generated class for the GBookComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'g-book',
  templateUrl: 'g-book.html'
})
export class GBookComponent {
  @Input() book: Book;
  @Input() inLibrary: boolean;
  @Output() onBookSelected: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() onBookRemoved: EventEmitter<Book> = new EventEmitter<Book>();

  text: string;

  constructor(public bookService: BookService) {
    console.log('Hello GBookComponent Component');
    this.text = 'Hello World';
  }

  addBookToProfile(bookSearchResult: BookSearchResult) {
    console.log("Adding book to profile: ");
    console.log(this.book);

  }

}
