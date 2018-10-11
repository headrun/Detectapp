webpackJsonp([1],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageModule", function() { return QuizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuizPageModule = /** @class */ (function () {
    function QuizPageModule() {
    }
    QuizPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */]
            ]
        })
    ], QuizPageModule);
    return QuizPageModule;
}());

//# sourceMappingURL=quiz.module.js.map

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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
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
        this.isQuizEmpty = false;
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
            if (datasnapshot.val().questions_data !== '') {
                that.quizData = datasnapshot.val().questions_data;
                that.noquest = that.quizData.length - 1;
            }
            else {
                that.isQuizEmpty = true;
            }
        });
        setTimeout(function () {
            _this.lctrl.dismiss();
        }, 1000);
    };
    QuizPage.prototype.questionsbt = function () {
        var phoneNumber = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
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
            var finalObj = { 'answers': this.answersData, 'userid': phoneNumber, 'eventid': this.eventData['eventid'], 'answerindex': this.eventData['eventid'] + '#' + phoneNumber, 'correctCount': this.correctCount, 'totalquestions': this.quizData.length };
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
        var user_phone = window.localStorage.getItem('phoneNo').replace("\"", "").replace("\"", "");
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
            selector: 'page-quiz',template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/quiz/quiz.html"*/'<!--\n  Generated template for the QuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>quiz</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides  #slides *ngIf="quizData && quizData.length && !quizCmplt">\n    <ion-slide *ngFor="let question of quizData; index as i">\n      <span class="q-num-chip">{{i+1}} of {{quizData.length}}</span>\n      <h4 class="q-title" *ngIf="question.question"> {{question.question}}</h4>\n      <ion-list radio-group [(ngModel)]="questions[i]" name="questions[i]" *ngIf="question.question">\n        <ion-item>\n          <ion-label>{{question.option1}}</ion-label>\n          <ion-radio value="{{question.option1}}" (click)="answered(\'option1\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option2}}</ion-label>\n          <ion-radio value="{{question.option2}}" (click)="answered(\'option2\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option3}}</ion-label>\n          <ion-radio value="{{question.option3}}" (click)="answered(\'option3\', i)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{question.option4}}</ion-label>\n          <ion-radio value="{{question.option4}}" (click)="answered(\'option4\', i)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n  <div *ngIf="quizData.length && !quizCmplt">\n    <button ion-button full style="background-color:#8CD396; position:fixed; bottom: 50px; height: 50px; left:0px; z-index:10;" (click)="questionsbt()">SUBMIT</button>\n    <!-- <button type="button" ion-button color="secondary" (click)="questionsbt()"  class="sbt-btn">submit</button> -->\n  </div>\n  <ion-card *ngIf="quizCmplt">\n    <ion-card-header class="score-board">\n      <h2 class="score-text">Your Score is</h2>\n      <div class="score-sec">\n        <img src="assets/imgs/date_bg.png" alt="" class="score-bg">\n        <p class="score">{{correctCount}}</p>\n      </div>\n    </ion-card-header>\n  </ion-card>\n  <div *ngIf="isQuizEmpty == true && quizData.length == 0" class="mpty-data-msg">No Quiz</div>\n</ion-content>\n<footer [ic_active]="2"></footer>'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/pages/quiz/quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ })

});
//# sourceMappingURL=1.js.map