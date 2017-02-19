"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var home_module_1 = require('./home/home.module');
var about_module_1 = require('./about/about.module');
var nav_bar_component_1 = require('./nav-bar/nav-bar.component');
var scavngr_common_module_1 = require('./common/scavngr-common.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MaterialModule, platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, home_module_1.HomeModule, about_module_1.AboutModule, scavngr_common_module_1.ScavngrCommonModule],
            declarations: [app_component_1.AppComponent, nav_bar_component_1.NavBarComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map