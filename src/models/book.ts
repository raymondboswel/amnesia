export class  Book {
    id: string;
    author: string;
    title: string;
    subtitle: string;
    summary: string;
    questionsCompleted: number = 0;
    inMyBooks: boolean = false;
    constructor(title: string, subtitle: string, author: string, questionsCompleted: number) {
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.questionsCompleted = questionsCompleted;
    }
}