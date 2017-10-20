import { HttpProvider } from './../http/http';
import { Book } from './../../models/book';
import { Section } from './../../models/section';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SectionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SectionProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello SectionProvider Provider');
  }

  addSection(section: Section, book: Book) {
    return this.http.post(`api/books/${book.id}/sections`, {section: section}).map(res => {
      return res.json();
    });
  }

}
