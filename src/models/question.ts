import { Answer } from './answer';
export class Question {
    id: string;
    text: string;
    answers: Array<Answer> = [];
    showAnswer: boolean = false;
    book_id: string = '';
}