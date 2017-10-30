import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class ServiceProvider {

  //api para la conexion con la base de datos
  api: string = 'http://localhost/ionic/db_bfood/';

  //verificar usuario
  emailNickname: string;
  loggedIn: boolean;

  constructor(public http: Http) {
    this.emailNickname = '';
    this.loggedIn = false;

  }
 //enlista los datos
  getData() {
    return this.http.get(this.api + 'listar.php').map(res => res.json())
  }

  //envia los datos para registrar los usuarios
  dataRegisterUser(params) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "insertarUsuario.php", params,
      {
        headers: headers,
        method: "POST"
      }).map(
      (res:Response)=>{return res.json()}
      );
  }

  //envia los datos para registrar los resturantes
  dataRegisterRestaurant(params) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "insertarRestaurante.php", params,
      {
        headers: headers,
        method: "POST"
      }).map(
      (res:Response)=>{return res.json()}
      );
  }

  informationUserLogged(params){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.api + "informationUserLogged.php", params,
      {
        headers: headers,
        method: "POST"
      }).map(
      (res:Response)=>{return res.json()}
      )
      
  }

 

  //verifica si el usuario esta en la base de datos y si la contraseña es correcta
  login(userInfo) {
    let url = `${this.api +'loginAutenticacion.php'}`;

    let iJon = JSON.stringify(userInfo);

    return this.http.post(url, iJon, {
       headers: new Headers({
          'Content-Type':'application/json'
       })
    })
    .map(res => res.text())
    .map(res => {
       if (res=="false"){
          this.loggedIn = false;
       } else {
          localStorage.setItem('token', res);
          this.emailNickname= userInfo.emailNickname;
          console.log(res);
          this.loggedIn = true;
       }
       return this.loggedIn;
    });
 }

 logout(): void {
    localStorage.removeItem('token');
    this.emailNickname = '';
    this.loggedIn = false;
 }

 isLoggedIn() {
    return this.loggedIn;
 }


}
