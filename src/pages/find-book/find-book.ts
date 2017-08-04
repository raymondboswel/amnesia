import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';

/**
 * Generated class for the FindBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-book',
  templateUrl: 'find-book.html',
})
export class FindBookPage {
  search = '';
  books: Array<Book> = [];
  filteredBooks: Array<Book> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let book1 = new Book("Huckleberry Finn", "", "Mark Twain", 5);
    let book2 = new Book("A short history of nearly everything", "", "Bill Bryson", 7);
    let book3 = new Book("The art of learning", "", "Josh Waitzkin", 10);
    book1.inMyBooks = true;
    this.books = [book1, book2, book3];
    this.filteredBooks = this.books;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindBookPage');
  }

  filterBooks() {
    console.log(this.search);
    if (this.search.length > 0) {
      this.filteredBooks = this.books.filter((book: Book) => book.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    } else {
      this.filteredBooks = this.books;
    }
  }

}
