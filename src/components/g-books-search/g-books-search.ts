import { BookSearchResult } from './../../models/book-search-result';
import { GoogleBookSearchProvider } from './../../providers/google-book-search/google-book-search';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthorAutocompleteService } from '../../pages/new-book/author-autocomplete.service';


/**
 * Generated class for the GBooksSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'g-books-search',
  templateUrl: 'g-books-search.html',
  providers: [AuthorAutocompleteService]
})
export class GBooksSearchComponent {

  text: string;
  @Output() onBookSelected: EventEmitter<string> = new EventEmitter<string>();;

  constructor(public googleBookSearchProvider: GoogleBookSearchProvider) {
    console.log('Hello GBooksSearchComponent Component');
    this.text = 'Hello World';
  }

  selectBook(selectedBook: string) {
    this.onBookSelected.emit(selectedBook);
    console.log("book selected: " + selectedBook);
  }

}
