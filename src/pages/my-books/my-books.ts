import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';

/**
 * Generated class for the MyBooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-books',
  templateUrl: 'my-books.html',
})
export class MyBooksPage {
  books: Array<Book> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let book1 = new Book("Huckleberry Finn", "", "Mark Twain", 5); 
    let book2 = new Book("A short history of nearly everything", "", "Bill Bryson", 7);
    let book3 = new Book("The art of learning", "", "Josh Waitzkin", 10);
    this.books = [book1, book2, book3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBooksPage');
  }

}
