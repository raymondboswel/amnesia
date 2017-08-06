import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OverviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  editSummary: boolean = false;
  summary: string = 'The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.';
  newSummary: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  updateSummary() {
    this.editSummary = false;
  }

}
