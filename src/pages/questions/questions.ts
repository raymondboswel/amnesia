import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { QuestionProvider } from '../../providers/question/question';
import { BookService } from '../../services/book.service';

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
  addQuestion: Boolean = false;
  newQuestion: Question = new Question();
  editAnswer: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BookService, private questionProvider: QuestionProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
    this.questionProvider.getBookQuestions(this.bookService.selectedBook).subscribe(res => {
      this.questions = res;      
    })
  }

  updateAnswer() {
    console.log("Pressed check button")
    this.editAnswer = false;
  }

  addNewQuestion() {
    this.newQuestion.book_id = this.bookService.selectedBook.id;
    this.questionProvider.addNewQuestion(this.newQuestion).subscribe(res => {
      this.questions.push(this.newQuestion);
      this.newQuestion = new Question();
      this.addQuestion = false;
    });
  }

}
