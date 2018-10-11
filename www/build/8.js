webpackJsonp([8],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreationPageModule", function() { return EventCreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_creation__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventCreationPageModule = /** @class */ (function () {
    function EventCreationPageModule() {
    }
    EventCreationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_creation__["a" /* EventCreationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_creation__["a" /* EventCreationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__event_creation__["a" /* EventCreationPage */]
            ]
        })
    ], EventCreationPageModule);
    return EventCreationPageModule;
}());

//# sourceMappingURL=event-creation.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer__ = __webpack_require__(313);
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

/***/ 313:
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
            case 5: {
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
            selector: "footer",template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/components/footer/footer.html"*/'<ion-footer>\n  <div class="tabs-sec">\n    <div class="newsPage">\n      <img src="assets/imgs/ic_news.png" id="news-tab-icon" (click)="tabCheck(1)" *ngIf="ic_active == 1">\n      <img src="assets/imgs/Inactive_News.png" id="news-tab-icon" (click)="tabCheck(1)" *ngIf="ic_active != 1">\n      <p (click)="tabCheck(1)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 1}">NEWS</p>\n    </div>\n    <div class="eventPage">\n      <img src="assets/imgs/ic_events.png" id="event-tab-icon" (click)="tabCheck(2)" *ngIf="ic_active == 2">\n      <img src="assets/imgs/Inactive_Events.png" id="event-tab-icon" (click)="tabCheck(2)" *ngIf="ic_active != 2">\n      <p (click)="tabCheck(2)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 2}">EVENTS</p>\n    </div>\n    <div class="groupPage">\n      <img src="assets/imgs/ic_groups.png" id="group-tab-icon" (click)="tabCheck(3)" *ngIf="ic_active == 3">\n      <img src="assets/imgs/Inactive_Groups.png" id="group-tab-icon" (click)="tabCheck(3)" *ngIf="ic_active != 3">\n      <p (click)="tabCheck(3)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 3}">GROUPS</p>\n    </div>\n    <!-- <div class="ChatPage">\n      <img src="assets/imgs/comments.png" id="chat-tab-icon" (click)="tabCheck(4)" *ngIf="ic_active == 4">\n      <img src="assets/imgs/Inactive_Comments.png" id="chat-tab-icon" (click)="tabCheck(4)" *ngIf="ic_active != 4">\n      <p (click)="tabCheck(4)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 4}">CHATS</p>\n    </div> -->\n    <div class="profilePage">\n      <img src="assets/imgs/ic_settings.png" id="profile-tab-icon" (click)="tabCheck(5)" *ngIf="ic_active == 5">\n      <img src="assets/imgs/Inactive_Settings.png" id="profile-tab-icon" (click)="tabCheck(5)" *ngIf="ic_active != 5">\n      <p (click)="tabCheck(5)" class="footer-text" [ngClass]="{\'tab-text-color\': ic_active == 5}">PROFILE</p>\n    </div>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreationPage; });
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



var EventCreationPage = /** @class */ (function () {
    function EventCreationPage(navCtrl, navParams, loadCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.months_list = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        this.months_list_short = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.week_days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.willflag = 2;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.goingCount = 0;
        this.usersGng = [];
        this.eventData = this.navParams.get('eventData');
        console.log(this.eventData);
        this.eventid = this.eventData.eventid;
        this.eventStartMonth = this.months_list[new Date(this.eventData['startDate']).getMonth()];
        this.eventStartDate = new Date(this.eventData['startDate']).getDate();
        this.eventEndDate = new Date(this.eventData['endDate']).getDate();
        this.eventStartMonth_short = this.months_list_short[new Date(this.eventData['startDate']).getMonth()];
        this.eventEndMonth_short = this.months_list_short[new Date(this.eventData['endDate']).getMonth()];
        this.eventStartDay = this.week_days[new Date(this.eventData['startDate']).getDay()];
        this.eventData['startDate'] = new Date(this.eventData['startDate']).toDateString();
    }
    EventCreationPage.prototype.ionViewDidLoad = function () {
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var that = this;
        that.goingCount = 0;
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(this.eventid + '#' + phoneNumber).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().eventid === that.eventid && datasnapshot.val().userid === phoneNumber) {
                    that.willflag = datasnapshot.val().willflag;
                }
            });
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().willflag === 1) {
                    that.goingCount += 1;
                }
            });
        }
    };
    EventCreationPage.prototype.showGoingPeople = function () {
        var _this = this;
        this.usersGng = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', function (datasnapshot) {
            if (datasnapshot.val().willflag == 1 && datasnapshot.val().userid !== '') {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(datasnapshot.val().userid).on('child_added', function (snapshot) {
                    var name = snapshot.val().firstName + ' ' + snapshot.val().lastName;
                    if (snapshot.val().profile_pic != undefined && snapshot.val().profile_pic != '') {
                        _this.usersGng.push({ 'name': name, 'pro_img': snapshot.val().profile_pic });
                    }
                    else {
                        _this.usersGng.push({ 'name': name, 'pro_img': 'assets/imgs/pro_pic_placeholder.png' });
                    }
                });
            }
        });
        this.navCtrl.push("ShowGoingUsersPage", {
            data: this.usersGng,
            header: 'Users'
        });
    };
    EventCreationPage.prototype.actionBtn = function (typ) {
        if (typ === 'speakers')
            this.navCtrl.push("SpeakersPage", { 'eventData': this.eventData });
        else if (typ === 'agenda')
            this.navCtrl.push("AgendaPage", { 'eventData': this.eventData });
        else if (typ === 'quiz')
            this.navCtrl.push("QuizPage", { 'eventData': this.eventData });
    };
    EventCreationPage.prototype.willingBtn = function (will) {
        var _this = this;
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var that = this;
        var eventid = this.eventData['eventid'];
        if (will === 'going') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var going = { 'eventid': eventid, 'userid': phoneNumber, 'willflag': 1, 'willIndex': eventid + '#' + phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').push(going).then(function (res) {
                            _this.willflag === 2 ? _this.goingCount += 1 : '';
                            _this.willflag = 1;
                            var tctrl = that.toastCtrl.create({
                                message: 'Your are going to event...',
                                duration: 2000,
                            });
                            tctrl.present();
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': 1 });
                            if (that.willflag != 1) {
                                _this.goingCount += 1;
                            }
                            that.willflag = 1;
                        });
                    }
                });
            }
        }
        else if (will === 'not going') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var notgoing = { 'eventid': eventid, 'userid': phoneNumber, 'willflag': -1, 'willIndex': eventid + '#' + phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').push(notgoing).then(function (res) {
                            that.willflag = -1;
                            var tctrl = that.toastCtrl.create({
                                message: 'Your are not going to event...',
                                duration: 2000,
                            });
                            tctrl.present();
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': -1 }).then(function (res) {
                                if (that.willflag != -1 && that.willflag != 0) {
                                    _this.goingCount -= 1;
                                }
                                that.willflag = -1;
                            });
                        });
                    }
                });
            }
        }
        else if (will === 'may be') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var maybe = { 'eventid': eventid, 'userid': phoneNumber, 'willflag': 0, 'willIndex': eventid + '#' + phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').push(maybe).then(function (res) {
                            that.willflag = 0;
                            var tctrl = that.toastCtrl.create({
                                message: 'You may go...',
                                duration: 2000,
                            });
                            tctrl.present();
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': 0 }).then(function (res) {
                                if (that.willflag != -1 && that.willflag != 0) {
                                    _this.goingCount -= 1;
                                }
                                that.willflag = 0;
                            });
                        });
                    }
                });
            }
        }
    };
    EventCreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-creation',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/event-creation/event-creation.html"*/'<!--\n  Generated template for the EventCreationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding style="padding-bottom:0; box-shadow:0 2px 8px 8px rgba(0,0,0,0.2)">\n    <ion-card-header>\n      <img src="{{eventData.images[0]}}" alt="" id="dimns">\n    </ion-card-header>\n    <ion-card-content style="padding:5px 0">\n      <ion-row>\n        <ion-col col-4 style="padding-left:0;">\n          <img src="../../assets/imgs/date_bg.png" alt="" id="date-dmns">\n          <div class="dates">\n            <p class="day">{{eventStartDay}}</p>\n            <p class="date">{{eventStartDate}}</p>\n            <p class="month">{{eventStartMonth}}</p>\n          </div>\n        </ion-col>\n        <ion-col col-5 class="event-title">\n          <span class="title">{{eventData.title_name}}</span>\n          <ion-row style="font-size:12px; position: relative; ">{{eventData.venue}}, {{eventData.city_name}}</ion-row>\n          <ion-row style="font-size:12px; position: relative;">{{eventStartDate}} {{eventStartMonth_short}} - {{eventEndDate}} {{eventEndMonth_short}}</ion-row>\n        </ion-col>\n        <ion-col col-3>\n          <a href="{{eventData.ticketUrl}}"><button type="button" ion-button class="book-btn" color="secondary">BOOK</button></a>\n        </ion-col>\n      </ion-row>\n      <ion-row offset-8 col-4 class="showgoing">\n        <img src="../../assets/imgs/Goin.png" alt="" id="gng-count"><button class="non-btn gng-btn" (click)="showGoingPeople()" type="button">{{goingCount}} Going</button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <ion-row padding class="actionbar" style="padding-bottom:0px; ">\n      <ion-col class="int" col-4 [ngClass]="{\'bgcolor\':willflag==1}" ><button (click)="willingBtn(\'going\')" class="non-btn btncolor" type="button" [ngClass]="{\'bgcolor\':willflag == 1}">Interested</button></ion-col>\n\n      <ion-col class="maybe" col-3 [ngClass]="{\'bgcolor\':willflag == 0}" style="width:10px; height: 35px;"><button type="button" class="non-btn btncolor" (click)="willingBtn(\'may be\')" [ngClass]="{\'bgcolor\':willflag == 0}">May be</button></ion-col>\n      \n      <ion-col class="notint" col-4 [ngClass]="{\'bgcolor\':willflag == -1}" style="width:20px; height: 35px;"><button type="button" class="non-btn btncolor" (click)="willingBtn(\'not going\')" [ngClass]="{\'bgcolor\':willflag == -1}">Not Interested</button></ion-col>\n    </ion-row>\n    <div class="desc" paddding style="padding: 0 16px;">\n      <h2 class="detail-header" >Descrption</h2>\n      <p class="detail-content">{{eventData.eventDesc}}</p>\n    </div>\n    <div class="navBtns">\n      <ion-row>\n        <ion-col col-4>\n          <button (click)="actionBtn(\'agenda\')" id="btn" ion-button color="secondary" style="border-radius: 4px;">AGENDA</button>\n        </ion-col>\n        <ion-col col-4>\n          <button (click)="actionBtn(\'speakers\')" id="btn" ion-button color="secondary" style="border-radius: 4px;">SPEAKERS</button>\n        </ion-col>\n        <ion-col col-4>\n          <img src="../../assets/imgs/quiz_butto.png" alt="" (click)="actionBtn(\'quiz\')" id="quizbtn">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-row>\n    <ion-col>\n      <a ion-button  full color="secondary" class="fd-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdKeitsNzvFuhtQjQVcP2EU3Sr9P0ZCtEqoSm0Z1qPNaAbFow/viewform">Feedback</a>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<footer [ic_active]="2"></footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/event-creation/event-creation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], EventCreationPage);
    return EventCreationPage;
}());

//# sourceMappingURL=event-creation.js.map

/***/ })

});
//# sourceMappingURL=8.js.map