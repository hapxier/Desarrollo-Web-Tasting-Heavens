import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Slides } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { ServiceProvider } from '../../../providers/service/service';
import { Login } from '../../login/login'

@Component({
  selector: 'page-userProfile',
  templateUrl: 'userProfile.html'
})
export class UserProfile {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  SwipedTabsIndicator: any = null;
  tabs: any = [];

  users: any[];
  loginData: Login;
  params2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController
    , public service: ServiceProvider) {

    this.tabs=["Favorites","Recomendations"];

  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }


}
