webpackJsonp([16],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda.module": [
		297,
		11
	],
	"../pages/chat/chat.module": [
		296,
		10
	],
	"../pages/detail-view/detail-view.module": [
		302,
		9
	],
	"../pages/event-creation/event-creation.module": [
		298,
		8
	],
	"../pages/events/events.module": [
		299,
		7
	],
	"../pages/group/group.module": [
		300,
		6
	],
	"../pages/home/home.module": [
		301,
		15
	],
	"../pages/newpost/newpost.module": [
		305,
		5
	],
	"../pages/news/news.module": [
		303,
		4
	],
	"../pages/postdetail/postdetail.module": [
		304,
		3
	],
	"../pages/profile/profile.module": [
		306,
		14
	],
	"../pages/profilecreation/profilecreation.module": [
		307,
		2
	],
	"../pages/quiz/quiz.module": [
		308,
		1
	],
	"../pages/settings/settings.module": [
		310,
		13
	],
	"../pages/show-going-users/show-going-users.module": [
		309,
		12
	],
	"../pages/speakers/speakers.module": [
		311,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_video_player__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











__WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"]({
    apiKey: "AIzaSyDEsAr8t7S8Os2wDUYpRwudgnC1DFZUZr8",
    authDomain: "doctorseventmanagement-908e5.firebaseapp.com",
    databaseURL: "https://doctorseventmanagement-908e5.firebaseio.com",
    projectId: "doctorseventmanagement-908e5",
    storageBucket: "doctorseventmanagement-908e5.appspot.com",
    messagingSenderId: "835263747484"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-creation/event-creation.module#EventCreationPageModule', name: 'EventCreationPage', segment: 'event-creation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group/group.module#GroupPageModule', name: 'GroupPage', segment: 'group', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-view/detail-view.module#DetailViewPageModule', name: 'DetailViewPage', segment: 'detail-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postdetail/postdetail.module#PostdetailPageModule', name: 'PostdetailPage', segment: 'postdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newpost/newpost.module#NewpostPageModule', name: 'NewpostPage', segment: 'newpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilecreation/profilecreation.module#ProfilecreationPageModule', name: 'ProfilecreationPage', segment: 'profilecreation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-going-users/show-going-users.module#ShowGoingUsersPageModule', name: 'ShowGoingUsersPage', segment: 'show-going-users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/speakers/speakers.module#SpeakersPageModule', name: 'SpeakersPage', segment: 'speakers', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_video_player__["a" /* VideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_timer__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
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
    function MyApp(platform, screenOrientation, spalshScreen) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.spalshScreen = spalshScreen;
        this.rootPage = "HomePage";
        this.showSplash = true;
        platform.ready().then(function () {
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            _this.spalshScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_timer__["timer"])(2000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/suraj/Documents/projects/HumainDiagnostics/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="sk-folding-cube">\n    <div class="sk-cube1 sk-cube"></div>\n    <div class="sk-cube2 sk-cube"></div>\n    <div class="sk-cube4 sk-cube"></div>\n    <div class="sk-cube3 sk-cube"></div>\n  </div>\n</div>\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/suraj/Documents/projects/HumainDiagnostics/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map