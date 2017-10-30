import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { UserProfile } from '../pages/users/userProfile/userProfile';
import { Register } from '../pages/users/register/register';
import { RegisterRestaurants } from '../pages/restaurants/registerRestaurants/registerRestaurants';
import { TabsUser } from '../pages/users/tabsUser/tabsUser';
import { UserRestaurant } from '../pages/restaurants/userRestaurant/userRestaurant';
import { TabsRestaurant } from '../pages/restaurants/tabsRestaurant/tabsRestaurant';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { NotificationUserPage } from '../pages/users/notification-user/notification-user';
import { HomeUserPage } from '../pages/users/home-user/home-user';
import { SettingUserPage } from '../pages/users/setting-user/setting-user';
import { HomeRestaurantPage } from '../pages/restaurants/home-restaurant/home-restaurant';
import { NotificationRestaurantPage } from '../pages/restaurants/notification-restaurant/notification-restaurant';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    UserProfile,
    UserRestaurant,
    Register,
    RegisterRestaurants,
    TabsUser,
    TabsRestaurant,
    NotificationUserPage,
    HomeUserPage,
    SettingUserPage,
    HomeRestaurantPage,
    NotificationRestaurantPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    UserProfile,
    UserRestaurant,
    Register,
    RegisterRestaurants,
    TabsUser,
    TabsRestaurant,
    NotificationUserPage,
    HomeUserPage,
    SettingUserPage,
    HomeRestaurantPage,
    NotificationRestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServiceProvider
  ]
})
export class AppModule { }
