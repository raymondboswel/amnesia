import { GoogleBookSearchProvider } from './google-book-search';
import { async, TestBed, inject } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { EnvVariables } from '../../app/environment-variables/environment-variables.token';
import { HttpModule, XHRBackend } from '@angular/http';
import {MockBackend} from '@angular/http/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [
      GoogleBookSearchProvider,
      { provide: XHRBackend, useClass: MockBackend }
    ]
  });
});

describe('GoogleBookSearchProvider', () => {

  it('should get the suggestions from the raw api string',
    inject([GoogleBookSearchProvider], (gBookSearchProvider: GoogleBookSearchProvider) => {
      let rawResult = 'window.google.ac.h(["E",[["eBay",""],["english to hindi",""],["english to spanish",""],["english dictionary",""],["epic",""],["english grammar",""],["english",""],["earth day quiz",""],["english to tagalog",""],["english to urdu",""]],{"k":1,"q":"JRopN2tIOLc2qPTx5nmh5k8i320"}])';
      let suggestionsArray = gBookSearchProvider.getSuggestions(rawResult);
      expect(suggestionsArray[0]).toBe("eBay");
  }));

    // service = new GoogleBookSearchProvider();
    // let thing = "thing";
    // let indicator = "indicator";
    // service.getThingIndicator(thing, indicator).toPromise().then(res => {
    //   console.log(res)
    //   expect(res.current).toBe(0);
    // })

});
