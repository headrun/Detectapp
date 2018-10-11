webpackJsonp([9],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewPageModule", function() { return DetailViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_view__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailViewPageModule = /** @class */ (function () {
    function DetailViewPageModule() {
    }
    DetailViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_view__["a" /* DetailViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_view__["a" /* DetailViewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__detail_view__["a" /* DetailViewPage */]
            ]
        })
    ], DetailViewPageModule);
    return DetailViewPageModule;
}());

//# sourceMappingURL=detail-view.module.js.map

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

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailViewPage; });
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
        this.phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
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
        var groupid = this.pageData['id'];
        var like = 0;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(groupid + '_posts').on("child_added", function (snapshot) {
            if (!snapshot.val().is_abuse && (snapshot.val().post != '' || snapshot.val().post_image)) {
                var postobj_1 = snapshot.val();
                postobj_1['created_at'] = new Date(postobj_1.created_at).toDateString();
                postobj_1['postid'] = snapshot.key;
                for (var _i = 0, _a = postobj_1.like_users; _i < _a.length; _i++) {
                    var user_phone = _a[_i];
                    if (user_phone === _this.phoneNumber) {
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
        var groupid = this.pageData['id'];
        var postData = this.pageRenderData[index];
        var postid = postData['postid'];
        var user_phone = this.phoneNumber;
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
                            console.log('successfully liked!!!');
                        }, function (err) {
                            console.log('caught the theif...');
                        });
                        ;
                    });
                }
            }
        }
        else if (typ === 'comment') {
            this.postView(index, true);
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
        var groupid = this.pageData['id'];
        var user_phone = this.phoneNumber;
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
                        if (user_phone === _this.phoneNumber) {
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
    DetailViewPage.prototype.postView = function (index, comment) {
        console.log("post view");
        debugger;
        comment = false;
        var postData = this.pageRenderData[index];
        var groupData = this.pageData;
        this.navCtrl.push("PostdetailPage", { 'postData': postData, 'groupData': groupData, 'index': index, 'comment': comment });
    };
    DetailViewPage.prototype.newPost = function () {
        this.navCtrl.push("NewpostPage", { 'groupData': this.pageData });
    };
    DetailViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-view',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/detail-view/detail-view.html"*/'<!--\n  Generated template for the DetailViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Group Posts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row class="group_details-1" padding style="padding-bottom:0;">\n    <ion-col class="img-sec">\n      <img src="{{pageData.images_links}}" alt="" id="grp-img">\n    </ion-col>\n    <ion-col class="fol-sec">\n      {{pageData.followers}} Followers\n    </ion-col>\n    <ion-col class="post-sec">\n      {{pageRenderData.length}} Posts\n    </ion-col>\n  </ion-row>\n  <ion-row class="group_details-2" padding style="padding:0px 16px;">\n    <ion-col class="title-sec">\n      {{pageData.title}}\n    </ion-col>\n  </ion-row>\n  <ion-row class="about-sec" padding style="padding:0px 16px;">\n    <ion-col>About</ion-col>\n  </ion-row>\n  <ion-row class="desc-sec" padding style="padding-top:0px">\n    <ion-col>\n      {{pageData.description}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col offset-8 col-4 class="padding">\n      <img src="assets/imgs/new_post.png" alt="" id="new-post" (click)="newPost()">\n      <!-- <button type="button" ion-button round color="secondary">New Post</button> -->\n    </ion-col>\n  </ion-row>\n  <div *ngIf="pageRenderData.length == 0" class="mpty-data-msg">No Posts</div>\n  <ion-row *ngFor="let post of pageRenderData; index as i">\n    <ion-col>\n      <ion-card *ngIf="post.post != \'\' || post.post_image != \'\'">\n        <div (click)="postView(i)">\n          <ion-card-header>\n            <ion-row>\n              <ion-col col-2 class="pro-sec">\n                <img src="{{post.pro_img}}" alt="" id="pro-img">\n              </ion-col>\n              <ion-row *ngIf="post.name != \'\'">\n                <ion-col class="user-sec">\n                  <ion-row class="u-name">{{post.name}}</ion-row>\n                  <ion-row class="role">{{post.role}} &bull; {{post.spec}}</ion-row>\n                  <ion-row class="post-date">{{post.created_at}}</ion-row>\n                </ion-col>\n              </ion-row>\n            </ion-row>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col *ngIf="post.post_image != \'\'">\n                <img src="{{post.post_image}}" alt="" id="post-img">\n              </ion-col>\n            </ion-row>\n            <ion-row class="postdesc-sec">\n              <ion-col class="postdesc-sec">{{post.post}}</ion-col>\n            </ion-row>\n          </ion-card-content>\n        </div>\n        <ion-row class="actionbar">\n          <div>\n            <ion-col><button (click)="actionBtn(\'like\', i)" [ngClass]="{\'color\':post.postlike}" class="non-btn">Like</button></ion-col>\n            <ion-col><button (click)="actionBtn(\'comment\', i)" class="non-btn">Comment</button></ion-col>\n          </div>\n          <div (click)="postDetail(i)"></div>\n          <div (click)="postDetail(i)">\n            <ion-col class="likes_count"><img src="assets/imgs/Like.png" alt="" id="like" style="top:23px; position: relative;"><span style="left: -50px; top: 8px; position: relative;">{{post.likes_count}}</span></ion-col>\n            <ion-col class="cmt_count"><img src="assets/imgs/comment.png" alt="" id="chat" style="top:-26px; position: relative;"><span  style="position: relative; top: -42px;">{{post.comments_count}}</span></ion-col>\n          </div>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<footer [ic_active]="3"></footer>'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/detail-view/detail-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], DetailViewPage);
    return DetailViewPage;
}());

//# sourceMappingURL=detail-view.js.map

/***/ })

});
//# sourceMappingURL=9.js.map