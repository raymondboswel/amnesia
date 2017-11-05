import { IonicModule } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { NgModule } from '@angular/core';
import { GBooksSearchComponent } from './g-books-search/g-books-search';
import { GBooksListComponent } from './g-books-list/g-books-list';
import { GBookComponent } from './g-book/g-book';
@NgModule({
	declarations: [GBooksSearchComponent,
    GBooksListComponent,
    GBookComponent],
  imports: [AutoCompleteModule,
    IonicModule,

  ],
	exports: [GBooksSearchComponent,
    GBooksListComponent,
    GBookComponent]
})
export class ComponentsModule {}
