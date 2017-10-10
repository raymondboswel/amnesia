import { HttpProvider } from './../http/http';
import { Injectable, Inject } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

/*
  Generated class for the AnswerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AnswerProvider {

  constructor(public http: HttpProvider, @Inject(EnvVariables) public envVariables) {
    
  }

  createAnswer(question: Question): Observable<Answer> {

    return this.http.post(`api/questions/${question.id}/answers`, JSON.stringify({answer: question.answers[0]})).map(res => {
      return res.json().data;
    });
  }

  updateAnswer(answer: Answer) {

  }

}
