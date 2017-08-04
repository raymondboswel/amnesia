import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('book');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }

}
