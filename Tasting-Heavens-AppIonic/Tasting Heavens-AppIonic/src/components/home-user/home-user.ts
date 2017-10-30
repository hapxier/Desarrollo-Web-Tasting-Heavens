import { Component } from '@angular/core';

/**
 * Generated class for the HomeUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-user',
  templateUrl: 'home-user.html'
})
export class HomeUserComponent {

  text: string;

  constructor() {
    console.log('Hello HomeUserComponent Component');
    this.text = 'Hello World';
  }

}
