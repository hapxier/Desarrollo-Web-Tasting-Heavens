import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationUserPage } from './notification-user';

@NgModule({
  declarations: [
    NotificationUserPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationUserPage),
  ],
})
export class NotificationUserPageModule {}
