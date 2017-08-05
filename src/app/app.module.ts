import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MyBooksPage } from '../pages/my-books/my-books';
import { FindBookPage} from '../pages/find-book/find-book';
import { BookPage } from '../pages/book/book';
import { QuestionsPage } from '../pages/questions/questions';
import { NotesPage } from '../pages/notes/notes';
import { OverviewPage } from '../pages/overview/overview';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    OverviewPage
  ],
  imports: [
    BrowserModule,
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
    OverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
