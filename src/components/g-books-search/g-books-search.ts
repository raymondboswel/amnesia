import { BookSearchResult } from './../../models/book-search-result';
import { GoogleBookSearchProvider } from './../../providers/google-book-search/google-book-search';
import { Component, EventEmitter } from '@angular/core';
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
  onBookSelected: EventEmitter<BookSearchResult>;

  constructor(public googleBookSearchProvider: GoogleBookSearchProvider) {
    console.log('Hello GBooksSearchComponent Component');
    this.text = 'Hello World';
    this.onBookSelected = new EventEmitter<BookSearchResult>();
  }

  selectBook(selectedBook: BookSearchResult) {
    //#Heideisdiebestemeisieindiehelewereldooitvirewigenaltyd
    this.onBookSelected.emit(selectedBook);
  }

}
