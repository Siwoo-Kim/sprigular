webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav class=\"app-sidenav\" mode=\"over\" align=\"start\" style=\"width: 250px\" #sidenav>\n    <div class=\"container mt-3\">\n      <div class=\"ui list\">\n        <a class=\"item\">\n          <i class=\"help icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">Floated Icon</div>\n            <div class=\"description\">This text will always have a left margin to make sure it sits alongside your icon</div>\n          </div>\n        </a>\n        <a class=\"item\">\n          <i class=\"right triangle icon\"></i>\n          <div class=\"content\">\n            <div class=\"header\">Icon Alignment</div>\n            <div class=\"description\">Floated icons are by default top aligned. To have an icon top aligned try this example.</div>\n          </div>\n        </a>\n        <div class=\"item\">\n          <i class=\"help icon\"></i>\n          Inline Text\n        </div>\n      </div>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content style=\"width: 100%\">\n    <app-header (onSidenavToggle)=\"sidenav.toggle()\"></app-header>\n    <main class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </main>\n\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_section_module__ = __webpack_require__("./src/app/section/section.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                /*App Module*/
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_8__section_section_module__["a" /* SectionModule */],
                /*Angular Module*/
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__app_tokens__["a" /* BACKEND_URL_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_6__app_tokens__["b" /* PROD_SERVER_URL */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.tokens.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_URL_TOKEN; });
/* unused harmony export DEV_SERVER_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROD_SERVER_URL; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var BACKEND_URL_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]("BACKEND_TOKEN");
var DEV_SERVER_URL = 'http://' + location.hostname + ":8080/rest/";
var PROD_SERVER_URL = 'https://' + location.hostname + "/rest/";


/***/ }),

/***/ "./src/app/model/paragraph.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paragraph; });
var Paragraph = /** @class */ (function () {
    function Paragraph(id, title, code, description, parent, children) {
        this.id = id;
        this.title = title;
        this.code = code;
        this.description = description;
        this.parent = parent;
        this.children = children;
    }
    return Paragraph;
}());



/***/ }),

/***/ "./src/app/model/section.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section; });
var Section = /** @class */ (function () {
    function Section(id, name, description, basicTime, topics) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.basicTime = basicTime;
        this.topics = topics;
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_main_bootstrap_main_bootstrap_component__ = __webpack_require__("./src/app/shared/main-bootstrap/main-bootstrap.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__shared_main_bootstrap_main_bootstrap_component__["a" /* MainBootstrapComponent */] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/section/section-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.section-bootstrap-wrapper{\r\n  margin-top: 15px;\r\n  min-height: 700px;\r\n}\r\n\r\n.section-bootstrap-content {\r\n  padding: 35px;\r\n  margin-left: 15px!important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/section/section-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid section-bootstrap-wrapper\" fxLayout=\"row\">\n  <app-section-sidenav [section]=\"section\" [topicNames]=\"topicNames\" fxFlex=\"0 1 230px\"></app-section-sidenav>\n  <div class=\"main ui intro container-fluid ml-2 m-4 section-bootstrap-content\" >\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_section_repository_service__ = __webpack_require__("./src/app/service/section-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionBootstrapComponent = /** @class */ (function () {
    function SectionBootstrapComponent(route, sectionRepository, topicRepository) {
        this.route = route;
        this.sectionRepository = sectionRepository;
        this.topicRepository = topicRepository;
    }
    SectionBootstrapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var sectionName = params['sectionName'];
            _this.sectionRepository
                .byName(sectionName)
                .subscribe(function (_section) {
                _this.section = _section;
                _this.topicRepository
                    .getNamesBySectionName(_this.section.name)
                    .subscribe(function (_topicNames) { return _this.topicNames = _topicNames; });
            });
        });
    };
    SectionBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-bootstrap',
            template: __webpack_require__("./src/app/section/section-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/section/section-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_section_repository_service__["a" /* SectionRepository */],
            __WEBPACK_IMPORTED_MODULE_3__service_topic_repository_service__["a" /* TopicRepository */]])
    ], SectionBootstrapComponent);
    return SectionBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/section/section-main/section-main.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.ui.meta {\r\n  display: inline; font-size: 0.5em;color: rgba(0,0,0,.4);margin-right: .3em;\r\n}\r\n\r\n.no.example i {\r\n  display: inline;\r\n}\r\n\r\n.no.example p {\r\n  padding: 15px;\r\n}\r\n\r\n.list-topic-btn-wrapper button {\r\n  font-size: 0.9em !important;\r\n  font-weight: bold !important;\r\n  width: 250px !important;\r\n  margin: 10px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/section/section-main/section-main.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"ui dividing header\"\n    fxLayout\n    fxLayoutAlign=\"space-between center\">\n      <span>{{section?.name}}\n        <a class=\"anchor\" id=\"{{section?.id}}\"></a>\n      </span>\n  <span class=\"ui meta\">\n    <div style=\"display: flex\">\n      <mat-icon>alarm</mat-icon>&nbsp; Created: {{ section?.basicTime.created | date }}\n    </div>\n    <div style=\"display: flex\">\n      <mat-icon>alarm</mat-icon>&nbsp; Updated: {{ section?.basicTime.created | date }}\n    </div>\n  </span>\n</h2>\n<div class=\"no example\">\n  <h4>Overall description</h4>\n  <i class=\"fitted icon code\"></i>\n  <a class=\"anchor\" ></a>\n  <p>\n    {{section?.description}}\n  </p>\n  <h4>Related Topics:</h4>\n  <app-section-topiclist [section]=\"section\" [topicNames]=\"topicNames\"></app-section-topiclist>\n</div>\n\n<div class=\"container-fluid p-5 mt-5 list-topic-btn-wrapper\" fxLayout=\"row wrap\"  fxLayoutAlign=\"start start\">\n  <button *ngFor=\"let topicName of topicNames\" mat-raised-button>\n    {{ topicName}}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section-main/section-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_section_repository_service__ = __webpack_require__("./src/app/service/section-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionMainComponent = /** @class */ (function () {
    function SectionMainComponent(route, sectionRepository, topicRepository) {
        this.route = route;
        this.sectionRepository = sectionRepository;
        this.topicRepository = topicRepository;
    }
    SectionMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var sectionName = params['sectionName'];
            _this.sectionRepository
                .byName(sectionName)
                .subscribe(function (_section) {
                _this.section = _section;
                _this.topicRepository
                    .getNamesBySectionName(_this.section.name)
                    .subscribe(function (_topicNames) { return _this.topicNames = _topicNames; });
            });
        });
    };
    SectionMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-main',
            template: __webpack_require__("./src/app/section/section-main/section-main.component.html"),
            styles: [__webpack_require__("./src/app/section/section-main/section-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__service_section_repository_service__["a" /* SectionRepository */],
            __WEBPACK_IMPORTED_MODULE_3__service_topic_repository_service__["a" /* TopicRepository */]])
    ], SectionMainComponent);
    return SectionMainComponent;
}());



/***/ }),

/***/ "./src/app/section/section-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_bootstrap_component__ = __webpack_require__("./src/app/section/section-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_main_section_main_component__ = __webpack_require__("./src/app/section/section-main/section-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__ = __webpack_require__("./src/app/section/topic/topic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'section/:sectionName', component: __WEBPACK_IMPORTED_MODULE_2__section_bootstrap_component__["a" /* SectionBootstrapComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__section_main_section_main_component__["a" /* SectionMainComponent */], pathMatch: 'full' },
            { path: ':topicName', component: __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__["a" /* TopicComponent */] },
        ]
    },
];
var SectionRoutingModule = /** @class */ (function () {
    function SectionRoutingModule() {
    }
    SectionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        })
    ], SectionRoutingModule);
    return SectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/section/section-sidenav/section-sidenav.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-panel-title {\r\n  color: #9e9e9e;\r\n  font-size: 13px;\r\n}\r\n\r\nmat-list {\r\n  width: 100%;\r\n}\r\n\r\nmat-list a {\r\n  color: #9e9e9e;\r\n  font-size: 13px;\r\n  height: 35px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/section/section-sidenav/section-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list fxLayout=\"column\"  fxFill fxLayoutAlign=\"start\">\n  <mat-expansion-panel mat-list-item>\n    <mat-expansion-panel-header>\n      <mat-panel-title >\n        {{ section?.name }}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <mat-nav-list >\n      <a mat-list-item\n         fxFlexAlign=\"center\"\n         *ngFor=\"let topicName of topicNames\"\n         routerLinkActive=\"active-link\"\n         [routerLink]=\"['/section',section.name,topicName]\">\n        <p> {{ topicName }} </p>\n      </a>\n    </mat-nav-list>\n  </mat-expansion-panel>\n  <mat-expansion-panel mat-list-item>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Extra\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <mat-list>\n    </mat-list>\n  </mat-expansion-panel>\n</mat-list>\n\n"

/***/ }),

/***/ "./src/app/section/section-sidenav/section-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_section_model__ = __webpack_require__("./src/app/model/section.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionSidenavComponent = /** @class */ (function () {
    function SectionSidenavComponent() {
    }
    SectionSidenavComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_section_model__["a" /* Section */])
    ], SectionSidenavComponent.prototype, "section", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SectionSidenavComponent.prototype, "topicNames", void 0);
    SectionSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-sidenav',
            template: __webpack_require__("./src/app/section/section-sidenav/section-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/section/section-sidenav/section-sidenav.component.css")],
        })
    ], SectionSidenavComponent);
    return SectionSidenavComponent;
}());



/***/ }),

/***/ "./src/app/section/section-topiclist/section-topiclist.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.item {\r\n  display: -webkit-inline-box !important;\r\n  display: -ms-inline-flexbox !important;\r\n  display: inline-flex !important;\r\n}\r\n\r\nmat-icon {\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/section/section-topiclist/section-topiclist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui existing segment\">\n  <div class=\"code\">\n    <div class=\"ui list\">\n      <div class=\"item\">\n        <mat-icon>toc</mat-icon >\n        <div class=\"content\">\n          <div class=\"header\">\n            {{section?.name}}\n          </div>\n          <div class=\"description\">\n            Section Root\n          </div>\n          <div class=\"list\"\n               *ngFor=\"let topicName of topicNames\">\n            <div class=\"item\">\n              <mat-icon>description</mat-icon >\n              <div class=\"content\">\n                <div class=\"header\">\n                  <a [routerLink]=\"['/section',section.name,topicName]\">{{ topicName}}</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/section/section-topiclist/section-topiclist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionTopiclistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_section_model__ = __webpack_require__("./src/app/model/section.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionTopiclistComponent = /** @class */ (function () {
    function SectionTopiclistComponent() {
    }
    SectionTopiclistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_section_model__["a" /* Section */])
    ], SectionTopiclistComponent.prototype, "section", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SectionTopiclistComponent.prototype, "topicNames", void 0);
    SectionTopiclistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-topiclist',
            template: __webpack_require__("./src/app/section/section-topiclist/section-topiclist.component.html"),
            styles: [__webpack_require__("./src/app/section/section-topiclist/section-topiclist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionTopiclistComponent);
    return SectionTopiclistComponent;
}());



/***/ }),

/***/ "./src/app/section/section.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service_module__ = __webpack_require__("./src/app/service/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_bootstrap_component__ = __webpack_require__("./src/app/section/section-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__section_sidenav_section_sidenav_component__ = __webpack_require__("./src/app/section/section-sidenav/section-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_topiclist_section_topiclist_component__ = __webpack_require__("./src/app/section/section-topiclist/section-topiclist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_main_section_main_component__ = __webpack_require__("./src/app/section/section-main/section-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__ = __webpack_require__("./src/app/section/topic/topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__section_routing_module__ = __webpack_require__("./src/app/section/section-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topic_paragraph_paragraph_component__ = __webpack_require__("./src/app/section/topic/paragraph/paragraph.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SectionModule = /** @class */ (function () {
    function SectionModule() {
    }
    SectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__service_service_module__["a" /* ServiceModule */],
                __WEBPACK_IMPORTED_MODULE_10__section_routing_module__["a" /* SectionRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__section_bootstrap_component__["a" /* SectionBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_6__section_sidenav_section_sidenav_component__["a" /* SectionSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__section_topiclist_section_topiclist_component__["a" /* SectionTopiclistComponent */],
                __WEBPACK_IMPORTED_MODULE_8__section_main_section_main_component__["a" /* SectionMainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__topic_topic_component__["a" /* TopicComponent */],
                __WEBPACK_IMPORTED_MODULE_11__topic_paragraph_paragraph_component__["a" /* ParagraphComponent */],
            ]
        })
    ], SectionModule);
    return SectionModule;
}());



/***/ }),

/***/ "./src/app/section/topic/paragraph/paragraph.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.paragraph-icon {\r\n  color: #db2828;\r\n}\r\n\r\n.paragraph-wrapper p {\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n  font-family: 'Lato', sans-serif !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/section/topic/paragraph/paragraph.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"paragraph-wrapper mt-5\">\n  <h3 class=\"ui dividing header\">\n     <i class=\"paragraph-icon ui icon angular\"></i>{{ paragraph?.title }}\n  </h3>\n  <p>\n    {{paragraph?.description}}\n  </p>\n  <div class=\"ui existing segment\">\n    <pre >{{paragraph.code}}</pre>\n  </div>\n</div>\n<app-paragraph *ngFor=\"let child of paragraph.children\" [paragraph]=\"child\"></app-paragraph>\n"

/***/ }),

/***/ "./src/app/section/topic/paragraph/paragraph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_paragraph_model__ = __webpack_require__("./src/app/model/paragraph.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent() {
    }
    ParagraphComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_paragraph_model__["a" /* Paragraph */])
    ], ParagraphComponent.prototype, "paragraph", void 0);
    ParagraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-paragraph',
            template: __webpack_require__("./src/app/section/topic/paragraph/paragraph.component.html"),
            styles: [__webpack_require__("./src/app/section/topic/paragraph/paragraph.component.css")]
        })
    ], ParagraphComponent);
    return ParagraphComponent;
}());



/***/ }),

/***/ "./src/app/section/topic/topic.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.ui.meta {\r\n  display: inline; font-size: 0.5em;color: rgba(0,0,0,.4);margin-right: .3em;\r\n}\r\n\r\n.no.example i {\r\n  display: inline;\r\n}\r\n\r\n.no.example p {\r\n  padding: 15px;\r\n}\r\n\r\n.list-topic-btn-wrapper button {\r\n  font-size: 0.9em !important;\r\n  font-weight: bold !important;\r\n  width: 250px !important;\r\n  margin: 10px !important;\r\n}\r\n\r\n.topic-main-wrapper {\r\n  margin-top: 15px;\r\n  font-size: 15px;\r\n  line-height: 27px;\r\n  font-weight: 500;\r\n}\r\n\r\n.topic-section p {\r\n  margin-top: 25px;\r\n  padding: 15px;\r\n  margin-bottom: 25px;\r\n  font-size: 16px;\r\n  line-height: 28px;\r\n  font-weight: 400;\r\n  font-family: 'Lato', sans-serif !important;\r\n}\r\n\r\n.right-nav {\r\n  margin-left: 15px;\r\n}\r\n\r\ndiv.ui.sticky {\r\n  color: rgba(0,0,0,.54);\r\n  padding-left: 15px;\r\n  border-left: 2px solid rgba(0,0,0,.54);\r\n}\r\n\r\n.right-nav h4.header {\r\n  font-size: 0.9em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/section/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Tab 1\">\r\n    <ng-template mat-tab-label>\r\n      <mat-icon>subject</mat-icon>\r\n    </ng-template>\r\n    <div class=\"topic-main-wrapper\" fxLayout=\"row\" fxFlexAlign=\"start start\">\r\n      <div fxFlex=\"85%\" class=\"topic-content.wrapper\">\r\n        <h2 class=\"ui dividing header\" fxLayout  fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            {{ topic?.name }}\r\n          </span>\r\n          <span class=\"ui meta\">\r\n          <div style=\"display: flex\">\r\n            <mat-icon>alarm</mat-icon>&nbsp; Created: {{ topic?.basicTime.created | date }}\r\n          </div>\r\n          <div style=\"display: flex\">\r\n            <mat-icon>alarm</mat-icon>&nbsp; Updated: {{ topic?.basicTime.created | date }}\r\n          </div>\r\n         </span>\r\n        </h2>\r\n        <div class=\"topic-section\">\r\n          <h4>Overall description</h4>\r\n          <p>\r\n            {{topic?.description}}\r\n          </p>\r\n        </div>\r\n        <app-paragraph *ngFor=\"let paragraph of topic?.paragraphs\" [paragraph]=\"paragraph\" ></app-paragraph>\r\n      </div>\r\n      <div class=\"right-nav\" fxFlex=\"15%\" fxHide.lt-md=\"true\" >\r\n        <div class=\"ui sticky\">\r\n          <h4 class=\"ui header\" style=\"margin-bottom: 0px\" *ngFor=\"let paragraph of topic?.paragraphs\">\r\n            {{paragraph.title}}\r\n          </h4>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </mat-tab>\r\n\r\n  <!--not implement-->\r\n  <mat-tab label=\"Tab 2\">\r\n    <ng-template mat-tab-label>\r\n      <mat-icon>code</mat-icon>\r\n    </ng-template>\r\n    <div class=\"demo-tab-content\">\r\n      <div class=\"no example mt-5\" *ngFor=\"let paragraph of topic?.paragraphs\">\r\n        <h4> {{ paragraph?.title }}</h4>\r\n        <i class=\"fitted icon code\"></i>\r\n        <a class=\"anchor\" ></a>\r\n        <p style=\"font-size: 16px;line-height: 28px;    font-weight: 400;font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;\">\r\n          {{paragraph?.description}}\r\n        </p>\r\n        <div class=\"ui existing segment\">\r\n          <pre >{{paragraph.code}}</pre>\r\n        </div>\r\n        <div class=\"no example mt-5\" *ngFor=\"let paragraph of paragraph.children\">\r\n          <h4> {{ paragraph?.title }}</h4>\r\n          <i class=\"fitted icon code\"></i>\r\n          <a class=\"anchor\" ></a>\r\n          <p style=\"font-size: 16px;line-height: 28px;    font-weight: 400;font-family: Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;\">\r\n            {{paragraph?.description}}\r\n          </p>\r\n          <div class=\"ui existing segment\">\r\n            <pre >{{paragraph.code}}</pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"Tab 3\" disabled>\r\n    <ng-template mat-tab-label>\r\n      <mat-icon>block</mat-icon>\r\n    </ng-template>\r\n    No content\r\n  </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/section/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicComponent = /** @class */ (function () {
    function TopicComponent(topicRepository, route) {
        this.topicRepository = topicRepository;
        this.route = route;
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.topicName = params['topicName'];
            _this.topicRepository.byName(_this.topicName)
                .subscribe(function (_topic) {
                _this.topic = _topic;
                _this.topicRepository
                    .getParagraphsById(_this.topic.id)
                    .subscribe(function (_paragraphs) {
                    return _this.topic.paragraphs = _paragraphs;
                });
            });
        });
    };
    TopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-topic',
            template: __webpack_require__("./src/app/section/topic/topic.component.html"),
            styles: [__webpack_require__("./src/app/section/topic/topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_topic_repository_service__["a" /* TopicRepository */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/app/service/locale-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__ = __webpack_require__("./src/app/service/rest-datasource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UPDATE_LOCALE = "?language=";
var LocaleResolver = /** @class */ (function () {
    function LocaleResolver(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.localeUrl = 'locale';
        this.localeChange$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        dataSource.get(this.localeUrl)
            .subscribe(function (locale) { return _this.currentLocale = locale; });
    }
    LocaleResolver.prototype.changeLocale = function (locale) {
        var _this = this;
        this.dataSource.get(this.localeUrl + UPDATE_LOCALE + locale)
            .subscribe(function (_locale) {
            _this.currentLocale = _locale;
            _this.localeChange$.next(_locale);
        });
    };
    LocaleResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["e" /* RestDatasource */]])
    ], LocaleResolver);
    return LocaleResolver;
}());



/***/ }),

/***/ "./src/app/service/message-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__ = __webpack_require__("./src/app/service/rest-datasource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_resolver_service__ = __webpack_require__("./src/app/service/locale-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageResolver = /** @class */ (function () {
    function MessageResolver(dataSource, localeResolver) {
        this.dataSource = dataSource;
        this.localeResolver = localeResolver;
        this.messageUrl = 'message';
    }
    MessageResolver.prototype.getMessage = function (code) {
        return this.dataSource
            .get(this.messageUrl + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["a" /* QUERY_BY_CODE */] + "&code=" + code + '&locale=' + this.localeResolver.currentLocale);
    };
    MessageResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["e" /* RestDatasource */],
            __WEBPACK_IMPORTED_MODULE_2__locale_resolver_service__["a" /* LocaleResolver */]])
    ], MessageResolver);
    return MessageResolver;
}());



/***/ }),

/***/ "./src/app/service/rest-datasource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return QUERY_REQUEST_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QUERY_BY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QUERY_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUERY_BY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RestDatasource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tokens__ = __webpack_require__("./src/app/app.tokens.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var QUERY_REQUEST_NAME = "?request=name";
var QUERY_BY_NAME = "?by=name";
var QUERY_BY_ID = "?by=id";
var QUERY_BY_CODE = "?by=code";
var RestDatasource = /** @class */ (function () {
    function RestDatasource(http, backendUrl) {
        this.http = http;
        this.backendUrl = backendUrl;
        console.log(this.backendUrl);
    }
    RestDatasource.prototype.get = function (url, params) {
        return this.request(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url);
    };
    RestDatasource.prototype.post = function (url, body) {
        return this.request(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, url, body);
    };
    RestDatasource.prototype.request = function (method, url, body) {
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: method,
            url: this.backendUrl + url,
            body: body,
        });
        return this.http.request(request)
            .map(function (response) { return response.json(); });
    };
    RestDatasource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_tokens__["a" /* BACKEND_URL_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String])
    ], RestDatasource);
    return RestDatasource;
}());



/***/ }),

/***/ "./src/app/service/section-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__ = __webpack_require__("./src/app/service/rest-datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionRepository = /** @class */ (function () {
    function SectionRepository(dataSource) {
        this.dataSource = dataSource;
        this.sectionUrl = 'section';
    }
    SectionRepository.prototype.getNames = function () {
        return this.dataSource.get(this.sectionUrl + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["d" /* QUERY_REQUEST_NAME */]);
    };
    SectionRepository.prototype.byName = function (name) {
        return this.dataSource.get(this.sectionUrl + "/" + name + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["c" /* QUERY_BY_NAME */]);
    };
    SectionRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["e" /* RestDatasource */]])
    ], SectionRepository);
    return SectionRepository;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__ = __webpack_require__("./src/app/service/rest-datasource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_repository_service__ = __webpack_require__("./src/app/service/section-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_repository_service__ = __webpack_require__("./src/app/service/topic-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__locale_resolver_service__ = __webpack_require__("./src/app/service/locale-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_resolver_service__ = __webpack_require__("./src/app/service/message-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__locale_resolver_service__["a" /* LocaleResolver */],
                __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["e" /* RestDatasource */],
                __WEBPACK_IMPORTED_MODULE_2__section_repository_service__["a" /* SectionRepository */],
                __WEBPACK_IMPORTED_MODULE_4__topic_repository_service__["a" /* TopicRepository */],
                __WEBPACK_IMPORTED_MODULE_6__message_resolver_service__["a" /* MessageResolver */],
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/service/topic-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__ = __webpack_require__("./src/app/service/rest-datasource.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicRepository = /** @class */ (function () {
    function TopicRepository(dataSource) {
        this.dataSource = dataSource;
        this.topicUrl = 'topic';
        this.paragraphUrl = 'paragraph';
    }
    TopicRepository.prototype.getNamesBySectionName = function (sectionName) {
        return this.dataSource.get(this.topicUrl + "/category/" + sectionName + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["d" /* QUERY_REQUEST_NAME */]);
    };
    TopicRepository.prototype.byName = function (topicName) {
        return this.dataSource.get(this.topicUrl + "/" + topicName + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["c" /* QUERY_BY_NAME */]);
    };
    TopicRepository.prototype.getParagraphsById = function (topicId) {
        return this.dataSource.get(this.paragraphUrl + "/" + topicId + __WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["b" /* QUERY_BY_ID */]);
    };
    TopicRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource_service__["e" /* RestDatasource */]])
    ], TopicRepository);
    return TopicRepository;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-toolbar {\r\n  margin: 55px 0 0 0;\r\n  padding: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar\r\n  fxLayout\r\n  fxLayoutAlign=\"space-between center\"\r\n  color=\"primary\">\r\n  <div class=\"images\" >\r\n    <i class=\"ui icon large css3 alternate\"></i> {{ thisYear }}\r\n  </div>\r\n  <div class=\"ui horizontal inverted small divided link list\">\r\n    <a class=\"item\" href=\"#\">Site Map</a>\r\n    <a class=\"item\" href=\"#\">Contact Us</a>\r\n    <a class=\"item\" href=\"#\">Terms and Conditions</a>\r\n    <a class=\"item\" href=\"#\">Privacy Policy</a>\r\n  </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.thisYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nmat-toolbar {\r\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12) !important;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12) !important;\r\n  z-index: 3 !important;\r\n  margin: 0 !important;\r\n  background: #3f51b5!important;\r\n}\r\n\r\nmat-toolbar a {\r\n  -webkit-tap-highlight-color: transparent;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar class=\"ui fixed menu nav-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"15px\" color=\"primary\">\n  <div fxFlex=\"50%\">\n    <a mat-icon-button [matTooltip]=\"'Home'\" routerLink=\"/\">\n      <mat-icon>adb</mat-icon>\n    </a>\n    <a mat-icon-button (click)=\"onSidenavToggle.emit()\">\n      <mat-icon>list</mat-icon>\n    </a>\n    <a mat-button\n       *ngFor=\"let section of sectionNames;\"\n       [routerLink]=\"['/section', section]\">\n      {{ getLabelBySectionName(section) }}\n    </a>\n  </div>\n  <div fxLayout=\"row-reverse\"\n       style=\"width: 100%\"\n       fxLayoutAlign=\" center\"\n       fxLayoutGap=\"55px\">\n    <a aria-label=\"GitHub Repository\" href=\"https://github.com/Siwoo-Kim\"\n       mat-icon-button\n       tabindex=\"0\" aria-disabled=\"false\">\n      <span class=\"mat-button-wrapper\">\n      <i class=\"ui icon large github\"></i>\n      </span><div class=\"mat-button-ripple mat-ripple\" ></div><div class=\"mat-button-focus-overlay\"></div>\n    </a>\n    <mat-form-field style=\"width: 15px;padding-bottom: -5px;margin-right: 15px;\" >\n      <i class=\"world icon\"></i>\n      <mat-select  [formControl]=\"languageInput\">\n        <mat-option *ngFor=\"let language of ['ko','en']\"\n                    [value]=\"language\" >\n            {{ language }}\n        </mat-option>\n      </mat-select>\n      <mat-hint style=\"color: white;margin-left: 2px !important;\" > {{ localeResolver.currentLocale }}</mat-hint>\n    </mat-form-field>\n  </div>\n</mat-toolbar>\n<app-locator ></app-locator>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_section_repository_service__ = __webpack_require__("./src/app/service/section-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_locale_resolver_service__ = __webpack_require__("./src/app/service/locale-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_message_resolver_service__ = __webpack_require__("./src/app/service/message-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sectionRepository, localeResolver, messageResolver) {
        this.sectionRepository = sectionRepository;
        this.localeResolver = localeResolver;
        this.messageResolver = messageResolver;
        this.labels = [];
        this.languageInput = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        this.onSidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.codePrefix = 'header.anchor.';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageInput
            .valueChanges
            .subscribe(function (value) { return _this.localeResolver.changeLocale(value); });
        this.sectionRepository
            .getNames()
            .subscribe(function (_sectionNames) { return _this.sectionNames = _sectionNames; });
        this.localeChangeSubscription = this.localeResolver.localeChange$.subscribe(function () { return _this.resolveLabels(); });
        this.resolveLabels();
    };
    HeaderComponent.prototype.resolveLabels = function () {
        var _this = this;
        var codes = [];
        codes.push(this.codePrefix + 'home');
        codes.push(this.codePrefix + 'list');
        codes.push(this.codePrefix + 'springboot');
        codes.push(this.codePrefix + 'angular');
        this.labels = [];
        codes.forEach(function (_code) {
            _this.messageResolver.getMessage(_code).subscribe(function (_label) {
                _this.labels.push({ code: _code, label: _label });
            });
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.localeChangeSubscription.unsubscribe();
    };
    HeaderComponent.prototype.getLabelBySectionName = function (sectionName) {
        return this.labels.find(function (label) {
            if (sectionName.toLowerCase().startsWith('spring')) {
                sectionName = 'springboot';
            }
            return label.code.indexOf(sectionName.toLowerCase()) > 0;
        }).label;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "onSidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_section_repository_service__["a" /* SectionRepository */],
            __WEBPACK_IMPORTED_MODULE_2__service_locale_resolver_service__["a" /* LocaleResolver */],
            __WEBPACK_IMPORTED_MODULE_3__service_message_resolver_service__["a" /* MessageResolver */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/locator/locator.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.locator {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: 0;\r\n  padding-left: 15px;\r\n  color: #868686;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  background-color: #eee;\r\n  border-bottom: 1px solid #ddd;\r\n  height: 50px;\r\n  line-height: 40px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  vertical-align: middle;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar class=\"locator\" style=\"margin-top: 4.8em;\" color=\"primary\">\n  <div class=\"ui extra\">\n    Home > Something\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/shared/locator/locator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocatorComponent = /** @class */ (function () {
    function LocatorComponent() {
    }
    LocatorComponent.prototype.ngOnInit = function () {
    };
    LocatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locator',
            template: __webpack_require__("./src/app/shared/locator/locator.component.html"),
            styles: [__webpack_require__("./src/app/shared/locator/locator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocatorComponent);
    return LocatorComponent;
}());



/***/ }),

/***/ "./src/app/shared/main-bootstrap/main-bootstrap.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.main-content-wrapper {\r\n  background: #ffffff!important;\r\n  color: #534277;\r\n}\r\n\r\n.big2-wrapper {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 100%;\r\n          flex: 1 1 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  max-width: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/main-bootstrap/main-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"30px\"\n     fxLayoutAlign=\"start center\">\n  <div fxFlex class=\"main-content-wrapper\" >\n    <div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center\">\n      <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n        <h1 class=\"display-4 font-weight-normal\">Springular</h1>\n        <p class=\"lead font-weight-normal\">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>\n        <a class=\"btn btn-outline-secondary\"\n           color=\"primary\"\n           mat-raised-button\n           href=\"#\">Coming soon</a>\n      </div>\n      <div class=\"product-device box-shadow d-none d-md-block\"></div>\n      <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\n    </div>\n  </div>\n  <div fxFlex\n       fxLayout=\"row\"\n       fxFlexAlign=\"center center\"\n       fxLayout.lt-sm=\"column\"\n       class=\"d-md-flex flex-md-equal mb-5 mt-3 w-100 my-md-3 pl-md-3\">\n    <div\n      fxFlex=\"50%\"\n      class=\"big2-wrapper bg-green mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n      <div class=\"my-3 py-3\">\n        <h2 class=\"display-5\">Spring Boot</h2>\n        <p class=\"lead\">And an even wittier subheading.</p>\n      </div>\n      <img src=\"/assets/img/main/image1.png\" class=\"box-shadow mx-auto\" style=\"height: 300px; border-radius: 21px 21px 0 0;\" />\n    </div>\n    <div\n      fxFlex=\"50%\"\n      class=\"big2-wrapper mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden\">\n      <div class=\"my-3 p-3\">\n        <h2 class=\"display-5\">Angular</h2>\n        <p class=\"lead\">And an even wittier subheading.</p>\n      </div>\n      <img src=\"/assets/img/main/image2.png\" class=\"box-shadow mx-auto\" style=\"height: 300px; border-radius: 21px 21px 0 0;\" />\n    </div>\n  </div>\n  <div class=\"ui alternate stripe vertical segment mt-5\" style=\"background-color: #F2F3F5;padding: 10em 0px;border-radius: 0em;margin: 0em;\">\n    <div class=\"ui stackable center aligned grid container\">\n      <div class=\"fourteen wide column\">\n        <h1 class=\"ui icon header\">\n          <img class=\"ui inline icon image\" src=\"/assets/img/main/image3.png\">\n          Go and Study with the references\n        </h1>\n        <div class=\"ui stackable center aligned vertically padded grid\">\n          <div class=\"eight wide column\">\n            <h3 class=\"ui header\">Best Learning</h3>\n            <p>I personally recommend to you to be better programmer</p>\n            <a mat-raised-button >\n              <i class=\"right chevron icon\" style=\"display: contents\"></i>\n              Get Started Now\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/main-bootstrap/main-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainBootstrapComponent = /** @class */ (function () {
    function MainBootstrapComponent() {
    }
    MainBootstrapComponent.prototype.ngOnInit = function () {
    };
    MainBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-bootstrap',
            template: __webpack_require__("./src/app/shared/main-bootstrap/main-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/shared/main-bootstrap/main-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBootstrapComponent);
    return MainBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var materials = [
    __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDividerModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatChipsModule */],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: materials,
            exports: materials,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_bootstrap_main_bootstrap_component__ = __webpack_require__("./src/app/shared/main-bootstrap/main-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locator_locator_component__ = __webpack_require__("./src/app/shared/locator/locator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__main_bootstrap_main_bootstrap_component__["a" /* MainBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__locator_locator_component__["a" /* LocatorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__locator_locator_component__["a" /* LocatorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map