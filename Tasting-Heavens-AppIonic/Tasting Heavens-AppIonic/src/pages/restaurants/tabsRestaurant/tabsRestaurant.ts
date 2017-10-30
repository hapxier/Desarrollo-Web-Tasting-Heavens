import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { Slides } from 'ionic-angular';
import { UserRestaurant } from '../userRestaurant/userRestaurant';
import { HomeRestaurantPage } from '../home-restaurant/home-restaurant';
import { NotificationRestaurantPage } from '../notification-restaurant/notification-restaurant';



@Component({
  selector: 'page-tabsRestaurant',
  templateUrl: 'tabsRestaurant.html'
})
export class TabsRestaurant {
  constructor(public navCtrl: NavController) {

  }
  tab1root = HomeRestaurantPage;
  tab2root = NotificationRestaurantPage;
  tab3root = UserRestaurant;




}