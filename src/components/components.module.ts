import { AutoCompleteModule } from 'ionic2-auto-complete';
import { NgModule } from '@angular/core';
import { GBooksSearchComponent } from './g-books-search/g-books-search';
@NgModule({
	declarations: [GBooksSearchComponent],
	imports: [AutoCompleteModule],
	exports: [GBooksSearchComponent]
})
export class ComponentsModule {}
