import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: 'raymondboswel@gmail.com', password: 'letmein' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { 
    if (localStorage.getItem("authToken")) {
      this.auth.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.nav.setRoot(HomePage);
    } 
  }
 
  public createAccount() {
    this.nav.push('RegistrationPage');
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(user => {      
        this.auth.currentUser = {email: this.registerCredentials.email, name: "", jwt: user.jwt, id: user.user_id};        
        localStorage.setItem("authToken" , user.jwt);
        localStorage.setItem("currentUser", JSON.stringify(this.auth.currentUser));
        console.log(this.auth.currentUser);
        this.nav.setRoot(HomePage);
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}