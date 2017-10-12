import { AuthorAutocompleteService } from './author-autocomplete.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewBookPage } from './new-book';
import { BookService } from '../../services/book.service';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    NewBookPage,
  ],

  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(NewBookPage),
  ],
  providers: [AuthorAutocompleteService]
})
export class NewBookPageModule {}
