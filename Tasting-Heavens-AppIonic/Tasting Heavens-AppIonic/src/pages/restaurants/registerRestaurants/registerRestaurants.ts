import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Login } from '../../login/login';
import { ServiceProvider } from '../../../providers/service/service';
import {TabsRestaurant} from '../tabsRestaurant/tabsRestaurant';

@Component({
  selector: 'page-registerRestaurants',
  templateUrl: 'registerRestaurants.html'
})
export class RegisterRestaurants {
  constructor(public navCtrl: NavController,  public navParams: NavParams,
    private alertCtrl: AlertController, public service: ServiceProvider) {

  }

login(){
  let alert = this.alertCtrl.create({
    title: 'User created',
    subTitle: 'Now you can enter',
    buttons: ['OK']
  });
  alert.present();
}

sendData(req) {
  this.service.dataRegisterRestaurant(req.value)
    .subscribe(
    data => {
      this.showAlert(data.mensaje);
     // this.navCtrl.setRoot(UserProfile);
      console.log(data.mensaje)
    },
    err => console.log(err)
    );
}

showAlert(men) {
  let alert = this.alertCtrl.create({
    title: 'Informacion',
    subTitle: men,
    buttons: ['OK']
  });
  alert.present();
}

goLogged(){
  this.navCtrl.push(TabsRestaurant);
}

}