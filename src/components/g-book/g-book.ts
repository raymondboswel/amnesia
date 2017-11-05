import { BookSearchResult } from './../../models/book-search-result';
import { Component, Input } from '@angular/core';

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
  @Input() book: BookSearchResult;
  text: string;

  constructor() {
    console.log('Hello GBookComponent Component');
    this.text = 'Hello World';
  }

}
