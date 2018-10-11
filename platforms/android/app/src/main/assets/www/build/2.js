webpackJsonp([2],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilecreationPageModule", function() { return ProfilecreationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilecreation__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilecreationPageModule = /** @class */ (function () {
    function ProfilecreationPageModule() {
    }
    ProfilecreationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilecreation__["a" /* ProfilecreationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilecreation__["a" /* ProfilecreationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profilecreation__["a" /* ProfilecreationPage */]
            ]
        })
    ], ProfilecreationPageModule);
    return ProfilecreationPageModule;
}());

//# sourceMappingURL=profilecreation.module.js.map

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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilecreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilecreationPage = /** @class */ (function () {
    function ProfilecreationPage(navCtrl, navParams, toastCtrl, loadCtrl, camera, _app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.camera = camera;
        this._app = _app;
        this.alertCtrl = alertCtrl;
        this.phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
    }
    ProfilecreationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilecreationPage');
        var that = this;
        var profiledesignation = that.profiledesignation;
        var profileemail = that.profileemail;
        var profilename = that.profilename;
        var profileFirstName = that.profileFirstName;
        var profileLastName = that.profileLastName;
        var ProfileMobNo = that.ProfileMobNo;
        var experience = that.experience;
        var profile_pic = that.myphoto;
        var lctrl = this.loadCtrl.create({
            content: "Please Wait..."
        });
        lctrl.present();
        var mobileNo;
        var localNo;
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        //  var user = firebase.auth().currentUser;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
            snapshot.forEach(function (childsnap) {
                mobileNo = childsnap.val().mobileNo.toString();
                localNo = phoneNumber;
                if (mobileNo == localNo) {
                    that.profiledesignation = childsnap.val().role;
                    that.profileemail = childsnap.val().emailId;
                    that.profilename = childsnap.val().firstName + " " + childsnap.val().lastName;
                    that.profileFirstName = childsnap.val().firstName;
                    that.profileLastName = childsnap.val().lastName;
                    that.ProfileMobNo = childsnap.val().mobileNo;
                    that.experience = childsnap.val().experience;
                    if (childsnap.val().profile_pic != undefined && childsnap.val().profile_pic != '') {
                        that.myphoto = childsnap.val().profile_pic;
                    }
                    else {
                        that.myphoto = 'assets/imgs/pro_pic_placeholder.png';
                    }
                }
            });
        });
        setTimeout(function () {
            lctrl.dismiss();
        }, 2000);
    };
    ProfilecreationPage.prototype.saveprofile = function () {
        var toastCtrl = this.toastCtrl;
        var profileFirstName = this.profileFirstName;
        var profileLastName = this.profileLastName;
        var experience = this.experience;
        var profileemail = this.profileemail;
        var date = new Date().getTime();
        var mobileNo;
        var localNo;
        // var user = firebase.auth().currentUser;
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
            snapshot.forEach(function (childsnap) {
                localNo = phoneNumber;
                mobileNo = childsnap.val().mobileNo.toString();
                if (mobileNo == localNo) {
                    var finalData = {
                        firstName: profileFirstName,
                        lastName: profileLastName,
                        emailId: profileemail,
                        role: childsnap.val().role,
                        specialisation: childsnap.val().specialisation,
                        generalPathology: childsnap.val().generalPathology,
                        oncopathology: childsnap.val().oncopathology,
                        experience: experience,
                        createdAt: date,
                        updatedAt: date,
                        deletedAt: '',
                        createdBy: '',
                        updatedBy: '',
                        deletedBy: '',
                        profile_pic: childsnap.val().profile_pic,
                        userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
                        // userid: phoneNumber,
                        mobileNo: childsnap.val().mobileNo,
                        group_id: childsnap.val().group_id
                    };
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').child(childsnap.key).set(finalData).then(function () {
                    });
                    var toast = toastCtrl.create({
                        message: 'Profile Updated',
                        duration: 1000,
                    });
                    toast.present();
                }
            });
        });
    };
    ProfilecreationPage.prototype.takePhoto = function () {
        var _this = this;
        try {
            var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
            var profileFirstName = this.profileFirstName;
            var profileLastName = this.profileLastName;
            var experience = this.experience;
            var profileemail = this.profileemail;
            var date = new Date().getTime();
            var mobileNo = void 0;
            var localNo = void 0;
            var options = {
                quality: 70,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
                // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                // saveToPhotoAlbum:false
            };
            this.camera.getPicture(options).then(function (imagedata) {
                _this.myphoto = 'data:image/jpeg;base64,' + imagedata;
                // console.log("myphoto -----"+this.myphoto.target);
                var files = _this.myphoto;
                _this.uploadImage(_this.myphoto);
                // const photo = 'data:image/jpeg;base64,'+imagedata;
            }, function (err) {
                alert(err);
            });
            // Upload the file and metadata
        }
        catch (err) {
            console.log(JSON.stringify(err));
        }
    };
    ProfilecreationPage.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var lctrl = _this.loadCtrl.create({
                content: "Please Wait..."
            });
            lctrl.present();
            var profileFirstName = _this.profileFirstName;
            var profileLastName = _this.profileLastName;
            var experience = _this.experience;
            var profileemail = _this.profileemail;
            var date = new Date().getTime();
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
            var imageRef = storageRef.child('image').child(date + 'profile');
            var mobileNo;
            var localNo;
            var photoUrl;
            var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
            var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    // console.log(snapshot.downloadURL);
                    snapshot.ref.getDownloadURL().then(function (dwnldurl) {
                        photoUrl = dwnldurl;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
                            snapshot.forEach(function (childsnap) {
                                mobileNo = childsnap.val().mobileNo.toString();
                                // localNo = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
                                localNo = phoneNumber;
                                if (mobileNo == localNo) {
                                    var finalData = {
                                        firstName: profileFirstName,
                                        lastName: profileLastName,
                                        emailId: profileemail,
                                        role: childsnap.val().role,
                                        specialisation: childsnap.val().specialisation,
                                        generalPathology: childsnap.val().generalPathology,
                                        oncopathology: childsnap.val().oncopathology,
                                        experience: experience,
                                        createdAt: date,
                                        updatedAt: date,
                                        deletedAt: '',
                                        createdBy: '',
                                        updatedBy: '',
                                        deletedBy: '',
                                        profile_pic: dwnldurl,
                                        userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
                                        //  userid: user.uid,
                                        mobileNo: childsnap.val().mobileNo,
                                        group_id: childsnap.val().group_id
                                    };
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').child(childsnap.key).set(finalData).then(function () {
                                        lctrl.dismiss();
                                    });
                                }
                                else {
                                    lctrl.dismiss();
                                }
                            });
                        });
                    }, function (err) {
                        reject(err);
                    });
                });
            });
        });
    };
    ProfilecreationPage.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    ProfilecreationPage.prototype.logout = function () {
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
                            //  navCtrl.push(HomePage);
                            _app.getRootNav().setRoot("HomePage").then(function (res) {
                                // let index = 1;
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
    ProfilecreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilecreation',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/profilecreation/profilecreation.html"*/'<ion-header>\n  <div>\n    <div class="head-container">\n      <img src="assets/imgs/green_header.png" id="green_header">\n      <img src="assets/imgs/detect_black.png" id="detect_black">\n      <span class="head-text">PROFILE</span>\n    </div>\n  </div>\n </ion-header>\n\n\n<ion-content>\n  <div style="background-image:url(\'assets/imgs/profile.png\'); width: 100%; height: 100px; z-index:10; margin-top: 0px; padding-top: 0px; position: relative; top: 10px;"></div>\n\n<div class="row pro-style" >\n  <img (click) = "takePhoto()" class="circle-pic" src= "{{ myphoto }}" >\n    <div class="profile-info">\n      <h3 style="margin-top:80px; font-family:Assistant-Bold;"> {{profilename}} </h3>\n      <p style="margin-bottom: 0px; margin-top:-10px;"> {{profiledesignation}} </p>\n      <p style="margin-top: 0px;"> {{ProfileMobNo}} </p>\n  </div>\n</div>\n\n<ion-scroll class="profile-list" style="height:300px;">\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input [(ngModel)]="profileFirstName" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input [(ngModel)]="profileLastName" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input [(ngModel)]="profileemail" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Experience(yrs)</ion-label>\n    <ion-input [(ngModel)]="experience" type="text"></ion-input>\n  </ion-item>\n\n</ion-scroll>\n\n<div style="display: flex; justify-content: center; position:fixed; bottom: 40px; height: 60px; z-index: 1000; width: 100%;">\n  <button ion-button full style="background-color:#8CD396; font-family:Assistant-Bold; box-shadow: 5px 10px; width: 50%; left: -2px;" (click) = "saveprofile()">UPDATE</button>\n  <button ion-button full style="background-color:#8CD396; font-family:Assistant-Bold; box-shadow: 5px 10px; width: 50%; right: -2px;" (click) = "logout()">LOGOUT</button>\n</div>\n<footer></footer>\n</ion-content>\n<footer [ic_active]="4"></footer>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/profilecreation/profilecreation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilecreationPage);
    return ProfilecreationPage;
}());

//# sourceMappingURL=profilecreation.js.map

/***/ })

});
//# sourceMappingURL=2.js.map