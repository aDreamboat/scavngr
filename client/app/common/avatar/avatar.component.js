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
var user_1 = require('../user');
var AvatarComponent = (function () {
    function AvatarComponent() {
        this.user = new user_1.User(1, 'Kevin', 'https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635465_960_720.png');
    }
    AvatarComponent.prototype.ngOnInit = function () {
        //user = new User(1, 'Kevin', 'https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635465_960_720.png');
    };
    AvatarComponent = __decorate([
        core_1.Component({
            selector: 'avatar',
            templateUrl: '/app/common/avatar/avatar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map