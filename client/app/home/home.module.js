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
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var flex_layout_1 = require('@angular/flex-layout');
var home_component_1 = require('./home.component');
var home_routing_module_1 = require('./home-routing.module');
var scavngr_common_module_1 = require('./../common/scavngr-common.module');
var profile_badge_component_1 = require('./profile-badge.component');
//import { AvatarComponent }        from './../common/avatar/avatar.component';
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                flex_layout_1.FlexLayoutModule,
                material_1.MaterialModule,
                common_1.CommonModule,
                home_routing_module_1.HomeRoutingModule,
                scavngr_common_module_1.ScavngrCommonModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                profile_badge_component_1.ProfileBadgeComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map