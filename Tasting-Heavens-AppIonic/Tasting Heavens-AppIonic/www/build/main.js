webpackJsonp([2],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-user/home-user.module": [
		275,
		7
	],
	"../pages/notification-user/notification-user.module": [
		274,
		5
	],
	"../pages/restaurants/home-restaurant/home-restaurant.module": [
		291,
		14
	],
	"../pages/restaurants/notification-restaurant/notification-restaurant.module": [
		294,
		1
	],
	"../pages/setting-user/setting-user.module": [
		276,
		0
	],
	"../pages/users/home-user/home-user.module": [
		289,
		10
	],
	"../pages/users/notification-user/notification-user.module": [
		288,
		9
	],
	"../pages/users/setting-user/setting-user.module": [
		287,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_userProfile_userProfile__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_register_register__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurants_registerRestaurants_registerRestaurants__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_tabsUser_tabsUser__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__restaurants_tabsRestaurant_tabsRestaurant__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* Login */]);
    };
    HomePage.prototype.userProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__users_userProfile_userProfile__["a" /* UserProfile */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__users_register_register__["a" /* Register */]);
    };
    HomePage.prototype.registerRestaurants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__restaurants_registerRestaurants_registerRestaurants__["a" /* RegisterRestaurants */]);
    };
    HomePage.prototype.tabsUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__users_tabsUser_tabsUser__["a" /* TabsUser */]);
    };
    HomePage.prototype.tabsRestaurant = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__restaurants_tabsRestaurant_tabsRestaurant__["a" /* TabsRestaurant */]);
    };
    HomePage.prototype.registrationActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Registration',
            buttons: [
                {
                    text: 'User',
                    role: 'user',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__users_register_register__["a" /* Register */]);
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Restaurants',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__restaurants_registerRestaurants_registerRestaurants__["a" /* RegisterRestaurants */]);
                        console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\home\home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <img src="../../assets/img/logoDorado.png" />\n  </ion-card>\n  <br>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n  <button ion-button full color="dark" align (click)="login()">Login</button>\n  <button ion-button full color="dark" align (click)="registrationActionSheet()">Register</button>\n\n<button ion-button full color="dark" align (click)="tabsUser()">user</button>\n<button ion-button full color="dark" align (click)="tabsRestaurant()">Userhome</button>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_register_register__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurants_registerRestaurants_registerRestaurants__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_tabsUser_tabsUser__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Http, Headers } from '@angular/http';

//import { GooglePlus } from '@ionic-native/google-plus';




var Login = (function () {
    function Login(navCtrl, actionSheetCtrl, service, alertCtrl, formBuilder /*,
        private googlePlus: GooglePlus*/) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder; /*,
        private googlePlus: GooglePlus*/
        this.validationForm = formBuilder.group({
            emailNick: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            pass: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
        this.emailNick = this.validationForm.controls['emailNick'];
        this.pass = this.validationForm.controls['pass'];
    }
    Login.prototype.submit = function () {
        console.log(this.validationForm.value);
    };
    Login.prototype.login = function () {
        var alert = this.alertCtrl.create({
            title: 'Acceso denegado',
            subTitle: 'Por favor ingrese nuevamente su usuario y contraseña',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    /* loginGooglePlus(){
       this.googlePlus.login({})
       .then(res => console.log(res))
       .catch(err => console.error(err));
     }*/
    Login.prototype.registrationActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Registration',
            buttons: [
                {
                    text: 'User',
                    role: 'user',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__users_register_register__["a" /* Register */]);
                        console.log('Ingresando: Registro de Usuario');
                    }
                }, {
                    text: 'Restaurants',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurants_registerRestaurants_registerRestaurants__["a" /* RegisterRestaurants */]);
                        console.log('Ingresando: Registro de restaurante');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Login.prototype.signUp = function () {
        var _this = this;
        var f = { emailNickname: this.emailNickname, password: this.password };
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
            .subscribe(function (rs) { return _this.isLogged = rs; }, function (er) { return console.log(er); }, function () {
            if (_this.isLogged) {
                console.log(_this.emailNickname);
                console.log(_this.password);
                console.log(_this.isLogged);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__users_tabsUser_tabsUser__["a" /* TabsUser */])
                    .then(function (data) { return console.log(data); }),
                    function (error) { return console.log(error); };
            }
            else {
                console.log('acceso denegado');
                _this.login();
            }
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="validationForm" (ngSubmit)="submit()">\n\n      <ion-card>\n\n        <img src="../../assets/img/logoDorado.png" />\n\n  \n\n        <ion-list>\n\n          <ion-item>\n\n            <button ion-button full>\n\n              <ion-icon name="logo-facebook"> Login with Facebok</ion-icon>\n\n            </button>\n\n            <button ion-button full color="danger">\n\n              <ion-icon name="logo-googleplus">Login with Google</ion-icon>\n\n            </button>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>Email or Nickname</ion-label>\n\n            <ion-input type="email" placeholder="Email Input" [(ngModel)]="emailNickname" formControlName="emailNick"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf ="emailNick.hasError(\'required\') && emailNick.touched">\n\n            <p>*Email or emailNickname</p>\n\n          </ion-item>\n\n  \n\n          <ion-item> \n\n            <ion-label color="primary" stacked>Password</ion-label>\n\n            <ion-input type="password" placeholder="Password Input" [(ngModel)]="password" formControlName="pass"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf ="pass.hasError(\'required\') && pass.touched">\n\n            <p>*Insert password</p>\n\n          </ion-item>\n\n\n\n\n\n          <button ion-button full color="light" (click)="signUp()">Log in</button>\n\n  \n\n  \n\n  \n\n          <ion-item>\n\n            <h6>Forgot your login details? </h6>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <h6 (click)="registrationActionSheet()">Don\'t have an account? Sign up</h6>\n\n          </ion-item>\n\n  \n\n        </ion-list>\n\n      </ion-card>\n\n\n\n    </form>\n\n   \n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] /*,
        private googlePlus: GooglePlus*/])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_userProfile_userProfile__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_users_register_register__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restaurants_registerRestaurants_registerRestaurants__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_users_tabsUser_tabsUser__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurants_userRestaurant_userRestaurant__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_restaurants_tabsRestaurant_tabsRestaurant__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_service_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_users_notification_user_notification_user__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_users_home_user_home_user__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_users_setting_user_setting_user__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_restaurants_home_restaurant_home_restaurant__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_restaurants_notification_restaurant_notification_restaurant__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_userProfile_userProfile__["a" /* UserProfile */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurants_userRestaurant_userRestaurant__["a" /* UserRestaurant */],
            __WEBPACK_IMPORTED_MODULE_9__pages_users_register_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_10__pages_restaurants_registerRestaurants_registerRestaurants__["a" /* RegisterRestaurants */],
            __WEBPACK_IMPORTED_MODULE_11__pages_users_tabsUser_tabsUser__["a" /* TabsUser */],
            __WEBPACK_IMPORTED_MODULE_13__pages_restaurants_tabsRestaurant_tabsRestaurant__["a" /* TabsRestaurant */],
            __WEBPACK_IMPORTED_MODULE_17__pages_users_notification_user_notification_user__["a" /* NotificationUserPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_users_home_user_home_user__["a" /* HomeUserPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_users_setting_user_setting_user__["a" /* SettingUserPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_restaurants_home_restaurant_home_restaurant__["a" /* HomeRestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_restaurants_notification_restaurant_notification_restaurant__["a" /* NotificationRestaurantPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/notification-user/notification-user.module#NotificationUserPageModule', name: 'NotificationUserPage', segment: 'notification-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-user/home-user.module#HomeUserPageModule', name: 'HomeUserPage', segment: 'home-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setting-user/setting-user.module#SettingUserPageModule', name: 'SettingUserPage', segment: 'setting-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/setting-user/setting-user.module#SettingUserPageModule', name: 'SettingUserPage', segment: 'setting-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/notification-user/notification-user.module#NotificationUserPageModule', name: 'NotificationUserPage', segment: 'notification-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/users/home-user/home-user.module#HomeUserPageModule', name: 'HomeUserPage', segment: 'home-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-restaurant/home-restaurant.module#HomeRestaurantPageModule', name: 'HomeRestaurantPage', segment: 'home-restaurant', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurants/home-restaurant/home-restaurant.module#HomeRestaurantPageModule', name: 'HomeRestaurantPage', segment: 'home-restaurant', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification-restaurant/notification-restaurant.module#NotificationRestaurantPageModule', name: 'NotificationRestaurantPage', segment: 'notification-restaurant', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurants/notification-restaurant/notification-restaurant.module#NotificationRestaurantPageModule', name: 'NotificationRestaurantPage', segment: 'notification-restaurant', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_8__pages_users_userProfile_userProfile__["a" /* UserProfile */],
            __WEBPACK_IMPORTED_MODULE_12__pages_restaurants_userRestaurant_userRestaurant__["a" /* UserRestaurant */],
            __WEBPACK_IMPORTED_MODULE_9__pages_users_register_register__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_10__pages_restaurants_registerRestaurants_registerRestaurants__["a" /* RegisterRestaurants */],
            __WEBPACK_IMPORTED_MODULE_11__pages_users_tabsUser_tabsUser__["a" /* TabsUser */],
            __WEBPACK_IMPORTED_MODULE_13__pages_restaurants_tabsRestaurant_tabsRestaurant__["a" /* TabsRestaurant */],
            __WEBPACK_IMPORTED_MODULE_17__pages_users_notification_user_notification_user__["a" /* NotificationUserPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_users_home_user_home_user__["a" /* HomeUserPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_users_setting_user_setting_user__["a" /* SettingUserPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_restaurants_home_restaurant_home_restaurant__["a" /* HomeRestaurantPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_restaurants_notification_restaurant_notification_restaurant__["a" /* NotificationRestaurantPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_service_service__["a" /* ServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_users_setting_user_setting_user__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_tabsUser_tabsUser__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_restaurants_tabsRestaurant_tabsRestaurant__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//user


//restaurants

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_users_tabsUser_tabsUser__["a" /* TabsUser */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_users_setting_user_setting_user__["a" /* SettingUserPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
        this.pagesRestaurant = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_restaurants_tabsRestaurant_tabsRestaurant__["a" /* TabsRestaurant */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_users_setting_user_setting_user__["a" /* SettingUserPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\ionic\BFood\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\ionic\BFood\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationUserPage = (function () {
    function NotificationUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationUserPage');
    };
    return NotificationUserPage;
}());
NotificationUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification-user',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\notification-user\notification-user.html"*/'<!--\n  Generated template for the NotificationUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n          Notifications\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/usuario.jpg">\n          </ion-avatar>\n          <h2>Finn</h2>\n          <h3>I\'m a big deal</h3>\n          <p>1 day ago</p>\n        </ion-item>\n    \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/usuario.jpg">\n          </ion-avatar>\n          <h2>Han</h2>\n          <h3>Look, kid...</h3>\n          <p>I\'ve got enough on my plate as it is, and I...</p>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\notification-user\notification-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NotificationUserPage);

//# sourceMappingURL=notification-user.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeUserPage = (function () {
    function HomeUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeUserPage');
    };
    return HomeUserPage;
}());
HomeUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-user',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\home-user\home-user.html"*/'<!--\n  Generated template for the HomeUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Home</ion-title>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n      </ion-navbar>\n    \n    \n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <ion-card>\n            \n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="../../assets/img/usuario.jpg">\n                </ion-avatar>\n                <h2>Marty McFly</h2>\n                <p>November 5, 1955</p>\n              </ion-item>\n            \n              <img src="../../assets/img/ld1.jpg">\n              <ion-card-content>\n                <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 Likes</div>\n                  </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comments</div>\n                  </button>\n                </ion-col>\n                <ion-col center text-center>\n                  <ion-note>\n                    11h ago\n                  </ion-note>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card>\n    </ion-content>\n'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\home-user\home-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], HomeUserPage);

//# sourceMappingURL=home-user.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';

var UserProfile = (function () {
    function UserProfile(navCtrl, navParams, alert, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.service = service;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = ["Favorites", "Recomendations"];
    }
    UserProfile.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    UserProfile.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    UserProfile.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    UserProfile.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    return UserProfile;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('SwipedTabsSlider'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]) === "function" && _a || Object)
], UserProfile.prototype, "SwipedTabsSlider", void 0);
UserProfile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userProfile',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\userProfile\userProfile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content parallax>\n\n  <div class="bg-imgProfile"></div>\n\n  <div class="main-cnt">\n\n    <img src="../../assets/img/userPhoto.png" class="avatar-img">\n\n    <ion-item *ngFor="let user of users">\n\n      <h1 text-center>{{user.nameUser}} {{user.lastName}}</h1>\n\n      <h1 text-center>{{user.nickname}}</h1>\n\n    </ion-item>\n\n    <div class="follow">\n\n      <ion-row>\n\n        <ion-col>\n\n            <div>Coupon</div> \n\n            <div>10</div>\n\n          </ion-col>\n\n      <ion-col>\n\n        <div>Followers</div> \n\n        <div>10</div>\n\n      </ion-col>\n\n    <ion-col>\n\n      <div>Following</div>\n\n      <div>3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n    </div>\n\n    \n\n    \n\n    <div padding>\n\n      <ion-segment [(ngModel)]="pet">\n\n        <ion-segment-button value="fav">\n\n          Favorites\n\n        </ion-segment-button>\n\n        <ion-segment-button value="rec">\n\n          Recomendations\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="pet">\n\n        <ion-list *ngSwitchCase="\'fav\'">\n\n          <ion-item>\n\n            <ion-card>\n\n              <img src="../../assets/img/ld1.jpg" />\n\n              <ion-card-content *ngFor="let user of users">\n\n                <ion-card-title>\n\n                  <!--h1>{{user.NOMBRE_USUARIO}}</h1-->\n\n                  Nine Inch Nails Live\n\n                </ion-card-title>\n\n                <p>\n\n                  The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n                </p>\n\n              </ion-card-content>\n\n    \n\n              <ion-row>\n\n                <ion-col>\n\n                  <button ion-button icon-left clear small>\n\n            <ion-icon name="thumbs-up"></ion-icon>\n\n            <div>12 Likes</div>\n\n          </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button ion-button icon-left clear small>\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>4 Comments</div>\n\n          </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-card>\n\n          </ion-item>\n\n        </ion-list>\n\n    \n\n    \n\n    \n\n        <ion-list *ngSwitchCase="\'rec\'">\n\n          <ion-item>\n\n            <ion-card>\n\n              <img src="../../assets/img/ld1.jpg" />\n\n              <ion-card-content>\n\n                <ion-card-title>\n\n                  Nine Inch Nails Live\n\n                </ion-card-title>\n\n                <p>\n\n                  The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n                </p>\n\n              </ion-card-content>\n\n    \n\n              <ion-row>\n\n                <ion-col>\n\n                  <button ion-button icon-left clear small>\n\n            <ion-icon name="thumbs-up"></ion-icon>\n\n            <div>12 Likes</div>\n\n          </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button ion-button icon-left clear small>\n\n            <ion-icon name="text"></ion-icon>\n\n            <div>4 Comments</div>\n\n          </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-card>\n\n    \n\n    \n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n\n\n  </div>\n\n\n\n\n\n  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\userProfile\userProfile.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]) === "function" && _e || Object])
], UserProfile);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=userProfile.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userProfile_userProfile__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_user_notification_user__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_user_home_user__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsUser = (function () {
    function TabsUser(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1root = __WEBPACK_IMPORTED_MODULE_4__home_user_home_user__["a" /* HomeUserPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_3__notification_user_notification_user__["a" /* NotificationUserPage */];
        this.tab3root = __WEBPACK_IMPORTED_MODULE_2__userProfile_userProfile__["a" /* UserProfile */];
    }
    return TabsUser;
}());
TabsUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabsUser',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\tabsUser\tabsUser.html"*/'<ion-content padding>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2root" tabTitle="Notifications" tabIcon="notifications"></ion-tab>\n\n    <ion-tab [root]="tab3root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\tabsUser\tabsUser.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], TabsUser);

//# sourceMappingURL=tabsUser.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsRestaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userRestaurant_userRestaurant__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_restaurant_home_restaurant__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_restaurant_notification_restaurant__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsRestaurant = (function () {
    function TabsRestaurant(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1root = __WEBPACK_IMPORTED_MODULE_3__home_restaurant_home_restaurant__["a" /* HomeRestaurantPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_4__notification_restaurant_notification_restaurant__["a" /* NotificationRestaurantPage */];
        this.tab3root = __WEBPACK_IMPORTED_MODULE_2__userRestaurant_userRestaurant__["a" /* UserRestaurant */];
    }
    return TabsRestaurant;
}());
TabsRestaurant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabsRestaurant',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\restaurants\tabsRestaurant\tabsRestaurant.html"*/'<ion-content padding>\n\n    <ion-tabs>\n\n        <ion-tab [root]="tab1root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n        <ion-tab [root]="tab2root" tabTitle="Notifications" tabIcon="notifications"></ion-tab>\n\n        <ion-tab [root]="tab3root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n    </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\restaurants\tabsRestaurant\tabsRestaurant.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], TabsRestaurant);

//# sourceMappingURL=tabsRestaurant.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRestaurant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';
//import { Slides } from 'ionic-angular';
//import { DataTablesModule } from 'angular-datatables';
//import { Geolocation } from '@ionic-native/geolocation';
var UserRestaurant = (function () {
    function UserRestaurant(navCtrl /*, private geolocation: Geolocation*/) {
        this.navCtrl = navCtrl; /*, private geolocation: Geolocation*/
    }
    return UserRestaurant;
}());
UserRestaurant = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userRestaurant',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\restaurants\userRestaurant\userRestaurant.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="bg-imgProfile">\n\n        <img src="../../assets/img/ld1.jpg">\n\n    </div>\n\n    \n\n    <div class="main-cnt">\n\n        <h1 text-center>Restaurant</h1>\n\n        <div class="follow">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div>Followers</div>\n\n                    <div>10</div>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div>Views</div>\n\n                    <div>3</div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n\n\n        <div padding>\n\n            <ion-segment [(ngModel)]="restaurants">\n\n                <ion-segment-button value="info">\n\n                    Infomation\n\n                </ion-segment-button>\n\n                <ion-segment-button value="menu">\n\n                    Menu\n\n                </ion-segment-button>\n\n                <ion-segment-button value="reservation">\n\n                    Reservations\n\n                </ion-segment-button>\n\n                <ion-segment-button value="location">\n\n                    Location\n\n                </ion-segment-button>\n\n            </ion-segment>\n\n        </div>\n\n\n\n        <div [ngSwitch]="restaurants">\n\n            <ion-list *ngSwitchCase="\'info\'">\n\n                <ion-item>\n\n                    <ion-card>\n\n                        <ion-card-content *ngFor="let user of users">\n\n                            <ion-card-title>\n\n                                <!--h1>{{user.NOMBRE_USUARIO}}</h1-->\n\n                                Information\n\n                            </ion-card-title>\n\n                            <p>\n\n                                Information about restaurant or bar.\n\n                            </p>\n\n                        </ion-card-content>\n\n                        <ion-card-content *ngFor="let user of users">\n\n                            <ion-card-title>\n\n                                <!--h1>{{user.NOMBRE_USUARIO}}</h1-->\n\n                                TimeTable\n\n                            </ion-card-title>\n\n                            <p>\n\n                                Schedule when is opened\n\n                            </p>\n\n                        </ion-card-content>\n\n                    </ion-card>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n\n\n\n\n            <ion-list *ngSwitchCase="\'menu\'">\n\n                <ion-item>\n\n                    <ion-card>\n\n                        <img src="../../assets/img/ld1.jpg" />\n\n                        <ion-card-content>\n\n                            <ion-card-title>\n\n                                Plate 1\n\n                            </ion-card-title>\n\n                            <p>\n\n                                Description about plate 1\n\n                            </p>\n\n                        </ion-card-content>\n\n\n\n                        <ion-row>\n\n                            <ion-col>\n\n                                <button ion-button icon-left clear small>\n\n                                    <ion-icon name="thumbs-up"></ion-icon>\n\n                                    <div>12 Likes</div>\n\n                                 </button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'reservation\'">\n\n                    <ion-item>\n\n                        \n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n            \n\n                <ion-list *ngSwitchCase="\'location\'">\n\n                        <ion-item>\n\n                                <ion-card>\n\n                                        \n\n                                          <img src="../../assets/img/ld1.jpg">\n\n                                          <ion-fab right top>\n\n                                            <button ion-fab>\n\n                                              <ion-icon name="pin"></ion-icon>\n\n                                            </button>\n\n                                          </ion-fab>\n\n                                        \n\n                                          <ion-item>\n\n                                            <ion-icon name="football" item-start large></ion-icon>\n\n                                            <h2>MSucursal 1</h2>\n\n                                            <p>11 N. Way St, Madison, WI 53703</p>\n\n                                          </ion-item>\n\n                                        \n\n                                          <ion-item>\n\n                                            <ion-icon name="wine" item-left large ></ion-icon>\n\n                                            <h2>Sucursal 2</h2>\n\n                                            <p>14 S. Hop Avenue, Madison, WI 53703</p>\n\n                                          </ion-item>\n\n                                        \n\n                                          <ion-item>\n\n                                            <span item-left>18 min</span>\n\n                                            <span item-left>(2.6 mi)</span>\n\n                                            <button ion-button icon-left clear item-end>\n\n                                              <ion-icon name="navigate"></ion-icon>\n\n                                              Start\n\n                                            </button>\n\n                                          </ion-item>\n\n                                        \n\n                                        </ion-card>\n\n                        </ion-item>\n\n                    </ion-list>\n\n\n\n\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\restaurants\userRestaurant\userRestaurant.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] /*, private geolocation: Geolocation*/])
], UserRestaurant);

//# sourceMappingURL=userRestaurant.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingUserPage = (function () {
    function SettingUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingUserPage');
    };
    return SettingUserPage;
}());
SettingUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting-user',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\setting-user\setting-user.html"*/'<!--\n  Generated template for the SettingUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\setting-user\setting-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingUserPage);

//# sourceMappingURL=setting-user.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabsUser_tabsUser__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


var Register = (function () {
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
    function Register(navCtrl, NavParams, service, alertCtrl /*,
      private formBuilder: FormBuilder*/) {
        this.navCtrl = navCtrl;
        this.NavParams = NavParams;
        this.service = service;
        this.alertCtrl = alertCtrl; /*,
      private formBuilder: FormBuilder*/
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
    Register.prototype.login = function () {
        var alert = this.alertCtrl.create({
            title: 'User created',
            subTitle: 'Now you can enter',
            buttons: ['OK']
        });
        alert.present();
    };
    //ENVIA A LA BASE LOS DATOS LOS DATOS PARA REGISTRARLOS
    Register.prototype.sendData = function (req) {
        var _this = this;
        this.service.dataRegisterUser(req.value)
            .subscribe(function (data) {
            _this.showAlert(data.mensaje);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabsUser_tabsUser__["a" /* TabsUser */]);
            console.log(data.mensaje);
        }, function (err) { return console.log(err); });
    };
    Register.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({
            title: 'Informacion',
            subTitle: men,
            buttons: ['OK']
        });
        alert.present();
    };
    Register.prototype.goLogged = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabsUser_tabsUser__["a" /* TabsUser */]);
    };
    return Register;
}());
Register = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\users\register\register.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>User Registration</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h3>BFood</h3>\n\n  <form #f="ngForm" (ngSubmit)="sendData(f)">\n\n  \n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Name</ion-label>\n\n        <ion-input type="name" placeholder="Name" name="name" ngModel #name = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Last Name</ion-label>\n\n        <ion-input type="name" placeholder="Last Name" name="lastName" ngModel #lastName = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Nickname</ion-label>\n\n        <ion-input type="name" placeholder="Nickname" name="nickname" ngModel #nickname = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Birthday</ion-label>\n\n        <ion-datetime displayFormat="D/MM/YYYY" pickerFormat="D MMMM YYYY" [(ngModel)]="myDate" name="birthday" ngModel #birthday = "ngModel"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Address</ion-label>\n\n        <ion-input type="name" placeholder="Address" name="address" ngModel #address = "ngModel"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Phone</ion-label>\n\n        <ion-input type="number" placeholder="Phone" name="phone" ngModel #phone = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Gender</ion-label>\n\n        <ion-select [(ngModel)]="gaming" name="gender" ngModel #gender = "ngModel">\n\n          <ion-option value="Female">Female</ion-option>\n\n          <ion-option value="Masculine">Masculine</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Email</ion-label>\n\n        <ion-input type="email" placeholder="Email Input" name="email" ngModel #email = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Password</ion-label>\n\n        <ion-input type="password" placeholder="Password Input" name="password" ngModel #password = "ngModel"></ion-input>\n\n      </ion-item>\n\n      <button ion-button full color="light" (click)="goLogged()">Register</button>\n\n    </ion-list>\n\n  </form>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\users\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] /*,
      private formBuilder: FormBuilder*/])
], Register);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRestaurants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabsRestaurant_tabsRestaurant__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterRestaurants = (function () {
    function RegisterRestaurants(navCtrl, navParams, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
    }
    RegisterRestaurants.prototype.login = function () {
        var alert = this.alertCtrl.create({
            title: 'User created',
            subTitle: 'Now you can enter',
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterRestaurants.prototype.sendData = function (req) {
        var _this = this;
        this.service.dataRegisterRestaurant(req.value)
            .subscribe(function (data) {
            _this.showAlert(data.mensaje);
            // this.navCtrl.setRoot(UserProfile);
            console.log(data.mensaje);
        }, function (err) { return console.log(err); });
    };
    RegisterRestaurants.prototype.showAlert = function (men) {
        var alert = this.alertCtrl.create({
            title: 'Informacion',
            subTitle: men,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterRestaurants.prototype.goLogged = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabsRestaurant_tabsRestaurant__["a" /* TabsRestaurant */]);
    };
    return RegisterRestaurants;
}());
RegisterRestaurants = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registerRestaurants',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\restaurants\registerRestaurants\registerRestaurants.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Restaurant Registration</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h3>BFood</h3>\n\n\n\n  <form #f="ngForm" (ngSubmit)="sendData(f)">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Name</ion-label>\n\n        <ion-input type="name" placeholder="Name" name="name" ngModel #name = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Address</ion-label>\n\n        <ion-input type="name" placeholder="Address" name="address" ngModel #address = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Phone</ion-label>\n\n        <ion-input type="number" placeholder="Phone" name="phone" ngModel #phone = "ngModel"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Foundation year</ion-label>\n\n        <ion-datetime displayFormat="D/MM/YYYY" pickerFormat="D MMMM YYYY" [(ngModel)]="myDate" name="birthdate" ngModel #birthdate = "ngModel"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Pay Mode</ion-label>\n\n        <ion-select [(ngModel)]="gaming" name="pay_mode" ngModel #payMode = "ngModel">\n\n          <ion-option value="Monthly">Monthly</ion-option>\n\n          <ion-option value="Quarterly">Quarterly</ion-option>\n\n          <ion-option value="Annual">Annual</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Email</ion-label>\n\n        <ion-input type="email" placeholder="Email Input" name="email" ngModel #email = "ngModel"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label color="primary" stacked>Password</ion-label>\n\n        <ion-input type="password" placeholder="Password Input" name="password" ngModel #password = "ngModel"></ion-input>\n\n      </ion-item>\n\n      <button ion-button full color="light" (click)="goLogged()">Register</button>\n\n    </ion-list>\n\n\n\n  </form>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\restaurants\registerRestaurants\registerRestaurants.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
], RegisterRestaurants);

//# sourceMappingURL=registerRestaurants.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomeRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeRestaurantPage = (function () {
    function HomeRestaurantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeRestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeRestaurantPage');
    };
    return HomeRestaurantPage;
}());
HomeRestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-restaurant',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\restaurants\home-restaurant\home-restaurant.html"*/'<!--\n  Generated template for the HomeRestaurantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/img/usuario.jpg">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <img src="../../assets/img/ld1.jpg">\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\ionic\BFood\src\pages\restaurants\home-restaurant\home-restaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], HomeRestaurantPage);

//# sourceMappingURL=home-restaurant.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationRestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationRestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationRestaurantPage = (function () {
    function NotificationRestaurantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationRestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationRestaurantPage');
    };
    return NotificationRestaurantPage;
}());
NotificationRestaurantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification-restaurant',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\restaurants\notification-restaurant\notification-restaurant.html"*/'<!--\n  Generated template for the NotificationRestaurantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Notifications</ion-title>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n      </ion-navbar>\n    \n    \n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <ion-list>\n            <ion-list-header>\n              Notifications\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/img/usuario.jpg">\n              </ion-avatar>\n              <h2>Finn</h2>\n              <h3>I\'m a big deal</h3>\n              <p>1 day ago</p>\n            </ion-item>\n        \n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/img/usuario.jpg">\n              </ion-avatar>\n              <h2>Han</h2>\n              <h3>Look, kid...</h3>\n              <p>I\'ve got enough on my plate as it is, and I...</p>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n'/*ion-inline-end:"C:\ionic\BFood\src\pages\restaurants\notification-restaurant\notification-restaurant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NotificationRestaurantPage);

//# sourceMappingURL=notification-restaurant.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        //api para la conexion con la base de datos
        this.api = 'http://localhost/ionic/db_bfood/';
        this.emailNickname = '';
        this.loggedIn = false;
    }
    //enlista los datos
    ServiceProvider.prototype.getData = function () {
        return this.http.get(this.api + 'listar.php').map(function (res) { return res.json(); });
    };
    //envia los datos para registrar los usuarios
    ServiceProvider.prototype.dataRegisterUser = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "insertarUsuario.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    //envia los datos para registrar los resturantes
    ServiceProvider.prototype.dataRegisterRestaurant = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "insertarRestaurante.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    ServiceProvider.prototype.informationUserLogged = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.api + "informationUserLogged.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json(); });
    };
    //verifica si el usuario esta en la base de datos y si la contraseña es correcta
    ServiceProvider.prototype.login = function (userInfo) {
        var _this = this;
        var url = "" + (this.api + 'loginAutenticacion.php');
        var iJon = JSON.stringify(userInfo);
        return this.http.post(url, iJon, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json'
            })
        })
            .map(function (res) { return res.text(); })
            .map(function (res) {
            if (res == "false") {
                _this.loggedIn = false;
            }
            else {
                localStorage.setItem('token', res);
                _this.emailNickname = userInfo.emailNickname;
                console.log(res);
                _this.loggedIn = true;
            }
            return _this.loggedIn;
        });
    };
    ServiceProvider.prototype.logout = function () {
        localStorage.removeItem('token');
        this.emailNickname = '';
        this.loggedIn = false;
    };
    ServiceProvider.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ServiceProvider);

//# sourceMappingURL=service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map