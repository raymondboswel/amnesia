import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyBooksPage } from '../pages/my-books/my-books';
import { FindBookPage} from '../pages/find-book/find-book';
import { BookPage } from '../pages/book/book';
import { QuestionsPage } from '../pages/questions/questions';
import { NotesPage } from '../pages/notes/notes';
import { OverviewPage } from '../pages/overview/overview';
import { NewBookPage } from '../pages/new-book/new-book';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

import { BookService } from '../services/book.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { RegistrationPageModule } from '../pages/registration/registration.module'
import { QuestionProvider } from '../providers/question/question';
import { AnswerProvider } from '../providers/answer/answer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyBooksPage,
    FindBookPage,
    BookPage,
    QuestionsPage,
    NotesPage,
    OverviewPage,
    NewBookPage,
    LoginPage,    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RegistrationPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyBooksPage,
    FindBookPage,
    BookPage,
    QuestionsPage,
    NotesPage,
    OverviewPage,
    NewBookPage,
    LoginPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    QuestionProvider,
    AnswerProvider
  ]
})
export class AppModule {}
