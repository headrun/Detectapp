webpackJsonp([5],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpostPageModule", function() { return NewpostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newpost__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewpostPageModule = /** @class */ (function () {
    function NewpostPageModule() {
    }
    NewpostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newpost__["a" /* NewpostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newpost__["a" /* NewpostPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__newpost__["a" /* NewpostPage */]
            ]
        })
    ], NewpostPageModule);
    return NewpostPageModule;
}());

//# sourceMappingURL=newpost.module.js.map

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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostPage; });
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
 * Generated class for the NewpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewpostPage = /** @class */ (function () {
    function NewpostPage(navCtrl, navParams, toastCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.groupData = this.navParams.get('groupData');
    }
    NewpostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewpostPage');
    };
    NewpostPage.prototype.onFileChange = function (event) {
        this.imgfiles = event.target.files[0];
    };
    NewpostPage.prototype.publishNewPost = function () {
        var _this = this;
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var newpost = this.newpost;
        this.newpost = '';
        document.getElementById('imgfile')['value'] = '';
        var imgfile = this.imgfiles;
        this.imgfiles = '';
        var groupid = this.groupData['groupid'];
        if (imgfile == undefined && newpost == undefined) {
            return;
        }
        if (imgfile != '' && imgfile != undefined) {
            this.lctr = this.loadCtrl.create({
                content: 'Publishing New Post...'
            });
            this.lctr.present();
            this.saveNewPostImgData(imgfile, function (imgUrl) {
                var postObj = { 'comments_count': 0, 'created_at': new Date().getTime(), 'is_abuse': false, 'is_active': true, 'is_pinned': 0, 'like_users': [''], 'likes_count': 0, 'modified_at': new Date().getTime(), 'post': newpost, 'post_image': imgUrl, 'posted_by': phoneNumber };
                console.log(postObj);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').push(postObj).then(function (res) {
                    var tctrl = _this.toastCtrl.create({
                        message: 'Posted Successfully.',
                        duration: 2000,
                    });
                    _this.lctr.dismiss();
                    tctrl.present();
                    _this.navCtrl.pop();
                }, function (err) {
                    var tctrl = _this.toastCtrl.create({
                        message: 'Something went wrong.',
                        duration: 2000,
                    });
                    tctrl.present();
                });
            });
        }
        else {
            this.lctr = this.loadCtrl.create({
                content: 'Publishing New Post...'
            });
            this.lctr.present();
            var postObj = { 'comments_count': 0, 'created_at': new Date().getTime(), 'is_abuse': false, 'is_active': true, 'is_pinned': 0, 'like_users': [''], 'modified_at': new Date().getTime(), 'likes_count': 0, 'post': newpost, 'post_image': '', 'posted_by': phoneNumber };
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').push(postObj).then(function (res) {
                var tctrl = _this.toastCtrl.create({
                    message: 'Posted Successfully.',
                    duration: 2000,
                });
                _this.lctr.dismiss();
                tctrl.present();
                _this.navCtrl.pop();
            }, function (err) {
                _this.lctr.dismiss();
                var lctrl = _this.toastCtrl.create({
                    message: 'Something went wrong.',
                    duration: 2000,
                });
                lctrl.present();
            });
        }
    };
    NewpostPage.prototype.saveNewPostImgData = function (file, callback) {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('All_Image_Uploads');
        var name = (+new Date()) + '-' + file.name;
        var task = ref.child(name).put(file);
        file = '';
        task.on('state_changed', function (snapshot) {
            var progress = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100;
            if (progress === 100) {
            }
        }, function (err) {
            console.log('image not uploaded');
        }, function () {
            task.snapshot.ref.getDownloadURL().then(function (downloadUrl) {
                callback(downloadUrl);
            });
        });
    };
    NewpostPage.prototype.openFile = function () {
        document.getElementById('imgfile').click();
    };
    NewpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpost',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/newpost/newpost.html"*/'<!--\n  Generated template for the NewpostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>New Post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <input type="file" id="imgfile" (change)="onFileChange($event)" accept="image/*" capture style="display: none;">\n      <img src="assets/imgs/upload_img.png" alt="" id="fileupload" style="cursor: pointer;" (click)="openFile()">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <textarea name="newpost" id="newpost" cols="30" [(ngModel)]="newpost" rows="10" placeholder="Write here..."></textarea>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-8 style="padding-right: 0; position: relative; right: -3px;">\n      <img src="assets/imgs/Post.png" alt="" id="postbtn" (click)="publishNewPost()" >\n    </ion-col>\n  </ion-row>\n</ion-content>\n<footer [ic_active]="3"></footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/newpost/newpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], NewpostPage);
    return NewpostPage;
}());

//# sourceMappingURL=newpost.js.map

/***/ })

});
//# sourceMappingURL=5.js.map