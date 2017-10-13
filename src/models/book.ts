import { Author } from './author';
export class  Book {
    id: string;
    authors: Array<Author> = [];
    title: string;
    subtitle: string;
    summary: string;
    questionsCompleted: number = 0;
    inMyBooks: boolean = false;
    constructor(title: string, subtitle: string, authors: Array<Author>, questionsCompleted: number) {
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.questionsCompleted = questionsCompleted;
    }
}