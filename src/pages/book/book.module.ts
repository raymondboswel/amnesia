import { NotesPageModule } from './../notes/notes.module';
import { QuestionsPageModule } from './../questions/questions.module';
import { OverviewPage } from './../overview/overview';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookPage } from './book';
import { OverviewPageModule } from '../overview/overview.module';

@NgModule({
  declarations: [
    BookPage,
  ],
  imports: [
    IonicPageModule.forChild(BookPage),
    OverviewPageModule,
    QuestionsPageModule,
    NotesPageModule
  ],
})
export class BookPageModule {}
