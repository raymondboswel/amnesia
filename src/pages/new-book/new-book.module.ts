import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBookPage } from './new-book';
import { BookService } from '../../services/book.service';
@NgModule({
  declarations: [
    NewBookPage,
  ],

  imports: [
    IonicPageModule.forChild(NewBookPage),
  ],
})
export class NewBookPageModule {}
