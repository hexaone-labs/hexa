"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[2745],{

/***/ 2745:
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* reexport safe */ _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule),
/* harmony export */   "authRoutes": () => (/* reexport safe */ _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__.authRoutes)
/* harmony export */ });
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ 28672);
/* harmony import */ var _lib_lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lib.routes */ 78410);



/***/ }),

/***/ 28672:
/*!******************************************!*\
  !*** ./libs/auth/src/lib/auth.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib.routes */ 78410);
/* harmony import */ var _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/login/login-page.component */ 86491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_lib_routes__WEBPACK_IMPORTED_MODULE_0__.authRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 86491:
/*!********************************************************************!*\
  !*** ./libs/auth/src/lib/containers/login/login-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hexa/token-injection */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







function LoginPageComponent_ion_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_15_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_17_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.connectWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r2.isLoaderVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r2.isLoaderVisible$) === true ? "Loading..." : "Connect");
  }
}
function LoginPageComponent_ion_button_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ion_button_108_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.disconnect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginPageComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_ng_template_110_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.connectWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r5.isLoaderVisible$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx_r5.isLoaderVisible$) === true ? "Loading..." : "Get Started");
  }
}
class LoginPageComponent {
  constructor(loaderService, _authService, _router) {
    this.loaderService = loaderService;
    this._authService = _authService;
    this._router = _router;
    this.title = 'Login Page ';
    this.account$ = this._authService.account$;
    this.isLoaderVisible$ = this.loaderService.isVisible$;
  }
  connectWallet() {
    var _this = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loaderService.setStatus(true);
      const isConnected = yield _this._authService.connect();
      if (isConnected) {
        // const profil = await this._datastoreService.getProfileFromCeramic();
        // console.log('[INFO] Ceramic profil', profil);
        _this._router.navigate(['/d']);
      }
      _this.loaderService.setStatus(false);
    })();
  }
  disconnect() {
    var _this2 = this;
    return (0,_Users_dev_fazio_Nicolas_Fazio_repos_hexa_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loaderService.setStatus(true);
      _this2._authService.disconnect();
      _this2.loaderService.setStatus(false);
    })();
  }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_LOADER_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]((0,_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.getInjectionToken)(_hexa_token_injection__WEBPACK_IMPORTED_MODULE_1__.TOKENS_NAME.APP_WEB3AUTH_SERVICE)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["hexa-login-page"]],
  decls: 125,
  vars: 8,
  consts: [[1, "ion-no-padding"], ["lines", "none", 1, "logo-header"], ["slot", "start", "src", "./assets/images/logo.svg", "size", "large"], ["lines", "none", 1, "link-header"], ["rel", "noopener", "target", "_blank", "href", "https://github.com/hexaone-labs/hexa"], ["color", "light", "slot", "start", "name", "logo-github"], [1, "header-landing"], ["rel", "noopener", "target", "_blank", "href", "https://ipfs.io"], ["name", "open-outline", "size", "small"], ["size", "large", 3, "click", 4, "ngIf", "ngIfElse"], ["auth", ""], [1, "ion-text-start"], ["size-xs", "12", "size-md", "12", "size-lg", "4", 1, "ion-padding-horizontal", "ion-padding-bottom"], [1, "sticky", "ion-padding-top", "ion-padding-horizontal", "ion-padding-bottom"], ["color", "primary ion-text-uppercase"], ["size-xs", "12", "size-md", "12", "size-lg", "8"], [1, "call-list", "ion-no-padding", "ion-padding-top"], [1, "ion-padding-horizontal"], ["size-xs", "12", "size-sm", "12", "size-md", "6"], [1, "ion-text-start", "features"], [1, "call-action"], ["size-xs", "12", "size-md", "8", "size-lg", "8"], ["size-xs", "12", "size-md", "4", "size-lg", "4", 1, "ion-padding-vertical"], ["auth2", ""], [1, "footer"], ["href", "https://github.com/hexaone-labs", "target", "_blank", "rel", "noopener"], ["href", "https://ipfs.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-ipfs.svg"], ["href", "http://filecoin.io", "target", "_blank", "rel", "noopener"], ["src", "./assets/images/logo-filecoin.svg"], ["size", "large", 3, "click"], ["size", "large", 3, "disabled", "click"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "HEXA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Develop and manage your digital datas with blockchain technology");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Censorship-resistant, tamper-proof and privacy compliant cloud solution, open-source, fully decentralized and built on top of InterPlanetary File System (IPFS) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginPageComponent_ion_button_15_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginPageComponent_ng_template_17_Template, 4, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 11)(20, "ion-grid", 0)(21, "ion-row", 0)(22, "ion-col", 12)(23, "div", 13)(24, "ion-text", 14)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Everything you need ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " All-in-one platform ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Store data on IPFS using free cross-platform application client. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-col", 15)(32, "ion-grid", 16)(33, "ion-row", 17)(34, "ion-col", 18)(35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Zero-knowledge architecture ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Hexa is built on zero-knowledge architecture, meaning that we know nothing about what you do in app. Not only is this more secure, but it also gives you complete censorship-resistant and privacy compliant solution. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-col", 18)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Access data securely wherever you are ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Store files securely on IPFS and access them from anywhere. Hexa is a fully decentralized, tamper-proof platform and hosted on IPFS, meaning that you can access your data from any device, anywhere in the world. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-col", 18)(45, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Secure sharing datas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Share a copy of your file to anyone wusing dedicated upload page. Hexa allow you to share with others ERC20 address a encrypted copy of your file with custom access controls and permission settings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-col", 18)(50, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Free and Open-source");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Hexa is free and open-source, meaning that you can audit the code and be sure that your data is safe. You can also download the source code and run it on your own server or contribute to the project and help us make Hexa even better. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "section", 19)(55, "ion-grid", 0)(56, "ion-row", 0)(57, "ion-col", 12)(58, "div", 13)(59, "ion-text", 14)(60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Features ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Choose your features ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Customise your experience with Hexa and choose which features you want to use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ion-col", 15)(67, "ion-grid", 16)(68, "ion-row", 17)(69, "ion-col", 18)(70, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Get clean and simple welcome page with custom background image and many widgets that you can use to display your datas as you want. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "ion-col", 18)(75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Drive");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Store files securely on IPFS, access them from anywhere, share them with others with custom access controls and permission settings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "ion-col", 18)(80, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Wallet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Hexa is EVM chain support so you can use Hexa wallet to manage your crypto assets and NFTs. Send and receive payments, swape tokens and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "ion-col", 18)(85, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Calendar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Keep track of your events, set reminders, schedule meetings and more. An anlernative to Google Calendar, free, open-source, censorship-resistant privacy compliant that work on any device. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "ion-col", 18)(90, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Write down your thoughts and ideas, keep track of your tasks and more without any third-party tracking. Your notes are encrypted with access controls condition and stored on IPFS, so you can securely access them from anywhere. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "ion-col", 18)(95, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "and more...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Hexa provide many other features like messaging system with end-to-end encryption, dedicated Web Page hosted to IPFS to enforce censorship-resistant, tamper-proof and privacy compliant of your datas. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 20)(100, "ion-grid", 0)(101, "ion-row")(102, "ion-col", 21)(103, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Ready to be a part of the future? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Get started now and enjoy the benefits of decentralized web. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "ion-col", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, LoginPageComponent_ion_button_108_Template, 2, 0, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](109, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, LoginPageComponent_ng_template_110_Template, 4, 6, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 24)(113, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Build by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "HEXA ONE Labs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, ". Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "ion-icon", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " IPFS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "ion-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " Filecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](111);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx.account$))("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](109, 6, ctx.account$))("ngIfElse", _r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --color: #fff;\n  --background: url('bg.897829dd3b531ad0.jpeg') transparent no-repeat left top / cover;\n  position: relative;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 4rem;\n  font-size: 0.8rem;\n  --background: transparent;\n  --color: #fff;\n  --font-size: 1.5rem;\n  font-weight: 700;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 2rem;\n  --background: transparent;\n  --color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 8rem 5rem 2rem;\n  min-height: 100vh;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  line-height: 5.8rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-top: 0;\n  text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background-color: #272747;\n  color: #fff;\n  padding: 10rem 3rem;\n  margin-top: 0rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n  width: 100%;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  line-height: 4.5rem;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.618rem;\n  line-height: 1.618rem;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .call-list[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  margin-bottom: 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section.features[_ngcontent-%COMP%] {\n  background-color: #14162d;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background: #14162d;\n  padding: 0 4rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--ion-color-medium-shade);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-medium);\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  opacity: 0.8;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%] {\n  background-color: #1c203a;\n  padding: 8rem 5rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 3rem;\n  margin: 0 0 1rem;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .logo-header[_ngcontent-%COMP%] {\n    left: 0.5rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .link-header[_ngcontent-%COMP%] {\n    right: 1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 2.8rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   div.header-landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 4rem 0rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.sticky[_ngcontent-%COMP%] {\n    position: static;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 2.5rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%] {\n    padding: 4rem 2rem;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .call-action[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  [_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9OaWNvbGFzJTIwRmF6aW8vcmVwb3MvaGV4YS9saWJzL2F1dGgvc3JjL2xpYi9jb250YWluZXJzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURJSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURPTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDTFI7QURRTTtFQUNFLGVBQUE7QUNOUjtBRFNNO0VBQ0UsaUJBQUE7QUNQUjtBRFdNO0VBQ0UsV0FBQTtBQ1RSO0FEY0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDWk47QURjTTtFQUVFLGdCQUFBO0VBQ0EsU0FBQTtBQ1pSO0FEZU07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNiUjtBRGdCTTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2RSO0FEaUJNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDZlI7QURtQlE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNqQlY7QURzQkk7RUFDRSx5QkFBQTtBQ3BCTjtBRHVCSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ3JCTjtBRHVCTTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ3JCUjtBRHVCTTtFQUNFLHFCQUFBO0VBQ0Esb0NBQUE7QUNyQlI7QUR1QlE7RUFDRSw4QkFBQTtBQ3JCVjtBRHlCTTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ3ZCUjtBRDJCSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUN6Qk47QUQyQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3pCUjtBRDRCTTtFQUNFLFNBQUE7QUMxQlI7QUQ2Qk07RUFDRSxpQkFBQTtBQzNCUjtBRCtCSTtFQUdFO0lBQ0UsWUFBQTtFQy9CTjtFRGtDSTtJQUNFLFdBQUE7RUNoQ047RURtQ0k7SUFDRSxlQUFBO0VDakNOO0VEbUNNO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDakNSO0VEbUNNO0lBQ0UsaUJBQUE7RUNqQ1I7RURzQ0k7SUFDRSxrQkFBQTtFQ3BDTjtFRHNDTTtJQUNFLGdCQUFBO0VDcENSO0VEdUNNO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ3JDUjtFRDBDSTtJQUNFLGtCQUFBO0VDeENOO0VEMENNO0lBQ0UsZ0JBQUE7RUN4Q1I7RUQ0Q0k7SUFDRSxlQUFBO0VDMUNOO0FBQ0YiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vYXBwcy9icm93c2VyL3NyYy9hc3NldHMvaW1hZ2VzL2JnLmpwZWcpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCBsZWZ0IHRvcCAgLyBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLmxvZ28taGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIGxlZnQ6IDRyZW07XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiAjZmZmO1xuICAgICAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5saW5rLWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDFyZW07XG4gICAgICByaWdodDogMnJlbTtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHBhZGRpbmc6IDhyZW0gNXJlbSAycmVtO1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNS44cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAvLyB0ZXh0LXNoYWRvdzogNnB4IDJweCAycHggIzMwNjRmZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICB9XG4gICAgXG4gICAgICAqIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICBzZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3NDc7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDEwcmVtIDNyZW07XG4gICAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBkaXYuc3RpY2t5IHtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDVyZW07XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjYxOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjE4cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC5jYWxsLWxpc3Qge1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlY3Rpb24uZmVhdHVyZXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTYyZDtcbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxNDE2MmQ7XG4gICAgICBwYWRkaW5nOiAwIDRyZW07XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsbC1hY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjAzYTtcbiAgICAgIHBhZGRpbmc6IDhyZW0gNXJlbTtcblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJ1bGVzIGZvciBtb2JpbGVcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIFxuICAgICAgXG4gICAgICAubG9nby1oZWFkZXIge1xuICAgICAgICBsZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5saW5rLWhlYWRlciB7XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcblxuICAgICAgICBkaXYuc3RpY2t5IHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICAuY2FsbC1hY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfSBcblxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vYXBwcy9icm93c2VyL3NyYy9hc3NldHMvaW1hZ2VzL2JnLmpwZWcpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCBsZWZ0IHRvcCAvIGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCBpb24tY29udGVudCAubG9nby1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogNHJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICNmZmY7XG4gIC0tZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46aG9zdCBpb24tY29udGVudCAubG9nby1oZWFkZXIgaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCAubGluay1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6ICNmZmY7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDhyZW0gNXJlbSAycmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDUuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBwIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA3cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nICoge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3Mjc0NztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcmVtIDNyZW07XG4gIG1hcmdpbi10b3A6IDByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gZGl2LnN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1cmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBsaW5lLWhlaWdodDogNC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMS42MThyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjYxOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiAuY2FsbC1saXN0IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uLmZlYXR1cmVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTYyZDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTQxNjJkO1xuICBwYWRkaW5nOiAwIDRyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAwLjg7XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDNhO1xuICBwYWRkaW5nOiA4cmVtIDVyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gaDIge1xuICBmb250LXNpemU6IDNyZW07XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIHAge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gaW9uLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gICAgbGVmdDogMC41cmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IC5saW5rLWhlYWRlciB7XG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNHJlbSAwcmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gZGl2LnN0aWNreSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiB7XG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL05pY29sYXMlMjBGYXppby9yZXBvcy9oZXhhL2xpYnMvYXV0aC9zcmMvbGliL2NvbnRhaW5lcnMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0ZOO0FES0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSE47QURLTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRE9NO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNMUjtBRFFNO0VBQ0UsZUFBQTtBQ05SO0FEU007RUFDRSxpQkFBQTtBQ1BSO0FEV007RUFDRSxXQUFBO0FDVFI7QURjSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNaTjtBRGNNO0VBRUUsZ0JBQUE7RUFDQSxTQUFBO0FDWlI7QURlTTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2JSO0FEZ0JNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZFI7QURpQk07RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUNmUjtBRG1CUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2pCVjtBRHNCSTtFQUNFLHlCQUFBO0FDcEJOO0FEdUJJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDckJOO0FEdUJNO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FDckJSO0FEdUJNO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtBQ3JCUjtBRHVCUTtFQUNFLDhCQUFBO0FDckJWO0FEeUJNO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDdkJSO0FEMkJJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ3pCTjtBRDJCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDekJSO0FENEJNO0VBQ0UsU0FBQTtBQzFCUjtBRDZCTTtFQUNFLGlCQUFBO0FDM0JSO0FEK0JJO0VBR0U7SUFDRSxZQUFBO0VDL0JOO0VEa0NJO0lBQ0UsV0FBQTtFQ2hDTjtFRG1DSTtJQUNFLGVBQUE7RUNqQ047RURtQ007SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNqQ1I7RURtQ007SUFDRSxpQkFBQTtFQ2pDUjtFRHNDSTtJQUNFLGtCQUFBO0VDcENOO0VEc0NNO0lBQ0UsZ0JBQUE7RUNwQ1I7RUR1Q007SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VDckNSO0VEMENJO0lBQ0Usa0JBQUE7RUN4Q047RUQwQ007SUFDRSxnQkFBQTtFQ3hDUjtFRDRDSTtJQUNFLGVBQUE7RUMxQ047QUFDRjtBREFBLDRxWUFBNHFZIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wICAvIGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAubG9nby1oZWFkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxcmVtO1xuICAgICAgbGVmdDogNHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgICAtLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpbmstaGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXJlbTtcbiAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtIDJyZW07XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1LjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIC8vIHRleHQtc2hhZG93OiA2cHggMnB4IDJweCAjMzA2NGZmO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgfVxuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgIH1cbiAgICBcbiAgICAgICoge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIHNlY3Rpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3Mjc0NztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogMTByZW0gM3JlbTtcbiAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGRpdi5zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogNXJlbTtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNjE4cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42MThyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLmNhbGwtbGlzdCB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VjdGlvbi5mZWF0dXJlcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNjJkO1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzE0MTYyZDtcbiAgICAgIHBhZGRpbmc6IDAgNHJlbTtcblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYWxsLWFjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMDNhO1xuICAgICAgcGFkZGluZzogOHJlbSA1cmVtO1xuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcnVsZXMgZm9yIG1vYmlsZVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgXG4gICAgICBcbiAgICAgIC5sb2dvLWhlYWRlciB7XG4gICAgICAgIGxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgLmxpbmstaGVhZGVyIHtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIGRpdi5oZWFkZXItbGFuZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNHJlbSAwcmVtO1xuXG4gICAgICAgIGRpdi5zdGlja3kge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC5jYWxsLWFjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9IFxuXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hcHBzL2Jyb3dzZXIvc3JjL2Fzc2V0cy9pbWFnZXMvYmcuanBlZykgdHJhbnNwYXJlbnQgbm8tcmVwZWF0IGxlZnQgdG9wIC8gY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICBsZWZ0OiA0cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1mb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5sb2dvLWhlYWRlciBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5saW5rLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMnJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogOHJlbSA1cmVtIDJyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGgxIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsaW5lLWhlaWdodDogNS44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIHAge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaW9uLWljb24ge1xuICBmb250LXNpemU6IDdyZW07XG59XG46aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgKiB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgZGl2LmhlYWRlci1sYW5kaW5nIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzQ3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTByZW0gM3JlbTtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBkaXYuc3RpY2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDVyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIGxpbmUtaGVpZ2h0OiA0LjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIGgzIHtcbiAgZm9udC1zaXplOiAxLjYxOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjE4cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCBpb24tY29udGVudCBzZWN0aW9uIC5jYWxsLWxpc3QgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24uZmVhdHVyZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNjJkO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNDE2MmQ7XG4gIHBhZGRpbmc6IDAgNHJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciBpb24taWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIwM2E7XG4gIHBhZGRpbmc6IDhyZW0gNXJlbTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG46aG9zdCBpb24tY29udGVudCAuY2FsbC1hY3Rpb24gcCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jYWxsLWFjdGlvbiBpb24tYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxvZ28taGVhZGVyIHtcbiAgICBsZWZ0OiAwLjVyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmxpbmstaGVhZGVyIHtcbiAgICByaWdodDogMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBkaXYuaGVhZGVyLWxhbmRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IGRpdi5oZWFkZXItbGFuZGluZyBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuICA6aG9zdCBpb24tY29udGVudCBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDByZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgc2VjdGlvbiBkaXYuc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIDpob3N0IGlvbi1jb250ZW50IHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmNhbGwtYWN0aW9uIGlvbi1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgOmhvc3QgaW9uLWNvbnRlbnQgLmZvb3RlciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 78410:
/*!*****************************************!*\
  !*** ./libs/auth/src/lib/lib.routes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authRoutes": () => (/* binding */ authRoutes)
/* harmony export */ });
/* harmony import */ var _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login/login-page.component */ 86491);

const authRoutes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: _containers_login_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent
}];

/***/ })

}]);
//# sourceMappingURL=2745.7bf241338269e54b.js.map