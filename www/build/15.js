webpackJsonp([15],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(198);
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, toastCtrl, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.code = "";
        this.isExist = false;
        this.timer = 60;
        this.splash = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // Recaptcha is initilaizing
        this.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function (response) {
                console.log(response);
            }
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.push("NewsPage").then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
        });
    };
    HomePage.prototype.loginUser = function () {
        var _this = this;
        var navCtrl = this.navCtrl;
        var isExist = this.isExist;
        this.splash = true;
        try {
            window.AccountKitPlugin.loginWithPhoneNumber({
                useAccessToken: true,
                defaultCountryCode: "IN",
                facebookNotificationsEnabled: true
            }, function (data) {
                window.AccountKitPlugin.getAccount(function (info) {
                    console.log(JSON.stringify(info));
                    window.localStorage.setItem('token', JSON.stringify(info));
                    window.localStorage.setItem('phoneNo', JSON.stringify(info.phoneNumber));
                    window.localStorage.setItem('accountId', JSON.stringify(info.accountId));
                    // var token = window.localStorage.getItem('token');
                    // alert(token);
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInAnonymously().then(function (suc) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
                            snapshot.forEach(function (childsnap) {
                                var _this = this;
                                console.log('mobNo----' + childsnap.val().mobileNo);
                                console.log('FirstName----' + childsnap.val().firstName);
                                console.log('fbKitPhn----' + info.phoneNumber);
                                console.log(childsnap.val().mobileNo == info.phoneNumber);
                                console.log(childsnap.val().firstName == '');
                                if (childsnap.val().mobileNo === info.phoneNumber) {
                                    setTimeout(function () {
                                        _this.navCtrl.push("NewsPage").then(function () {
                                            var index = _this.navCtrl.getActive().index;
                                            _this.navCtrl.remove(0, index);
                                        });
                                        _this.splash = false;
                                    }, 4000);
                                    isExist = true;
                                }
                            });
                            // console.log(isExist);
                            if (!isExist) {
                                navCtrl.push("ProfilePage", {
                                    phoneNo: info.phoneNumber,
                                    userid: info.accountId
                                });
                                this.splash = false;
                            }
                        });
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        this.splash = false;
                        // ...
                    });
                });
            }, function (err) {
                console.log(JSON.stringify(err));
                _this.splash = false;
            });
        }
        catch (e) {
            console.log(e);
            this.splash = false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/imgs/logo.svg">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header>\n</ion-header>\n<ion-content class="no-border" style="background-image:url(\'assets/imgs/loginb.png\');background-size: cover; height: 100%; width: 100%;" ion-fixed no-bounce>\n  <div id="recaptcha-container"></div>\n  <img src = "assets/imgs/loginheader.png" alt = "logo" class="login-header">\n  <div class="login-sec">\n    <!-- <input type="number" [(ngModel)]="phoneNumber" placeholder="Enter your Phone number" class="phone-field"> -->\n    <button type="button" (click) = "loginUser()" class = "loginbtn" ion-button>Login</button>\n  </div>\n  <hr class="border-line">\n  <div style="display: flex; justify-content: center; position:relative; top:30%;">\n    <img src = "assets/imgs/Facebook.png" alt = "logo" style="width:25%; height: 25%; position: relative; right: -15px;">\n    <img src = "assets/imgs/Twitter.png" alt = "logo" style="width:25%; height: 25%; position: relative; left:-15px;">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map