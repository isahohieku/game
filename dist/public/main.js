(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<footer>Copyright ©2018 IsahDesignedIt</footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(GameService) {
        this.GameService = GameService;
        this.addedItems = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GameService.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }))
            .subscribe(function (items) {
            items.items.forEach(function (item) {
                _this.addedItems.push({ id: item._id, item: item.item, category: item.category });
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _routing_routing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routing/routing-routing.module */ "./src/routing/routing-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _gamename_gamename_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gamename/gamename.component */ "./src/app/gamename/gamename.component.ts");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./score/score.component */ "./src/app/score/score.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _game_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game.guard */ "./src/app/game.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _gamename_gamename_component__WEBPACK_IMPORTED_MODULE_9__["GamenameComponent"],
                _score_score_component__WEBPACK_IMPORTED_MODULE_10__["ScoreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _routing_routing_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            providers: [_game_guard__WEBPACK_IMPORTED_MODULE_13__["GameGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game.guard.ts":
/*!*******************************!*\
  !*** ./src/app/game.guard.ts ***!
  \*******************************/
/*! exports provided: GameGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameGuard", function() { return GameGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game-service.service */ "./src/services/game-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameGuard = /** @class */ (function () {
    function GameGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    GameGuard.prototype.canActivate = function (next, state) {
        if (this.user.isSetUsername() === true) {
            return this.user.isSetUsername();
        }
        else {
            this.router.navigateByUrl("/");
        }
    };
    GameGuard.prototype.canActivateChild = function (next, state) {
        if (this.user.isSetUsername() === true) {
            return this.user.isSetUsername();
        }
        else {
            this.router.navigateByUrl("/");
        }
    };
    GameGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GameGuard);
    return GameGuard;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"gameWrapper\">\n      <h2 class=\"sentence\">Drag an item and place in its category</h2>\n\n      <div class=\"allItemsHolder\">\n          <ul>\n                <li *ngFor=\"let item of addedItems\">\n                    <img src=\"assets/img/{{item.avatar}}.png\" alt=\"{{item.avatar}}\" [draggable]=\"draggable\" (dragstart)=\"drag($event)\" id=\"{{item.id}}\">\n                </li>\n          </ul>\n      </div>\n  </div>\n\n  <div class=\"basketWrapper\">\n      <div class=\"row\">\n          <div class=\"col-1-of-3\">\n              <h4>Fruits</h4>\n          </div>\n          <div class=\"col-1-of-3\">\n              <h4>Vegetables</h4>\n          </div>\n          <div class=\"col-1-of-3\">\n              <h4>Root and Tubers</h4>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-1-of-3\">\n              <div class=\"basket\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" id=\"fruits\">\n                  <div *ngFor=\"let fruit of fruitItem\" style=\"width:60px; position: relative; margin: 5px auto;\">\n                      <img src=\"assets/img/{{fruit.avatar}}.png\" style=\"height: 50px; margin: 5px auto;\">\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-1-of-3\">\n              <div class=\"basket\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" id=\"vegetables\">\n                  <div *ngFor=\"let vegetable of vegetableItem\" style=\"width:60px; margin: 5px auto;\">\n                      <img src=\"assets/img/{{vegetable.avatar}}.png\" style=\"height: 50px; margin: 5px auto;\">\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-1-of-3\">\n              <div class=\"basket\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" id=\"roots\">\n                  <div *ngFor=\"let root of rootItem\" style=\"width:60px; margin: 5px auto;\">\n                      <img src=\"assets/img/{{root.avatar}}.png\" style=\"height: 50px; margin: 5px auto;\">\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(GameService, router) {
        this.GameService = GameService;
        this.router = router;
        this.addedItems = [];
        this.avatar = [];
        this.draggable = true;
        this.rootItem = [];
        this.fruitItem = [];
        this.vegetableItem = [];
        this.rootScore = 0;
        this.vegetableScore = 0;
        this.fruitScore = 0;
        this.totalScore = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.GameService.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }))
            .subscribe(function (items) {
            items.items.forEach(function (item) {
                for (var _i = 0, _a = item.item; _i < _a.length; _i++) {
                    var space = _a[_i];
                    if (space != ' ') {
                        _this.avatar.push(space);
                    }
                }
                _this.addedItems.push({ id: item._id, item: item.item, category: item.category, avatar: _this.avatar.join('').toLowerCase() });
                // console.log(this.avatar.join('').toLowerCase())
                _this.avatar.splice(0, _this.avatar.length);
            });
        });
    };
    GameComponent.prototype.drag = function (e) {
        e.dataTransfer.setData("text", e.target.id);
        // this.selectedItem = e.target.innerText
    };
    GameComponent.prototype.allowDrop = function (e) {
        e.preventDefault();
    };
    GameComponent.prototype.drop = function (e) {
        var _this = this;
        e.preventDefault();
        this.dragData = e.dataTransfer.getData("text");
        this.addedItems.forEach(function (id) {
            if (_this.dragData === id.id) {
                _this.selectedItem = id;
            }
        });
        this.droppedCategory = e.target.id;
        if (this.droppedCategory === 'fruits') {
            this.fruitItem.push(this.selectedItem);
            this.splice(this.selectedItem);
        }
        else if (this.droppedCategory === 'vegetables') {
            this.vegetableItem.push(this.selectedItem);
            this.splice(this.selectedItem);
        }
        else if (this.droppedCategory === 'roots') {
            this.rootItem.push(this.selectedItem);
            this.splice(this.selectedItem);
            // console.log(this.selectedItem)
        }
        else {
        }
        if (this.addedItems.length === 0) {
            this.roots();
            this.fruits();
            this.vegetables();
            this.scores();
            this.GameService.setScore(this.totalScore);
            this.router.navigate(['/name/score']);
        }
    };
    GameComponent.prototype.splice = function (value) {
        var _this = this;
        this.addedItems.forEach(function (item, i) {
            if (item.id === value.id) {
                _this.addedItems.splice(i, 1);
            }
        });
    };
    GameComponent.prototype.scores = function () {
        this.totalScore = Math.ceil(((this.rootScore + this.fruitScore + this.vegetableScore) / 15) * 100);
    };
    GameComponent.prototype.roots = function () {
        var _this = this;
        this.rootItem.forEach(function (item) {
            if (item.category === 'Root') {
                _this.rootScore += 1;
            }
        });
    };
    GameComponent.prototype.fruits = function () {
        var _this = this;
        this.fruitItem.forEach(function (item) {
            if (item.category === 'Fruit') {
                _this.fruitScore += 1;
            }
        });
    };
    GameComponent.prototype.vegetables = function () {
        var _this = this;
        this.vegetableItem.forEach(function (item) {
            if (item.category === 'Vegetable') {
                _this.vegetableScore += 1;
            }
        });
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/gamename/gamename.component.css":
/*!*************************************************!*\
  !*** ./src/app/gamename/gamename.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gamename/gamename.component.html":
/*!**************************************************!*\
  !*** ./src/app/gamename/gamename.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"welcomeWrapper\">\n      <h1>WELCOME {{username}}</h1>\n\n      <h2>Click start to play</h2>\n\n      <div class=\"buttonWrapper\"><button class=\"button button__primary\" (click)=\"startGame()\">Start</button></div>\n\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/gamename/gamename.component.ts":
/*!************************************************!*\
  !*** ./src/app/gamename/gamename.component.ts ***!
  \************************************************/
/*! exports provided: GamenameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamenameComponent", function() { return GamenameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamenameComponent = /** @class */ (function () {
    function GamenameComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.username = this.appService.username;
    }
    GamenameComponent.prototype.ngOnInit = function () {
    };
    GamenameComponent.prototype.startGame = function () {
        this.router.navigate(['/name/game']);
    };
    GamenameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gamename',
            template: __webpack_require__(/*! ./gamename.component.html */ "./src/app/gamename/gamename.component.html"),
            styles: [__webpack_require__(/*! ./gamename.component.css */ "./src/app/gamename/gamename.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GamenameComponent);
    return GamenameComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu__home\">\n  <div class=\"theIcons\">\n      <ul class=\"theIcons__account\"> \n          <li><a href=\"https://www.linkedin.com/in/isah-ohieku-b982a6164\" target=\"_blank\"><i class=\"icon linkedin--icon\"></i></a></li>\n          <li><a href=\"https://www.github.com/isahohieku\" target=\"_blank\"><i class=\"icon git--icon\"></i></a></li>\n          <li><a href=\"https://www.dribble.com/isahohieku\" target=\"_blank\"><i class=\"icon dribble--icon\"></i></a></li>\n          <li><a href=\"https://www.behance.net/isahohiekufa98\" target=\"_blank\"><i class=\"icon behance--icon\"></i></a></li>\n      </ul>\n  </div>\n</nav>\n\n<main>\n  <div class=\"logo\">\n      <img src=\"assets/img/lion.png\" alt=\"Favicon\">\n  </div>\n\n  <form [formGroup]= \"NameForm\" (ngSubmit)=\"addName(NameForm.value)\">\n      <div class=\"formControlWrapper\">\n          <input type = \"text\" placeholder=\"Enter Your Name\" class=\"formControl\" name=\"gameName\" required [formControl]=\"NameForm.controls['gameName']\" >\n      </div>\n\n      <div class=\"buttonWrapper\"><button class=\"button button__primary\">Submit</button></div>\n  </form>\n</main>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.username = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.createNameFormControls();
        this.createNameForm();
    };
    HomeComponent.prototype.createNameFormControls = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*')]);
    };
    HomeComponent.prototype.createNameForm = function () {
        this.NameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            gameName: this.name
        });
    };
    HomeComponent.prototype.addName = function (form) {
        if (this.NameForm.valid) {
            this.username = this.name.value;
            this.appService.setUserName(this.username);
            this.router.navigate(['name']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/score/score.component.css":
/*!*******************************************!*\
  !*** ./src/app/score/score.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/score/score.component.html":
/*!********************************************!*\
  !*** ./src/app/score/score.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"scoreWrapper\">\n        <h1>You scored</h1>\n\n        <h2 class=\"scorePoint\">{{score}}%</h2>\n\n        <h2>Click to play Again</h2>\n\n        <div class=\"buttonWrapper\"><button class=\"button button__primary\" (click) = \"playAgain()\">Play Again</button></div>\n\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/score/score.component.ts":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScoreComponent = /** @class */ (function () {
    function ScoreComponent(GameService, router) {
        this.GameService = GameService;
        this.router = router;
        this.score = this.GameService.Totalscore;
    }
    ScoreComponent.prototype.ngOnInit = function () {
    };
    ScoreComponent.prototype.playAgain = function () {
        this.GameService.Totalscore = 0;
        this.router.navigate(['/name/game']);
    };
    ScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score',
            template: __webpack_require__(/*! ./score.component.html */ "./src/app/score/score.component.html"),
            styles: [__webpack_require__(/*! ./score.component.css */ "./src/app/score/score.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ScoreComponent);
    return ScoreComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\n  <div class=\"theNameFav\">\n      <ul class=\"theNameFav__details\">\n          <li><div><img src=\"assets/img/lion.png\" alt=\"Favicon\"></div></li>\n          <li><p>{{username}}</p></li>\n      </ul>\n  </div>\n  <div class=\"theIcons\">\n      <ul class=\"theIcons__account\"> \n            <li><a href=\"https://www.linkedin.com/in/isah-ohieku-b982a6164\" target=\"_blank\"><i class=\"icon linkedin--icon\"></i></a></li>\n            <li><a href=\"https://www.github.com/isahohieku\" target=\"_blank\"><i class=\"icon git--icon\"></i></a></li>\n            <li><a href=\"https://www.dribble.com/isahohieku\" target=\"_blank\"><i class=\"icon dribble--icon\"></i></a></li>\n            <li><a href=\"https://www.behance.net/isahohiekufa98\" target=\"_blank\"><i class=\"icon behance--icon\"></i></a></li>\n      </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-service.service */ "./src/services/game-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.username = this.appService.username;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routing/routing-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/routing/routing-routing.module.ts ***!
  \***********************************************/
/*! exports provided: RoutingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingRoutingModule", function() { return RoutingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _app_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _app_gamename_gamename_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/gamename/gamename.component */ "./src/app/gamename/gamename.component.ts");
/* harmony import */ var _app_score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/score/score.component */ "./src/app/score/score.component.ts");
/* harmony import */ var _app_game_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/game.guard */ "./src/app/game.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'name', component: _app_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
        children: [
            { path: '', component: _app_gamename_gamename_component__WEBPACK_IMPORTED_MODULE_5__["GamenameComponent"] },
            { path: 'game', component: _app_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
            { path: 'score', component: _app_score_score_component__WEBPACK_IMPORTED_MODULE_6__["ScoreComponent"] }
        ],
        canActivate: [_app_game_guard__WEBPACK_IMPORTED_MODULE_7__["GameGuard"]],
        canActivateChild: [_app_game_guard__WEBPACK_IMPORTED_MODULE_7__["GameGuard"]]
    },
];
var RoutingRoutingModule = /** @class */ (function () {
    function RoutingRoutingModule() {
    }
    RoutingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RoutingRoutingModule);
    return RoutingRoutingModule;
}());



/***/ }),

/***/ "./src/services/game-service.service.ts":
/*!**********************************************!*\
  !*** ./src/services/game-service.service.ts ***!
  \**********************************************/
/*! exports provided: GameServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameServiceService", function() { return GameServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameServiceService = /** @class */ (function () {
    function GameServiceService(http) {
        this.http = http;
        this.Totalscore = 0;
        this.isSet = false;
        this.username = '';
        this.addedItem = [];
    }
    GameServiceService.prototype.addItem = function (value) {
        return this.http.post('items/add', value);
    };
    GameServiceService.prototype.getItems = function () {
        return this.http.get('items');
    };
    GameServiceService.prototype.deleteItem = function (value) {
        return this.http.delete("items/remove/" + value);
    };
    GameServiceService.prototype.setUserName = function (value) {
        this.username = value;
    };
    GameServiceService.prototype.setScore = function (value) {
        this.Totalscore += value;
    };
    GameServiceService.prototype.isSetUsername = function () {
        if (this.username === '') {
            this.isSet = false;
        }
        else {
            this.isSet = true;
        }
        return this.isSet;
    };
    GameServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GameServiceService);
    return GameServiceService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Web Projects\sapphital\game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map