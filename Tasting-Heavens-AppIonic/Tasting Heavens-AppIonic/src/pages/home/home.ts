import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { UserProfile } from '../users/userProfile/userProfile';
import { Register } from '../users/register/register';
import { Login } from '../login/login';
import { RegisterRestaurants } from '../restaurants/registerRestaurants/registerRestaurants';
import {TabsUser} from '../users/tabsUser/tabsUser';
import {TabsRestaurant} from '../restaurants/tabsRestaurant/tabsRestaurant';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  login() {
    this.navCtrl.push(Login);
  }

  userProfile() {
    this.navCtrl.push(UserProfile);
  }

  register() {
    this.navCtrl.push(Register);
  }

  registerRestaurants() {
    this.navCtrl.push(RegisterRestaurants);
  }

  tabsUser() {
    this.navCtrl.push(TabsUser);
  }

  tabsRestaurant() {
    this.navCtrl.push(TabsRestaurant);
  }

  registrationActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Registration',
      buttons: [
        {
          text: 'User',
          role: 'user',
          handler: () => {
            this.navCtrl.push(Register);
            console.log('Destructive clicked');
          }
        },{
          text: 'Restaurants',
          handler: () => {
            this.navCtrl.push(RegisterRestaurants);
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
