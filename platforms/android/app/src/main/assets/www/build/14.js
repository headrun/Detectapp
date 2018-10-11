webpackJsonp([14],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.firstName = "";
        this.lastName = "";
        this.emailAddress = "";
        this.specialisation = "";
        this.designation = "";
        this.general = "";
        this.experience = "";
        this.onco = "";
        this.showSpecialisation = false;
        this.showOnco = false;
        this.showGeneral = false;
        this.group_id = [];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.saveprofile = function () {
        var _this = this;
        var navCtlr = this.navCtrl;
        var navParams = this.navParams;
        var toastCtrl = this.toastCtrl;
        var date = new Date().getTime();
        var count = 0;
        if (this.firstName === '') {
            var toast = toastCtrl.create({
                message: 'Please enter your first name',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        if (this.lastName === '') {
            var toast = toastCtrl.create({
                message: 'Please enter your last name',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        if (this.emailAddress === '') {
            var toast = toastCtrl.create({
                message: 'Please enter valid email Address',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        if (this.designation === '') {
            var toast = toastCtrl.create({
                message: 'Please select your designation',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        if (this.specialisation === '') {
            var toast = toastCtrl.create({
                message: 'Please select your specialisation',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        if (this.showGeneral) {
            if (this.general === '') {
                var toast = toastCtrl.create({
                    message: 'Please select your general pathology',
                    duration: 1000,
                });
                toast.present();
                return false;
            }
        }
        if (this.showOnco) {
            if (this.onco === '') {
                var toast = toastCtrl.create({
                    message: 'Please select your oncopathology',
                    duration: 1000,
                });
                toast.present();
                return false;
            }
        }
        if (this.experience === '') {
            var toast = toastCtrl.create({
                message: 'Please select your experince',
                duration: 1000,
            });
            toast.present();
            return false;
        }
        console.log('working');
        // var user = firebase.auth().currentUser;
        var userid = window.localStorage.getItem('accountId').replace("\"", "").replace("\"", "");
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var obj = {
            firstName: this.firstName,
            lastName: this.lastName,
            emailId: this.emailAddress,
            role: this.designation,
            specialisation: this.specialisation,
            generalPathology: this.general,
            oncopathology: this.onco,
            experience: this.experience,
            createdAt: date,
            updatedAt: date,
            deletedAt: '',
            createdBy: '',
            updatedBy: '',
            deletedBy: '',
            userid: userid,
            mobileNo: phoneNumber,
            group_id: this.group_id,
            profile_pic: '',
            is_active: true
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails/').push(obj).then(function (res) {
            console.log(res);
        });
        this.navCtrl.push("NewsPagex").then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ProfilePage.prototype.DesignationFn = function () {
        var _this = this;
        console.log(this.designation);
        if (this.designation.toLowerCase() === "Doctor".toLowerCase()) {
            this.showSpecialisation = true;
        }
        else {
            var designation = this.designation;
            this.showSpecialisation = false;
            this.showGeneral = false;
            this.showOnco = false;
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().on('child_added', function (datasnapshot) {
                var spec_list = datasnapshot.val().specialization;
                for (var _i = 0, spec_list_1 = spec_list; _i < spec_list_1.length; _i++) {
                    var spec = spec_list_1[_i];
                    if (spec.toLowerCase() === designation.toLowerCase()) {
                        _this.group_id.push(datasnapshot.key);
                        var obj = datasnapshot.val();
                        obj['followers'] += 1;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').child(datasnapshot.key).set(obj).then(function (onFullFilled) {
                            console.log('Followers updated successfully!');
                        }, function (err) {
                            console.log('Follwers problem');
                        });
                    }
                }
            });
        }
    };
    ProfilePage.prototype.specialisationFn = function () {
        console.log(this.specialisation);
        if (this.specialisation.toLowerCase() === "General Pathology".toLowerCase()) {
            this.showGeneral = true;
            this.showOnco = false;
        }
        else if (this.specialisation.toLowerCase() === "Oncopathology".toLowerCase()) {
            this.showGeneral = false;
            this.showOnco = true;
        }
    };
    ProfilePage.prototype.generalFn = function () {
        var _this = this;
        var general = this.general;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().on('child_added', function (datasnapshot) {
            var spec_list = datasnapshot.val().specialization;
            for (var _i = 0, spec_list_2 = spec_list; _i < spec_list_2.length; _i++) {
                var spec = spec_list_2[_i];
                if (spec.toLowerCase() === general.toLowerCase()) {
                    _this.group_id.push(datasnapshot.key);
                    var obj = datasnapshot.val();
                    obj['followers'] += 1;
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').child(datasnapshot.key).set(obj).then(function (onFullFilled) {
                        console.log('Followers updated successfully!');
                    }, function (err) {
                        console.log('Follwers problem');
                    });
                }
            }
        });
    };
    ProfilePage.prototype.oncoFn = function () {
        var _this = this;
        console.log(this.onco);
        var onco = this.onco;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().on('child_added', function (datasnapshot) {
            var spec_list = datasnapshot.val().specialization;
            for (var _i = 0, spec_list_3 = spec_list; _i < spec_list_3.length; _i++) {
                var spec = spec_list_3[_i];
                if (spec === onco) {
                    _this.group_id.push(datasnapshot.key);
                    var obj = datasnapshot.val();
                    obj['followers'] += 1;
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').child(datasnapshot.key).set(obj).then(function (onFullFilled) {
                        console.log('Followers updated successfully!');
                    }, function (err) {
                        console.log('Follwers problem');
                    });
                }
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title >Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>First Name<span style="color:#F8200A">*</span> </ion-label>\n    <ion-input [(ngModel)]="firstName" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="lastName" type="text"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-label floating>Phone No <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="phoneNo" type="number"></ion-input>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label floating>Email Address <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="emailAddress" type="email"></ion-input>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;">\n    <ion-label>Designation <span style="color:#F8200A">*</span></ion-label>\n    <ion-select [(ngModel)]="designation" (ionChange)="DesignationFn()">\n      <ion-option value="Doctor">Doctor</ion-option>\n      <ion-option value="Student">Student</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;" *ngIf="showSpecialisation">\n    <ion-label>Specialisation</ion-label>\n    <ion-select [(ngModel)]="specialisation" (ionChange)="specialisationFn()">\n      <ion-option value="General Pathology">General Pathology</ion-option>\n      <ion-option value="Oncopathology">Oncopathology</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;" *ngIf="showGeneral">\n    <ion-label>General Pathology</ion-label>\n    <ion-select [(ngModel)]="general" (ionChange)="generalFn()">\n      <ion-option value="Haematopathology">Haematopathology</ion-option>\n      <ion-option value="Histopathology">Histopathology</ion-option>\n      <ion-option value="Clinical pathology">Clinical pathology</ion-option>\n      <ion-option value="Molecular Pathology">Molecular Pathology</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item style="margin-top:10px;" *ngIf="showOnco">\n      <ion-label>Oncopathology</ion-label>\n      <ion-select [(ngModel)]="onco" (ionChange)="oncoFn()">\n        <ion-option value="Hemato Oncopathology">Hemato Oncopathology</ion-option>\n        <ion-option value="Histo Oncopathology">Histo Oncopathology</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <ion-item *ngIf="showSpecialisation">\n    <ion-label floating>Experience(yrs)</ion-label>\n    <ion-input [(ngModel)]="experience" type="number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <button type="button" (click) = "saveprofile()" style="margin-top:20px; padding-top:20px; padding-bottom:20px;" color="secondary" ion-button block>Save</button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=14.js.map