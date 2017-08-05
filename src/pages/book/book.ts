import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { QuestionsPage } from '../questions/questions';
import { NotesPage } from '../notes/notes';
import { OverviewPage } from '../overview/overview';
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
  tab1: any;
  tab2: any;
  tab3: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('book');
    this.tab1 = OverviewPage;
    this.tab2 = QuestionsPage;
    this.tab3 = NotesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
