webpackJsonp([6],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
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
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__footer_footer__["a" /* FooterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__footer_footer__["a" /* FooterComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
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
 * Generated class for the MyTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.ic_active = 1;
    }
    FooterComponent.prototype.tabCheck = function (pagenumber) {
        switch (pagenumber) {
            case 1: {
                this.navCtrl.push("NewsPage");
                break;
            }
            case 2: {
                this.navCtrl.push("EventsPage");
                break;
            }
            case 3: {
                this.navCtrl.push("GroupPage");
                break;
            }
            case 4: {
                this.navCtrl.push("ProfilecreationPage");
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FooterComponent.prototype, "ic_active", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "footer",template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/components/footer/footer.html"*/'<ion-footer>\n  <div class="tabs-sec">\n    <div class="newsPage">\n      <img src="../../assets/imgs/ic_news.png" id="news-tab-icon" (click)="tabCheck(1)" *ngIf="ic_active == 1">\n      <img src="../../assets/imgs/Inactive_News.png" id="news-tab-icon" (click)="tabCheck(1)" *ngIf="ic_active != 1">\n      <p (click)="tabCheck(1)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 1}">NEWS</p>\n    </div>\n    <div class="eventPage">\n      <img src="../../assets/imgs/ic_events.png" id="event-tab-icon" (click)="tabCheck(2)" *ngIf="ic_active == 2">\n      <img src="../../assets/imgs/Inactive_Events.png" id="event-tab-icon" (click)="tabCheck(2)" *ngIf="ic_active != 2">\n      <p (click)="tabCheck(2)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 2}">EVENTS</p>\n    </div>\n    <div class="groupPage">\n      <img src="../../assets/imgs/ic_groups.png" id="group-tab-icon" (click)="tabCheck(3)" *ngIf="ic_active == 3">\n      <img src="../../assets/imgs/Inactive_Groups.png" id="group-tab-icon" (click)="tabCheck(3)" *ngIf="ic_active != 3">\n      <p (click)="tabCheck(3)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 3}">GROUPS</p>\n    </div>\n    <div class="profilePage">\n      <img src="../../assets/imgs/ic_settings.png" id="profile-tab-icon" (click)="tabCheck(4)" *ngIf="ic_active == 4">\n      <img src="../../assets/imgs/Inactive_Settings.png" id="profile-tab-icon" (click)="tabCheck(4)" *ngIf="ic_active != 4">\n      <p (click)="tabCheck(4)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 4}">PROFILE</p>\n    </div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
        this.splash = true;
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
        var navCtrl = this.navCtrl;
        var isExist = this.isExist;
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
                                    this.navCtrl.push("NewsPage").then(function () {
                                        var index = _this.navCtrl.getActive().index;
                                        _this.navCtrl.remove(0, index);
                                    });
                                    isExist = true;
                                }
                            });
                            // console.log(isExist);
                            if (!isExist) {
                                navCtrl.push("ProfilePage", {
                                    phoneNo: info.phoneNumber,
                                    userid: info.accountId
                                });
                            }
                        });
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        // ...
                    });
                });
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/home/home.html"*/'<ion-header>\n</ion-header>\n\n<ion-header>\n</ion-header>\n<ion-content class="no-border" style="background-image:url(\'assets/imgs/loginb.png\');background-size: cover; height: 100%; width: 100%;" ion-fixed no-bounce>\n  <div id="recaptcha-container"></div>\n  <img src = "assets/imgs/loginheader.png" alt = "logo" class="login-header">\n  <div class="login-sec">\n    <!-- <input type="number" [(ngModel)]="phoneNumber" placeholder="Enter your Phone number" class="phone-field"> -->\n    <button type="button" (click) = "loginUser()" class = "loginbtn" ion-button>Login</button>\n  </div>\n  <hr class="border-line">\n  <div style="display: flex; justify-content: center; position:relative; top:30%;">\n    <img src = "assets/imgs/Facebook.png" alt = "logo" style="width:25%; height: 25%; position: relative; right: -15px;">\n    <img src = "assets/imgs/Twitter.png" alt = "logo" style="width:25%; height: 25%; position: relative; left:-15px;">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map