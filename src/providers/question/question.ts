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

  constructor(public http: Http) {
    console.log('Hello QuestionProvider Provider');
  };

  addNewQuestion(question): Observable<any> {
    return this.http.post("http://localhost:4000/api/questions", JSON.stringify({question: question}), this.requestOptions()).map(res => {
      return res.json();
    });
  }

  getBookQuestions(book): Observable<Array<Question>> {
    return this.http.get(`http://localhost:4000/api/questions?book_id=${book.id}`, this.requestOptions()).map(res => {
      return res.json().data;
    });
  }

  requestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');        
    let options = new RequestOptions({ headers: headers });
    return options;
  }



}
