import { BookSearchResult } from './book-search-result';
import { Author } from './author';
import { Section } from './section';
export class Book {
    id: string;
    bookSearchResult: BookSearchResult;
    summary: string;
    sections: Array<Section> = [];
    questionsCompleted: number = 0;
    inMyBooks: boolean = false;
    constructor(id: string,
                title: string,
                subtitle: string,
                authors: Array<string>,
                cover_url: string,
                questionsCompleted: number,
                google_id: string
              ) {
      this.id = id;
      this.questionsCompleted = questionsCompleted;
      this.bookSearchResult = new BookSearchResult(title, subtitle, authors, cover_url, google_id)
    }

    static getBook(bsr: BookSearchResult) {
      return new Book("", bsr.title, bsr.subtitle, bsr.authors, bsr.cover_url, 0, bsr.google_id);
    }
}
