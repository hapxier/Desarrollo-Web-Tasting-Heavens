import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserProfile } from './userProfile';

@NgModule({
  declarations: [
    UserProfile
  ],
  imports: [
    IonicModule.forRoot(UserProfile, {
    })
  ],
  exports: [
    UserProfile
  ]
})
export class UserProfileModule {}