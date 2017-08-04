import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindBookPage } from './find-book';

@NgModule({
  declarations: [
    FindBookPage,
  ],
  imports: [
    IonicPageModule.forChild(FindBookPage),
  ],
})
export class FindBookPageModule {}
