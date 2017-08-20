import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
 
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  createSuccess = false;
  registerCredentials = { name: '', surname: '', email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(
      success => {
        if (success) {
          // this.createSuccess = true;
          this.showPopup("Success", "Account created.");
          this.nav.setRoot(HomePage);
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}