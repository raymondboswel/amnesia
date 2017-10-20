import { Answer } from './answer';
import { Section } from './section';

export class Question {
    id: string;
    text: string;
    answers: Array<Answer> = [];
    showAnswer: boolean = false;
    book_id: string = '';
    section: Section;
    section_id: string = '';
}