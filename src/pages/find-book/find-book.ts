import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Book } from '../../models/book';
import { NewBookPage } from '../new-book/new-book';
import { BookService } from '../../services/book.service';

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
  @ViewChild(Nav) nav: Nav;
  search = '';
  books: Array<Book> = [];
  filteredBooks: Array<Book> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BookService) {
    let book1 = new Book("Huckleberry Finn", "", "Mark Twain", 5);
    let book2 = new Book("A short history of nearly everything", "", "Bill Bryson", 7);
    let book3 = new Book("The art of learning", "", "Josh Waitzkin", 10);
    book1.inMyBooks = true;
    this.books = [book1, book2, book3];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindBookPage');
    this.bookService.getTop10Books().subscribe(res => {
      console.log(res);
      this.books = res;
      console.log(this.books);
      this.filteredBooks = this.books;
    });
  }

  filterBooks() {
    console.log(this.search);
    this.bookService.searchBooks(this.search).subscribe(res => {
      this.books = res;
      this.filteredBooks = res;
    });
    // if (this.search.length > 0) {
    //   this.filteredBooks = this.books.filter((book: Book) => book.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    // } else {
    //   this.filteredBooks = this.books;
    // }
  }

  addNewBook() {
    this.navCtrl.push(NewBookPage);
  }

}
