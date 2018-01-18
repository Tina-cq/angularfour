webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-product-menu/add-product-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-product-menu/add-product-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n    <tr>\n      <td> <span>菜单名称:</span></td><td><input type=\"text\"/></td>\n    </tr>\n    <tr>\n      <td> <span>菜单编号:</span></td><td> <input type=\"text\"/></td>\n    </tr>\n    <tr>\n      <td><span>上级菜单:</span></td><td>\n      <select>\n        <option>请选择</option>\n        <option>系统管理</option>\n        <option>系统管理</option>\n        <option>系统管理</option>\n        <option>系统管理</option>\n      </select></td>\n    </tr>\n    <tr>\n      <td> <span>资源编号:</span></td>\n      <td>\n        <select>\n        <option>请选择</option>\n        <option>bas</option>\n        <option>nromal</option>\n      </select>\n      </td>\n    </tr>\n    <tr>\n      <td><span>访问地址:</span> </td><td> <input type=\"text\"/></td>\n    </tr>\n    <tr>\n      <td> <span>图标:</span> </td>\n      <td><input name=\"\" type=\"file\"  /></td>\n    </tr>\n    <tr>\n      <td> <span>菜单配置:</span> </td><td><textarea name=\"textarea\" ></textarea></td>\n    </tr>\n    <tr class=\"checkbox02\">\n      <td> <span>状态:</span> </td><td><label><input name=\"\" type=\"checkbox\" value=\"\" />是否禁用 </label></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td style=\"color: red;\">注：图标通过文件上传的方式添加</td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/add-product-menu/add-product-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProductMenuComponent = (function () {
    function AddProductMenuComponent() {
    }
    AddProductMenuComponent.prototype.ngOnInit = function () {
    };
    AddProductMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-product-menu',
            template: __webpack_require__("../../../../../src/app/add-product-menu/add-product-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-product-menu/add-product-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddProductMenuComponent);
    return AddProductMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-vip/add-vip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-vip/add-vip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table class=\"table\">\n    <tr><td style=\"width: 30%;\"> <span>账号:</span></td><td><input type=\"text\"/></td></tr>\n    <tr><td> <span>密码:</span></td><td> <input type=\"text\"/></td></tr>\n    <tr><td><span>注册类型:</span></td><td>\n      <select>\n        <option value=\"请选择\">请选择</option>\n        <option value=\"账号\">账号</option>\n        <option value=\"手机\">手机</option>\n        <option value=\"邮箱\">邮箱</option>\n      </select></td></tr>\n    <tr><td><span>用户级别:</span></td><td>\n      <select>\n        <option value=\"请选择\">请选择</option>\n        <option value=\"普通会员\">普通会员</option>\n        <option value=\"体验会员\">体验会员</option>\n        <option value=\"付费会员\">付费会员</option>\n      </select></td></tr>\n    <tr><td> <span>截止日期:</span></td><td> <input type=\"date\"/></td></tr>\n    <tr><td><span>手机号码:</span> </td><td> <input type=\"text\"/></td></tr>\n    <tr><td> <span>电子邮箱:</span> </td><td><input type=\"text\"/></td></tr>\n    <tr class=\"checkbox02\"><td> <span>状态:</span> </td>\n      <td><label><input name=\"\" type=\"checkbox\" value=\"\" />是否激活</label> </td></tr>\n    <tr><td></td><td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td></tr>\n    <tr>\n      <td></td>\n      <td><span style=\"width: 55%;display: inline-block;color: red;\">注：用户级别：如果选择付费用户，截止时间为必填字段，在点击确认后，需要给用户开通vip权限，vip的截止时间为输入的截止时间</span></td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/add-vip/add-vip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddVipComponent = (function () {
    function AddVipComponent() {
    }
    AddVipComponent.prototype.ngOnInit = function () {
    };
    AddVipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-vip',
            template: __webpack_require__("../../../../../src/app/add-vip/add-vip.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-vip/add-vip.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddVipComponent);
    return AddVipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table  class=\"table\">\n    <tr>\n      <td> <span>菜单名称:</span></td><td><input type=\"text\"/></td>\n    </tr>\n    <tr>\n        <td> <span>菜单编号:</span></td><td> <input type=\"text\"/></td>\n    </tr>\n    <tr>\n        <td><span>上级菜单:</span></td><td>\n        <select>\n          <option>系统管理</option>\n          <option>系统管理</option>\n          <option>系统管理</option>\n          <option>系统管理</option>\n        </select></td>\n    </tr>\n    <tr>\n        <td> <span>资源编号:</span></td>\n        <td> <select>\n              <option>bas</option>\n              <option>nromal</option>\n            </select>\n          </td>\n    </tr>\n    <tr>\n      <td><span>访问地址:</span> </td><td> <input type=\"text\"/></td>\n    </tr>\n    <tr>\n      <td> <span>图标:</span> </td>\n      <td><input name=\"\" type=\"file\"  /></td>\n    </tr>\n    <tr>\n      <td> <span>菜单配置:</span> </td><td><textarea name=\"textarea\" ></textarea></td>\n    </tr>\n    <tr  class=\"checkbox02\">\n      <td> <span>状态:</span> </td>\n      <td><label><input name=\"\" type=\"checkbox\" value=\"\" />是否禁用 </label></td>\n\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n  </table>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/addmenu/addmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddmenuComponent = (function () {
    function AddmenuComponent() {
    }
    AddmenuComponent.prototype.ngOnInit = function () {
    };
    AddmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addmenu',
            template: __webpack_require__("../../../../../src/app/addmenu/addmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addmenu/addmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddmenuComponent);
    return AddmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/addresources/addresources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addresources/addresources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table  class=\"table\">\n    <tr>\n      <td> <span>资源名称:</span></td><td><input type=\"text\"/></td>\n    </tr>\n    <tr>\n        <td> <span>资源编号:</span></td><td> <input type=\"text\"/></td>\n    </tr>\n    <tr>\n        <td><span>资源类型:</span></td><td >\n        <select  (click)=\"isCommentHidden = !isCommentHidden\">\n          <option>请选择</option>\n          <option>菜单</option>\n          <option  >产品</option>\n          <option>其他</option>\n        </select></td>\n    </tr>\n    <tr [hidden]=\"isCommentHidden\"><td><span>产品编号:</span></td><td>\n      <select>\n        <option>请选择</option>\n        <option>贝贝牛</option>\n        <option>海外终端</option>\n        <option>客户端</option>\n      </select></td></tr>\n    <tr>\n      <td> <span>备注:</span> </td><td><textarea name=\"textarea\"></textarea></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n  <tr>\n    <td></td>\n    <td><span style=\"width: 55%;display: inline-block;color: red;\">【注】：只有资源类型选择为产品，才去显示产品编号</span></td>\n  </tr>\n  </table>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/addresources/addresources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddresourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddresourcesComponent = (function () {
    function AddresourcesComponent() {
        this.isCommentHidden = false;
    }
    AddresourcesComponent.prototype.ngOnInit = function () {
    };
    AddresourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addresources',
            template: __webpack_require__("../../../../../src/app/addresources/addresources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addresources/addresources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddresourcesComponent);
    return AddresourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/addrole/addrole.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addrole/addrole.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table  class=\"table\">\n    <tr>\n      <td> <span>角色名称:</span></td><td><input type=\"text\"/></td>\n    </tr>\n    <tr>\n      <td> <span>角色编号:</span></td><td> <input type=\"text\"/></td>\n    </tr>\n\n\n    <tr>\n      <td> <span>备注:</span> </td><td><textarea name=\"textarea\"></textarea></td>\n    </tr>\n    <tr class=\"checkbox02\">\n      <td><span>状态:</span></td>\n      <td><label><input type=\"checkbox\"> 是否禁用</label></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/addrole/addrole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddroleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddroleComponent = (function () {
    function AddroleComponent() {
    }
    AddroleComponent.prototype.ngOnInit = function () {
    };
    AddroleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addrole',
            template: __webpack_require__("../../../../../src/app/addrole/addrole.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addrole/addrole.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddroleComponent);
    return AddroleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/adduser/adduser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/adduser/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table class=\"table\">\n    <tr><td><span>账号:</span></td><td><input type=\"text\"/></td></tr>\n    <tr><td> <span>密码:</span></td><td> <input type=\"text\"/></td></tr>\n\n    <tr class=\"checkbox02\"><td><span>角色分配:</span></td><td>\n      <label><input name=\"Fruit\" type=\"checkbox\" value=\"\" /> 管理员角色</label>\n      <label><input name=\"Fruit\" type=\"checkbox\" value=\"\" /> 客服</label>\n      <label><input name=\"Fruit\" type=\"checkbox\" value=\"\" /> 财务</label>\n      <label><input name=\"Fruit\" type=\"checkbox\" value=\"\" /> 一般用户</label>\n    </tr>\n    <tr><td> <span>手机号码:</span></td><td> <input type=\"text\"/></td></tr>\n    <tr><td><span>电子邮箱:</span> </td><td> <input type=\"text\"/></td></tr>\n    <tr class=\"checkbox02\">\n      <td><span>状态:</span></td>\n      <td>\n        <label> <input name=\"\" type=\"checkbox\" value=\"\" />是否可用</label>\n      </td>\n    </tr>\n    <tr>\n      <td></td>\n      <td colspan=\"2\" ><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/adduser/adduser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdduserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdduserComponent = (function () {
    function AdduserComponent() {
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-adduser',
            template: __webpack_require__("../../../../../src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_management_menu_management_component__ = __webpack_require__("../../../../../src/app/menu-management/menu-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__log_record_log_record_component__ = __webpack_require__("../../../../../src/app/log-record/log-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_management_resources_management_component__ = __webpack_require__("../../../../../src/app/resources-management/resources-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__role_management_role_management_component__ = __webpack_require__("../../../../../src/app/role-management/role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vip_management_vip_management_component__ = __webpack_require__("../../../../../src/app/vip-management/vip-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_menu_management_product_menu_management_component__ = __webpack_require__("../../../../../src/app/product-menu-management/product-menu-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_resource_management_product_resource_management_component__ = __webpack_require__("../../../../../src/app/product-resource-management/product-resource-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_role_management_product_role_management_component__ = __webpack_require__("../../../../../src/app/product-role-management/product-role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_configuration_product_configuration_component__ = __webpack_require__("../../../../../src/app/product-configuration/product-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commodity_management_commodity_management_component__ = __webpack_require__("../../../../../src/app/commodity-management/commodity-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_component__ = __webpack_require__("../../../../../src/app/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_modify_password_user_modify_password_component__ = __webpack_require__("../../../../../src/app/user-modify-password/user-modify-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__addmenu_addmenu_component__ = __webpack_require__("../../../../../src/app/addmenu/addmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__addresources_addresources_component__ = __webpack_require__("../../../../../src/app/addresources/addresources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__extension_agent_extension_agent_component__ = __webpack_require__("../../../../../src/app/extension-agent/extension-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__deal_query_deal_query_component__ = __webpack_require__("../../../../../src/app/deal-query/deal-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__order_review_order_review_component__ = __webpack_require__("../../../../../src/app/order-review/order-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__create_order_create_order_component__ = __webpack_require__("../../../../../src/app/create-order/create-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demographic_demographic_component__ = __webpack_require__("../../../../../src/app/demographic/demographic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__trade_statistic_trade_statistic_component__ = __webpack_require__("../../../../../src/app/trade-statistic/trade-statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__extension_add_extension_add_component__ = __webpack_require__("../../../../../src/app/extension-add/extension-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__binding_role_binding_role_component__ = __webpack_require__("../../../../../src/app/binding-role/binding-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__addrole_addrole_component__ = __webpack_require__("../../../../../src/app/addrole/addrole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__binding_resources_binding_resources_component__ = __webpack_require__("../../../../../src/app/binding-resources/binding-resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_vip_add_vip_component__ = __webpack_require__("../../../../../src/app/add-vip/add-vip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__vip_modify_password_vip_modify_password_component__ = __webpack_require__("../../../../../src/app/vip-modify-password/vip-modify-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__vip_open_vip_open_component__ = __webpack_require__("../../../../../src/app/vip-open/vip-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_product_menu_add_product_menu_component__ = __webpack_require__("../../../../../src/app/add-product-menu/add-product-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__commodity_sales_management_commodity_sales_management_component__ = __webpack_require__("../../../../../src/app/commodity-sales-management/commodity-sales-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sales_management_add_sales_management_add_component__ = __webpack_require__("../../../../../src/app/sales-management-add/sales-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__product_configuration_add_product_configuration_add_component__ = __webpack_require__("../../../../../src/app/product-configuration-add/product-configuration-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__product_role_management_add_product_role_management_add_component__ = __webpack_require__("../../../../../src/app/product-role-management-add/product-role-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__product_role_managemen_binding_product_role_managemen_binding_component__ = __webpack_require__("../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__product_resource_management_add_product_resource_management_add_component__ = __webpack_require__("../../../../../src/app/product-resource-management-add/product-resource-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__commodity_management_add_commodity_management_add_component__ = __webpack_require__("../../../../../src/app/commodity-management-add/commodity-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__product_resource_management_binding_product_resource_management_binding_component__ = __webpack_require__("../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var routeConfig = [
    { path: '', redirectTo: '/user-management', pathMatch: 'full' },
    { path: 'user-management/:account/:nickname/:rank', component: __WEBPACK_IMPORTED_MODULE_2__user_management_user_management_component__["a" /* UserManagementComponent */] },
    { path: 'menu-management/:account/:nickname/:rank', component: __WEBPACK_IMPORTED_MODULE_3__menu_management_menu_management_component__["a" /* MenuManagementComponent */] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_4__password_password_component__["a" /* PasswordComponent */] },
    { path: 'log-record/:account/:nickname/:rank', component: __WEBPACK_IMPORTED_MODULE_5__log_record_log_record_component__["a" /* LogRecordComponent */] },
    { path: 'resources-management', component: __WEBPACK_IMPORTED_MODULE_6__resources_management_resources_management_component__["a" /* ResourcesManagementComponent */] },
    { path: 'role-management/:account/:nickname/:rank', component: __WEBPACK_IMPORTED_MODULE_7__role_management_role_management_component__["a" /* RoleManagementComponent */] },
    { path: 'vip-management', component: __WEBPACK_IMPORTED_MODULE_8__vip_management_vip_management_component__["a" /* VipManagementComponent */] },
    { path: 'product-menu-management', component: __WEBPACK_IMPORTED_MODULE_9__product_menu_management_product_menu_management_component__["a" /* ProductMenuManagementComponent */] },
    { path: 'product-resource-management', component: __WEBPACK_IMPORTED_MODULE_10__product_resource_management_product_resource_management_component__["a" /* ProductResourceManagementComponent */] },
    { path: 'product-role-management', component: __WEBPACK_IMPORTED_MODULE_11__product_role_management_product_role_management_component__["a" /* ProductRoleManagementComponent */] },
    { path: 'product-configuration', component: __WEBPACK_IMPORTED_MODULE_12__product_configuration_product_configuration_component__["a" /* ProductConfigurationComponent */] },
    { path: 'commodity-management', component: __WEBPACK_IMPORTED_MODULE_13__commodity_management_commodity_management_component__["a" /* CommodityManagementComponent */] },
    { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_14__adduser_adduser_component__["a" /* AdduserComponent */] },
    { path: 'user-modify-password', component: __WEBPACK_IMPORTED_MODULE_15__user_modify_password_user_modify_password_component__["a" /* UserModifyPasswordComponent */] },
    { path: 'addmenu', component: __WEBPACK_IMPORTED_MODULE_16__addmenu_addmenu_component__["a" /* AddmenuComponent */] },
    { path: 'addresources', component: __WEBPACK_IMPORTED_MODULE_17__addresources_addresources_component__["a" /* AddresourcesComponent */] },
    { path: 'extension-agent', component: __WEBPACK_IMPORTED_MODULE_18__extension_agent_extension_agent_component__["a" /* ExtensionAgentComponent */] },
    { path: 'deal-query', component: __WEBPACK_IMPORTED_MODULE_19__deal_query_deal_query_component__["a" /* DealQueryComponent */] },
    { path: 'order-review', component: __WEBPACK_IMPORTED_MODULE_20__order_review_order_review_component__["a" /* OrderReviewComponent */] },
    { path: 'create-order', component: __WEBPACK_IMPORTED_MODULE_21__create_order_create_order_component__["a" /* CreateOrderComponent */] },
    { path: 'demographic', component: __WEBPACK_IMPORTED_MODULE_22__demographic_demographic_component__["a" /* DemographicComponent */] },
    { path: 'trade-statistic', component: __WEBPACK_IMPORTED_MODULE_23__trade_statistic_trade_statistic_component__["a" /* TradeStatisticComponent */] },
    { path: 'extension-add', component: __WEBPACK_IMPORTED_MODULE_24__extension_add_extension_add_component__["a" /* ExtensionAddComponent */] },
    { path: 'commodity-management-add', component: __WEBPACK_IMPORTED_MODULE_38__commodity_management_add_commodity_management_add_component__["a" /* CommodityManagementAddComponent */] },
    { path: 'commodity-sales-management', component: __WEBPACK_IMPORTED_MODULE_32__commodity_sales_management_commodity_sales_management_component__["a" /* CommoditySalesManagementComponent */] },
    { path: 'sales-management-add', component: __WEBPACK_IMPORTED_MODULE_33__sales_management_add_sales_management_add_component__["a" /* SalesManagementAddComponent */] },
    { path: 'product-configuration-add', component: __WEBPACK_IMPORTED_MODULE_34__product_configuration_add_product_configuration_add_component__["a" /* ProductConfigurationAddComponent */] },
    { path: 'product-role-management-add', component: __WEBPACK_IMPORTED_MODULE_35__product_role_management_add_product_role_management_add_component__["a" /* ProductRoleManagementAddComponent */] },
    { path: 'product-role-managemen-binding', component: __WEBPACK_IMPORTED_MODULE_36__product_role_managemen_binding_product_role_managemen_binding_component__["a" /* ProductRoleManagemenBindingComponent */] },
    { path: 'product-resource-management-add', component: __WEBPACK_IMPORTED_MODULE_37__product_resource_management_add_product_resource_management_add_component__["a" /* ProductResourceManagementAddComponent */] },
    { path: 'product-resource-management-binding', component: __WEBPACK_IMPORTED_MODULE_39__product_resource_management_binding_product_resource_management_binding_component__["a" /* ProductResourceManagementBindingComponent */] },
    { path: 'binding-role', component: __WEBPACK_IMPORTED_MODULE_25__binding_role_binding_role_component__["a" /* BindingRoleComponent */] },
    { path: 'addrole', component: __WEBPACK_IMPORTED_MODULE_26__addrole_addrole_component__["a" /* AddroleComponent */] },
    { path: 'binding-resources', component: __WEBPACK_IMPORTED_MODULE_27__binding_resources_binding_resources_component__["a" /* BindingResourcesComponent */] },
    { path: 'add-vip', component: __WEBPACK_IMPORTED_MODULE_28__add_vip_add_vip_component__["a" /* AddVipComponent */] },
    { path: 'vip-modify-password', component: __WEBPACK_IMPORTED_MODULE_29__vip_modify_password_vip_modify_password_component__["a" /* VipModifyPasswordComponent */] },
    { path: 'vip-open', component: __WEBPACK_IMPORTED_MODULE_30__vip_open_vip_open_component__["a" /* VipOpenComponent */] },
    { path: 'add-product-menu', component: __WEBPACK_IMPORTED_MODULE_31__add_product_menu_add_product_menu_component__["a" /* AddProductMenuComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routeConfig)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".foot{\r\n    text-align: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\n  <div class=\"wrapper\">\n        <app-head-top></app-head-top>\n        <aside class=\"main-sidebar\">\n            <app-head-left></app-head-left>\n        </aside>\n        <div class=\"content-wrapper\" style=\"min-height: 916px;background: #f9f9f9;\">\n            <router-outlet></router-outlet>\n        </div>\n  </div>\n  <div class=\"foot\">\n      <app-foot></app-foot>\n </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foot_foot_component__ = __webpack_require__("../../../../../src/app/foot/foot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__head_left_head_left_component__ = __webpack_require__("../../../../../src/app/head-left/head-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__head_top_head_top_component__ = __webpack_require__("../../../../../src/app/head-top/head-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__centre_centre_component__ = __webpack_require__("../../../../../src/app/centre/centre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_management_user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_management_menu_management_component__ = __webpack_require__("../../../../../src/app/menu-management/menu-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_common_component__ = __webpack_require__("../../../../../src/app/common/common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resources_management_resources_management_component__ = __webpack_require__("../../../../../src/app/resources-management/resources-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__log_record_log_record_component__ = __webpack_require__("../../../../../src/app/log-record/log-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__role_management_role_management_component__ = __webpack_require__("../../../../../src/app/role-management/role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vip_management_vip_management_component__ = __webpack_require__("../../../../../src/app/vip-management/vip-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_menu_management_product_menu_management_component__ = __webpack_require__("../../../../../src/app/product-menu-management/product-menu-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_resource_management_product_resource_management_component__ = __webpack_require__("../../../../../src/app/product-resource-management/product-resource-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_role_management_product_role_management_component__ = __webpack_require__("../../../../../src/app/product-role-management/product-role-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_configuration_product_configuration_component__ = __webpack_require__("../../../../../src/app/product-configuration/product-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__commodity_management_commodity_management_component__ = __webpack_require__("../../../../../src/app/commodity-management/commodity-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__adduser_adduser_component__ = __webpack_require__("../../../../../src/app/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_modify_password_user_modify_password_component__ = __webpack_require__("../../../../../src/app/user-modify-password/user-modify-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__addmenu_addmenu_component__ = __webpack_require__("../../../../../src/app/addmenu/addmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__addresources_addresources_component__ = __webpack_require__("../../../../../src/app/addresources/addresources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__extension_add_extension_add_component__ = __webpack_require__("../../../../../src/app/extension-add/extension-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__trade_statistic_trade_statistic_component__ = __webpack_require__("../../../../../src/app/trade-statistic/trade-statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demographic_demographic_component__ = __webpack_require__("../../../../../src/app/demographic/demographic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__create_order_create_order_component__ = __webpack_require__("../../../../../src/app/create-order/create-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__order_review_order_review_component__ = __webpack_require__("../../../../../src/app/order-review/order-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__deal_query_deal_query_component__ = __webpack_require__("../../../../../src/app/deal-query/deal-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__extension_agent_extension_agent_component__ = __webpack_require__("../../../../../src/app/extension-agent/extension-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__binding_role_binding_role_component__ = __webpack_require__("../../../../../src/app/binding-role/binding-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__addrole_addrole_component__ = __webpack_require__("../../../../../src/app/addrole/addrole.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__binding_resources_binding_resources_component__ = __webpack_require__("../../../../../src/app/binding-resources/binding-resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__add_vip_add_vip_component__ = __webpack_require__("../../../../../src/app/add-vip/add-vip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__vip_modify_password_vip_modify_password_component__ = __webpack_require__("../../../../../src/app/vip-modify-password/vip-modify-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__vip_open_vip_open_component__ = __webpack_require__("../../../../../src/app/vip-open/vip-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__add_product_menu_add_product_menu_component__ = __webpack_require__("../../../../../src/app/add-product-menu/add-product-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__commodity_management_add_commodity_management_add_component__ = __webpack_require__("../../../../../src/app/commodity-management-add/commodity-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__commodity_sales_management_commodity_sales_management_component__ = __webpack_require__("../../../../../src/app/commodity-sales-management/commodity-sales-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__sales_management_add_sales_management_add_component__ = __webpack_require__("../../../../../src/app/sales-management-add/sales-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__product_configuration_add_product_configuration_add_component__ = __webpack_require__("../../../../../src/app/product-configuration-add/product-configuration-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__product_role_management_add_product_role_management_add_component__ = __webpack_require__("../../../../../src/app/product-role-management-add/product-role-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__product_role_managemen_binding_product_role_managemen_binding_component__ = __webpack_require__("../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__product_resource_management_binding_product_resource_management_binding_component__ = __webpack_require__("../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__product_resource_management_add_product_resource_management_add_component__ = __webpack_require__("../../../../../src/app/product-resource-management-add/product-resource-management-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































 //新加的
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__foot_foot_component__["a" /* FootComponent */],
                __WEBPACK_IMPORTED_MODULE_5__head_left_head_left_component__["a" /* HeadLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_6__head_top_head_top_component__["a" /* HeadTopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__centre_centre_component__["a" /* CentreComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_management_user_management_component__["a" /* UserManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_management_menu_management_component__["a" /* MenuManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_10__common_common_component__["a" /* CommonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__resources_management_resources_management_component__["a" /* ResourcesManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_12__password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13__log_record_log_record_component__["a" /* LogRecordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__role_management_role_management_component__["a" /* RoleManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_15__vip_management_vip_management_component__["a" /* VipManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_16__product_menu_management_product_menu_management_component__["a" /* ProductMenuManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_17__product_resource_management_product_resource_management_component__["a" /* ProductResourceManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_18__product_role_management_product_role_management_component__["a" /* ProductRoleManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_configuration_product_configuration_component__["a" /* ProductConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__commodity_management_commodity_management_component__["a" /* CommodityManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_21__adduser_adduser_component__["a" /* AdduserComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_modify_password_user_modify_password_component__["a" /* UserModifyPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_23__addmenu_addmenu_component__["a" /* AddmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_24__addresources_addresources_component__["a" /* AddresourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__extension_agent_extension_agent_component__["a" /* ExtensionAgentComponent */],
                __WEBPACK_IMPORTED_MODULE_30__deal_query_deal_query_component__["a" /* DealQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_29__order_review_order_review_component__["a" /* OrderReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_28__create_order_create_order_component__["a" /* CreateOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__demographic_demographic_component__["a" /* DemographicComponent */],
                __WEBPACK_IMPORTED_MODULE_26__trade_statistic_trade_statistic_component__["a" /* TradeStatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_25__extension_add_extension_add_component__["a" /* ExtensionAddComponent */],
                __WEBPACK_IMPORTED_MODULE_32__binding_role_binding_role_component__["a" /* BindingRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_33__addrole_addrole_component__["a" /* AddroleComponent */],
                __WEBPACK_IMPORTED_MODULE_34__binding_resources_binding_resources_component__["a" /* BindingResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__add_vip_add_vip_component__["a" /* AddVipComponent */],
                __WEBPACK_IMPORTED_MODULE_36__vip_modify_password_vip_modify_password_component__["a" /* VipModifyPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_37__vip_open_vip_open_component__["a" /* VipOpenComponent */],
                __WEBPACK_IMPORTED_MODULE_38__add_product_menu_add_product_menu_component__["a" /* AddProductMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_39__commodity_management_add_commodity_management_add_component__["a" /* CommodityManagementAddComponent */],
                __WEBPACK_IMPORTED_MODULE_40__commodity_sales_management_commodity_sales_management_component__["a" /* CommoditySalesManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_41__sales_management_add_sales_management_add_component__["a" /* SalesManagementAddComponent */],
                __WEBPACK_IMPORTED_MODULE_42__product_configuration_add_product_configuration_add_component__["a" /* ProductConfigurationAddComponent */],
                __WEBPACK_IMPORTED_MODULE_43__product_role_management_add_product_role_management_add_component__["a" /* ProductRoleManagementAddComponent */],
                __WEBPACK_IMPORTED_MODULE_44__product_role_managemen_binding_product_role_managemen_binding_component__["a" /* ProductRoleManagemenBindingComponent */],
                __WEBPACK_IMPORTED_MODULE_45__product_resource_management_binding_product_resource_management_binding_component__["a" /* ProductResourceManagementBindingComponent */],
                __WEBPACK_IMPORTED_MODULE_46__product_resource_management_add_product_resource_management_add_component__["a" /* ProductResourceManagementAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            //providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_47__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_47__angular_common__["d" /* HashLocationStrategy */] }] //新加的
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/binding-resources/binding-resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  background-color:#ffffff;\r\n}\r\n.for{\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\ndiv{\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/binding-resources/binding-resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"role\">\n  <div class=\"clearfix\">\n    <div class=\"role01\">\n      <p>全部资源</p>\n\n      <ul class=\"textarea textarea01\">\n        <li class=\"roleActive\">基础资源（bas）</li>\n        <li>管理员资源（admin）</li>\n        <li>付费资源（cbdterminal）</li>\n        <li>体验资源（sample）</li>\n        <li>vip用户1</li>\n        <li>vip用户2</li>\n        <li>vip用户3</li>\n        <li>vip用户4</li>\n        <li>体验会员</li>\n        <li>普通用户</li>\n        <li>vip用户1</li>\n        <li>vip用户2</li>\n        <li>vip用户3</li>\n        <li>vip用户4</li>\n      </ul>\n\n    </div>\n\n    <div class=\"role02\">\n      <input class=\"roleBtn01\" type=\"button\" value=\">>\"/><br>\n      <input class=\"roleBtn02\" type=\"button\" value=\">\"/><br>\n      <input class=\"roleBtn03\" type=\"button\" value=\"<\"/><br>\n      <input class=\"roleBtn04\" type=\"button\" value=\"<<\"/><br>\n    </div>\n\n    <div class=\"role01\">\n      <p>已绑定资源</p>\n\n      <ul class=\"textarea textarea02\">\n        <li>付费资源（cbdterminal）</li>\n        <li>体验资源（sample）</li>\n      </ul>\n\n    </div>\n\n  </div>\n  <p class=\"roleBtn\"><span>确定</span></p>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/binding-resources/binding-resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //引入jquery
var BindingResourcesComponent = (function () {
    function BindingResourcesComponent() {
    }
    BindingResourcesComponent.prototype.ngOnInit = function () {
        function click() {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".textarea li").click(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__(".textarea li").removeClass("roleActive");
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).addClass("roleActive");
            });
        }
        click();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.role02').css("margin-top", (__WEBPACK_IMPORTED_MODULE_1_jquery__('.role01').height() - __WEBPACK_IMPORTED_MODULE_1_jquery__('.role02').height()) / 2 + __WEBPACK_IMPORTED_MODULE_1_jquery__(".role01 p").height() / 2);
    };
    BindingResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-binding-resources',
            template: __webpack_require__("../../../../../src/app/binding-resources/binding-resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/binding-resources/binding-resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BindingResourcesComponent);
    return BindingResourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/binding-role/binding-role.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/binding-role/binding-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"role\">\n  <div class=\"clearfix\">\n  <div class=\"role01\">\n    <p>全部角色</p>\n\n    <ul class=\"textarea textarea01\">\n      <li class=\"roleActive\">管理员</li>\n      <li>管理员1</li>\n      <li>体验会员</li>\n      <li>普通用户</li>\n      <li>vip用户1</li>\n      <li>vip用户2</li>\n      <li>vip用户3</li>\n      <li>vip用户4</li>\n      <li>体验会员</li>\n      <li>普通用户</li>\n      <li>vip用户1</li>\n      <li>vip用户2</li>\n      <li>vip用户3</li>\n      <li>vip用户4</li>\n    </ul>\n\n  </div>\n\n  <div class=\"role02\">\n    <input class=\"roleBtn01\" type=\"button\" value=\">>\"/><br>\n    <input class=\"roleBtn02\" type=\"button\" value=\">\"/><br>\n    <input class=\"roleBtn03\" type=\"button\" value=\"<\"/><br>\n    <input class=\"roleBtn04\" type=\"button\" value=\"<<\"/><br>\n  </div>\n\n  <div class=\"role01\">\n    <p>已绑定角色</p>\n\n    <ul class=\"textarea textarea02\">\n      <li>管理员1</li>\n      <li>体验会员</li>\n    </ul>\n\n  </div>\n\n  </div>\n  <p class=\"roleBtn\"><span>确定</span></p>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/binding-role/binding-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //引入jquery
var BindingRoleComponent = (function () {
    function BindingRoleComponent() {
    }
    BindingRoleComponent.prototype.ngOnInit = function () {
        function click() {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".textarea li").click(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__(".textarea li").removeClass("roleActive");
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).addClass("roleActive");
            });
        }
        click();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.role02').css("margin-top", (__WEBPACK_IMPORTED_MODULE_1_jquery__('.role01').height() - __WEBPACK_IMPORTED_MODULE_1_jquery__('.role02').height()) / 2 + __WEBPACK_IMPORTED_MODULE_1_jquery__(".role01 p").height() / 2);
    };
    BindingRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-binding-role',
            template: __webpack_require__("../../../../../src/app/binding-role/binding-role.component.html"),
            styles: [__webpack_require__("../../../../../src/app/binding-role/binding-role.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BindingRoleComponent);
    return BindingRoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/centre/centre.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/centre/centre.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet>  -->\n<app-foot></app-foot>\n"

/***/ }),

/***/ "../../../../../src/app/centre/centre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CentreComponent = (function () {
    function CentreComponent() {
    }
    CentreComponent.prototype.ngOnInit = function () {
    };
    CentreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-centre',
            template: __webpack_require__("../../../../../src/app/centre/centre.component.html"),
            styles: [__webpack_require__("../../../../../src/app/centre/centre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CentreComponent);
    return CentreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commodity-management-add/commodity-management-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commodity-management-add/commodity-management-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\r\n  <table  class=\"table\">\r\n\r\n  <tr>\r\n      <td>商品名称：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n   <tr>\r\n     <td>币种：</td>\r\n     <td>\r\n       <select  class=\"u269_input\" >\r\n         <option value=\"全部\">请选择</option>\r\n         <option value=\"普通用户\">普通用户</option>\r\n         <option value=\"体验用户\">体验用户</option>\r\n         <option value=\"付费用户\">付费用户</option>\r\n       </select>\r\n     </td>\r\n   </tr>\r\n   <tr>\r\n      <td>商品原价：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n   <tr>\r\n      <td>商品现价：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n   <tr>\r\n      <td>商品类型：</td>\r\n      <td>\r\n        <select class=\"u269_input\" >\r\n          <option value=\"全部\">请选择</option>\r\n          <option value=\"普通用户\">普通用户</option>\r\n          <option value=\"体验用户\">体验用户</option>\r\n          <option value=\"付费用户\">付费用户</option>\r\n        </select>\r\n      </td>\r\n   </tr>\r\n   <tr>\r\n      <td>商品数量：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n   <tr>\r\n      <td>服务周期：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n   <tr>\r\n      <td>商品配图：</td>\r\n      <td><input type=\"text\"/></td>\r\n   </tr>\r\n    <tr class=\"checkbox02\">\r\n      <td> <span>状态:</span> </td><td><label><input name=\"\" type=\"checkbox\" value=\"\" />是否下架 </label></td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td></td>\r\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\r\n    </tr>\r\n\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/commodity-management-add/commodity-management-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommodityManagementAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommodityManagementAddComponent = (function () {
    function CommodityManagementAddComponent() {
    }
    CommodityManagementAddComponent.prototype.ngOnInit = function () {
    };
    CommodityManagementAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commodity-management-add',
            template: __webpack_require__("../../../../../src/app/commodity-management-add/commodity-management-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commodity-management-add/commodity-management-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommodityManagementAddComponent);
    return CommodityManagementAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commodity-management/commodity-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cqT .productPrice{\r\n  width: 100px;\r\n}\r\n\r\n@media (max-width:1200px) {\r\n  .cqT .productPrice{\r\n    width: 50px;\r\n  }\r\n}\r\n@media (max-width:768px) {\r\n  .cqT .productPrice{\r\n    width: 100px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commodity-management/commodity-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">产品管理</li>\n            <li class=\"active\">商品管理</li>\n            </ol>\n    </section>\n</div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>商品名称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>商品现价:</span><br/><input class=\"productPrice\" type=\"text\"/> — <input class=\"productPrice\" type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>币种:</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"人民币\">人民币</option>\n          <option value=\"美元\">美元</option>>\n          <option value=\"欧元\">欧元</option>>\n          <option value=\"港币\">港币</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>商品类型:</span>\n        <select class=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"促销商品\">促销商品</option>\n          <option value=\"普通商品\">普通商品</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>是否下架:</span>\n        <select class=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"是\">是</option>\n          <option value=\"否\">否</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-2 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n  </div>\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n    <div class=\"zy clearfix\">\n      <div><input type=\"button\" value=\"新增\" [routerLink]=\"['/commodity-management-add']\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n      <div><input type=\"button\" value=\"促销管理\" [routerLink]=\"['/commodity-sales-management']\"/></div>\n    </div>\n    <table class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>商品名称</td>\n            <td>商品原价</td>\n            <td>商品现价</td>\n            <td>币种</td>\n            <td>服务周期(月)</td>\n            <td>数量</td>\n            <td>商品配图</td>\n            <td>商品类型</td>\n            <td>是否下架/td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>体验会员 </td>\n            <td>500</td>\n            <td> 500</td>\n            <td>人民币</td>\n            <td>1</td>\n            <td> 9999999</td>\n            <td> </td>\n            <td>促销商品</td>\n            <td> 否</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>月度会员 </td>\n            <td>888</td>\n            <td> 888 </td>\n            <td>人民币</td>\n            <td>1</td>\n            <td> 9999999</td>\n            <td> </td>\n            <td>普通商品</td>\n            <td> 否</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>季度会员 </td>\n            <td>2288</td>\n            <td> 2288</td>\n            <td>美元</td>\n            <td>3</td>\n            <td> 9999999</td>\n            <td> </td>\n            <td>普通商品</td>\n            <td> 是</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>年度会员 </td>\n            <td>5000</td>\n            <td> 5000</td>\n            <td>人民币</td>\n            <td>12</td>\n            <td> 9999999</td>\n            <td> </td>\n            <td>普通商品</td>\n            <td> 否</td>\n        </tr>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commodity-management/commodity-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommodityManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommodityManagementComponent = (function () {
    function CommodityManagementComponent() {
    }
    CommodityManagementComponent.prototype.ngOnInit = function () {
    };
    CommodityManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commodity-management',
            template: __webpack_require__("../../../../../src/app/commodity-management/commodity-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commodity-management/commodity-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommodityManagementComponent);
    return CommodityManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commodity-sales-management/commodity-sales-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cqT .productPrice{\r\n  width: 100px;\r\n}\r\n\r\n@media (max-width:1200px) {\r\n  .cqT .productPrice{\r\n    width: 50px;\r\n  }\r\n}\r\n@media (max-width:768px) {\r\n  .cqT .productPrice{\r\n    width: 100px;\r\n  }\r\n}\r\n.cqT .row:first-of-type span{\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commodity-sales-management/commodity-sales-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;position: relative;top: 50px;\">\n\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div  class=\"row\">\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>促销方式：</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">请选择</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>促销价格:</span><br/><input class=\"productPrice\" type=\"text\"/> — <input class=\"productPrice\" type=\"text\"/>\n      </div>\n      <div class=\"col-xs-12 col-sm-2 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n    <div class=\"zy clearfix\">\n      <div><input type=\"button\" value=\"新增\" [routerLink]=\"['/commodity-management-add']\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n    </div>\n\n    <table  class=\"table table-striped table-bordered\">\n      <tr>\n        <td>选择</td>\n        <td>促销方式</td>\n        <td>折扣/优惠</td>\n        <td>开始时间</td>\n        <td>结束时间</td>\n        <td>限购数量（单次）</td>\n        <td>限购次数</td>\n        <td>是否有效</td>\n        <td>促销描述</td>\n        <td>促销描述</td>\n      </tr>\n      <tr>\n        <td><input class=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>系统管理员</td>\n        <td>admin</td>\n        <td>是</td>\n        <td>2017-10-01</td>\n        <td>全部权限</td>\n        <td>限购数量（单次）</td>\n        <td>限购次数</td>\n        <td>是否有效</td>\n        <td>促销描述</td>\n      </tr>\n      <tr>\n        <td><input class=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>部门管理员</td>\n        <td>deployment</td>\n        <td>是</td>\n        <td>2017-10-01</td>\n        <td>全部权限</td>\n        <td>限购数量（单次）</td>\n        <td>限购次数</td>\n        <td>是否有效</td>\n        <td>促销描述</td>\n      </tr>\n      <tr>\n        <td><input class=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>普通用户</td>\n        <td>normonl</td>\n        <td>否</td>\n        <td>2017-10-01</td>\n        <td>普通用户默认权限</td>\n        <td>限购数量（单次）</td>\n        <td>限购次数</td>\n        <td>是否有效</td>\n        <td>促销描述</td>\n      </tr>\n    </table>\n\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/commodity-sales-management/commodity-sales-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommoditySalesManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommoditySalesManagementComponent = (function () {
    function CommoditySalesManagementComponent() {
    }
    CommoditySalesManagementComponent.prototype.ngOnInit = function () {
    };
    CommoditySalesManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commodity-sales-management',
            template: __webpack_require__("../../../../../src/app/commodity-sales-management/commodity-sales-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commodity-sales-management/commodity-sales-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommoditySalesManagementComponent);
    return CommoditySalesManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/common.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/common.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cqT\">\n  <div class=\"row\" style=\"margin-bottom: 10px;\">\n    <div class=\"col-sm-3 col-xs-12\">\n      <span>{{account}}</span><br/><input type=\"text\"/>\n    </div>\n    <div class=\"col-sm-3 col-xs-12\">\n      <span>{{nickname}}</span><br/><input type=\"text\"/>\n    </div>\n    <div class=\"col-sm-3 col-xs-12\">\n      <span>{{rank}}</span><br/>\n      <select id=\"u269_input\" >\n        <option value=\"全部\">全部</option>\n        <option value=\"普通用户\">普通用户</option>\n        <option value=\"体验用户\">体验用户</option>\n        <option value=\"付费用户\">付费用户</option>\n      </select>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-3 cz\">\n      <input type=\"button\" value=\"查询\"/>\n      <input type=\"button\" value=\"重置\"/>\n    </div>\n\n</div>\n\n\n  <!--<div class=\"cz row\">-->\n      <!--<div class=\"col-xs-12 col-sm-4\">-->\n         <!--<input type=\"button\" value=\"查询\"/>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-12 col-sm-4\">-->\n         <!--<input type=\"button\" value=\"重置\"/>-->\n      <!--</div>-->\n  <!--</div>-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/common/common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
/* unused harmony export Product */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonComponent = (function () {
    function CommonComponent(routerIonfo) {
        var _this = this;
        this.routerIonfo = routerIonfo;
        routerIonfo.params.subscribe(function (params) { return _this.account = params['account']; });
        routerIonfo.params.subscribe(function (params) { return _this.nickname = params['nickname']; });
        routerIonfo.params.subscribe(function (params) { return _this.rank = params['rank']; });
    }
    CommonComponent.prototype.ngOnInit = function () {
    };
    CommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-common',
            template: __webpack_require__("../../../../../src/app/common/common.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/common.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CommonComponent);
    return CommonComponent;
}());

var Product = (function () {
    function Product(account, nickname, rank) {
        this.account = account;
        this.nickname = nickname;
        this.rank = rank;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/create-order/create-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cqB table tr:nth-of-type(1){\r\n  background-color:rgba(0,0,0,0)!important;\r\n}\r\n.cqB table{\r\n  text-align: left;\r\n}\r\n.cqB .table td {\r\n  padding: 12px 0 12px 30px;\r\n}\r\n.cqB table select,.cqB table input{\r\n  width: 55%;\r\n  display: inline-block;\r\n  line-height: 28px;\r\n  height: 28px;\r\n}\r\n.cqB .table tr td:first-of-type{\r\n  text-align: right;\r\n  font-weight: normal;\r\n  color: #777;\r\n  line-height: 28px;\r\n}\r\n.cqB .table tr td:last-of-type{\r\n  text-align: left;\r\n  line-height: 28px;\r\n}\r\n.table{\r\n  padding: 20px 0;\r\n}\r\n.cqB table .sibmit{\r\n  background: #22a7f0;\r\n  box-shadow: none;\r\n  border: none;\r\n  line-height: 30px;\r\n  padding: 0!important;\r\n  border-radius: 2px!important;\r\n  display: inline-block;\r\n  color: #fff;\r\n\r\n}\r\n.create{\r\n  padding: 0 0 30px 200px;\r\n}\r\n.create .row:first-of-type{\r\n  margin-bottom: 10px;\r\n}\r\n.create .col-sm-2{\r\n  text-align: right;\r\n   padding-right: 0;\r\n}\r\n.create .col-sm-10{\r\n  text-align: left;\r\n  padding-right: 0;\r\n}\r\n@media (max-width:954px) {\r\n  .create{\r\n    padding: 0 0 30px 50px;\r\n  }\r\n}\r\n@media (max-width:768px) {\r\n  .create .col-sm-2{\r\n    text-align: left;\r\n  }\r\n  .create{\r\n    padding: 0 0 30px 100px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-order/create-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n  <section class=\"content-header\">\n          <ol class=\"breadcrumb\">\n          <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n          <li class=\"active\">订单管理</li>\n          <li class=\"active\">创建订单</li>\n          </ol>\n  </section>\n</div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n\n<div class=\"cqB\" style=\"padding: 20px 0;\">\n  <table class=\"table\" style=\"margin: 0 auto;\">\n          <tr>\n             <td style=\"padding-top:20px; \">商品：</td>\n             <td style=\"padding-top:20px; \">\n                  <select>\n                    <option value=\"全部\">全部</option>\n                    <option value=\"普通用户\">普通用户</option>\n                    <option value=\"体验用户\">体验用户</option>\n                    <option value=\"付费用户\">付费用户</option>\n                  </select>\n              </td>\n          </tr>\n          <tr>\n            <td>服务周期：</td>\n            <td>12个月</td>\n          </tr>\n          <tr>\n            <td>币种：</td>\n            <td>人民币</td>\n          </tr>\n          <tr>\n            <td>价格：</td>\n            <td>500.00</td>\n          </tr>\n          <tr>\n              <td>会员账号：</td>\n              <td>\n                   <select>\n                     <option value=\"全部\">全部</option>\n                     <option value=\"普通用户\">普通用户</option>\n                     <option value=\"体验用户\">体验用户</option>\n                     <option value=\"付费用户\">付费用户</option>\n                   </select>\n               </td>\n           </tr>\n           <tr>\n               <td>实收金额：</td>\n               <td><input type=\"text\"/></td>\n           </tr>\n           <tr>\n              <td>付款方式：</td>\n              <td>\n                   <select>\n                     <option value=\"全部\">全部</option>\n                     <option value=\"普通用户\">普通用户</option>\n                     <option value=\"体验用户\">体验用户</option>\n                     <option value=\"付费用户\">付费用户</option>\n                   </select>\n               </td>\n           </tr>\n           <tr>\n              <td>支付流水号：</td>\n              <td><input type=\"text\"/></td>\n          </tr>\n          <tr>\n              <td>付款凭证：</td>\n              <td><input type=\"file\"/></td>\n          </tr>\n          <tr>\n              <td>登录密码：</td>\n              <td><input type=\"text\"/></td>\n          </tr>\n          <tr>\n            <td></td>\n              <td>\n                  <input class=\"sibmit\" type=\"button\" value=\"提交\"/>\n              </td>\n          </tr>\n      </table>\n</div>\n\n<div class=\"create\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12\">****支付方式：</div>\n    <div class=\"col-sm-10 col-xs-12\">选择电汇或其他，支付流水号和付款凭证为必填字段</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-2 col-xs-12\">登录密码：</div>\n    <div class=\"col-sm-10 col-xs-12\">用于确保操作的安全性</div>\n  </div>\n</div>\n\n</div>\n\n<div class=\"alertBoxSuccess\">\n      <div>发布成功!</div>\n      <div>2017-12-12 15:58:52</div>\n</div>\n<div class=\"alertBoxFail\">\n  <div>发布失败!</div>\n  <div>2017-12-12 15:58:52</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-order/create-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateOrderComponent = (function () {
    function CreateOrderComponent() {
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".sibmit").click(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".container").hide();
            //$(".alertBoxSuccess").show();
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".alertBoxFail").show();
        });
    };
    CreateOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-order',
            template: __webpack_require__("../../../../../src/app/create-order/create-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/deal-query/deal-query.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deal-query/deal-query.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n  <section class=\"content-header\">\n          <ol class=\"breadcrumb\">\n          <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n          <li class=\"active\">订单管理</li>\n          <li class=\"active\">交易明细查询</li>\n          </ol>\n  </section>\n</div>\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>订单号:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>支付类型:</span>\n        <select>\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>订单状态:</span>\n        <select>\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n </div>\n  </div>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n  <div class=\"cqB\">\n  <table  class=\"table table-striped table-bordered\">\n      <tr>\n          <td>角色名称</td>\n          <td>角色编号</td>\n          <td>是否可用</td>\n          <td>创建时间</td>\n          <td>备注</td>\n      </tr>\n      <tr>\n          <td>系统管理员</td>\n          <td>admin</td>\n          <td>是</td>\n          <td>2017-10-01</td>\n          <td>全部权限</td>\n      </tr>\n      <tr>\n          <td>部门管理员</td>\n          <td>deployment</td>\n          <td>是</td>\n          <td>2017-10-01</td>\n          <td>全部权限</td>\n      </tr>\n      <tr>\n          <td>普通用户</td>\n          <td>normonl</td>\n          <td>否</td>\n          <td>2017-10-01</td>\n          <td>普通用户默认权限</td>\n      </tr>\n  </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/deal-query/deal-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DealQueryComponent = (function () {
    function DealQueryComponent() {
    }
    DealQueryComponent.prototype.ngOnInit = function () {
    };
    DealQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deal-query',
            template: __webpack_require__("../../../../../src/app/deal-query/deal-query.component.html"),
            styles: [__webpack_require__("../../../../../src/app/deal-query/deal-query.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DealQueryComponent);
    return DealQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demographic/demographic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cqT .row span{\r\n  width: 105px;\r\n}\r\n/*.cqT .row:first-of-type input,.cqT .row select{*/\r\n  /*width: calc(100% - 130px);*/\r\n/*}*/\r\n/**/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demographic/demographic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">统计</li>\n            <li class=\"active\">推广员用户统计</li>\n            </ol>\n    </section>\n  </div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>上级推广员：</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>商品推广人数：</span><br/><input class=\"productPrice\" type=\"text\"/> — <input class=\"productPrice\" type=\"text\"/>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n  </div>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n  <div class=\"cqB\">\n     <table  class=\"table table-striped table-bordered\">\n        <tr>\n            <td>推广员名称</td>\n            <td>推广码</td>\n            <td>间接推广数量</td>\n            <td>间接推广数量</td>\n            <td>下级推广员人数</td>\n        </tr>\n        <tr>\n            <td>系统管理员</td>\n            <td>admin</td>\n            <td>是</td>\n            <td>2017-10-01</td>\n            <td>全部权限</td>\n        </tr>\n        <tr>\n            <td>部门管理员</td>\n            <td>deployment</td>\n            <td>是</td>\n            <td>2017-10-01</td>\n            <td>全部权限</td>\n        </tr>\n        <tr>\n            <td>普通用户</td>\n            <td>normonl</td>\n            <td>否</td>\n            <td>2017-10-01</td>\n            <td>普通用户默认权限</td>\n        </tr>\n    </table>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/demographic/demographic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemographicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemographicComponent = (function () {
    function DemographicComponent() {
    }
    DemographicComponent.prototype.ngOnInit = function () {
    };
    DemographicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demographic',
            template: __webpack_require__("../../../../../src/app/demographic/demographic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demographic/demographic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemographicComponent);
    return DemographicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extension-add/extension-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extension-add/extension-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n      <tr>\n        <td><span>推广员：</span></td>\n        <td>\n            <select>\n              <option value=\"请选择\">请选择</option>\n              <option value=\"zhangsan\">zhangsan</option>\n              <option value=\"lisi\">lisi</option>\n              <option value=\"wangwu\">wangwu</option>\n              <option value=\"zhaoliu\">zhaoliu</option>\n           </select>\n        </td>\n      </tr>\n    <tr>\n      <td><span>上级推广员：</span></td>\n      <td>\n        <select id=\"u3860_input\">\n          <option value=\"请选择\">请选择</option>\n          <option value=\"zhangsan\">zhangsan</option>\n          <option value=\"lisi\">lisi</option>\n          <option value=\"wangwu\">wangwu</option>\n          <option value=\"zhaoliu\">zhaoliu</option>\n        </select>\n      </td>\n    </tr>\n    <tr>\n      <td><span>截止时间：</span></td>\n      <td>\n        <input type=\"text\"/>\n      </td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n\n  </table>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/extension-add/extension-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtensionAddComponent = (function () {
    function ExtensionAddComponent() {
    }
    ExtensionAddComponent.prototype.ngOnInit = function () {
    };
    ExtensionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extension-add',
            template: __webpack_require__("../../../../../src/app/extension-add/extension-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extension-add/extension-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtensionAddComponent);
    return ExtensionAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extension-agent/extension-agent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cqT .row:first-of-type span{\r\n  width: 105px;\r\n}\r\n/*.cqT .row:first-of-type input, .cqT .row select{*/\r\n  /*width: calc(100% - 130px);*/\r\n/*}*/\r\n/*.cqT .cz input {*/\r\n  /*margin-left: 125px!important;*/\r\n/*}*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extension-agent/extension-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n  <section class=\"content-header\">\n          <ol class=\"breadcrumb\">\n          <li class=\"active\"><i class=\"fa fa-dashboard\"></i>系统</li>\n          <li class=\"active\">产品管理</li>\n          <li class=\"active\">推广员管理</li>\n          </ol>\n  </section>\n</div>\n\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>推广员名称：</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>上级推广员：</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>推广码：</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>推广截止时间：</span><input type=\"text\"/>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-2 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n  </div>\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n    <div class=\"zy clearfix\">\n      <div><a [routerLink]=\"['/extension-add']\"><input type=\"button\" value=\"新增\"/></a></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n    </div>\n  <table  class=\"table table-striped table-bordered\">\n      <tr>\n          <td>选择</td>\n          <td>角色名称</td>\n          <td>角色编号</td>\n          <td>是否可用</td>\n          <td>创建时间</td>\n          <td>备注</td>\n      </tr>\n      <tr>\n          <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>系统管理员</td>\n          <td>admin</td>\n          <td>是</td>\n          <td>2017-10-01</td>\n          <td>全部权限</td>\n      </tr>\n      <tr>\n          <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>部门管理员</td>\n          <td>deployment</td>\n          <td>是</td>\n          <td>2017-10-01</td>\n          <td>全部权限</td>\n      </tr>\n      <tr>\n          <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>普通用户</td>\n          <td>normonl</td>\n          <td>否</td>\n          <td>2017-10-01</td>\n          <td>普通用户默认权限</td>\n      </tr>\n  </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extension-agent/extension-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtensionAgentComponent = (function () {
    function ExtensionAgentComponent() {
    }
    ExtensionAgentComponent.prototype.ngOnInit = function () {
    };
    ExtensionAgentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-extension-agent',
            template: __webpack_require__("../../../../../src/app/extension-agent/extension-agent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extension-agent/extension-agent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtensionAgentComponent);
    return ExtensionAgentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/foot/foot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/foot/foot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"foot\">\n    <p>上海贝格计算机数据服务有限公司. Copyright © 2017 All Rights Reserved</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/foot/foot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootComponent = (function () {
    function FootComponent() {
    }
    FootComponent.prototype.ngOnInit = function () {
    };
    FootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-foot',
            template: __webpack_require__("../../../../../src/app/foot/foot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/foot/foot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FootComponent);
    return FootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/head-left/head-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/head-left/head-left.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"sidebar\" style=\"height: auto;\">\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"http://placehold.it/160x160\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Alexander Pierce</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n            <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n      <li class=\"header\">MAIN NAVIGATION</li>\n      <li class=\"treeview\">\n        <a   [routerLink]=\"['/user-management','账号','昵称','用户级别']\">\n          <i class=\"fa fa-dashboard\"></i> <span>系统管理</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\" style=\"display:none;\">\n          <li><a [routerLink]=\"['/user-management','账号','昵称','用户级别']\"><i class=\"fa fa-circle-o\"></i>用户管理</a></li>\n          <li><a [routerLink]=\"['/menu-management','菜单名称','菜单编号','上级菜单']\"><i class=\"fa fa-circle-o\"></i>菜单管理</a></li>\n          <li><a [routerLink]=\"['/resources-management']\"><i class=\"fa fa-circle-o\"></i>资源管理</a></li>\n          <li><a [routerLink]=\"['/role-management','角色名称','角色编号','是否可用']\"><i class=\"fa fa-circle-o\"></i>角色管理</a></li>\n          <li><a [routerLink]=\"['/password']\" ><i class=\"fa fa-circle-o\"></i>密码修改</a></li>\n          <li><a [routerLink]=\"['/log-record','日志类型','操作内容','操作人']\"><i class=\"fa fa-circle-o\"></i>日志记录</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a  >\n          <i class=\"fa fa-files-o\"></i>\n          <span>产品管理</span>\n          <span class=\"pull-right-container\">\n            <!-- <span class=\"label label-primary pull-right\">4</span> -->\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\" style=\"display: none;\">\n          <li><a [routerLink]=\"['vip-management']\"><i class=\"fa fa-circle-o\"></i>会员管理</a></li>\n          <li><a [routerLink]=\"['product-menu-management']\"><i class=\"fa fa-circle-o\"></i> 产品菜单管理</a></li>\n          <li><a  [routerLink]=\"['product-resource-management']\"><i class=\"fa fa-circle-o\"></i> 产品资源管理</a></li>\n          <li><a [routerLink]=\"['product-role-management']\"><i class=\"fa fa-circle-o\"></i> 产品角色管理</a></li>\n          <li><a [routerLink]=\"['product-configuration']\"><i class=\"fa fa-circle-o\"></i> 产品配置</a></li>\n          <li><a [routerLink]=\"['commodity-management']\"><i class=\"fa fa-circle-o\"></i> 商品管理</a></li>\n          <li><a [routerLink]=\"['/extension-agent']\"><i class=\"fa fa-circle-o\"></i> 推广员管理</a></li>\n        </ul>\n      </li>\n      <!-- <li class=\"active\">\n        <a href=\"widgets.html\">\n          <i class=\"fa fa-th\"></i> <span>订单管理</span>\n          <span class=\"pull-right-container\">\n            <small class=\"label pull-right bg-green\">new</small>\n          </span>\n        </a>\n      </li> -->\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-pie-chart\"></i>\n          <span>订单管理</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\" style=\"display: none;\">\n          <li><a [routerLink]=\"['/deal-query']\"><i class=\"fa fa-circle-o\"></i> 交易明细查询</a></li>\n          <li><a [routerLink]=\"['/order-review']\"><i class=\"fa fa-circle-o\"></i> 订单审核</a></li>\n          <li><a [routerLink]=\"['/create-order']\"><i class=\"fa fa-circle-o\"></i> 创建订单</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-laptop\"></i>\n          <span>统计</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['/demographic']\"><i class=\"fa fa-circle-o\"></i> 推广员用户统计</a></li>\n          <li><a [routerLink]=\"['/trade-statistic']\"><i class=\"fa fa-circle-o\"></i> 商品交易统计</a></li>\n        </ul>\n      </li>\n      \n      <!-- <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n      <li class=\"header\">LABELS</li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li> -->\n    </ul>\n</section>"

/***/ }),

/***/ "../../../../../src/app/head-left/head-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadLeftComponent = (function () {
    function HeadLeftComponent() {
    }
    HeadLeftComponent.prototype.ngOnInit = function () {
    };
    HeadLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head-left',
            template: __webpack_require__("../../../../../src/app/head-left/head-left.component.html"),
            styles: [__webpack_require__("../../../../../src/app/head-left/head-left.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadLeftComponent);
    return HeadLeftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/head-top/head-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/head-top/head-top.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a href=\"../index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>A</b>LT</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Admin</b>LTE</span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </a>\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"http://placehold.it/160x160\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img [src]=\"imgUrl\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img [src]=\"imgUrl\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Developers\n                      <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img [src]=\"imgUrl\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img [src]=\"imgUrl\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                    page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-user text-light-blue\"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Create a nice theme\n                      <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Some task I need to do\n                      <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Make beautiful transitions\n                      <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img [src]=\"imgUrl1\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">Alexander Pierce</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img [src]=\"imgUrl1\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Alexander Pierce - Web Developer\n                <small>Member since Nov. 2012</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/head-top/head-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadTopComponent = (function () {
    function HeadTopComponent() {
        this.imgUrl = 'http://placehold.it/128x128';
        this.imgUrl1 = 'http://placehold.it/160x160';
    }
    HeadTopComponent.prototype.ngOnInit = function () {
    };
    HeadTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head-top',
            template: __webpack_require__("../../../../../src/app/head-top/head-top.component.html"),
            styles: [__webpack_require__("../../../../../src/app/head-top/head-top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeadTopComponent);
    return HeadTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/log-record/log-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-record/log-record.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n        <div class=\"conter\">\n                <section class=\"content-header\">\n                        <ol class=\"breadcrumb\">\n                        <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n                        <li class=\"active\">系统管理</li>\n                        <li class=\"active\">用户管理</li>\n                        </ol>\n                </section>\n            </div>\n\n  <div  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container\">\n    <app-common></app-common>\n\n    <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n    <div class=\"cqB\">\n      <table border=\"1\"  class=\"table table-striped table-bordered\">\n        <tr>\n          <td>日志类型</td>\n          <td>操作内容</td>\n          <td>操作时间</td>\n          <td>操作人</td>\n          <td>操作ip</td>\n          <td>备注</td>\n        </tr>\n        <tr>\n          <td>登录</td>\n          <td>登录</td>\n          <td>2017-10-27 20:20:12</td>\n          <td>admin</td>\n          <td>127.0.0.1</td>\n          <td>登录</td>\n        </tr>\n        <tr>\n          <td>新增</td>\n          <td>用户管理-新增用户</td>\n          <td>2017-10-27 20:20:12</td>\n          <td>admin</td>\n          <td>127.0.0.1</td>\n          <td>新增用户[张三]</td>\n        </tr>\n        <tr>\n          <td>修改</td>\n          <td>用户管理-密码修改</td>\n          <td>2017-10-27 20:20:12</td>\n          <td>admin</td>\n          <td>127.0.0.1</td>\n          <td>修改密码</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n    </section>\n\n"

/***/ }),

/***/ "../../../../../src/app/log-record/log-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogRecordComponent = (function () {
    function LogRecordComponent() {
    }
    LogRecordComponent.prototype.ngOnInit = function () {
    };
    LogRecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log-record',
            template: __webpack_require__("../../../../../src/app/log-record/log-record.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-record/log-record.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogRecordComponent);
    return LogRecordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu-management/menu-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-management/menu-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\r\n        <section class=\"content-header\">\r\n                <ol class=\"breadcrumb\">\r\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> 系统</a></li>\r\n                <li class=\"active\">系统管理</li>\r\n                <li class=\"active\">菜单管理</li>\r\n                </ol>\r\n        </section>\r\n    </div>\r\n\r\n    <div  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container cqB\">\r\n        <app-common></app-common>\r\n      <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\r\n      <div class=\"zy row\">\r\n        <div><input type=\"button\"  [routerLink]=\"['/addmenu']\" value=\"新增\"/></div>\r\n        <div><input type=\"button\" value=\"修改\"/></div>\r\n        <div><input type=\"button\" value=\"删除\"/></div>\r\n      </div>\r\n\r\n\r\n        <table  class=\"table table-striped table-bordered\">\r\n            <tr>\r\n                <td>选择</td>\r\n                <td>账号</td>\r\n                <td>昵称</td>\r\n                <td>用户角色</td>\r\n                <td>邮箱</td>\r\n                <td>手机号码</td>\r\n                <td>是否可用</td>\r\n                <td>最后登录时间</td>\r\n            </tr>\r\n            <tr>\r\n                <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\r\n                <td>king</td>\r\n                <td>张三</td>\r\n                <td>三三</td>\r\n                <td>java</td>\r\n                <td>37778wtww@pp.com</td>\r\n                <td>是</td>\r\n                <td>2017-11-09 17:00:00</td>\r\n            </tr>\r\n            <tr>\r\n                <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\r\n                 <td>king</td>\r\n                <td>张三</td>\r\n                <td>三三</td>\r\n                <td>java</td>\r\n                <td>37778wtww@pp.com</td>\r\n                <td>是</td>\r\n                <td>2017-11-09 17:00:00</td>\r\n            </tr>\r\n            <tr>\r\n                <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\r\n                <td>admin</td>\r\n                <td>系统管理员</td>\r\n                <td>管理员，财务，客户</td>\r\n                <td>java</td>\r\n                <td>37778wtww@pp.com</td>\r\n                <td>是</td>\r\n                 <td>2017-11-09 17:00:00</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu-management/menu-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuManagementComponent = (function () {
    function MenuManagementComponent() {
    }
    MenuManagementComponent.prototype.ngOnInit = function () {
    };
    MenuManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu-management',
            template: __webpack_require__("../../../../../src/app/menu-management/menu-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu-management/menu-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuManagementComponent);
    return MenuManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-review/order-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cqT .row:first-of-type span{\r\n  width: 105px;\r\n}\r\n\r\n.cqB .table td {\r\n  padding: 12px 30px;\r\n  text-align: left;\r\n}\r\n.cqB .table td span{\r\n  width: 80px;\r\n  display: inline-block;\r\n  /*text-align: right;*/\r\n  padding-right: 10px;\r\n  font-weight: normal;\r\n  color: #777;\r\n}\r\n.cqB .table td  input{\r\n  color: #ffffff;\r\n  background: #22a7f0;\r\n  box-shadow: none;\r\n  border: none;\r\n  width: 100px;\r\n  /*margin-left: 10px!important;*/\r\n  line-height: 30px;\r\n  padding: 0!important;\r\n  border-radius: 2px!important;\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-review/order-review.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n  <section class=\"content-header\">\n          <ol class=\"breadcrumb\">\n          <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n          <li class=\"active\">订单管理</li>\n          <li class=\"active\">订单审核</li>\n          </ol>\n  </section>\n</div>\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n\n<div class=\"cqT\" style=\"padding-left: 10px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-xs-12\">\n      <span>订单号：</span><input type=\"text\" size=\"15\"/>\n    </div>\n    <div class=\"col-sm-3 col-xs-12\">\n      <span>支付流水号：</span><input type=\"text\" size=\"15\"/>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-3 cz\">\n      <input type=\"button\" value=\"查询\"/>\n      <input type=\"button\" value=\"重置\"/>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"cqB\">\n  <table  class=\"table table-striped table-bordered\">\n     <tr>\n         <td colspan=\"2\">订单号：  201710291625080001</td>\n     </tr>\n     <tr>\n         <td><span>用户名:</span> 张三</td>\n         <td><span>商品名称:</span>体验会员</td>\n     </tr>\n     <tr>\n        <td><span>支付方式:</span>支付宝</td>\n        <td><span>促销方式:</span>优惠（100元）</td>\n    </tr>\n    <tr>\n        <td><span>促销方式:</span>优惠（100元）</td>\n        <td><span>促销方式:</span>优惠（100元）</td>\n    </tr>\n    <tr>\n        <td><span>流水号:</span>a201710291625080001</td>\n        <td><span>订单状态:</span>待支付</td>\n    </tr>\n    <tr>\n        <td><span>支付时间:</span>2017-10-29 16：25：08</td>\n        <td></td>\n    </tr>\n    <tr>\n      <td colspan=\"2\"><input type=\"button\" value=\"修改\"/></td>\n    </tr>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/order-review/order-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderReviewComponent = (function () {
    function OrderReviewComponent() {
    }
    OrderReviewComponent.prototype.ngOnInit = function () {
    };
    OrderReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-review',
            template: __webpack_require__("../../../../../src/app/order-review/order-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-review/order-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderReviewComponent);
    return OrderReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n    <div class=\"conter\">\n        <section class=\"content-header\">\n                <ol class=\"breadcrumb\">\n                <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n                <li class=\"active\">系统管理</li>\n                <li class=\"active\">用户管理</li>\n                </ol>\n        </section>\n    </div>\n\n  <div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;\" id=\"passwordChange\">\n    <table class=\"table\">\n      <tr><td><span>新密码：</span></td><td><input type=\"text\"/></td></tr>\n      <tr><td> <span>确认密码:</span></td><td> <input type=\"text\"/></td></tr>\n      <tr>\n        <td></td>\n        <td colspan=\"2\" ><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n      </tr>\n    </table>\n  </div>\n\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordComponent = (function () {
    function PasswordComponent() {
    }
    PasswordComponent.prototype.ngOnInit = function () {
    };
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password',
            template: __webpack_require__("../../../../../src/app/password/password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-configuration-add/product-configuration-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-configuration-add/product-configuration-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n  <tr>\n    <td>配置名称：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>配置编号：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>内容：</td>\n    <td><textarea></textarea></td>\n  </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n</table>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/product-configuration-add/product-configuration-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductConfigurationAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductConfigurationAddComponent = (function () {
    function ProductConfigurationAddComponent() {
    }
    ProductConfigurationAddComponent.prototype.ngOnInit = function () {
    };
    ProductConfigurationAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-configuration-add',
            template: __webpack_require__("../../../../../src/app/product-configuration-add/product-configuration-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-configuration-add/product-configuration-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductConfigurationAddComponent);
    return ProductConfigurationAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-configuration/product-configuration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-configuration/product-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">产品管理</li>\n            <li class=\"active\">产品配置</li>\n            </ol>\n    </section>\n</div>\n\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>配置名称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>配置编号:</span><input type=\"text\"/>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n  <div class=\"cqB\">\n\n    <div class=\"zy row\">\n      <div><input type=\"button\" value=\"新增\" [routerLink]=\"['/product-configuration-add']\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n    </div>\n    <table class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>配置名称</td>\n            <td>配置编号</td>\n            <td>配置内容</td>\n            <td>创建时间</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>注册邮件激活模板</td>\n            <td>email_template</td>\n            <td> xxxx</td>\n            <td>2017-10-29</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>支付宝appid</td>\n            <td>alipay_appid</td>\n            <td> 342343222</td>\n            <td>2017-10-29</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>短信验证码模板</td>\n            <td>sm_template</td>\n            <td> 您的验证码为#code,请注意保管好</td>\n            <td>2017-10-29</td>\n        </tr>\n      </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-configuration/product-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductConfigurationComponent = (function () {
    function ProductConfigurationComponent() {
    }
    ProductConfigurationComponent.prototype.ngOnInit = function () {
    };
    ProductConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-configuration',
            template: __webpack_require__("../../../../../src/app/product-configuration/product-configuration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-configuration/product-configuration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductConfigurationComponent);
    return ProductConfigurationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-menu-management/product-menu-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-menu-management/product-menu-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">产品管理</li>\n            <li class=\"active\">产品菜单管理</li>\n            </ol>\n    </section>\n</div>\n\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>菜单名称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>菜单编号:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>上级菜单:</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">系统管理</option>\n          <option value=\"体验用户\">产品管理</option>\n          <option value=\"付费用户\">订单管理</option>\n          <option value=\"付费用户\">统计管理</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n  </div>\n\n    <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n    <div class=\"zy row\">\n      <div><input type=\"button\" [routerLink]=\"['/add-product-menu']\" value=\"新增\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n    </div>\n\n    <table class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>菜单名称</td>\n            <td>菜单编号</td>\n            <td>菜单地址</td>\n            <td>菜单图标</td>\n            <td>是否禁用</td>\n            <td>菜单配置</td>\n            <td>上级菜单</td>\n            <td>资源编号</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>系统管理</td>\n            <td>system</td>\n            <td> </td>\n            <td>system.png</td>\n            <td>否</td>\n            <td>[bgcolor:#fffff]</td>\n            <td> </td>\n            <td>bas</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>用户管理</td>\n            <td>usermanager </td>\n            <td>/user/list</td>\n            <td> </td>\n            <td>否</td>\n            <td>[bgcolor:#fffff]</td>\n            <td>system</td>\n            <td>bas</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>用户新增</td>\n            <td>adduser </td>\n            <td>/user/add</td>\n            <td>add.png</td>\n            <td>否</td>\n            <td> </td>\n            <td>usermanager</td>\n            <td>nomoral</td>\n        </tr>\n      </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-menu-management/product-menu-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductMenuManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductMenuManagementComponent = (function () {
    function ProductMenuManagementComponent() {
    }
    ProductMenuManagementComponent.prototype.ngOnInit = function () {
    };
    ProductMenuManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-menu-management',
            template: __webpack_require__("../../../../../src/app/product-menu-management/product-menu-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-menu-management/product-menu-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductMenuManagementComponent);
    return ProductMenuManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-resource-management-add/product-resource-management-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-resource-management-add/product-resource-management-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n\n  <tr>\n    <td>资源名称：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>资源名称：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>备注：</td>\n    <td><textarea></textarea></td>\n  </tr>\n\n    <tr class=\"checkbox02\">\n      <td> <span>状态:</span> </td><td><label><input value=\"checkbox\" type=\"checkbox\">是否禁用 </label></td>\n    </tr>\n\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n\n  </table>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/product-resource-management-add/product-resource-management-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResourceManagementAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductResourceManagementAddComponent = (function () {
    function ProductResourceManagementAddComponent() {
    }
    ProductResourceManagementAddComponent.prototype.ngOnInit = function () {
    };
    ProductResourceManagementAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-resource-management-add',
            template: __webpack_require__("../../../../../src/app/product-resource-management-add/product-resource-management-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-resource-management-add/product-resource-management-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductResourceManagementAddComponent);
    return ProductResourceManagementAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  background-color:#ffffff;\r\n}\r\n.for{\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\ndiv{\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"for\">\n  <div>\n    <p>全部角色</p>\n    <p><textarea></textarea></p>\n  </div>\n  <div>\n    <input type=\"button\" value=\">>\"/><br>\n    <input type=\"button\" value=\">\"/><br>\n    <input type=\"button\" value=\"<\"/><br>\n    <input type=\"button\" value=\"<<\"/><br>\n  </div>\n  <div>\n    <p>已绑定角色</p>\n    <p><textarea></textarea></p>\n  </div>\n</div>\n<p><input type=\"button\" value=\"确定\"></p>\n"

/***/ }),

/***/ "../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResourceManagementBindingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductResourceManagementBindingComponent = (function () {
    function ProductResourceManagementBindingComponent() {
    }
    ProductResourceManagementBindingComponent.prototype.ngOnInit = function () {
    };
    ProductResourceManagementBindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-resource-management-binding',
            template: __webpack_require__("../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-resource-management-binding/product-resource-management-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductResourceManagementBindingComponent);
    return ProductResourceManagementBindingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-resource-management/product-resource-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-resource-management/product-resource-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">产品管理</li>\n            <li class=\"active\">产品资源管理</li>\n            </ol>\n    </section>\n</div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>资源名称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>资源编号:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>是否可用:</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"是\">是</option>\n          <option value=\"否\">否</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n    </div>\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n\n  <div class=\"cqB\">\n\n    <div class=\"zy row\">\n      <div><input type=\"button\" value=\"新增\" [routerLink]=\"['/product-resource-management-add']\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n      <div><input type=\"button\" value=\"绑定角色\" [routerLink]=\"['/product-resource-management-binding']\"/></div>\n\n    </div>\n    <table class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>资源名称</td>\n            <td>资源编号</td>\n            <td>是否可用</td>\n            <td>备注</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>基础资源</td>\n            <td>bas</td>\n            <td> 是</td>\n            <td>基础资源，全部都可以使用</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>管理员资源</td>\n            <td>admin</td>\n            <td>否</td>\n            <td>只有管理员才能使用</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>付费资源</td>\n            <td>cbdterminal</td>\n            <td>是</td>\n            <td>只有付费后才能使用</td>\n        </tr>\n      </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-resource-management/product-resource-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResourceManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductResourceManagementComponent = (function () {
    function ProductResourceManagementComponent() {
    }
    ProductResourceManagementComponent.prototype.ngOnInit = function () {
    };
    ProductResourceManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-resource-management',
            template: __webpack_require__("../../../../../src/app/product-resource-management/product-resource-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-resource-management/product-resource-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductResourceManagementComponent);
    return ProductResourceManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n  background-color:#ffffff;\r\n}\r\n.for{\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\ndiv{\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"for\">\n  <div>\n    <p>全部资源</p>\n    <p><textarea></textarea></p>\n  </div>\n  <div>\n    <input type=\"button\" value=\">>\"/><br>\n    <input type=\"button\" value=\">\"/><br>\n    <input type=\"button\" value=\"<\"/><br>\n    <input type=\"button\" value=\"<<\"/><br>\n  </div>\n  <div>\n    <p>已绑定资源</p>\n    <p><textarea></textarea></p>\n  </div>\n</div>\n<p><input type=\"button\" value=\"确定\"></p>\n"

/***/ }),

/***/ "../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoleManagemenBindingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductRoleManagemenBindingComponent = (function () {
    function ProductRoleManagemenBindingComponent() {
    }
    ProductRoleManagemenBindingComponent.prototype.ngOnInit = function () {
    };
    ProductRoleManagemenBindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-role-managemen-binding',
            template: __webpack_require__("../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-role-managemen-binding/product-role-managemen-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductRoleManagemenBindingComponent);
    return ProductRoleManagemenBindingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-role-management-add/product-role-management-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-role-management-add/product-role-management-add.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>角色名称：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>角色编号：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>备注：</td>\n    <td><textarea></textarea></td>\n  </tr>\n  <tr>\n    <td>状态：</td>\n    <td><input id=\"u3479_input\" value=\"checkbox\" type=\"checkbox\">是否禁用</td>\n  </tr>\n  <tr>\n    <td colspan=\"2\"><input type=\"button\" value=\"确定\"/></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/product-role-management-add/product-role-management-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoleManagementAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductRoleManagementAddComponent = (function () {
    function ProductRoleManagementAddComponent() {
    }
    ProductRoleManagementAddComponent.prototype.ngOnInit = function () {
    };
    ProductRoleManagementAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-role-management-add',
            template: __webpack_require__("../../../../../src/app/product-role-management-add/product-role-management-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-role-management-add/product-role-management-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductRoleManagementAddComponent);
    return ProductRoleManagementAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-role-management/product-role-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-role-management/product-role-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n  <section class=\"content-header\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n      <li class=\"active\">产品管理</li>\n      <li class=\"active\">产品资源管理</li>\n    </ol>\n  </section>\n</div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>资源名称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>资源编号:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>是否可用:</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"是\">是</option>\n          <option value=\"否\">否</option>\n        </select>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n\n  </div>\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n\n  <div class=\"cqB\">\n\n    <div class=\"zy row\">\n      <div><input type=\"button\" value=\"新增\" [routerLink]=\"['/product-resource-management-add']\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n      <div><input type=\"button\" value=\"绑定角色\" [routerLink]=\"['/product-resource-management-binding']\"/></div>\n\n    </div>\n    <table class=\"table table-striped table-bordered\">\n      <tr>\n        <td>选择</td>\n        <td>角色名称</td>\n        <td>角色编号</td>\n        <td>是否可用</td>\n        <td>创建时间</td>\n        <td>备注</td>\n      </tr>\n      <tr>\n        <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>管理员</td>\n        <td>admin</td>\n        <td> 是</td>\n        <td></td>\n        <td>全部权限</td>\n      </tr>\n      <tr>\n        <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>体验会员</td>\n        <td>sample_user</td>\n        <td> 是</td>\n        <td></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n        <td>普通用户</td>\n        <td>normonl</td>\n        <td>否</td>\n        <td>2017-10-01</td>\n        <td>普通用户默认权限</td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/product-role-management/product-role-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoleManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductRoleManagementComponent = (function () {
    function ProductRoleManagementComponent() {
    }
    ProductRoleManagementComponent.prototype.ngOnInit = function () {
    };
    ProductRoleManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-role-management',
            template: __webpack_require__("../../../../../src/app/product-role-management/product-role-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-role-management/product-role-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductRoleManagementComponent);
    return ProductRoleManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resources-management/resources-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resources-management/resources-management.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header\">\n  <div class=\"conter\">\n                <section class=\"content-header\">\n                        <ol class=\"breadcrumb\">\n                        <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n                        <li class=\"active\">系统管理</li>\n                        <li class=\"active\">用户管理</li>\n                        </ol>\n                </section>\n            </div>\n  <div  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container\">\n\n  <div style=\"padding-top: 20px;margin-left: 9px;\" class=\"cqT\">\n      <div  class=\"row\" style=\"margin-bottom: 10px;\">\n        <div class=\"col-sm-3 col-xs-12\"><span>资源名称:</span><input type=\"text\" /></div>\n        <div class=\"col-sm-3 col-xs-12\"><span>资源编号:</span><input type=\"text\"/></div>\n\n        <div class=\"col-xs-12 col-sm-3 cz\">\n          <input type=\"button\" value=\"查询\"/>\n          <input type=\"button\" value=\"重置\"/>\n        </div>\n\n      </div>\n\n  </div>\n\n    <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n       <!--<p class=\"da\"></p>-->\n    <div class=\"cqB\">\n      <div class=\"zy row\">\n        <div><input type=\"button\"  [routerLink]=\"['/addresources']\" value=\"新增\"/></div>\n        <div><input type=\"button\" value=\"修改\"/></div>\n        <div><input type=\"button\" value=\"删除\"/></div>\n        <div><input type=\"button\"  [routerLink]=\"['/binding-role']\" value=\"绑定角色\"/></div>\n      </div>\n\n      <br/>\n      <table border=\"1\"  class=\"table table-striped table-bordered\">\n        <tr>\n          <td>选择</td>\n          <td>资源名称</td>\n          <td>资源编号</td>\n          <td>是否可用</td>\n          <td>备注</td>\n        </tr>\n        <tr>\n          <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>基础资源</td>\n          <td>bas</td>\n          <td>是</td>\n          <td>基础资源，全部都可以使用</td>\n        </tr>\n        <tr>\n          <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>管理员资源</td>\n          <td>admin</td>\n          <td>否</td>\n          <td>只有管理员才能使用</td>\n        </tr>\n        <tr>\n          <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>付费资源</td>\n          <td>cbdterminal</td>\n          <td>是</td>\n          <td>只有付费后才能使用</td>\n        </tr>\n        <tr>\n          <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n          <td>体验资源</td>\n          <td>sample</td>\n          <td>是</td>\n          <td>部分功能是可以体验的</td>\n        </tr>\n      </table>\n    </div>\n\n\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/resources-management/resources-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesManagementComponent = (function () {
    function ResourcesManagementComponent() {
    }
    ResourcesManagementComponent.prototype.ngOnInit = function () {
    };
    ResourcesManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources-management',
            template: __webpack_require__("../../../../../src/app/resources-management/resources-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resources-management/resources-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesManagementComponent);
    return ResourcesManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/role-management/role-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/role-management/role-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">系统管理</li>\n            <li class=\"active\">角色管理</li>\n            </ol>\n    </section>\n</div>\n\n<div  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container cqB\">\n    <app-common></app-common>\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"zy row\">\n    <div><input type=\"button\"  [routerLink]=\"['/addrole']\" value=\"新增\"/></div>\n    <div><input type=\"button\" value=\"修改\"/></div>\n    <div><input type=\"button\" value=\"删除\"/></div>\n    <div> <input type=\"button\" [routerLink]=\"['/binding-resources']\" value=\"绑定资源\"/></div>\n  </div>\n\n    <table  class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>角色名称</td>\n            <td>角色编号</td>\n            <td>是否可用</td>\n            <td>创建时间</td>\n            <td>备注</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>系统管理员</td>\n            <td>admin</td>\n            <td>是</td>\n            <td>2017-10-01</td>\n            <td>全部权限</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>部门管理员</td>\n            <td>deployment</td>\n            <td>是</td>\n            <td>2017-10-01</td>\n            <td>全部权限</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>普通用户</td>\n            <td>normonl</td>\n            <td>否</td>\n            <td>2017-10-01</td>\n            <td>普通用户默认权限</td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/role-management/role-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleManagementComponent = (function () {
    function RoleManagementComponent() {
    }
    RoleManagementComponent.prototype.ngOnInit = function () {
    };
    RoleManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-role-management',
            template: __webpack_require__("../../../../../src/app/role-management/role-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/role-management/role-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleManagementComponent);
    return RoleManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sales-management-add/sales-management-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sales-management-add/sales-management-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n  <tr>\n    <td>促销方式：</td>\n    <td>\n      <select  class=\"u269_input\" >\n        <option value=\"全部\">请选择</option>\n        <option value=\"普通用户\">普通用户</option>\n        <option value=\"体验用户\">体验用户</option>\n        <option value=\"付费用户\">付费用户</option>\n      </select>\n    </td>\n  </tr>\n  <tr>\n    <td>新增X折扣/优惠：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>开始时间：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>截止时间：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>限购数量(次)：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>限购次数：</td>\n    <td><input type=\"text\"/></td>\n  </tr>\n  <tr>\n    <td>备注：</td>\n    <td><textarea></textarea></td>\n  </tr>\n    <tr class=\"checkbox02\">\n      <td> <span>状态:</span> </td><td><label><input name=\"\" type=\"checkbox\" value=\"\" />是否有效 </label></td>\n    </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\" [routerLink]=\"['/commodity-sales-management']\"/></td>\n    </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sales-management-add/sales-management-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesManagementAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesManagementAddComponent = (function () {
    function SalesManagementAddComponent() {
    }
    SalesManagementAddComponent.prototype.ngOnInit = function () {
    };
    SalesManagementAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sales-management-add',
            template: __webpack_require__("../../../../../src/app/sales-management-add/sales-management-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sales-management-add/sales-management-add.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesManagementAddComponent);
    return SalesManagementAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trade-statistic/trade-statistic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.cqT .row span{\r\n  width: 105px;\r\n}\r\n/*.cqT .row:first-of-type input,.cqT .row select{*/\r\n  /*width: calc(100% - 130px);*/\r\n/*}*/\r\n/**/\r\n/*.cqT .row .productPrice{*/\r\n  /*width: 100px!important;*/\r\n/*}*/\r\n/*@media (max-width:1200px) {*/\r\n  /*.cqT .row .productPrice{*/\r\n    /*width: 50px!important;*/\r\n  /*}*/\r\n/*}*/\r\n/*@media (max-width:768px) {*/\r\n  /*.cqT .row .productPrice{*/\r\n    /*width: 100px!important;*/\r\n  /*}*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trade-statistic/trade-statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">统计</li>\n            <li class=\"active\">商品交易统计</li>\n            </ol>\n    </section>\n  </div>\n\n<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\">\n  <div class=\"cqT\" style=\"padding-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>上级推广员：</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <span>商品推广人数：</span><br/><input class=\"productPrice\" type=\"text\"/> — <input class=\"productPrice\" type=\"text\"/>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n  </div>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n  <div class=\"cqB\" style=\"padding: 30px 0;\">\n    <img style=\"width: 100%;\" src=\"http://placehold.it/678x295\">\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/trade-statistic/trade-statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeStatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradeStatisticComponent = (function () {
    function TradeStatisticComponent() {
    }
    TradeStatisticComponent.prototype.ngOnInit = function () {
    };
    TradeStatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trade-statistic',
            template: __webpack_require__("../../../../../src/app/trade-statistic/trade-statistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/trade-statistic/trade-statistic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TradeStatisticComponent);
    return TradeStatisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i> 系统</li>\n            <li class=\"active\">系统管理</li>\n            <li class=\"active\">用户管理</li>\n            </ol>\n    </section>\n</div>\n<div style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container\">\n    <app-common></app-common>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n\n    <div class=\"zy row\">\n      <div><input type=\"button\"  [routerLink]=\"['/adduser']\" value=\"新增\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n      <div><input type=\"button\" [routerLink]=\"['/user-modify-password']\" value=\"密码修改\"/></div>\n    </div>\n\n    <table  class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>账号</td>\n            <td>昵称</td>\n            <td>用户角色</td>\n            <td>邮箱</td>\n            <td>手机号码</td>\n            <td>是否可用</td>\n            <td>最后登录时间</td>\n        </tr>\n        <tr>\n            <td><input id=\"u278_input\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>king</td>\n            <td>张三</td>\n            <td>三三</td>\n            <td>java</td>\n            <td>37778wtww@pp.com</td>\n            <td>是</td>\n            <td>2017-11-09 17:00:00</td>\n        </tr>\n        <tr>\n            <td><input type=\"checkbox\" value=\"checkbox\"></td>\n             <td>king</td>\n            <td>张三</td>\n            <td>三三</td>\n            <td>java</td>\n            <td>37778wtww@pp.com</td>\n            <td>是</td>\n            <td>2017-11-09 17:00:00</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>admin</td>\n            <td>系统管理员</td>\n            <td>管理员，财务，客户</td>\n            <td>java</td>\n            <td>37778wtww@pp.com</td>\n            <td>是</td>\n             <td>2017-11-09 17:00:00</td>\n        </tr>\n    </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-management',
            template: __webpack_require__("../../../../../src/app/user-management/user-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-management/user-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-modify-password/user-modify-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-modify-password/user-modify-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table class=\"table\">\n    <tr> <td>账号：</td><td>zhangsan</td> </tr>\n     <tr> <td>昵称：</td><td>张三</td></tr>\n      <tr><td>新密码：</td><td><input type=\"password\"></td></tr>\n      <tr> <td>登录密码：</td><td><input type=\"password\"></td> </tr>\n      <tr><td></td><td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-modify-password/user-modify-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModifyPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserModifyPasswordComponent = (function () {
    function UserModifyPasswordComponent() {
    }
    UserModifyPasswordComponent.prototype.ngOnInit = function () {
    };
    UserModifyPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-modify-password',
            template: __webpack_require__("../../../../../src/app/user-modify-password/user-modify-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-modify-password/user-modify-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserModifyPasswordComponent);
    return UserModifyPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vip-management/vip-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vip-management/vip-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"conter\">\n    <section class=\"content-header\">\n            <ol class=\"breadcrumb\">\n            <li class=\"active\"><i class=\"fa fa-dashboard\"></i>系统</li>\n            <li class=\"active\">产品管理</li>\n            <li class=\"active\">会员管理</li>\n            </ol>\n    </section>\n</div>\n\n\n<div style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;\" class=\"container\">\n  <div class=\"cqT\" style=\"margin-left: 10px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>账号:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>昵称:</span><input type=\"text\"/>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>用户级别:</span>\n        <select id=\"u269_input\" >\n          <option value=\"全部\">全部</option>\n          <option value=\"普通用户\">普通用户</option>\n          <option value=\"体验用户\">体验用户</option>\n          <option value=\"付费用户\">付费用户</option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <span>推广码:</span><input type=\"text\"/>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 cz\">\n        <input type=\"button\" value=\"查询\"/>\n        <input type=\"button\" value=\"重置\"/>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div style=\"border-bottom: 1px solid #f4f4f4;\"></div>\n\n  <div class=\"cqB\">\n\n    <div class=\"zy row\">\n      <div><input type=\"button\" [routerLink]=\"['/add-vip']\" value=\"新增\"/></div>\n      <div><input type=\"button\" value=\"修改\"/></div>\n      <div><input type=\"button\" value=\"删除\"/></div>\n      <div><input type=\"button\" [routerLink]=\"['/vip-modify-password']\" value=\"密码修改\"/></div>\n      <div><input type=\"button\" [routerLink]=\"['/vip-open']\" value=\"开通VIP\"/></div>\n    </div>\n\n    <table  class=\"table table-striped table-bordered\">\n        <tr>\n            <td>选择</td>\n            <td>账号</td>\n            <td>昵称</td>\n            <td>用户级别</td>\n            <td>注册类型</td>\n            <td>邮箱</td>\n            <td>手机号码</td>\n            <td>会员截止日期</td>\n            <td>推广码</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>zhangsan</td>\n            <td>张三</td>\n            <td>普通用户</td>\n            <td>手机号码</td>\n            <td>zhangsan@12.com</td>\n            <td>17612137718</td>\n            <td>2009-9-9</td>\n            <td>132312</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>zhangsan</td>\n            <td>李四</td>\n            <td>体验用户</td>\n            <td>手机号码</td>\n            <td>zhangsan@12.com</td>\n            <td>17612137718</td>\n            <td>2009-9-9</td>\n            <td>132312</td>\n        </tr>\n        <tr>\n            <td><input id=\"\" type=\"checkbox\" value=\"checkbox\"></td>\n            <td>zhangsan</td>\n            <td>王五</td>\n            <td>付费用户</td>\n            <td>手机号码</td>\n            <td>zhangsan@12.com</td>\n            <td>17612137718</td>\n            <td>2009-9-9</td>\n            <td>132312</td>\n        </tr>\n    </table>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vip-management/vip-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VipManagementComponent = (function () {
    function VipManagementComponent() {
    }
    VipManagementComponent.prototype.ngOnInit = function () {
    };
    VipManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vip-management',
            template: __webpack_require__("../../../../../src/app/vip-management/vip-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vip-management/vip-management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VipManagementComponent);
    return VipManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vip-modify-password/vip-modify-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vip-modify-password/vip-modify-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n<table class=\"table\">\n    <tr> <td>账号:</td><td>zhangsan</td> </tr>\n    <tr> <td>昵称:</td><td>张三</td></tr>\n    <tr><td>新密码:</td><td><input type=\"password\"></td></tr>\n    <tr> <td>登录密码:</td><td><input type=\"password\"></td> </tr>\n    <tr><td></td><td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vip-modify-password/vip-modify-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipModifyPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VipModifyPasswordComponent = (function () {
    function VipModifyPasswordComponent() {
    }
    VipModifyPasswordComponent.prototype.ngOnInit = function () {
    };
    VipModifyPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vip-modify-password',
            template: __webpack_require__("../../../../../src/app/vip-modify-password/vip-modify-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vip-modify-password/vip-modify-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VipModifyPasswordComponent);
    return VipModifyPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vip-open/vip-open.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vip-open/vip-open.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\"background: #fff;border: 1px solid #f4f4f4;margin-top: 20px;padding: 30px 0 20px;position: relative;top: 50px;\" id=\"passwordChange\">\n  <table  class=\"table\">\n    <tr> <td>账号:</td><td>zhangsan</td> </tr>\n    <tr> <td>昵称:</td><td>张三</td></tr>\n    <tr><td>商品列表:</td><td>\n      <select>\n        <option>请选择</option>\n        <option>月度会员</option>\n        <option>季度会员</option>\n        <option>年度会员</option>\n      </select>\n    </td></tr>\n    <tr> <td>登录密码:</td><td><input type=\"password\"></td> </tr>\n    <tr>\n      <td></td>\n      <td><input class=\"sibmit\" type=\"button\" value=\"确定\"></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vip-open/vip-open.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipOpenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VipOpenComponent = (function () {
    function VipOpenComponent() {
    }
    VipOpenComponent.prototype.ngOnInit = function () {
    };
    VipOpenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vip-open',
            template: __webpack_require__("../../../../../src/app/vip-open/vip-open.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vip-open/vip-open.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VipOpenComponent);
    return VipOpenComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map