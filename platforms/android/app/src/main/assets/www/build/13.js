webpackJsonp([13],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, _app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._app = _app;
        this.alertCtrl = alertCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SettingsPage');
        // var showprofile = this.showprofile;
        // var that = this;
        // var profilename = that.profilename;
        //
        // firebase.auth().onAuthStateChanged(function(user){
        //   if(user){
        //     firebase.database().ref('userDetails').orderByChild('userid').on('value', function(snapshot){
        //       snapshot.forEach(function(childsnap){
        //         if(childsnap.val().userid === user.uid){
        //           that.profilename = childsnap.val().firstName+" "+childsnap.val().lastName;
        //           console.log(that.profilename);
        //         }
        //       });
        //     });
        //   }
        //
        // });
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(this.user.phoneNumber).on('child_added', function (snapshot) {
                if (snapshot.val().profile_pic != undefined && snapshot.val().profile_pic != '') {
                    _this.pro_img = snapshot.val().profile_pic;
                }
                else {
                    _this.pro_img = 'assets/imgs/pro_pic_placeholder.png';
                }
            });
        }
    };
    SettingsPage.prototype.logout = function () {
        var navCtrl = this.navCtrl;
        var _app = this._app;
        var alert = this.alertCtrl.create({
            title: 'Log Out',
            message: 'Are you sure you want to Logout?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        // window.localStorage.removeItem('token');
                        // _app.getRootNav().setRoot(HomePage).then((res) => {
                        //       // let index = 1;
                        //       navCtrl.remove(navCtrl.getPrevious().index);
                        //     });
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
                            _app.getRootNav().setRoot("HomePage").then(function (res) {
                                navCtrl.remove(navCtrl.getPrevious().index);
                            });
                        }).catch(function (error) {
                            //console.log(error)
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage.prototype.profilecard = function () {
        // var navCtrl = this.navCtrl;
        this.navCtrl.push("ProfilecreationPage");
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <!-- <ion-navbar color="dark">\n    <ion-title style="text-align:center">Settings</ion-title>\n  </ion-navbar> -->\n  <div style="position: relative; top:0; width:100%;">\n    <div>\n    <img src="assets/imgs/header.png" alt="">\n    </div>\n    <div class="container">\n      <img src="assets/imgs/belowheader.png" alt="" style="width:100%; position: absolute; top: -23px; left:0; z-index:-1;">\n      <div class="bottom-left">SETTINGS</div>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n      <!-- <ion-list>\n        <ion-item>\n          <img src="assets/imgs/pro_pic_placeholder.png" alt="img" id="dmns">\n          <h5 class="align-text">EDIT MY ACCOUNT</h5>\n        </ion-item>\n      </ion-list> -->\n\n      <ion-card (click) = "profilecard()">\n\n        <ion-card-content>\n\n            <!-- assets/imgs/pro_pic_placeholder.png {{this.pro_img}}-->\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{pro_img}}" style="width: 80px; height:80px;">\n              </ion-avatar>\n              <h2 class = "user-name"style="color:#000000;">EDIT MY PROFILE</h2>\n            </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <button ion-button full style="background-color:#8CD396; position:fixed; bottom: 45px; height: 60px; font-family: Assistant-Bold;" (click) = "logout()">LOG OUT</button>\n\n        <!-- <ion-col col-6 (click) = "logout()">\n         <ion-icon class = "icon-size" name="log-out" color="danger"></ion-icon>\n         <span class="logout-text"> Logout </span>\n       </ion-col> -->\n\n  <!-- <button style="margin-top:20px;"(click) = "logout()" color="danger" ion-button round block>Logout</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=13.js.map