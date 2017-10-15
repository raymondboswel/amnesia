import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Question } from '../../models/question';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello QuestionProvider Provider');
  };

  addNewQuestion(question): Observable<any> {
    return this.http.post("api/questions", JSON.stringify({question: question})).map(res => {
      return res.json().data;
    });
  }

  getBookQuestions(book): Observable<Array<Question>> {
    return this.http.get(`api/questions?book_id=${book.id}`).map(res => {
      return res.json().data;
    });
  }
}
