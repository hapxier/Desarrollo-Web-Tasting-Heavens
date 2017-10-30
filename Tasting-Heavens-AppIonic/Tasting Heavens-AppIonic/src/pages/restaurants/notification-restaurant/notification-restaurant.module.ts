import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationRestaurantPage } from './notification-restaurant';

@NgModule({
  declarations: [
    NotificationRestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationRestaurantPage),
  ],
})
export class NotificationRestaurantPageModule {}
