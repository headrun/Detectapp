webpackJsonp([15],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.eventData = {};
        this.agendaData = {};
        this.sessionData = [];
        this.sessionFlag = false;
        this.eventData = this.navParams.get('eventData');
        this.lctrl = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctrl.present();
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
    };
    AgendaPage.prototype.ionViewWillEnter = function () {
        this.getAgendaDetails(this.eventData, this.lctrl);
    };
    AgendaPage.prototype.getAgendaDetails = function (event, lctrl) {
        var eve = event;
        var that = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('agendaDetails').orderByChild('event_id').equalTo(eve.eventid).on('child_added', function (datasnap) {
            that.agendaData = datasnap.val();
            that.sessionData = that.agendaData['session_data'];
            that.getSessionData(that.sessionData);
            that.agendaData = that.agendaData;
        });
    };
    AgendaPage.prototype.getSessionData = function (sess) {
        this.sessionData = [];
        var session = sess;
        var that = this;
        var fname, lname;
        var speakers_list = [];
        var _loop_1 = function (s) {
            session[s]['speakers_list'] = [];
            for (var _i = 0, _a = session[s].speaker; _i < _a.length; _i++) {
                var sp = _a[_i];
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('speakersDetails').orderByKey().equalTo(sp).on('child_added', function (datasnap) {
                    fname = datasnap.val().firstName;
                    lname = datasnap.val().lastName;
                    var name = fname + ' ' + lname;
                    session[s]['speakers_list'].push(name);
                });
            }
            session[s]['startTime'] = new Date(new Date(session[s]["startTime"]).getTime()).toLocaleString();
            session[s]['endTime'] = new Date(new Date(session[s]["endTime"]).getTime()).toLocaleString();
            that.sessionData.push(session[s]);
        };
        for (var s in session) {
            _loop_1(s);
        }
        console.log(that.sessionData);
        setTimeout(function () {
            that.lctrl.dismiss();
        }, 1000);
    };
    AgendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agenda',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/agenda/agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>AGENDA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <ion-card-header padding>\n        <div class="img-sec">\n          <img src="../../assets/imgs/date_bg.png" alt="" class="img-bg">\n          <img src="{{eventData.images[0]}}" alt="" id="dimns">\n        </div>\n      </ion-card-header>\n    </ion-card>\n    <div *ngFor="let session of sessionData; index as i" padding class="ses-sec">\n      <ion-row><ion-col><h5 style="font-weight: bold; color:#8CD396;">SESSION {{i + 1}}</h5></ion-col></ion-row>\n      <ion-row>\n        <ion-col col-1><ion-icon name="ios-mic-outline" style="font-size:26px;  color:#8CD396;"></ion-icon></ion-col>\n        <ion-col class="sprs_list" >\n          <span *ngFor="let sp of session.speakers_list; last as islast">\n            <span class="sprs" *ngIf="!islast">{{sp}},</span>\n            <span class="sprs" *ngIf="islast">{{sp}}</span>\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1><ion-icon name="ios-calendar-outline" style="font-size:26px; color:#8CD396;"></ion-icon></ion-col>\n        <ion-col class="ses-time">{{session.startTime | date}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1><ion-icon name="ios-clock-outline" style="font-size:26px; color:#8CD396;"></ion-icon></ion-col>\n        <ion-col class="ses-time">{{session.startTime | date: \'shortTime\'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          {{session.desc}}\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf="sessionData.length == 0" class="mpty-data-msg">No Agenda</div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/agenda/agenda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AgendaPage);
    return AgendaPage;
}());

//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postdetail_postdetail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newpost_newpost__ = __webpack_require__(113);
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
 * Generated class for the DetailViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailViewPage = /** @class */ (function () {
    function DetailViewPage(navCtrl, navParams, loadCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.pageData = {};
        this.pageRenderData = [];
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.index = localStorage.getItem('index');
        localStorage.removeItem('index');
        this.pageData = navParams.get('data');
    }
    DetailViewPage.prototype.ionViewDidLoad = function () {
        this.lctrl = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctrl.present();
    };
    DetailViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getGroupPosts(function (renderResult) {
            _this.pageRenderData = renderResult;
            if (_this.index) {
                _this.pageRenderData.splice(_this.index, 1);
                localStorage.removeItem('index');
            }
            _this.totalPosts = _this.pageRenderData.length;
            _this.lctrl.dismiss();
        });
    };
    DetailViewPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.getGroupPosts(function (renderResult) {
            _this.pageRenderData = renderResult;
            if (_this.index) {
                _this.pageRenderData.splice(_this.index, 1);
            }
            _this.totalPosts = _this.pageRenderData.length;
            setTimeout(function () { event.complete(); }, 1000);
        });
    };
    DetailViewPage.prototype.getGroupPosts = function (callback) {
        var _this = this;
        var renderData = [];
        var groupid = this.pageData['groupid'];
        var like = 0;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').on("child_added", function (snapshot) {
            if (!snapshot.val().is_abuse && (snapshot.val().post != '' || snapshot.val().post_image)) {
                var postobj_1 = snapshot.val();
                postobj_1['created_at'] = new Date(postobj_1.created_at).toDateString();
                postobj_1['postid'] = snapshot.key;
                for (var _i = 0, _a = postobj_1.like_users; _i < _a.length; _i++) {
                    var user_phone = _a[_i];
                    if (user_phone === _this.user.phoneNumber) {
                        postobj_1['postlike'] = 1;
                        like = 1;
                    }
                }
                if (!like) {
                    postobj_1['postlike'] = 0;
                }
                postobj_1['cmt_text'] = '';
                if (snapshot.val().posted_by != undefined && snapshot.val().posted_by != '') {
                    var user = snapshot.val().posted_by;
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(user).on('child_added', function (childsnapshot) {
                        postobj_1['name'] = childsnapshot.val().firstName + ' ' + childsnapshot.val().lastName;
                        postobj_1['role'] = childsnapshot.val().role;
                        if (postobj_1.role === 'Doctor') {
                            postobj_1['spec'] = childsnapshot.val().oncopathology != '' ? childsnapshot.val().oncopathology : childsnapshot.val().generalPathology;
                        }
                        if (childsnapshot.val().profile_pic != undefined && childsnapshot.val().profile_pic != '') {
                            postobj_1['pro_img'] = childsnapshot.val().profile_pic;
                        }
                        else {
                            postobj_1['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
                        }
                    });
                }
                else {
                    postobj_1['name'] = 'Anonymous';
                    postobj_1['role'] = 'Anonymous';
                    postobj_1['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
                }
                renderData.unshift(postobj_1);
            }
        });
        callback(renderData);
    };
    DetailViewPage.prototype.actionBtn = function (typ, index) {
        var _this = this;
        var groupid = this.pageData['groupid'];
        var postData = this.pageRenderData[index];
        var postid = postData['postid'];
        var user_phone = this.user.phoneNumber;
        if (typ === 'like') {
            var flag = this.overrideIfExist(groupid, user_phone, postid, index);
            if (!flag) {
                if (this.user) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').orderByKey().equalTo(postid).on('child_added', function (datasnapshot) {
                        var obj = datasnapshot.val();
                        obj.like_users.push(user_phone);
                        obj.likes_count += 1;
                        _this.pageRenderData[index]['postlike'] = 1;
                        _this.pageRenderData[index]['likes_count'] += 1;
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
        else if (typ === 'comment') {
            this.postDetail(index, true);
        }
        else if (typ === 'abuse') {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').orderByKey().equalTo(postid).on('child_added', function (datasnapshot) {
                var postObj = datasnapshot.val();
                if (!postObj.is_abuse) {
                    postObj.is_abuse = true;
                }
                console.log(postObj);
                _this.pageRenderData.splice(_this.pageRenderData.indexOf(postData), 1);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').child(postid).set(postObj).then(function (res) {
                    console.log('post abused');
                }, function (err) {
                    console.log('Something went wrong!');
                });
            });
        }
    };
    DetailViewPage.prototype.overrideIfExist = function (groupid, user_phone, postid, index) {
        var _this = this;
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
                    likes_data.splice(likes_data.indexOf(phone), 1);
                    obj['like_users'] = likes_data;
                    obj['likes_count'] = obj.likes_count - 1;
                    _this.pageRenderData[index]['postlike'] = 0;
                    _this.pageRenderData[index]['likes_count'] -= 1;
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
    DetailViewPage.prototype.addCmt = function (index) {
        var _this = this;
        var postid = this.pageRenderData[index]['postid'];
        var groupid = this.pageData['groupid'];
        var user_phone = this.user.phoneNumber;
        var created_at = new Date().getTime();
        var cmt_text = this.pageRenderData[index]['cmt_text'];
        this.pageRenderData[index]['cmt_text'] = '';
        var comment = { 'commented_by': user_phone, 'commented_text': cmt_text, 'created_at': created_at, 'modified_at': created_at, 'parent_id': postid, 'like_users': [''], 'likes_count': 0, 'is_abuse': false };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').push(comment).then(function (res) {
            var lctrl = _this.toastCtrl.create({
                message: 'Commented Successfully.',
                duration: 2000,
            });
            lctrl.present();
            console.log('Commented Succesfully');
        }, function (err) {
            var lctrl = _this.toastCtrl.create({
                message: 'Please check the newtwork connection.',
                duration: 2000,
            });
            lctrl.present();
            console.log('Comment not saved');
        });
    };
    DetailViewPage.prototype.getCommentsData = function (groupid, postid, callback) {
        var _this = this;
        var comments_data = [];
        var fullname;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').orderByChild('parent_id').equalTo(postid).on('child_added', function (datasnapshot) {
            if (!datasnapshot.val().is_abuse) {
                var isFound = false;
                var obj = {};
                var u_phone = datasnapshot.val().commented_by;
                var like_users = datasnapshot.val().like_users;
                var likes_count = datasnapshot.val().likes_count;
                obj['likes_count'] = likes_count;
                if (like_users != undefined && like_users.length !== 0) {
                    for (var _i = 0, like_users_1 = like_users; _i < like_users_1.length; _i++) {
                        var user_phone = like_users_1[_i];
                        if (user_phone === _this.user.phoneNumber) {
                            obj['cmtlike'] = 1;
                            isFound = true;
                            break;
                        }
                    }
                }
                if (!isFound) {
                    obj['cmtlike'] = 0;
                }
                var comment_text = datasnapshot.val().commented_text;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(u_phone).on('child_added', function (childsnapshot) {
                    fullname = childsnapshot.val().firstName + ' ' + childsnapshot.val().lastName;
                });
                obj['comment_text'] = comment_text;
                obj['name'] = fullname;
                obj['cmtkey'] = datasnapshot.key;
                if (datasnapshot.val().profile_pic != undefined && datasnapshot.val().profile_pic != '') {
                    obj['pro_img'] = datasnapshot.val().profile_pic;
                }
                else {
                    obj['pro_img'] = 'assets/imgs/pro_pic_placeholder.png';
                }
                comments_data.push(obj);
            }
        });
        callback(comments_data);
    };
    DetailViewPage.prototype.onFileChange = function (event) {
        this.imgfiles = event.target.files[0];
    };
    DetailViewPage.prototype.postDetail = function (index, comment) {
        var postData = this.pageRenderData[index];
        var groupData = this.pageData;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__postdetail_postdetail__["a" /* PostdetailPage */], { 'postData': postData, 'groupData': groupData, 'index': index, 'comment': comment });
    };
    DetailViewPage.prototype.newPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newpost_newpost__["a" /* NewpostPage */], { 'groupData': this.pageData });
    };
    DetailViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-view',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/detail-view/detail-view.html"*/'<!--\n  Generated template for the DetailViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Group Posts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row class="group_details-1" padding>\n    <ion-col class="img-sec">\n      <img src="{{pageData.images_links}}" alt="" id="grp-img">\n    </ion-col>\n    <ion-col class="fol-sec">\n      {{pageData.followers}} Followers\n    </ion-col>\n    <ion-col class="post-sec">\n      {{pageRenderData.length}} Posts\n    </ion-col>\n  </ion-row>\n  <ion-row class="group_details-2" padding>\n    <ion-col class="title-sec">\n      {{pageData.title}}\n    </ion-col>\n  </ion-row>\n  <ion-row class="about-sec" padding style="padding-bottom:0px;">\n    <ion-col>About</ion-col>\n  </ion-row>\n  <ion-row class="desc-sec" padding style="padding-top:0px">\n    <ion-col>\n      {{pageData.description}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-8 col-4 class="padding">\n      <img src="../../assets/imgs/new_post.png" alt="" id="new-post" (click)="newPost()">\n      <!-- <button type="button" ion-button round color="secondary">New Post</button> -->\n    </ion-col>\n  </ion-row>\n  <div *ngIf="pageRenderData.length == 0" class="mpty-data-msg">No Posts</div>\n  <ion-row *ngFor="let post of pageRenderData; index as i">\n    <ion-col>\n      <ion-card *ngIf="post.post != \'\' || post.post_image != \'\'">\n        <div (click)="postDetail(i)">\n          <ion-card-header>\n            <ion-row>\n              <ion-col col-2 class="pro-sec">\n                <img src="{{post.pro_img}}" alt="" id="pro-img">\n              </ion-col>\n              <ion-row *ngIf="post.name != \'\'">\n                <ion-col class="user-sec">\n                  <ion-row class="u-name">{{post.name}}</ion-row>\n                  <ion-row class="role">{{post.role}} &bull; {{post.spec}}</ion-row>\n                  <ion-row class="post-date">{{post.created_at}}</ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-row>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                <img src="{{post.post_image}}" alt="" id="post-img">\n              </ion-col>\n            </ion-row>\n            <ion-row class="postdesc-sec">\n              <ion-col class="postdesc-sec">{{post.post}}</ion-col>\n            </ion-row>\n          </ion-card-content>\n        </div>\n        <ion-row class="actionbar">\n          <div>\n            <ion-col><button (click)="actionBtn(\'like\', i)" [ngClass]="{\'color\':post.postlike}" class="non-btn">Like</button></ion-col>\n            <ion-col><button (click)="actionBtn(\'comment\', i)" class="non-btn">Comment</button></ion-col>\n          </div>\n          <div>\n            <ion-col class="likes_count"><img src="assets/imgs/Like.png" alt="" id="like" style="top:23px; position: relative;"><span style="left: -50px; top: 8px; position: relative;">{{post.likes_count}}</span></ion-col>\n            <ion-col class="cmt_count"><img src="assets/imgs/comment.png" alt="" id="chat" style="top:-26px; position: relative;"><span  style="position: relative; top: -42px;">{{post.comments_count}}</span></ion-col>\n          </div>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/detail-view/detail-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], DetailViewPage);
    return DetailViewPage;
}());

//# sourceMappingURL=detail-view.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
        var _this = this;
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
                            if (u === _this.user.phoneNumber) {
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
        var user_phone = this.user.phoneNumber;
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
        var user_phone = this.user.phoneNumber;
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
                        cmtData['like_users'].push(_this.user.phoneNumber);
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_replies').child(cmtkey_1).set(cmtData).then(function (res) {
                            console.log('successfully liked');
                        }, function (err) {
                            console.log('something went wrong!');
                        });
                    }
                    else {
                        _this.commentsData[index]['cmtlike'] = 0;
                        cmtData['likes_count'] -= 1;
                        cmtData['like_users'].splice(cmtData['like_users'].indexOf(_this.user.phoneNumber), 1);
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
            selector: 'page-postdetail',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/postdetail/postdetail.html"*/'<!--\n  Generated template for the PostdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>postdetail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="post-header">\n    <ion-col col-3>{{postData.created_at | date}}</ion-col>\n    <ion-col offset-7 col-2><img src="{{postData.pro_img}}" alt=""  id="pro-img"></ion-col>\n  </ion-row>\n\n  <ion-row class="user-profile">\n    <ion-col col-2>\n      <img src="{{postData.pro_img}}" alt="" id="pro-img">\n    </ion-col>\n    <ion-col class="user-details" col-10>\n      <ion-row class="u-name">{{postData.name}}</ion-row>\n      <ion-row class="role">{{postData.role}} &bull; {{postData.spec}}</ion-row>\n      <ion-row class="post-date">{{postData.created_at | date}}</ion-row>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf="postData.post_image != \'\'">\n    <ion-col>\n      <img src="{{postData.post_image}}" alt="" id="post-img">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="post-desc">\n      {{postData.post}}\n    </ion-col>\n  </ion-row>\n  <ion-row class="actionbar">\n    <div>\n      <ion-col><button (click)="actionBtn(\'like\')" [ngClass]="{\'color\':postData.postlike}" class="non-btn">Like</button></ion-col>\n      <ion-col><button (click)="actionBtn(\'abuse\')" class="non-btn">Report</button></ion-col>\n    </div>\n    <div>\n      <ion-col class="likes_count"><img src="assets/imgs/Like.png" alt="" id="like" style="top:-1px; left:-28px; position: relative;"><span style="left: -20px; top: -3px; position: relative;">{{postData.likes_count}}</span></ion-col>\n      <ion-col class="cmt_count"><img src="assets/imgs/comment.png" alt="" id="chat" style="top:1px; left:-20px; position: relative;"><span  style="position: relative; top: -2px; left:-13px">{{postData.comments_count}}</span></ion-col>\n    </div>\n  </ion-row>\n  <ion-row class="cmt-sec">\n    <ion-col col-2><img src="{{postData.pro_img}}" alt="" id="pro-img"></ion-col>\n    <ion-col col-10><input type="text" placeholder="write a comment" [(ngModel)]="postData.cmt_text" style="width:100%" id="text_cmt"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-9 col-3><img src="assets/imgs/Post.png" alt="" (click)="addCmt()" id="post-btn"></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      {{postData.comments_count}} Comments\n    </ion-col>\n  </ion-row>\n  <div>\n    <ion-row *ngFor="let cmt of commentsData; index as i">\n      <ion-col offset-1 col-2 class="cmt-img">\n        <img src="{{cmt.pro_img}}" alt="" id="pro-img">\n      </ion-col>\n      <ion-col col-9 class="cmt-txt">\n        <ion-row style="font-family: Assistant-Bold">{{cmt.name}}</ion-row>\n        <ion-row>{{cmt.comment_text}}</ion-row>\n        <ion-row class="cmt-action">\n          <ion-col col-2><button (click)="actionBtn(\'cmtlike\', i)" [ngClass]="{\'btncolor\':cmt.cmtlike}" class="btn">Like</button></ion-col>\n          <ion-col col-2><button (click)="actionBtn(\'cmtabuse\', i)" class="btn">Report</button></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf="commentsData.length == 0" class="mpty-data-msg">No Comments</div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/postdetail/postdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PostdetailPage);
    return PostdetailPage;
}());

//# sourceMappingURL=postdetail.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
                var postObj = { 'comments_count': 0, 'created_at': new Date().getTime(), 'is_abuse': false, 'is_active': true, 'is_pinned': 0, 'like_users': [''], 'likes_count': 0, 'modified_at': new Date().getTime(), 'post': newpost, 'post_image': imgUrl, 'posted_by': _this.user.phoneNumber };
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
            var postObj = { 'comments_count': 0, 'created_at': new Date().getTime(), 'is_abuse': false, 'is_active': true, 'is_pinned': 0, 'like_users': [''], 'modified_at': new Date().getTime(), 'likes_count': 0, 'post': newpost, 'post_image': '', 'posted_by': this.user.phoneNumber };
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
            selector: 'page-newpost',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/newpost/newpost.html"*/'<!--\n  Generated template for the NewpostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>New Post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <input type="file" id="imgfile" (change)="onFileChange($event)" accept="image/*" capture style="display: none;">\n      <img src="../../assets/imgs/upload_img.png" alt="" id="fileupload" style="cursor: pointer;" (click)="openFile()">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <textarea name="newpost" id="newpost" cols="30" [(ngModel)]="newpost" rows="10" placeholder="Write here..."></textarea>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-8 style="padding-right: 0; position: relative; right: -3px;">\n      <img src="../../assets/imgs/Post.png" alt="" id="postbtn" (click)="publishNewPost()" >\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/newpost/newpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], NewpostPage);
    return NewpostPage;
}());

//# sourceMappingURL=newpost.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speakers_speakers__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_agenda__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_going_users_show_going_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quiz_quiz__ = __webpack_require__(116);
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
        this.months_list = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OTC', 'NOV', 'DEC'];
        this.week_days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        this.willflag = 2;
        this.user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        this.goingCount = 0;
        this.usersGng = [];
        this.eventData = this.navParams.get('eventData');
        this.eventid = this.eventData.eventid;
        this.eventStartMonth = this.months_list[new Date(this.eventData['startDate']).getMonth()];
        this.eventStartDate = new Date(this.eventData['startDate']).getDate();
        this.eventStartDay = this.week_days[new Date(this.eventData['startDate']).getDay()];
        this.eventData['startDate'] = new Date(this.eventData['startDate']).toDateString();
    }
    EventCreationPage.prototype.ionViewDidLoad = function () {
        var that = this;
        that.goingCount = 0;
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(this.eventid + '#' + this.user.phoneNumber).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().eventid === that.eventid && datasnapshot.val().userid === that.user.phoneNumber) {
                    that.willflag = datasnapshot.val().willflag;
                }
            });
            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().willflag === 1) {
                    that.goingCount += 1;
                }
            });
        }
    };
    EventCreationPage.prototype.showGoingPeople = function () {
        var _this = this;
        this.usersGng = [];
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('eventid').equalTo(this.eventid).on('child_added', function (datasnapshot) {
            if (datasnapshot.val().willflag == 1 && datasnapshot.val().userid !== '') {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(datasnapshot.val().userid).on('child_added', function (snapshot) {
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
        console.log(this.usersGng);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__show_going_users_show_going_users__["a" /* ShowGoingUsersPage */], {
            data: this.usersGng,
            header: 'Users'
        });
    };
    EventCreationPage.prototype.actionBtn = function (typ) {
        if (typ === 'speakers')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__speakers_speakers__["a" /* SpeakersPage */], { 'eventData': this.eventData });
        else if (typ === 'agenda')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agenda_agenda__["a" /* AgendaPage */], { 'eventData': this.eventData });
        else if (typ === 'quiz')
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__quiz_quiz__["a" /* QuizPage */], { 'eventData': this.eventData });
    };
    EventCreationPage.prototype.willingBtn = function (will) {
        var _this = this;
        var that = this;
        var eventid = this.eventData['eventid'];
        if (will === 'going') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var going = { 'eventid': eventid, 'userid': user.phoneNumber, 'willflag': 1, 'willIndex': eventid + '#' + user.phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').push(going).then(function (res) {
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
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + user.phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': 1 });
                            that.willflag != 1 ? _this.goingCount += 1 : '';
                            that.willflag = 1;
                        });
                    }
                });
            }
        }
        else if (will === 'not going') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var notgoing = { 'eventid': eventid, 'userid': user.phoneNumber, 'willflag': -1, 'willIndex': eventid + '#' + user.phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').push(notgoing).then(function (res) {
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
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + user.phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': -1 }).then(function (res) {
                                that.willflag = -1;
                                _this.goingCount != 0 ? _this.goingCount -= 1 : '';
                            });
                        });
                    }
                });
            }
        }
        else if (will === 'may be') {
            if (that.willflag === 2) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        var maybe = { 'eventid': eventid, 'userid': user.phoneNumber, 'willflag': 0, 'willIndex': eventid + '#' + user.phoneNumber };
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').push(maybe).then(function (res) {
                            that.willflag = 0;
                            var tctrl = that.toastCtrl.create({
                                message: 'You may go....',
                                duration: 2000,
                            });
                            tctrl.present();
                        });
                    }
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
                    if (user) {
                        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').orderByChild('willIndex').equalTo(eventid + '#' + user.phoneNumber).on('child_added', function (datasnap) {
                            __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('eventWilling').child(datasnap.key).update({ 'willflag': 0 }).then(function (res) {
                                that.willflag = 0;
                                _this.goingCount != 0 ? _this.goingCount -= 1 : '';
                            });
                        });
                    }
                });
            }
        }
    };
    EventCreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-creation',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/event-creation/event-creation.html"*/'<!--\n  Generated template for the EventCreationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card padding style="padding-bottom:0; box-shadow:0 2px 8px 8px rgba(0,0,0,0.2)">\n    <ion-card-header>\n      <img src="{{eventData.images[0]}}" alt="" id="dimns">\n    </ion-card-header>\n    <ion-card-content style="padding:5px 0">\n      <ion-row>\n        <ion-col col-4 style="padding-left:0;">\n          <img src="../../assets/imgs/date_bg.png" alt="" id="date-dmns">\n          <div class="dates">\n            <p class="day">{{eventStartDay}}</p>\n            <p class="date">{{eventStartDate}}</p>\n            <p class="month">{{eventStartMonth}}</p>\n          </div>\n        </ion-col>\n        <ion-col col-5 class="event-title">\n          <span class="title">{{eventData.title_name}}</span>\n          <ion-row style="font-size:12px; position: relative; ">{{eventData.venue}}</ion-row>\n        </ion-col>\n        <ion-col col-3>\n          <a href="{{eventData.ticketUrl}}"><button type="button" ion-button class="book-btn" color="secondary">BOOK</button></a>\n        </ion-col>\n      </ion-row>\n      <ion-row offset-8 col-4 class="showgoing">\n        <img src="../../assets/imgs/Going.png" alt="" id="gng-count"><button class="non-btn gng-btn" (click)="showGoingPeople()" type="button">{{goingCount}} Going</button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <ion-row padding class="actionbar" style="padding-bottom:0px; ">\n      <ion-col class="int" col-4 [ngClass]="{\'bgcolor\':willflag==1}" ><button (click)="willingBtn(\'going\')" class="non-btn btncolor" type="button" [ngClass]="{\'bgcolor\':willflag == 1}" style="">Interested</button></ion-col>\n\n      <ion-col class="maybe" col-3 [ngClass]="{\'bgcolor\':willflag == 0}" style="width:10px; height: 35px; font-family: Assistant-Bold;"><button type="button" class="non-btn btncolor" (click)="willingBtn(\'may be\')" [ngClass]="{\'bgcolor\':willflag == 0}">May be</button></ion-col>\n      \n      <ion-col class="notint" col-4 [ngClass]="{\'bgcolor\':willflag == -1}" style="width:20px; height: 35px; font-family: Assistant-Bold;"><button type="button" class="non-btn btncolor" (click)="willingBtn(\'not going\')" [ngClass]="{\'bgcolor\':willflag == -1}">Not Interested</button></ion-col>\n    </ion-row>\n    <div class="desc" paddding style="padding-top:0;">\n      <h2 class="detail-header" >Descrption</h2>\n      <p class="detail-content">{{eventData.eventDesc}}</p>\n    </div>\n    <div class="navBtns">\n      <ion-row>\n        <ion-col col-4>\n          <button (click)="actionBtn(\'agenda\')" id="btn" ion-button color="secondary" style="border-radius: 4px;font-family: Assistant-Bold;">AGENDA</button>\n        </ion-col>\n        <ion-col col-4>\n          <button (click)="actionBtn(\'speakers\')" id="btn" ion-button color="secondary" style="border-radius: 4px;font-family: Assistant-Bold;">SPEAKERS</button>\n        </ion-col>\n        <ion-col col-4>\n          <img src="../../assets/imgs/quiz_button.png" alt="" (click)="actionBtn(\'quiz\')" id="quizbtn">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- <ion-card padding style="padding-bottom:0;">\n    <ion-card-header>\n      <img src="{{eventData.images[0]}}" alt="" id="dimns">\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row class="event-breif" style="padding-top:0;">\n        <ion-col col-3 class="date-sec">\n          <img src="../../assets/imgs/date_bg.png" alt="" id="date-dmns">\n          <div class="dates">\n            <span class="day" style="position: relative; top:3px; left:2px;">{{eventStartDay}}</span>\n            <span class="date" style="position: relative; top:-4px; left:1px;">{{eventStartDate}}</span>\n            <span class="month" style="position: relative; top:-10px; left:2px;">{{eventStartMonth}}</span>\n          </div>\n        </ion-col>\n        <ion-col col-6 >\n          <span class="title">{{eventData.title_name}}</span>\n          <ion-row style="font-size:12px; position: relative; left:-15px;">{{eventData.venue}}</ion-row>\n        </ion-col>\n        <ion-col col-3 >\n          <a href="{{eventData.ticketUrl}}"><button type="button" ion-button class="book-btn">BOOK</button></a>\n        </ion-col>\n      </ion-row>\n      <ion-row offset-8 col-4 class="showgoing">\n        <img src="../../assets/imgs/Going.png" alt="" style="width:12px; height: 10px; position: relative; right:-10px;  "> <button class="non-btn gng-btn" (click)="showGoingPeople()" type="button">{{goingCount}} Going</button>\n    </ion-row>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/event-creation/event-creation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], EventCreationPage);
    return EventCreationPage;
}());

//# sourceMappingURL=event-creation.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
 * Generated class for the SpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeakersPage = /** @class */ (function () {
    function SpeakersPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.eventData = {};
        this.eventId = '';
        this.speakerIds = [];
        this.speakersData = [];
        this.eventData = this.navParams.get('eventData');
        this.eventId = this.eventData['eventid'];
        this.lctrl = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctrl.present();
    }
    SpeakersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpeakersPage');
    };
    SpeakersPage.prototype.ionViewWillEnter = function () {
        this.getSpeakersIds(this.eventId);
    };
    SpeakersPage.prototype.getSpeakersIds = function (evid) {
        var that = this;
        var eventid = evid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('agendaDetails').orderByChild('event_id').equalTo(eventid).on('child_added', function (datasnapshot) {
            if (datasnapshot.val().speaker_id.length > 0) {
                that.speakerIds = datasnapshot.val().speaker_id;
                that.getSpeakerDetails(that.speakerIds);
            }
        });
    };
    SpeakersPage.prototype.getSpeakerDetails = function (speakerIds) {
        var that = this;
        var ids = speakerIds[0];
        that.speakersData = [];
        ids.forEach(function (id) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('speakersDetails').orderByKey().equalTo(id).on('child_added', function (datasnapshot) {
                var speakerDetails = datasnapshot.val();
                that.speakersData.push(speakerDetails);
            });
        });
        setTimeout(function () {
            that.lctrl.dismiss();
        }, 1000);
    };
    SpeakersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speakers',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/speakers/speakers.html"*/'<!--\n  Generated template for the SpeakersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>SPEAKERS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <ion-card *ngFor="let speaker of speakersData">\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-4 >\n          <div class="spkr-img">\n            <img src="../../assets/imgs/date_bg.png" alt="" class="spkr-bg">\n            <img src="{{speaker.speaker_image}}" alt="" class="spkr" >\n          </div>\n        </ion-col>\n        <ion-col col-8>\n          <ion-row><h3 class="spkr-name">{{speaker.firstName | uppercase}} {{speaker.lastName |uppercase}}</h3></ion-row>\n          <ion-row>About</ion-row>\n          <ion-row>{{speaker.DescSpeaker}}</ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div class="mpty-data-msg" *ngIf="speakersData.length == 0">No Speakers</div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/speakers/speakers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SpeakersPage);
    return SpeakersPage;
}());

//# sourceMappingURL=speakers.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.quizData = [];
        this.eventData = {};
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.questions = [];
        this.answersData = [];
        this.anscor = [];
        this.slideqt = false;
        this.noquest = 0;
        this.complete = false;
        this.correctCount = 0;
        this.quizCmplt = false;
        this.totalqns = 0;
        this.quizAnsFound = false;
        this.eventData = this.navParams.get('eventData');
        this.lctrl = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctrl.present();
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getQuizAnswersIfExist(function (result) {
            if (result) {
                _this.quizCmplt = true;
                _this.lctrl.dismiss();
            }
            else {
                _this.getQuizData();
                setTimeout(function () {
                    if (_this.slides != undefined) {
                        _this.slides.lockSwipeToNext(true);
                        _this.slides.lockSwipeToPrev(true);
                    }
                }, 1000);
            }
        });
    };
    QuizPage.prototype.getQuizData = function () {
        var _this = this;
        var that = this;
        var eventid = that.eventData['eventid'];
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('quiz').orderByChild('event_id').equalTo(eventid).on('child_added', function (datasnapshot) {
            if (datasnapshot.val().questions_data !== null) {
                that.quizData = datasnapshot.val().questions_data;
                that.noquest = that.quizData.length - 1;
            }
        });
        setTimeout(function () {
            _this.lctrl.dismiss();
        }, 1000);
    };
    QuizPage.prototype.questionsbt = function () {
        if (this.slideqt && !this.complete) {
            this.slides.lockSwipeToNext(false);
            this.slides.slideNext();
            this.slides.lockSwipeToNext(true);
            this.slideqt = false;
        }
        else if (this.complete) {
            this.slides.lockSwipeToNext(false);
            this.slides.slideNext();
            this.slides.lockSwipeToNext(true);
            this.slideqt = false;
            this.quizCmplt = true;
            var finalObj = { 'answers': this.answersData, 'userid': this.user.phoneNumber, 'eventid': this.eventData['eventid'], 'answerindex': this.eventData['eventid'] + '#' + this.user.phoneNumber, 'correctCount': this.correctCount, 'totalquestions': this.quizData.length };
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('quizAnswers').push(finalObj).then(function (res) {
                console.log('Answers successfully submited...');
            }, function (err) {
                console.log('Something went wrong...');
            });
        }
    };
    QuizPage.prototype.answered = function (answer, index) {
        this.correctCount = 0;
        if (this.noquest === index) {
            this.complete = true;
        }
        var ans = this.quizData[index]['answer'];
        var qus = this.quizData[index]['question'];
        if (ans.toLowerCase() === answer.toLowerCase()) {
            this.anscor[index] = 1;
            var obj = { 'question': qus, 'answer': answer };
            this.answersData[index] = obj;
        }
        else {
            var obj = { 'question': qus, 'answer': answer };
        }
        this.slideqt = true;
        for (var i = 0; i < this.anscor.length; i++) {
            if (this.anscor[i] == 1)
                this.correctCount += 1;
        }
    };
    QuizPage.prototype.getQuizAnswersIfExist = function (callback) {
        var _this = this;
        var eventid = this.eventData['eventid'];
        var user_phone = this.user.phoneNumber;
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('quizAnswers').orderByChild('answerindex').equalTo(eventid + '#' + user_phone).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().correctCount !== '') {
                    _this.correctCount = datasnapshot.val().correctCount;
                    _this.totalqns = datasnapshot.val().totalquestions;
                    callback(_this.quizAnsFound = true);
                }
            });
            callback(this.quizAnsFound = false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], QuizPage.prototype, "slides", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/quiz/quiz.html"*/'<!--\n  Generated template for the QuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>quiz</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides  #slides *ngIf="quizData && quizData.length && !quizCmplt">\n    <ion-slide *ngFor="let question of quizData; index as i">\n      <span class="q-num-chip">{{i+1}} of {{quizData.length}}</span>\n      <h4 class="q-title" *ngIf="question.question"> {{question.question}}</h4>\n      <ion-list radio-group [(ngModel)]="questions[i]" name="questions[i]" *ngIf="question.question">\n        <ion-item>\n          <ion-label>{{question.option1}}</ion-label>\n          <ion-radio value="{{question.option1}}" (click)="answered(\'option1\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option2}}</ion-label>\n          <ion-radio value="{{question.option2}}" (click)="answered(\'option2\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option3}}</ion-label>\n          <ion-radio value="{{question.option3}}" (click)="answered(\'option3\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option4}}</ion-label>\n          <ion-radio value="{{question.option4}}" (click)="answered(\'option4\', i)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n  <div *ngIf="quizData.length && !quizCmplt">\n    <button ion-button full style="background-color:#8CD396; position:fixed; bottom: 50px; height: 50px; left:0px; z-index:10;" (click)="questionsbt()">SUBMIT</button>\n    <!-- <button type="button" ion-button color="secondary" (click)="questionsbt()"  class="sbt-btn">submit</button> -->\n  </div>\n  <ion-card *ngIf="quizCmplt">\n    <ion-card-header class="score-board">\n      <h2 class="score-text">Your Score is</h2>\n      <div class="score-sec">\n        <img src="../../assets/imgs/date_bg.png" alt="" class="score-bg">\n        <p class="score">{{correctCount}}</p>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <div *ngIf="quizData.length == 0" class="mpty-data-msg">No Quiz</div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/quiz/quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_creation_event_creation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.eventsData = [];
        this.isEventsEmpty = false;
        this.WEEK_DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.MONTH_NAMES = ['JANUARY', 'FEBRURAY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        this.loading = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.getEventData(function (result) {
                if (result.length == 0) {
                    _this.isEventsEmpty = true;
                    _this.loading.dismiss();
                }
                else {
                    _this.eventsData = result;
                    _this.loading.dismiss();
                }
            });
        }, 1000);
    };
    EventsPage.prototype.showEventInDetail = function (index) {
        var eves = this.eventsData[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_creation_event_creation__["a" /* EventCreationPage */], { 'eventData': eves });
    };
    EventsPage.prototype.getEventData = function (callback) {
        var _this = this;
        var that = this;
        this.eventsData = [];
        var eventsData = this.eventsData;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('eventDetails').orderByChild('is_active').equalTo(true).on('value', function (snapshot) {
            snapshot.forEach(function (datasnapshot) {
                var event = datasnapshot.val();
                event['eventid'] = datasnapshot.key;
                event['month'] = that.MONTH_NAMES[new Date(event.startDate).getMonth()];
                event['date'] = new Date(event.startDate).getDate();
                event['day'] = that.WEEK_DAYS[new Date(event.startDate).getDay()];
                console.log(event);
                eventsData.unshift(event);
            });
        });
        callback(eventsData);
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1000);
    };
    EventsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.getEventData(function (result) {
            if (result.length == 0) {
                _this.isEventsEmpty = true;
            }
            else {
                _this.eventsData = result;
            }
        });
        setTimeout(function () { refresher.complete(); }, 1000);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div style="position: relative; top:0; width:100%;">\n    <div>\n    <img src="assets/imgs/header.png" alt="">\n    </div>\n    <div class="container">\n      <img src="assets/imgs/belowheader.png" alt="" style="width:100%; position: absolute; top: -23px; left:0; z-index:-1;">\n      <div class="bottom-left">EVENTS</div>\n    </div>\n  </div>\n\n</ion-header>\n<div *ngIf="isEventsEmpty == true && eventsData.length == 0" class="mpty-data-msg">No Events</div>\n<ion-content >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="content-style">\n    <ion-card *ngFor="let item of eventsData; index as i">\n      <div class="event-card">\n        <ion-row>\n          <ion-col col-4>\n            <div class="date-sec">\n              <img src="../../assets/imgs/date_bg.png" alt="" id="date-dmns">\n              <div class="dates">\n                <p class="day">{{item.day}}</p>\n                <p class="date">{{item.date}}</p>\n                <p class="month">{{item.month}}</p>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col col-8 (click)="showEventInDetail(i)">\n            <img src="{{item.images[0]}}" alt="" id="event-img">\n          </ion-col>\n        </ion-row>\n\n        <!-- <div class="event-img-sec" (click)="showEventInDetail(i)" col-8>\n          <img src="{{item.images[0]}}" alt="" id="event-img">\n        </div> -->\n\n        <!-- <div class="book-sec">\n          <a href="{{item.ticketUrl}}" style="text-decoration: none;"><button type="button" color="secondary" ion-button class="book-btn">BOOK</button></a>\n        </div> -->\n      </div>\n      <ion-row>\n        <ion-col offset-4 col-8 style="padding-bottom:0;">\n          <p class="title">{{item.title_name}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_view_detail_view__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupPage = /** @class */ (function () {
    function GroupPage(navCtrl, navParams, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        this.userGroupIds = [];
        this.userGroupsData = [];
        this.lctr = this.loadCtrl.create({
            content: 'Please Wait...'
        });
        this.lctr.present();
    }
    GroupPage.prototype.ionViewDidLoad = function () {
        this.userGroupIds = [];
        this.userGroupsData = [];
        this.getUserGroupData();
    };
    GroupPage.prototype.getUserGroupData = function () {
        var _this = this;
        if (this.user) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(this.user.phoneNumber).on('child_added', function (datasnapshot) {
                if (datasnapshot.val().group_id != undefined && datasnapshot.val().group_id !== '') {
                    var gids = datasnapshot.val().group_id;
                    if (gids == undefined || gids == '') {
                        _this.lctr.dismiss();
                    }
                    for (var i = 0; i < gids.length; i++) {
                        if (gids[i] != undefined && gids[i] != '') {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('groups').orderByKey().equalTo(gids[i]).on('child_added', function (datasnapshot) {
                                if (datasnapshot.val().is_active) {
                                    var obj = datasnapshot.val();
                                    obj['groupid'] = datasnapshot.key;
                                    if (datasnapshot.val().followers != undefined && datasnapshot.val().followers != '') {
                                        _this.userGroupsData.unshift(obj);
                                    }
                                    else {
                                        obj['followers'] = 0;
                                        _this.userGroupsData.unshift(obj);
                                    }
                                }
                            });
                        }
                    }
                    _this.lctr.dismiss();
                }
                else {
                    _this.lctr.dismiss();
                }
            });
        }
        else {
            this.lctr.dismiss();
            var tctrl = this.toastCtrl.create({
                message: "Your are not logged in."
            });
            tctrl.present();
        }
    };
    GroupPage.prototype.doRefresh = function (event) {
        this.userGroupIds = [];
        this.userGroupsData = [];
        this.getUserGroupData();
        setTimeout(function () { event.complete(); }, 1000);
    };
    GroupPage.prototype.openGroup = function (index) {
        var group = this.userGroupsData[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_view_detail_view__["a" /* DetailViewPage */], { 'data': group });
    };
    GroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/group/group.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div style="position: relative; top:0; width:100%;">\n    <div>\n      <img src="assets/imgs/header.png" alt="">\n    </div>\n    <div class="container">\n      <img src="assets/imgs/belowheader.png" alt="" style="width:100%; position: absolute; top: -23px; left:0; z-index:-1;">\n      <div class="bottom-left">GROUPS</div>\n    </div>\n  </div>\n</ion-header>\n<ion-content padding >\n  <div *ngIf="userGroupsData.length == 0" class="mpty-data-msg">No Groups</div>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="content-style">\n    <div class="group-sec" *ngFor="let group of userGroupsData; index as i" (click)="openGroup(i)" >\n      <ion-row>\n        <ion-col col-4 >\n          <div class="img-sec">\n            <!-- <img src="../../assets/imgs/circle_shadow.png" alt="" class="img-bg"> -->\n            <img src="{{group.images_links}}" alt="" id="group-img" *ngIf="group.images_links != \'\'">    \n          </div>\n        </ion-col>\n        <ion-col col-8 class="group-title">\n          <h4>{{group.title}}</h4>\n          <h5 class="fol">{{group.followers}} Followers</h5>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/group/group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], GroupPage);
    return GroupPage;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_going_users_show_going_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(173);
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
        this.loadCtrl = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loadCtrl.present();
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.netCtrl.onchange().subscribe(function () {
            if (_this.netCtrl.type == 'none') {
                _this.loadCtrl.dismiss();
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
                _this.loadCtrl.dismiss();
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
        var user = this.user;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').on('child_added', function (childSnapshot) {
            if (childSnapshot.val().is_active) {
                var likeBtn = 0;
                var like_users = childSnapshot.val().like_users;
                if (like_users != undefined) {
                    for (var i = 0; i < like_users.length; i++) {
                        if (like_users[i] === user.phoneNumber) {
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_going_users_show_going_users__["a" /* ShowGoingUsersPage */], { 'header': 'Users', 'data': usernames });
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
        var phone = this.user.phoneNumber;
        var newsId = this.newsData[index]['newsid'];
        if (that.user) {
            if (typ === 'like') {
                if (that.newsData[index].likeBtn === 0) {
                    if (that.user) {
                        if (true) {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('news').orderByKey().equalTo(newsId).on('child_added', function (datasnapshot) {
                                var newsObj = datasnapshot.val();
                                newsObj.likes_count += 1;
                                newsObj.like_users.push(phone);
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
                            newsObj.like_users.splice(newsObj.like_users.indexOf(phone), 1);
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
            selector: 'page-news',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div style="position: relative; top:0; width:100%;">\n    <div>\n    <img src="assets/imgs/header.png" alt="">\n    </div>\n    <div class="container">\n      <img src="assets/imgs/belowheader.png" alt="" style="width:100%; position: absolute; top: -23px; left:0; z-index:-1;">\n      <div class="bottom-left">NEWS</div>\n    </div>\n  </div>\n\n</ion-header>\n<ion-content style="background-color:#ffffff;" >\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="mpty-data-msg" *ngIf="this.isEmpty == true && newsData.length == 0">No NEWS</div>\n  <div class="content-style">\n    <ion-card *ngFor="let news of newsData; index as i" class="card-mod">\n      <ion-card-content>\n        <ion-row class="card-padding">\n        <ion-col col-4>\n          <img src="{{news.images_links[0]}}" id="img-dmns">\n        </ion-col>\n        <ion-col col-8>\n          <ion-row>\n            <h4 class="headline" style="font-size:16px;"><a href="{{news.hyper_link}}">{{news.title | uppercase}}</a></h4>\n          </ion-row>\n          <ion-row>\n            <span class="tagline">{{news.source}} &bull; {{news.date | date}}</span>\n            <p class="news-sec">{{news.description}}</p>\n          </ion-row>\n        </ion-col>\n        </ion-row>\n        <ion-row class="news-actions">\n        <ion-col col-4 class="middle"  *ngIf="news.likeBtn">\n          <img src="../../assets/imgs/like_active.png" alt=""(click)="actionBtn(\'like\', i)" class="news_like">\n          <button type="button" (click)="showLikedUsers(i)" class="btn news_likes_cnt">{{news.likes_count}}</button>\n        </ion-col>\n        <ion-col col-4 class="middle"  *ngIf="!news.likeBtn">\n          <img src="../../assets/imgs/like_inactive.png" alt="" (click)="actionBtn(\'like\', i)" class="news_like">\n          <button type="button" (click)="showLikedUsers(i)" class="btn news_likes_cnt">{{news.likes_count}}</button>\n        </ion-col>\n      </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(55);
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
        console.log('working');
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
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
            userid: user.uid,
            mobileNo: user.phoneNumber,
            group_id: this.group_id,
            profile_pic: '',
            is_active: true
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails/').push(obj).then(function (res) {
            console.log(res);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]).then(function () {
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
            selector: 'page-profile',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title >Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>First Name<span style="color:#F8200A">*</span> </ion-label>\n    <ion-input [(ngModel)]="firstName" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="lastName" type="text"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-label floating>Phone No <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="phoneNo" type="number"></ion-input>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label floating>Email Address <span style="color:#F8200A">*</span></ion-label>\n    <ion-input [(ngModel)]="emailAddress" type="email"></ion-input>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;">\n    <ion-label>Designation <span style="color:#F8200A">*</span></ion-label>\n    <ion-select [(ngModel)]="designation" (ionChange)="DesignationFn()">\n      <ion-option value="Doctor">Doctor</ion-option>\n      <ion-option value="Student">Student</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;" *ngIf="showSpecialisation">\n    <ion-label>Specialisation</ion-label>\n    <ion-select [(ngModel)]="specialisation" (ionChange)="specialisationFn()">\n      <ion-option value="General Pathology">General Pathology</ion-option>\n      <ion-option value="Oncopathology">Oncopathology</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item style="margin-top:10px;" *ngIf="showGeneral">\n    <ion-label>General Pathology</ion-label>\n    <ion-select [(ngModel)]="general" (ionChange)="generalFn()">\n      <ion-option value="Haematopathology">Haematopathology</ion-option>\n      <ion-option value="Histopathology">Histopathology</ion-option>\n      <ion-option value="Clinical pathology">Clinical pathology</ion-option>\n      <ion-option value="Molecular Pathology">Molecular Pathology</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item style="margin-top:10px;" *ngIf="showOnco">\n      <ion-label>Oncopathology</ion-label>\n      <ion-select [(ngModel)]="onco" (ionChange)="oncoFn()">\n        <ion-option value="Hemato Oncopathology">Hemato Oncopathology</ion-option>\n        <ion-option value="Histo Oncopathology">Histo Oncopathology</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <ion-item *ngIf="showSpecialisation">\n    <ion-label floating>Experience(yrs)</ion-label>\n    <ion-input [(ngModel)]="experience" type="number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <button type="button" (click) = "saveprofile()" style="margin-top:20px; padding-top:20px; padding-bottom:20px;" color="secondary" ion-button round block>Save</button>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profilecreation_profilecreation__ = __webpack_require__(122);
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
                            //  navCtrl.push(HomePage);
                            _app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]).then(function (res) {
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
    SettingsPage.prototype.profilecard = function () {
        // var navCtrl = this.navCtrl;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profilecreation_profilecreation__["a" /* ProfilecreationPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <!-- <ion-navbar color="dark">\n    <ion-title style="text-align:center">Settings</ion-title>\n  </ion-navbar> -->\n  <div style="position: relative; top:0; width:100%;">\n    <div>\n    <img src="assets/imgs/header.png" alt="">\n    </div>\n    <div class="container">\n      <img src="assets/imgs/belowheader.png" alt="" style="width:100%; position: absolute; top: -23px; left:0; z-index:-1;">\n      <div class="bottom-left">SETTINGS</div>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n      <!-- <ion-list>\n        <ion-item>\n          <img src="assets/imgs/pro_pic_placeholder.png" alt="img" id="dmns">\n          <h5 class="align-text">EDIT MY ACCOUNT</h5>\n        </ion-item>\n      </ion-list> -->\n\n      <ion-card (click) = "profilecard()">\n\n        <ion-card-content>\n\n            <!-- assets/imgs/pro_pic_placeholder.png {{this.pro_img}}-->\n\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{pro_img}}" style="width: 80px; height:80px;">\n              </ion-avatar>\n              <h2 class = "user-name"style="color:#000000;">EDIT MY PROFILE</h2>\n            </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <button ion-button full style="background-color:#8CD396; position:fixed; bottom: 45px; height: 60px; font-family: Assistant-Bold;" (click) = "logout()">LOG OUT</button>\n\n        <!-- <ion-col col-6 (click) = "logout()">\n         <ion-icon class = "icon-size" name="log-out" color="danger"></ion-icon>\n         <span class="logout-text"> Logout </span>\n       </ion-col> -->\n\n  <!-- <button style="margin-top:20px;"(click) = "logout()" color="danger" ion-button round block>Logout</button> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilecreationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(175);
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
    function ProfilecreationPage(navCtrl, navParams, toastCtrl, loadCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.camera = camera;
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
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
            snapshot.forEach(function (childsnap) {
                mobileNo = childsnap.val().mobileNo.toString();
                localNo = user.phoneNumber;
                // localNo = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
                console.log("DB no -> " + mobileNo);
                console.log("My no -> " + localNo);
                console.log(mobileNo == localNo);
                if (mobileNo == localNo) {
                    console.log(childsnap.val().mobileNo);
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
        console.log("---------" + that.profiledesignation);
        console.log(that.ProfileMobNo);
        setTimeout(function () {
            lctrl.dismiss();
        }, 2000);
    };
    ProfilecreationPage.prototype.saveprofile = function () {
        console.log(this);
        var toastCtrl = this.toastCtrl;
        var profileFirstName = this.profileFirstName;
        var profileLastName = this.profileLastName;
        var experience = this.experience;
        var profileemail = this.profileemail;
        var date = new Date().getTime();
        var mobileNo;
        var localNo;
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
            snapshot.forEach(function (childsnap) {
                localNo = user.phoneNumber;
                mobileNo = childsnap.val().mobileNo.toString();
                console.log(mobileNo + ' --------------' + localNo);
                // localNo = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
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
                        //  userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
                        userid: user.phoneNumber,
                        mobileNo: childsnap.val().mobileNo,
                        group_id: childsnap.val().group_id
                    };
                    console.log(childsnap.key);
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').child(childsnap.key).set(finalData).then(function () {
                    });
                }
            });
        });
        var toast = toastCtrl.create({
            message: 'Profile Updated',
            duration: 1000,
        });
        toast.present();
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
            var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    // console.log(snapshot.downloadURL);
                    snapshot.ref.getDownloadURL().then(function (dwnldurl) {
                        photoUrl = dwnldurl;
                        console.log("DWNLURL ->" + dwnldurl);
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').on('value', function (snapshot) {
                            snapshot.forEach(function (childsnap) {
                                mobileNo = childsnap.val().mobileNo.toString();
                                // localNo = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
                                localNo = user.phoneNumber;
                                console.log(mobileNo == localNo);
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
                                        //  userid: window.localStorage.getItem('accountId').replace("\"", "").replace("\"", ""),
                                        userid: user.uid,
                                        mobileNo: childsnap.val().mobileNo,
                                        group_id: childsnap.val().group_id
                                    };
                                    console.log(childsnap.key);
                                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').child(childsnap.key).set(finalData).then(function () {
                                        console.log('working');
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
    ProfilecreationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilecreation',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/profilecreation/profilecreation.html"*/'<!--\n  Generated template for the ProfilecreationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div style="background-image:url(\'../assets/imgs/profile.png\'); width: 100%; height: 150px; z-index:10; margin-top: 0px; padding-top: 0px; position: relative; top: -20px;"></div>\n\n  <div class="row pro-style" >\n    <img (click) = "takePhoto()" class="circle-pic" src= "{{ myphoto }}" >\n      <div class="profile-info">\n        <h3 style="margin-top:50px; font-family:Assistant-Bold;"> {{profilename}} </h3>\n        <p style="margin-bottom: 0px;"> {{profiledesignation}} </p>\n        <p style="margin-top: 0px;"> {{ProfileMobNo}} </p>\n    </div>\n  </div>\n  \n  <div class="profile-list">\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input [(ngModel)]="profileFirstName" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input [(ngModel)]="profileLastName" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [(ngModel)]="profileemail" type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Experience(yrs)</ion-label>\n      <ion-input [(ngModel)]="experience" type="text"></ion-input>\n    </ion-item>\n  </div>\n\n  <!-- <ion-item>\n    <button (click) = "saveprofile()" style="margin-top:20px; padding-top:20px; padding-bottom:20px;" color="secondary" ion-button round block>Update</button>\n  </ion-item> -->\n\n<button ion-button full style="background-color:#8CD396; position:fixed; bottom: 45px; height: 60px; z-index: 1000; font-family:Assistant-Bold; box-shadow: 5px 10px;" (click) = "saveprofile()">UPDATE</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/profilecreation/profilecreation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], ProfilecreationPage);
    return ProfilecreationPage;
}());

//# sourceMappingURL=profilecreation.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		312,
		14
	],
	"../pages/detail-view/detail-view.module": [
		313,
		13
	],
	"../pages/event-creation/event-creation.module": [
		314,
		12
	],
	"../pages/events/events.module": [
		315,
		11
	],
	"../pages/group/group.module": [
		316,
		10
	],
	"../pages/newpost/newpost.module": [
		317,
		9
	],
	"../pages/news/news.module": [
		318,
		8
	],
	"../pages/postdetail/postdetail.module": [
		319,
		7
	],
	"../pages/profile/profile.module": [
		320,
		6
	],
	"../pages/profilecreation/profilecreation.module": [
		321,
		5
	],
	"../pages/quiz/quiz.module": [
		322,
		4
	],
	"../pages/settings/settings.module": [
		323,
		3
	],
	"../pages/show-going-users/show-going-users.module": [
		324,
		2
	],
	"../pages/speakers/speakers.module": [
		325,
		1
	],
	"../pages/tabs/tabs.module": [
		326,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_group_group__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_events_events__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profilecreation_profilecreation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_creation_event_creation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_news__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_speakers_speakers__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_agenda_agenda__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quiz_quiz__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_video_player__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_show_going_users_show_going_users__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detail_view_detail_view__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_postdetail_postdetail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_newpost_newpost__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























__WEBPACK_IMPORTED_MODULE_17_firebase__["initializeApp"]({
    apiKey: "AIzaSyAGo07zuCk9JUYoXVMY4yMjLH4f6hVu50k",
    authDomain: "doctorsmanagement-8b9fe.firebaseapp.com",
    databaseURL: "https://doctorsmanagement-8b9fe.firebaseio.com",
    projectId: "doctorsmanagement-8b9fe",
    storageBucket: "doctorsmanagement-8b9fe.appspot.com",
    messagingSenderId: "1004085689245"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_creation_event_creation__["a" /* EventCreationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profilecreation_profilecreation__["a" /* ProfilecreationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_show_going_users_show_going_users__["a" /* ShowGoingUsersPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_view_detail_view__["a" /* DetailViewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_postdetail_postdetail__["a" /* PostdetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newpost_newpost__["a" /* NewpostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-view/detail-view.module#DetailViewPageModule', name: 'DetailViewPage', segment: 'detail-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-creation/event-creation.module#EventCreationPageModule', name: 'EventCreationPage', segment: 'event-creation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group/group.module#GroupPageModule', name: 'GroupPage', segment: 'group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newpost/newpost.module#NewpostPageModule', name: 'NewpostPage', segment: 'newpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postdetail/postdetail.module#PostdetailPageModule', name: 'PostdetailPage', segment: 'postdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilecreation/profilecreation.module#ProfilecreationPageModule', name: 'ProfilecreationPage', segment: 'profilecreation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-going-users/show-going-users.module#ShowGoingUsersPageModule', name: 'ShowGoingUsersPage', segment: 'show-going-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speakers/speakers.module#SpeakersPageModule', name: 'SpeakersPage', segment: 'speakers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_group_group__["a" /* GroupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_creation_event_creation__["a" /* EventCreationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_speakers_speakers__["a" /* SpeakersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agenda_agenda__["a" /* AgendaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profilecreation_profilecreation__["a" /* ProfilecreationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_show_going_users_show_going_users__["a" /* ShowGoingUsersPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_view_detail_view__["a" /* DetailViewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_postdetail_postdetail__["a" /* PostdetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_newpost_newpost__["a" /* NewpostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_video_player__["a" /* VideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, screenOrientation) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide(); // <-- hide static image
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(2000).subscribe(function () { return _this.showSplash = false; });
        });
        // this.pushSetup();
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="sk-folding-cube">\n        <div class="sk-cube1 sk-cube"></div>\n        <div class="sk-cube2 sk-cube"></div>\n        <div class="sk-cube4 sk-cube"></div>\n        <div class="sk-cube3 sk-cube"></div>\n      </div>\n  </div>\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowGoingUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
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
            selector: 'page-show-going-users',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/show-going-users/show-going-users.html"*/'<!--\n  Generated template for the ShowGoingUsersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>{{header}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n  <div *ngIf="header === \'Comments\'">\n    <ion-list>\n      <ion-item *ngFor="let user of data; index as i">\n        <img src="{{user.pro_img}}" alt="img" id="dmns">\n        <div class="cmt-cnt">\n          <span>{{user.name}}</span>\n          <span *ngIf="user.comment_text" class="cmt-txt">{{user.comment_text}}</span>\n        </div>\n        <span class="like-count"><img src="../../assets/imgs/_7.png" id="limg" alt="like"> {{user.likes_count}}</span>\n        <div class="margin-left">\n          <span ><button type="button" (click)="actionBtn(\'like\',i)" class="non-btn" [ngClass]="{\'color\':user.cmtlike}">Like</button></span>\n          <span><button type="button" class="non-btn" (click)="actionBtn(\'abuse\', i)">Abuse</button></span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="header === \'Users\'">\n    <ion-list>\n      <ion-item *ngFor="let user of data">\n        <img src="{{user.pro_img}}" alt="" id="dmns">\n        <h5 class="align-text">{{user.name}}</h5>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/show-going-users/show-going-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ShowGoingUsersPage);
    return ShowGoingUsersPage;
}());

//# sourceMappingURL=show-going-users.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_group__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_news__ = __webpack_require__(119);
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
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.newsRoot = __WEBPACK_IMPORTED_MODULE_5__news_news__["a" /* NewsPage */];
        this.eventsRoot = __WEBPACK_IMPORTED_MODULE_3__events_events__["a" /* EventsPage */];
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_2__group_group__["a" /* GroupPage */];
        this.settingsRoot = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="0">\n    <ion-tab [root]="newsRoot" tabTitle="News" tabIcon="customicon"></ion-tab>\n    <ion-tab [root]="eventsRoot" tabTitle="Events" tabIcon="customicon1"></ion-tab>\n    <ion-tab [root]="homeRoot" tabTitle="Groups" tabIcon="customicon2"></ion-tab>\n    <ion-tab [root]="settingsRoot" tabTitle="Settings" tabIcon="customicon3"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(55);
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
        });
    };
    HomePage.prototype.loginUser = function () {
        var _this = this;
        var ph = String(this.phoneNumber);
        var ccode_phone = '+91' + this.phoneNumber;
        if (ph == "undefined") {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Phone number is required.',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        else if (ph.length != 10) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Invalid Phone number.',
                buttons: ['OK']
            });
            alert_2.present();
            return;
        }
        var appVerifier = this.recaptchaVerifier;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithPhoneNumber(ccode_phone, appVerifier).then(function (onfulfilled) {
            var tCtrl = _this.toastCtrl.create({
                message: 'OTP has been sent to your mobile.',
                duration: 2000
            });
            tCtrl.present();
            var prompt = _this.alertCtrl.create({
                title: 'Enter the Confirmation Code',
                'enableBackdropDismiss': false,
                inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
                buttons: [
                    { text: 'Cancel', handler: function () { console.log('User clicked on cancel button, Nothing is happening now.'); } },
                    { text: 'Send', handler: function (data) {
                            onfulfilled.confirm(data.confirmationCode).then(function () {
                                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('userDetails').orderByChild('mobileNo').equalTo(ccode_phone).on('child_added', function () {
                                    _this.isExist = true;
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]).then(function () {
                                        var index = _this.navCtrl.getActive().index;
                                        _this.navCtrl.remove(0, index);
                                    });
                                });
                                setTimeout(function () {
                                    if (!_this.isExist) {
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                                    }
                                }, 3000);
                            }, function (onRejected) {
                                if (onRejected.code == "auth/user-disabled") {
                                    var aCtrl = _this.alertCtrl.create({
                                        'title': 'Account Disabled',
                                        'message': 'Your account is disabled by the administrator.',
                                        'enableBackdropDismiss': false,
                                        'buttons': [{ 'text': 'Ok', 'handler': function () { _this.platform.exitApp(); } }]
                                    });
                                    aCtrl.present();
                                }
                                else if (onRejected.code == "auth/too-many-requests") {
                                    var aCtrl = _this.alertCtrl.create({
                                        'title': 'Account Disabled',
                                        'message': 'Your account is disabled by the administrator.',
                                        'enableBackdropDismiss': false,
                                        'buttons': [{ 'text': 'Ok', 'handler': function () { _this.platform.exitApp(); } }]
                                    });
                                    aCtrl.present();
                                }
                            });
                        }
                    }
                ]
            });
            prompt.present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/home/home.html"*/'<ion-header>\n</ion-header>\n\n<ion-header>\n</ion-header>\n<ion-content class="no-border" style="background-image:url(\'../assets/imgs/loginbg.png\');background-size: cover; height: 100%; width: 100%;" ion-fixed no-bounce>\n  <div id="recaptcha-container"></div>\n  <img src = "assets/imgs/loginheader.png" alt = "logo" class="login-header">\n  <div class="login-sec">\n    <input type="number" [(ngModel)]="phoneNumber" placeholder="Enter your Phone number" class="phone-field">\n    <button type="button" (click) = "loginUser()" class = "loginbtn" ion-button>Login</button>\n  </div>\n  <hr class="border-line">\n  <div style="display: flex; justify-content: center; position:relative; top:30%;">\n    <img src = "assets/imgs/Facebook.png" alt = "logo" style="width:25%; height: 25%; position: relative; right: -15px;">\n    <img src = "assets/imgs/Twitter.png" alt = "logo" style="width:25%; height: 25%; position: relative; left:-15px;">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/thrilok/hd-mobile/HumainDiagnostics/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map