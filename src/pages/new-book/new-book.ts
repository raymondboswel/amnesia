import { AuthorAutocompleteService } from './author-autocomplete.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Author } from '../../models/author';

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
  addAuthor: boolean = false;
  authors: Array<Author> = [];

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
    this.bookService.createBook(title, subtitle).subscribe(res => {
      this.navCtrl.pop();
    });
  }

  appendAuthor() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBookPage');
  }

}
