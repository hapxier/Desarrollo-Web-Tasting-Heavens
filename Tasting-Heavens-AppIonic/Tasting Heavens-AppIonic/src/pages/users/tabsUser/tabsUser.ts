import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfile } from '../userProfile/userProfile';
import { NotificationUserPage } from '../notification-user/notification-user';
import { HomeUserPage } from '../home-user/home-user';

@Component({
  selector: 'page-tabsUser',
  templateUrl: 'tabsUser.html'
})


export class TabsUser {
  constructor(public navCtrl: NavController) {
  }

  tab1root = HomeUserPage;
  tab2root = NotificationUserPage;
  tab3root = UserProfile;

}