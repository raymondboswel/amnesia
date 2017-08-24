import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { BookPage } from  '../book/book';
import { BookService } from '../../services/book.service';
import { AuthService } from '../../providers/auth-service/auth-service';
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
  constructor(private authService: AuthService, public navCtrl: NavController, public navParams: NavParams, private bookService: BookService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBooksPage');
    this.bookService.getMyBooks(this.authService.currentUser).subscribe(res => {
      this.books = res;
    })
  }

  gotoBook(book) {
    this.bookService.selectedBook = book;
    this.navCtrl.push(BookPage, {
      book: book
    });
  }

}
