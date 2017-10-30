import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceProvider } from '../../../providers/service/service';
import { TabsUser } from '../tabsUser/tabsUser';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  /*nameUser: String;
  lastname:String;
  nicknNme:String;
  birthdate: String;
  addres: String;
  phon:String;
  gende: String;
  mail:String;
  pass:String;

  name: AbstractControl;
  lastName: AbstractControl;
  nickname: AbstractControl;
  birthday: AbstractControl;
  address: AbstractControl;
  phone: AbstractControl;
  gender: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  registerValidation: FormGroup;*/

  constructor(public navCtrl: NavController, public NavParams: NavParams,
    public service: ServiceProvider, private alertCtrl: AlertController/*,
  private formBuilder: FormBuilder*/) {
    //this.validationForm();
  }

  //valida los campos vacios
 /* validationForm(){
    this.registerValidation = this.formBuilder.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      nickname: ["", Validators.required],
      birthday: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.name= this.registerValidation.controls['name'];
    this.lastName = this.registerValidation.controls['lastname'];
    this.nickname= this.registerValidation.controls['nickname'];
    this.birthday = this.registerValidation.controls['birthday'];
    this.address= this.registerValidation.controls['address'];
    this.phone = this.registerValidation.controls['phone'];
    this.gender= this.registerValidation.controls['gender'];
    this.email = this.registerValidation.controls['email'];
    this.password= this.registerValidation.controls['password'];
  }

  submit(){
    console.log(this.registerValidation.value);
  }*/

  login() {
    let alert = this.alertCtrl.create({
      title: 'User created',
      subTitle: 'Now you can enter',
      buttons: ['OK']
    });
    alert.present();
  }
  //ENVIA A LA BASE LOS DATOS LOS DATOS PARA REGISTRARLOS
  sendData(req) {
    this.service.dataRegisterUser(req.value)
      .subscribe(
      data => {
        this.showAlert(data.mensaje);
        this.navCtrl.setRoot(TabsUser);
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
    this.navCtrl.push(TabsUser);
  }



}