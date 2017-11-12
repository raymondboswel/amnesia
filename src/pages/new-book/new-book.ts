import { AuthorAutocompleteService } from './author-autocomplete.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Author } from '../../models/author';
import { Book } from '../../models/book';

/**
 * Generated class for the NewBookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-book',
  templateUrl: 'new-book.html',
})
export class NewBookPage {
  bookForm : FormGroup;
  book: Book;
  addAuthor: boolean = false;
  authors: Array<Author> = [];
  newAuthor: Author = new Author();

  constructor(private bookService: BookService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public authorAutocompleteService: AuthorAutocompleteService ) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: [''],
    });
  }

  toggleFields() {
    this.addAuthor = !this.addAuthor;
  }

  addBook(){
    console.log(this.bookForm.value)
    let title = this.bookForm.controls['title'].value;
    let subtitle = this.bookForm.controls['subtitle'].value;
    // let book: Book = new Book(title, subtitle, this.authors, 0);
    // this.bookService.createBook(book).subscribe(res => {
    //   this.navCtrl.pop();
    // });
  }

  appendAuthor(author) {
    console.log(author);
    this.authors.push(author);
    this.addAuthor = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBookPage');
  }

}
