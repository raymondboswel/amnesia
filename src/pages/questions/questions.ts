import { Book } from './../../models/book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { QuestionProvider } from '../../providers/question/question';
import { AnswerProvider } from '../../providers/answer/answer';
import { BookService } from '../../services/book.service';
import { Section } from '../../models/section';

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
  book: Book;
  allQuestions: Array<Question> = [];
  sectionQuestions: Array<Array<Question>> = [];
  addQuestion: Boolean = false;
  newQuestion: Question = new Question();
  editAnswer: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private bookService: BookService, 
              private questionProvider: QuestionProvider,
              private answerProvider: AnswerProvider) {
    this.book = this.bookService.selectedBook;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
    this.questionProvider.getBookQuestions(this.bookService.selectedBook).subscribe(res => {
      this.allQuestions = res.map(q => {
        if(q.answers.length == 0) {
          q.answers.push(new Answer());          
        };
        return q;
      });    
      // this.sections = this.questions.
      let section_names = this.allQuestions.reduce((res: Array<string>, q, i) => {
        if (!res.some(r => r == q.section.name)) {
          res.push(q.section.name);
        };
        return res;}, []);
      section_names.forEach(name => {
        let sectionQuestions = this.allQuestions.filter(q => q.section.name == name);
        this.sectionQuestions.push(sectionQuestions);
      })
      console.log(this.allQuestions);
    })
  }

  updateAnswer(question: Question) {
    if(question.answers[0].id) {
      this.answerProvider.updateAnswer(question.answers[0]);
    } else {
      this.answerProvider.createAnswer(question).subscribe(answer => {
        question.answers[0] = answer;
      });
    }
    console.log("Pressed check button")
    this.editAnswer = false;
  }

  addNewQuestion() {
    this.newQuestion.book_id = this.bookService.selectedBook.id;
    this.questionProvider.addNewQuestion(this.newQuestion).subscribe(res => {
      let answer = new Answer();
      res.answers = [answer];
      this.allQuestions.push(res);
      this.newQuestion = new Question();
      this.addQuestion = false;
    });
  }

}
