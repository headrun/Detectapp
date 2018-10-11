webpackJsonp([3],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageModule", function() { return PostdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postdetail__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostdetailPageModule = /** @class */ (function () {
    function PostdetailPageModule() {
    }
    PostdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postdetail__["a" /* PostdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postdetail__["a" /* PostdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__postdetail__["a" /* PostdetailPage */]
            ]
        })
    ], PostdetailPageModule);
    return PostdetailPageModule;
}());

//# sourceMappingURL=postdetail.module.js.map

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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostdetailPage; });
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
 * Generated class for the PostdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostdetailPage = /** @class */ (function () {
    function PostdetailPage(navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.postData = {};
        this.groupData = {};
        this.commentsData = [];
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        this.postid = '';
        this.groupid = '';
        this.cmtid = '';
        this.postData = this.navParams.get('postData');
        this.postid = this.postData['postid'];
        this.groupData = this.navParams.get('groupData');
        this.groupid = this.groupData['groupid'];
        this.index = this.navParams.get('index');
        this.navToComment = this.navParams.get('comment');
        this.getCommentsData(this.groupid, this.postid, function (result) {
            _this.commentsData = result;
            console.log(_this.commentsData);
        });
    }
    PostdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostdetailPage');
    };
    PostdetailPage.prototype.getCommentsData = function (groupid, postid, callback) {
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
        var comments_data = [];
        var fullname;
        if (groupid != undefined && postid != undefined)
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByChild('parent_id').equalTo(postid).on('child_added', function (datasnapshot) {
                if (!datasnapshot.val().is_abuse) {
                    var isFound = false;
                    var obj_1 = {};
                    var u_phone = datasnapshot.val().commented_by;
                    var like_users = datasnapshot.val().like_users;
                    var likes_count = datasnapshot.val().likes_count;
                    obj_1['likes_count'] = likes_count;
                    if (like_users != undefined && like_users.length !== 0) {
                        for (var _i = 0, like_users_1 = like_users; _i < like_users_1.length; _i++) {
                            var u = like_users_1[_i];
                            if (u === phoneNumber) {
                                obj_1['cmtlike'] = 1;
                                isFound = true;
                                break;
                            }
                        }
                    }
                    if (!isFound) {
                        obj_1['cmtlike'] = 0;
                    }
                    var comment_text = datasnapshot.val().commented_text;
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(u_phone).on('child_added', function (childsnapshot) {
                        fullname = childsnapshot.val().firstName + ' ' + childsnapshot.val().lastName;
                        if (childsnapshot.val().profile_pic != undefined && childsnapshot.val().profile_pic != '') {
                            obj_1['pro_img'] = childsnapshot.val().profile_pic;
                        }
                        else {
                            obj_1['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
                        }
                    });
                    obj_1['comment_text'] = comment_text;
                    obj_1['name'] = fullname;
                    obj_1['cmtkey'] = datasnapshot.key;
                    comments_data.push(obj_1);
                }
            });
        callback(comments_data);
    };
    PostdetailPage.prototype.addCmt = function () {
        var _this = this;
        if (this.postData['cmt_text'] == undefined || this.postData['cmt_text'] == '') {
            return;
        }
        var postid = this.postid;
        var groupid = this.groupid;
        var user_phone = this.phoneNumber;
        var created_at = new Date().getTime();
        var cmt_text = this.postData['cmt_text'];
        this.postData['cmt_text'] = '';
        var comment = { 'commented_by': user_phone, 'commented_text': cmt_text, 'created_at': created_at, 'modified_at': created_at, 'parent_id': postid, 'like_users': [''], 'likes_count': 0, 'is_abuse': false };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').push(comment).then(function (res) {
            var cmt_count = _this.postData['comments_count'];
            cmt_count += 1;
            _this.postData['comments_count'] = cmt_count;
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').child(postid).update({ 'comments_count': cmt_count }).then(function (res) {
                console.log(res);
            });
            var lctrl = _this.toastCtrl.create({
                message: 'Commented Successfully.',
                duration: 2000,
            });
            lctrl.present();
        }, function (err) {
            var lctrl = _this.toastCtrl.create({
                message: 'Please check the newtwork connection.',
                duration: 2000,
            });
            lctrl.present();
            console.log('Comment not saved');
        });
    };
    PostdetailPage.prototype.actionBtn = function (typ, index) {
        var _this = this;
        var groupid = this.groupid;
        var postData = this.postData;
        var postid = postData['postid'];
        var user_phone = this.phoneNumber;
        if (typ === 'like') {
            var flag = this.overrideIfExist(groupid, user_phone, postid);
            if (!flag) {
                if (this.user) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').orderByKey().equalTo(postid).on('child_added', function (datasnapshot) {
                        var obj = datasnapshot.val();
                        obj.like_users.push(user_phone);
                        obj.likes_count += 1;
                        _this.postData['postlike'] = 1;
                        _this.postData['likes_count'] += 1;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').child(postid).set(obj).then(function (res) {
                            console.log('successfully updated!!!');
                        }, function (err) {
                            console.log('caught the theif...');
                        });
                        ;
                    });
                }
            }
        }
        else if (typ === 'abuse') {
            if (this.user) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').orderByKey().equalTo(postid).on('child_added', function (datasnapshot) {
                    var postObj = datasnapshot.val();
                    if (!postObj.is_abuse) {
                        postObj.is_abuse = true;
                    }
                    console.log(postObj);
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').child(postid).set(postObj).then(function (res) {
                        console.log('post abused');
                        localStorage.setItem('index', _this.index.toString());
                        _this.navCtrl.pop();
                    }, function (err) {
                        console.log('Something went wrong!');
                    });
                });
            }
        }
        else if (typ === 'cmtlike') {
            var cmtkey_1 = this.commentsData[index]['cmtkey'];
            if (this.user) {
                var cmtlike_1 = this.commentsData[index]['cmtlike'];
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByKey().equalTo(cmtkey_1).on('child_added', function (datasnapshot) {
                    var cmtData = datasnapshot.val();
                    if (!cmtlike_1) {
                        _this.commentsData[index]['cmtlike'] = 1;
                        cmtData['likes_count'] += 1;
                        cmtData['like_users'].push(_this.phoneNumber);
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey_1).set(cmtData).then(function (res) {
                            console.log('successfully liked');
                        }, function (err) {
                            console.log('something went wrong!');
                        });
                    }
                    else {
                        _this.commentsData[index]['cmtlike'] = 0;
                        cmtData['likes_count'] -= 1;
                        cmtData['like_users'].splice(cmtData['like_users'].indexOf(_this.phoneNumber), 1);
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey_1).set(cmtData).then(function (res) {
                            console.log('unliked successfully!');
                        }, function (err) {
                            console.log('something went wrong');
                        });
                    }
                });
            }
        }
        else if (typ === 'cmtabuse') {
            if (this.user) {
                var cmtkey_2 = this.commentsData[index]['cmtkey'];
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByKey().equalTo(cmtkey_2).on('child_added', function (datasnapshot) {
                    var cmtData = datasnapshot.val();
                    cmtData.is_abuse = true;
                    _this.commentsData.splice(_this.commentsData.indexOf(_this.commentsData[index]), 1);
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey_2).set(cmtData).then(function (res) {
                        console.log('comment abused');
                    }, function (err) {
                        console.log('something went wrong!');
                    });
                });
            }
        }
    };
    PostdetailPage.prototype.overrideIfExist = function (groupid, user_phone, postid) {
        var gid = groupid;
        var u_phone = user_phone;
        var pid = postid;
        var flag = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(gid + '_posts').orderByKey().equalTo(pid).on('child_added', function (datasnapshot) {
            var obj = datasnapshot.val();
            var likes_data = obj.like_users;
            for (var _i = 0, likes_data_1 = likes_data; _i < likes_data_1.length; _i++) {
                var phone = likes_data_1[_i];
                if (phone === u_phone) {
                    likes_data.splice(likes_data.indexOf(u_phone), 1);
                    obj['likes_users'] = likes_data;
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').child(postid).set(obj).then(function (res) {
                        console.log('successfully updated!!!');
                    }, function (err) {
                        console.log('caught the theif...');
                    });
                    flag = true;
                    return flag;
                }
            }
        });
        return flag;
    };
    PostdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postdetail',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/postdetail/postdetail.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Post Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="post-header">\n    <ion-col col-3>{{postData.created_at | date}}</ion-col>\n    <ion-col offset-7 col-2><img src="{{postData.pro_img}}" alt=""  id="pro-img"></ion-col>\n  </ion-row>\n\n  <ion-row class="user-profile">\n    <ion-col col-2>\n      <img src="{{postData.pro_img}}" alt="" id="pro-img">\n    </ion-col>\n    <ion-col class="user-details" col-10>\n      <ion-row class="u-name">{{postData.name}}</ion-row>\n      <ion-row class="role">{{postData.role}} &bull; {{postData.spec}}</ion-row>\n      <ion-row class="post-date">{{postData.created_at | date}}</ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="postData.post_image != \'\'">\n    <ion-col>\n      <img src="{{postData.post_image}}" alt="" id="post-img" height="300px">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="post-desc">\n      {{postData.post}}\n    </ion-col>\n  </ion-row>\n  <ion-row class="actionbar">\n    <div>\n      <ion-col><button (click)="actionBtn(\'like\')" [ngClass]="{\'color\':postData.postlike}" class="non-btn">Like</button></ion-col>\n      <ion-col><button (click)="actionBtn(\'abuse\')" class="non-btn">Report</button></ion-col>\n    </div>\n    <div>\n      <ion-col class="likes_count"><img src="assets/imgs/Like.png" alt="" id="like" style="top:-1px; left:-28px; position: relative;"><span style="left: -20px; top: -3px; position: relative;">{{postData.likes_count}}</span></ion-col>\n      <ion-col class="cmt_count"><img src="assets/imgs/comment.png" alt="" id="chat" style="top:1px; left:-20px; position: relative;"><span  style="position: relative; top: -2px; left:-13px">{{postData.comments_count}}</span></ion-col>\n    </div>\n  </ion-row>\n  <ion-row class="cmt-sec">\n    <ion-col col-2><img src="{{postData.pro_img}}" alt="" id="pro-img"></ion-col>\n    <ion-col col-10><input type="text" placeholder="write a comment" [(ngModel)]="postData.cmt_text" style="width:100%" id="text_cmt"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-9 col-3><img src="assets/imgs/Post.png" alt="" (click)="addCmt()" id="post-btn"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      {{postData.comments_count}} Comments\n    </ion-col>\n  </ion-row>\n  <div>\n    <ion-row *ngFor="let cmt of commentsData; index as i">\n      <ion-col offset-1 col-2 class="cmt-img">\n        <img src="{{cmt.pro_img}}" alt="" id="pro-img">\n      </ion-col>\n      <ion-col col-9 class="cmt-txt">\n        <ion-row style="font-family: Assistant-Bold">{{cmt.name}}</ion-row>\n        <ion-row>{{cmt.comment_text}}</ion-row>\n        <ion-row class="cmt-action">\n          <ion-col col-2><button (click)="actionBtn(\'cmtlike\', i)" [ngClass]="{\'btncolor\':cmt.cmtlike}" class="btn">Like</button></ion-col>\n          <ion-col col-2><button (click)="actionBtn(\'cmtabuse\', i)" class="btn">Report</button></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf="commentsData.length == 0" class="mpty-data-msg">No Comments</div>\n</ion-content>\n<footer [ic_active]="3"></footer>\n</ion-content>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/postdetail/postdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PostdetailPage);
    return PostdetailPage;
}());

//# sourceMappingURL=postdetail.js.map

/***/ })

});
//# sourceMappingURL=3.js.map