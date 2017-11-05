import { BookSearchResult } from './../../models/book-search-result';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the GBooksListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'g-books-list',
  templateUrl: 'g-books-list.html'
})
export class GBooksListComponent {
  @Input() books: BookSearchResult[];
  text: string;

  constructor() {
    console.log('Hello GBooksListComponent Component');
    this.text = 'Hello World';
  }

}
