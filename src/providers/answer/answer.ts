import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AnswerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AnswerProvider {

  constructor(public http: Http) {
    console.log('Hello AnswerProvider Provider');
  }

  createAnswer(question: Question): Observable<Answer> {
    return this.http.post(`http://localhost:4000/api/questions/${question.id}/answers`, JSON.stringify({answer: question.answers[0]}), this.requestOptions()).map(res => {
      return res.json().data;
    });
  }

  updateAnswer(answer: Answer) {

  }

  requestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');        
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
