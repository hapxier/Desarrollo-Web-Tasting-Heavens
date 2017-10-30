webpackJsonp([11],{

/***/ 105:
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
        selector: 'page-home-user',template:/*ion-inline-start:"C:\ionic\BFood\src\pages\home-user\home-user.html"*/'<!--\n  Generated template for the HomeUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n      <ion-navbar>\n        <ion-title>Home</ion-title>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    \n      </ion-navbar>\n    \n    \n    \n    </ion-header>\n    \n    \n    <ion-content padding>\n        <ion-card>\n            \n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="../../assets/img/usuario.jpg">\n                </ion-avatar>\n                <h2>Marty McFly</h2>\n                <p>November 5, 1955</p>\n              </ion-item>\n            \n              <img src="../../assets/img/ld1.jpg">\n              <ion-card-content>\n                <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n              </ion-card-content>\n            \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>12 Likes</div>\n                  </button>\n                </ion-col>\n                <ion-col>\n                  <button ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>4 Comments</div>\n                  </button>\n                </ion-col>\n                <ion-col center text-center>\n                  <ion-note>\n                    11h ago\n                  </ion-note>\n                </ion-col>\n              </ion-row>\n            \n            </ion-card>\n    </ion-content>\n'/*ion-inline-end:"C:\ionic\BFood\src\pages\home-user\home-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], HomeUserPage);

//# sourceMappingURL=home-user.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeUserPageModule", function() { return HomeUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeUserPageModule = (function () {
    function HomeUserPageModule() {
    }
    return HomeUserPageModule;
}());
HomeUserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_user__["a" /* HomeUserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_user__["a" /* HomeUserPage */]),
        ],
    })
], HomeUserPageModule);

//# sourceMappingURL=home-user.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map