(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/vipAppIy/phoneBox/phoneBox"],{

/***/ 71:
/*!**********************************************************************************!*\
  !*** D:/ming/项目之外/uni/main.js?{"page":"pages%2FvipAppIy%2FphoneBox%2FphoneBox"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _phoneBox = _interopRequireDefault(__webpack_require__(/*! ./pages/vipAppIy/phoneBox/phoneBox.vue */ 72));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_phoneBox.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 72:
/*!*************************************************************!*\
  !*** D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phoneBox.vue?vue&type=template&id=4e8197e4&scoped=true& */ 73);
/* harmony import */ var _phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneBox.vue?vue&type=script&lang=js& */ 75);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phoneBox.vue?vue&type=style&index=0&id=4e8197e4&scoped=true&lang=css& */ 77);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4e8197e4",
  null,
  false,
  _phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/*!********************************************************************************************************!*\
  !*** D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=template&id=4e8197e4&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phoneBox.vue?vue&type=template&id=4e8197e4&scoped=true& */ 74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_template_id_4e8197e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 74:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=template&id=4e8197e4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 75:
/*!**************************************************************************************!*\
  !*** D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phoneBox.vue?vue&type=script&lang=js& */ 76);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




































var _all = __webpack_require__(/*! ../../../utils/all.js */ 80);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var APP = getApp(); // console.log(APP)
var _default = { data: function data() {return { wxPhoneNumber: true, codeTime: 0 };}, created: function created() {}, methods: { getPhoneNumber: function getPhoneNumber(e) {var _this = this; //直接获取微信电话
      if (e.detail.encryptedData) {wx.showLoading({ mask: true });var phone = '',extraInfo = {};if (global.inviteID) {extraInfo['inviter'] = global.inviteID;}if (global.cupidcode) {extraInfo['cupidcode'] = global.cupidcode;}this.request({ path: '/wxapp/phone/aes', method: 'POST', data: Object.assign({ encryptedData: e.detail.encryptedData, iv: e.detail.iv }, extraInfo) }).then(function (res) {APP.globalData.userInfo = _objectSpread({}, APP.globalData.userInfo, {
            token: res.token,
            user: res.user,
            userId: res.userId });

          // 如果还没开始消息请求，则开启消息请求
          if (!APP.noticeInit && res.user.id && res.user.id > 0) {
            APP.noticeInit = true;
            notice.start();
          }
          phone = res.wxPhoneData.phoneNumber;
          return _this.checkPhoneIsNew(phone); // 同时，需要检查一下手机号是否是新的
        }).then(function (res) {
          if (res) {
            wx.hideLoading();
            _this._phone = phone;
            _this.exitComponent();
            // 刷新一下vip状态
            _this.refreshVipStatus();
          } else {
            wx.hideLoading();
            wx._showToast('该手机号已被使用！');
          }
        }).catch(global.onError('获取手机号失败, 请手动填写!'));
      }
    },
    // 手动输入的电话号码
    phoneHandler: function phoneHandler(e) {
      this._phone = e.detail.value;
    },

    // 验证码
    codeHandler: function codeHandler(e) {
      this._code = e.detail.value;
    },
    // 提交校验验证码
    checkPhoneHandler: function checkPhoneHandler() {var _this2 = this;
      var phone = this._phone,extraInfo = {};
      if (!/^1\d{10}$/.test(phone)) {
        (0, _all.toastShow)('请填写正确的手机号!');
        return;
      } else if (!/\d{4}/.test(this._code)) {
        (0, _all.toastShow)('请填写正确的验证码!');
        return;
      }

      if (global.inviteID) {//媒人推荐
        extraInfo['inviter'] = APP.globalData.inviteID.inviteID;
      }
      if (global.cupidcode) {
        extraInfo['cupidcode'] = APP.globalData.inviteID.cupidcode;
      }
      this.request({
        path: '/user/Public/signin',
        method: 'POST',
        data: Object.assign({
          phone: phone,
          code: this._code },
        extraInfo) }).
      then(function (res) {
        // 同时，需要检查一下手机号是否是新的
        APP.globalData.userInfo = _objectSpread({},
        APP.globalData.userInfo, {
          token: res.token,
          user: res.user,
          userId: res.userId });

        console.log(APP.globalData.userInfo);
        // 如果还没开始消息请求，则开启消息请求
        // if (!APP.noticeInit && res.user.id && res.user.id > 0) {
        //   APP.noticeInit = true;
        //   notice.start();
        // }
        (0, _all.toastShow)('验证通过!');
        // 刷新一下vip状态
        _this2.refreshVipStatus();
        _this2.exitComponent();
      }).catch(function (err) {
        if (err.msg === '验证码不正确!') {
          (0, _all.toastShow)(err.msg);
        } else {
          (0, _all.toastShow)('获取验证码失败，请稍后重试!');
        }
      });
    },
    // 检查该手机号是否使用过了
    checkPhoneIsNew: function checkPhoneIsNew(phone) {
      return this.request({
        path: '/member/baseinfo/checkAuthPhone',
        method: 'POST',
        data: {
          phone: phone } });


    },
    // 获取验证码
    getCodeHandler: function getCodeHandler() {var _this3 = this;
      if (this.codeTime === 0) {
        var phone = this._phone;
        if (!/^1\d{10}$/.test(phone)) {
          (0, _all.toastShow)("请输入正确手机号");
          return;
        }
        (0, _all.loadShow)("获取中~");
        // 获取验证码之前需要先校验一下该手机号是否有被使用过
        this.checkPhoneIsNew(phone).then(function (res) {
          if (res) {
            return _this3.request({ //发送验证码
              path: '/user/phoneVerify/sendCode',
              method: 'POST',
              data: {
                phone: phone } }).

            then(function () {
              uni.hideLoading();
              _this3.codeTime = 90;
              _this3.endTime = Date.now() + 90000;
              _this3.startInterval();
            });
          } else {
            uni.hideLoading();
            (0, _all.toastShow)('该手机号已被使用！');
            return;
          }
        }).catch(function (err) {(0, _all.toastShow)("请求验证码失败，请检查号码格式!");});
      }
    },
    // 验证码倒计时
    startInterval: function startInterval() {var _this4 = this;
      clearInterval(this.intervalKey);
      this.intervalKey = setInterval(function () {
        var codeTime = _this4.codeTime;
        if (codeTime - 1 <= 0) {
          clearInterval(_this4.intervalKey);
        }
        // this.setData({
        //   codeTime: codeTime <= 0 ? 0 : codeTime - 1
        // });
        _this4.codeTime = codeTime <= 0 ? 0 : codeTime - 1;
      }, 1000);
    },
    boxToggleHandler: function boxToggleHandler() {
      this.wxPhoneNumber = !this.wxPhoneNumber;
    },
    // 更新一下会员状态
    refreshVipStatus: function refreshVipStatus() {
      this.request({
        path: '/member/baseinfo/isMember' }).
      then(function (res) {
        APP.globalData.vipInfo = _objectSpread({}, res);
      });
    },
    exitComponent: function exitComponent() {
      // 这里将手机号码保存，第二次进入不显示手机号码弹窗
      uni.setStorage({ key: 'auth_phone', data: '' + this._phone });
      // this.triggerEvent('closePhoneBox', { phone: this._phone }, {});
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 77:
/*!**********************************************************************************************************************!*\
  !*** D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=style&index=0&id=4e8197e4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./phoneBox.vue?vue&type=style&index=0&id=4e8197e4&scoped=true&lang=css& */ 78);
/* harmony import */ var _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_uni_app_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_phoneBox_vue_vue_type_style_index_0_id_4e8197e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ming/项目之外/uni/pages/vipAppIy/phoneBox/phoneBox.vue?vue&type=style&index=0&id=4e8197e4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[71,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/vipAppIy/phoneBox/phoneBox.js.map