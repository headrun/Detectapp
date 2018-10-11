webpackJsonp([4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]
            ]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

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

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(198);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, loadingCtrl, toastCtrl, detectChanges, netCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.detectChanges = detectChanges;
        this.netCtrl = netCtrl;
        this.newsData = [];
        this.newsIds = [];
        this.likesData = [];
        this.likeBtn = 0;
        this.cmtBtn = 0;
        this.isEmpty = false;
        this.likeMapping = { '=1': 'Like', 'other': 'Likes' };
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        // this.loadCtrl = this.loadingCtrl.create({
        //   content:'Please Wait...'
        // });
        // this.loadCtrl.present();
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        this.newsIcon = '1';
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.netCtrl.onchange().subscribe(function () {
            if (_this.netCtrl.type == 'none') {
                try {
                    // this.loadCtrl.dismiss();
                }
                catch (error) {
                }
                var tCtrl = _this.toastCtrl.create({
                    message: 'No Connection.',
                    duration: 3000,
                    cssClass: 't-style'
                });
                tCtrl.present();
            }
        });
        setTimeout(function () {
            _this.Getdata(function (result) {
                try {
                    // this.loadCtrl.dismiss();
                }
                catch (error) {
                }
                if (result.length == 0) {
                    _this.isEmpty = true;
                }
                else {
                    _this.newsData = result;
                }
            });
        }, 1000);
    };
    NewsPage.prototype.Getdata = function (callback) {
        var data = [];
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').on('child_added', function (childSnapshot) {
            if (childSnapshot.val().is_active) {
                var likeBtn = 0;
                var like_users = childSnapshot.val().like_users;
                if (like_users != undefined) {
                    for (var i = 0; i < like_users.length; i++) {
                        if (like_users[i] === phoneNumber) {
                            likeBtn = 1;
                        }
                    }
                }
                data.unshift({
                    'newsid': childSnapshot.key,
                    'title': childSnapshot.val().title,
                    'description': childSnapshot.val().min_desc,
                    'date': new Date(childSnapshot.val().news_date).toDateString(),
                    'source': childSnapshot.val().source,
                    'hyper_link': childSnapshot.val().hyper_link,
                    'images_links': childSnapshot.val().images_links,
                    'video_link': childSnapshot.val().video_link,
                    'likes_count': childSnapshot.val().likes_count,
                    'likeBtn': likeBtn
                });
            }
            callback(data);
        });
    };
    NewsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.Getdata(function (result) {
            if (result.length == 0) {
                _this.isEmpty = true;
            }
            else {
                _this.newsData = result;
            }
        });
        setTimeout(function () { refresher.complete(); }, 1000);
    };
    NewsPage.prototype.showLikedUsers = function (index) {
        var _this = this;
        var usernames = [];
        var newsid = this.newsData[index]['newsid'];
        var user_phones;
        new Promise(function (resloved, rejected) {
            try {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').orderByKey().equalTo(newsid).on('child_added', function (datasnapshot) {
                    var user_phones_data = datasnapshot.val().like_users;
                    resloved(user_phones_data);
                });
            }
            catch (error) {
                rejected(error);
            }
        }).then(function (res) {
            user_phones = res;
            for (var _i = 0, user_phones_1 = user_phones; _i < user_phones_1.length; _i++) {
                var u_phone = user_phones_1[_i];
                if (u_phone != undefined && u_phone != '') {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(u_phone).on('child_added', function (datasnapshot) {
                        var name = datasnapshot.val().firstName + ' ' + datasnapshot.val().lastName;
                        if (datasnapshot.val().profile_pic != undefined && datasnapshot.val().profile_pic != '') {
                            usernames.push({ 'name': name, 'pro_img': datasnapshot.val().profile_pic });
                        }
                        else {
                            usernames.push({ 'name': name, 'pro_img': 'assets/imgs/pro_pic_placeholder.png' });
                        }
                    });
                }
            }
            _this.navCtrl.push("ShowGoingUsersPage", { 'header': 'Users', 'data': usernames });
        }).catch(function (e) {
            var tctrl = _this.toastCtrl.create({
                message: e,
                duration: 2000
            });
            tctrl.present();
        });
    };
    NewsPage.prototype.actionBtn = function (typ, index) {
        var that = this;
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var newsId = this.newsData[index]['newsid'];
        if (that.user) {
            if (typ === 'like') {
                if (that.newsData[index].likeBtn === 0) {
                    if (that.user) {
                        if (true) {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').orderByKey().equalTo(newsId).on('child_added', function (datasnapshot) {
                                var newsObj = datasnapshot.val();
                                newsObj.likes_count += 1;
                                newsObj.like_users.push(phoneNumber);
                                that.newsData[index].likeBtn = 1;
                                that.newsData[index].likes_count += 1;
                                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').child(newsId).set(newsObj).then(function (res) {
                                    console.log('Successfully liked!!');
                                }, function (err) {
                                    console.log('Something Went...');
                                });
                            });
                        }
                    }
                }
                else {
                    if (that.user) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').orderByKey().equalTo(newsId).on('child_added', function (datasnapshot) {
                            var newsObj = datasnapshot.val();
                            newsObj.likes_count -= 1;
                            newsObj.like_users.splice(newsObj.like_users.indexOf(phoneNumber), 1);
                            that.newsData[index].likeBtn = 0;
                            that.newsData[index].likes_count -= 1;
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').child(newsId).set(newsObj).then(function (res) {
                                console.log('Successfully unliked!!');
                            }, function (err) {
                                console.log('Something Went...');
                            });
                        });
                    }
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], NewsPage.prototype, "slides", void 0);
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/news/news.html"*/'<ion-header>\n  <div>\n    <div class="head-container">\n      <img src="assets/imgs/green_header.png" id="green_header">\n      <img src="assets/imgs/detect_black.png" id="detect_black">\n      <span class="head-text">NEWS</span>\n    </div>\n  </div>\n </ion-header>\n<ion-content style="background-color:#ffffff;" >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="mpty-data-msg" *ngIf="this.isEmpty == true && newsData.length == 0">No NEWS</div>\n  <div class="content-style">\n    <ion-card *ngFor="let news of newsData; index as i" class="card-mod">\n      <ion-card-content>\n        <ion-row class="card-padding">\n        <ion-col col-4>\n          <img src="{{news.images_links[0]}}" id="img-dmns">\n        </ion-col>\n        <ion-col col-8>\n          <ion-row>\n            <h4 class="headline" style="font-size:16px;"><a href="{{news.hyper_link}}">{{news.title | uppercase}}</a></h4>\n          </ion-row>\n          <ion-row>\n            <span class="tagline">{{news.source}} &bull; {{news.date | date}}</span>\n            <p class="news-sec">{{news.description}}</p>\n          </ion-row>\n        </ion-col>\n        </ion-row>\n        <ion-row class="news-actions">\n        <ion-col col-4 class="middle"  *ngIf="news.likeBtn">\n          <img src="assets/imgs/like_active.png" alt=""(click)="actionBtn(\'like\', i)" class="news_like">\n          <button type="button" (click)="showLikedUsers(i)" class="btn news_likes_cnt">{{news.likes_count}}</button>\n        </ion-col>\n        <ion-col col-4 class="middle"  *ngIf="!news.likeBtn">\n          <img src="assets/imgs/like_inactive.png" alt="" (click)="actionBtn(\'like\', i)" class="news_like">\n          <button type="button" (click)="showLikedUsers(i)" class="btn news_likes_cnt">{{news.likes_count}}</button>\n        </ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<footer [ic_active]= "1"></footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=4.js.map