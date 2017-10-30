import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
//import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
//import { GooglePlus } from '@ionic-native/google-plus';
import { Register } from '../users/register/register';
import { RegisterRestaurants } from '../restaurants/registerRestaurants/registerRestaurants';
import { ServiceProvider } from '../../providers/service/service';
import { TabsUser } from '../users/tabsUser/tabsUser';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
 a:any;
  emailNickname: string;
  password: string;
  emailNick: AbstractControl;
  pass: AbstractControl;
  isLogged: boolean;
  permiso: any;
  validationForm: FormGroup;
  users: any[];

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public service: ServiceProvider,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder/*,
    private googlePlus: GooglePlus*/
  ) {
    this.validationForm = formBuilder.group({
      emailNick: ["", Validators.required],
      pass: ["", Validators.required],
    });

    this.emailNick = this.validationForm.controls['emailNick'];
    this.pass = this.validationForm.controls['pass'];

  }

  submit(){
    console.log(this.validationForm.value);
  }

  login() {
    let alert = this.alertCtrl.create({
      title: 'Acceso denegado',
      subTitle: 'Por favor ingrese nuevamente su usuario y contraseña',
      buttons: ['Dismiss']
    });
    alert.present();
  }

 /* loginGooglePlus(){
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }*/



  registrationActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Registration',
      buttons: [
        {
          text: 'User',
          role: 'user',
          handler: () => {
            this.navCtrl.push(Register);
            console.log('Ingresando: Registro de Usuario');
          }
        }, {
          text: 'Restaurants',
          handler: () => {
            this.navCtrl.push(RegisterRestaurants);
            console.log('Ingresando: Registro de restaurante');
          }
        }
      ]
    });
    actionSheet.present();
  }

  signUp() {
    let f = { emailNickname: this.emailNickname, password: this.password };

    /* 
       ------Este codigo tambien funciona-----------
       this.service.login2(f).subscribe((result) =>{
       this.permiso = result;
       console.log(this.permiso);
       if(this.permiso==true){
         this.navCtrl.push(TabsUser);
       }else{
         this.login();
       }
       //localStorage.setItem('userData', JSON.stringify(this.permiso) )
       
       }, (err) => {
         //Connection failed message
       });
       -------El codigo de abajo tambien--------------
       */

    this.service.login(f)
      .subscribe(
      rs => this.isLogged = rs,
      er => console.log(er),
      () => {
        if (this.isLogged) {
          console.log(this.emailNickname);
          console.log(this.password);
          console.log(this.isLogged);
          this.navCtrl.setRoot(TabsUser)
            .then(data => console.log(data)),
            error => console.log(error)           
        }
        else {
          console.log('acceso denegado');
          this.login();
        }
      }
      );
  }



  

}
