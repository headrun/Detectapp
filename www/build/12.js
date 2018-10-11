webpackJsonp([12],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowGoingUsersPageModule", function() { return ShowGoingUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_going_users__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowGoingUsersPageModule = /** @class */ (function () {
    function ShowGoingUsersPageModule() {
    }
    ShowGoingUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_going_users__["a" /* ShowGoingUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_going_users__["a" /* ShowGoingUsersPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__show_going_users__["a" /* ShowGoingUsersPage */]
            ]
        })
    ], ShowGoingUsersPageModule);
    return ShowGoingUsersPageModule;
}());

//# sourceMappingURL=show-going-users.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowGoingUsersPage; });
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



/**
 * Generated class for the ShowGoingUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowGoingUsersPage = /** @class */ (function () {
    function ShowGoingUsersPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.data = [];
        this.userAuth = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.lctrl = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctrl.present();
        this.data = navParams.get('data');
        this.header = navParams.get('header');
        this.groupid = navParams.get('groupid');
        this.postid = navParams.get('postid');
    }
    ShowGoingUsersPage.prototype.ionViewDidLoad = function () {
    };
    ShowGoingUsersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.data);
        if (this.data != undefined) {
            setTimeout(function () {
                _this.lctrl.dismiss();
            }, 100);
        }
    };
    ShowGoingUsersPage.prototype.actionBtn = function (typ, index) {
        var _this = this;
        var userid = this.userAuth.uid;
        var cmtkey = this.data[index]['cmtkey'];
        var cmtData = this.data[index];
        var groupid = this.groupid;
        var postid = this.postid;
        if (typ === 'like') {
            var flag = this.overrideIfExist(groupid, userid, postid, index, cmtkey);
            if (!flag) {
                if (this.userAuth) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByKey().equalTo(cmtkey).on('child_added', function (datasnapshot) {
                        var obj = datasnapshot.val();
                        var likes_count = obj.likes_count + 1;
                        _this.data[index]['likes_count'] += likes_count;
                        obj.like_users.push(userid);
                        obj['likes_count'] = likes_count;
                        _this.data[index]['cmtlike'] = 1;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey).set(obj).then(function (res) {
                            console.log('successfully liked!!!');
                        }, function (err) {
                            console.log('caught the theif...');
                        });
                    });
                }
            }
        }
        else if (typ === 'abuse') {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByKey().equalTo(cmtkey).on('child_added', function (datasnapshot) {
                var cmtObj = datasnapshot.val();
                if (!cmtObj.is_abuse) {
                    cmtObj.is_abuse = true;
                }
                _this.data.splice(_this.data.indexOf(cmtData), 1);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey).set(cmtObj).then(function (res) {
                    console.log('comment abused');
                }, function (err) {
                    console.log('something went wrong!');
                });
            });
        }
    };
    ShowGoingUsersPage.prototype.overrideIfExist = function (groupid, userid, postid, index, cmtkey) {
        var _this = this;
        var gid = groupid;
        var uid = userid;
        var flag = false;
        var cmtid = cmtkey;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(gid + '_replies').orderByKey().equalTo(cmtid).on('child_added', function (datasnapshot) {
            debugger;
            var obj = datasnapshot.val();
            var likes_data = obj.like_users;
            if (likes_data != undefined && likes_data.length != 0) {
                for (var _i = 0, likes_data_1 = likes_data; _i < likes_data_1.length; _i++) {
                    var id = likes_data_1[_i];
                    if (id === uid) {
                        likes_data.splice(likes_data.indexOf(id), 1);
                        obj['like_users'] = likes_data;
                        var likes_count = datasnapshot.val().likes_count;
                        likes_count -= 1;
                        _this.data[index]['likes_count'] = likes_count;
                        obj['likes_count'] = likes_count;
                        _this.data[index]['cmtlike'] = 0;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtid).set(obj).then(function (res) {
                            console.log('successfully updated!!!');
                        }, function (err) {
                            console.log('caught the theif...');
                        });
                        flag = true;
                        return flag;
                    }
                }
            }
        });
        return flag;
    };
    ShowGoingUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-going-users',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/show-going-users/show-going-users.html"*/'<!--\n  Generated template for the ShowGoingUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>{{header}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height:100%">\n  <div *ngIf="header === \'Comments\'">\n    <ion-list>\n      <ion-item *ngFor="let user of data; index as i">\n        <img src="{{user.pro_img}}" alt="img" id="dmns">\n        <div class="cmt-cnt">\n          <span>{{user.name}}</span>\n          <span *ngIf="user.comment_text" class="cmt-txt">{{user.comment_text}}</span>\n        </div>\n        <span class="like-count"><img src="../../assets/imgs/_7.png" id="limg" alt="like"> {{user.likes_count}}</span>\n        <div class="margin-left">\n          <span ><button type="button" (click)="actionBtn(\'like\',i)" class="non-btn" [ngClass]="{\'color\':user.cmtlike}">Like</button></span>\n          <span><button type="button" class="non-btn" (click)="actionBtn(\'abuse\', i)">Abuse</button></span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="header === \'Users\'">\n    <ion-list>\n      <ion-item *ngFor="let user of data">\n        <img src="{{user.pro_img}}" alt="" id="dmns">\n        <h5 class="align-text">{{user.name}}</h5>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/show-going-users/show-going-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ShowGoingUsersPage);
    return ShowGoingUsersPage;
}());

//# sourceMappingURL=show-going-users.js.map

/***/ })

});
//# sourceMappingURL=12.js.map