import { Answer } from './answer';
export class Question {
    text: string;
    answer: Answer = new Answer();
    showAnswer: boolean = false;
    book_id: string = '';
}