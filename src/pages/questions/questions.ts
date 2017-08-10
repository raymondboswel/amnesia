import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

/**
 * Generated class for the QuestionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  questions: Array<Question> = [];
  editAnswer: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let q1: Question = new Question();
    let a1: Answer = new Answer();
    a1.text = "Huh?";
    q1.answer = a1; 
    q1.text = "How long is a piece of string";
    this.questions.push(q1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  updateAnswer() {
    console.log("Pressed check button")
    this.editAnswer = false;
  }

}
