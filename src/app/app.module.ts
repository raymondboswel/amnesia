import { MyBooksPageModule } from './../pages/my-books/my-books.module';
import { QuestionsPageModule } from './../pages/questions/questions.module';
import { NotesPageModule } from './../pages/notes/notes.module';
import { OverviewPageModule } from './../pages/overview/overview.module';
import { NewBookPageModule } from './../pages/new-book/new-book.module';
import { LoginPageModule } from './../pages/login/login.module';
import { FindBookPageModule } from './../pages/find-book/find-book.module';
import { BookPageModule } from './../pages/book/book.module';
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
import { EnvironmentsModule } from './environment-variables/environment-variables.module';
import { HttpProvider } from '../providers/http/http';

import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule,
    BookPageModule,
    FindBookPageModule,
    LoginPageModule,
    MyBooksPageModule,
    NewBookPageModule,
    NotesPageModule,
    OverviewPageModule,
    QuestionsPageModule,
    EnvironmentsModule,
    RegistrationPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyBooksPage,
    FindBookPage,
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
    AnswerProvider,
    HttpProvider,
    
  ]
})
export class AppModule {}
