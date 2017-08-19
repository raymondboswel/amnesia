import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';

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
  private bookForm : FormGroup;

  constructor(private bookService: BookService, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder ) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: [''],
    });
  }


  logForm(){
    console.log(this.bookForm.value)
    let title = this.bookForm.controls['title'].value;
    let subtitle = this.bookForm.controls['subtitle'].value;
    this.bookService.createBook(title, subtitle).subscribe(res => {
      this.navCtrl.pop();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewBookPage');
  }

}
