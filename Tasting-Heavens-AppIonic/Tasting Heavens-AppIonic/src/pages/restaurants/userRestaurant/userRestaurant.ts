import { Component/*, OnInit*/ } from '@angular/core';
import { NavController/*, AlertController */} from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { Slides } from 'ionic-angular';
//import { DataTablesModule } from 'angular-datatables';

//import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-userRestaurant',
  templateUrl: 'userRestaurant.html'
})
export class UserRestaurant /*implements OnInit*/{
  constructor(public navCtrl: NavController/*, private geolocation: Geolocation*/) {

  }

 /* dtOptions: DataTables.Settings = {};
  
    ngOnInit(): void {
      this.dtOptions = {
        ajax: 'data/data.json',
        columns: [{
          title: 'ID',
          data: 'id'
        }, {
          title: 'First name',
          data: 'firstName'
        }, {
          title: 'Last name',
          data: 'lastName'
        }]
      };
    }*/
 /* location(){

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });*/

  //}


 

 
}
