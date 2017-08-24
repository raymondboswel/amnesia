import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { QuestionsPage } from '../questions/questions';
import { NotesPage } from '../notes/notes';
import { OverviewPage } from '../overview/overview';
import { BookService } from '../../services/book.service';
/**
 * Generated class for the BookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  book: Book = new Book("", "", "", 0);
  overview: any;
  questions: any;
  notes: any;
  
  constructor(private bookService: BookService, public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('book');
    this.book = this.bookService.selectedBook;
    this.overview = OverviewPage;
    this.questions = QuestionsPage;
    this.notes = NotesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
