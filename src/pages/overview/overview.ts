import { SectionProvider } from './../../providers/section/section';
import { Section } from './../../models/section';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
/**
 * Generated class for the OverviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  editSummary: boolean = false;
  addSection: boolean = false;
  newSection: Section = new Section();
  book: Book;  
  newSummary: string = '';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private bookService: BookService,
              private sectionProvider: SectionProvider) {
    this.book = this.bookService.selectedBook;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
    
  }

  updateSummary() {
    this.editSummary = false;
    this.bookService.updateBook(this.book).subscribe(res => {
    });
  }

  addNewSection() {
    this.sectionProvider.addSection(this.newSection, this.book).subscribe(section => {
      this.book.sections.push(section);
      this.newSection = new Section();
      this.addSection = false;
    });
  }

}
