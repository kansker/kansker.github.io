(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_crypto_Wallet_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["heading", "viewers", "colClasses", "customClasses", "trade", "icon", "color"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showPassword: false,
      currOne: 'Bitcoin',
      currTwo: 'Ethereum',
      currency: ['Bitcoin', 'Ethereum', 'EOS', 'Litecoin'],
      payMethodInitial: "Debit Card",
      paymentMethod: ['Debit Card', 'PayPal', 'Bank Transfer', 'Credit Cards'],
      active: null,
      tabs: [{
        icon: "zmdi zmdi-shopping-cart",
        title: "Buy"
      }, {
        icon: "ti-money",
        title: "Sell"
      }, {
        icon: "zmdi zmdi-square-right",
        title: "Transfer"
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    next: function next() {
      var active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    },
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      panel: 0,
      lorem: "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.",
      walletData: [{
        icon: "cc BTC primary--text",
        iconForWallet: "cc BTC-alt",
        title: "Bitcoin"
      }, {
        icon: "cc ETH primary--text",
        iconForWallet: "cc ETH-alt",
        title: "Ethereum"
      }, {
        icon: "cc LTC primary--text",
        iconForWallet: "cc LTC-alt",
        title: "Litecoin"
      }, {
        icon: "cc ZEC-alt primary--text",
        iconForWallet: "cc ZEC-alt",
        title: "Zcash"
      }]
    };
  },
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_StatsCardV8_StatsCardV8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/StatsCardV8/StatsCardV8 */ "./resources/js/components/StatsCardV8/StatsCardV8.vue");
/* harmony import */ var Components_Widgets_ExpandableTableV2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Widgets/ExpandableTableV2 */ "./resources/js/components/Widgets/ExpandableTableV2.vue");
/* harmony import */ var Components_Widgets_BankDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Widgets/BankDetails */ "./resources/js/components/Widgets/BankDetails.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StatsCardV8: Components_StatsCardV8_StatsCardV8__WEBPACK_IMPORTED_MODULE_0__.default,
    ExpandableTableV2: Components_Widgets_ExpandableTableV2__WEBPACK_IMPORTED_MODULE_1__.default,
    BankDetails: Components_Widgets_BankDetails__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      icons: ["cc BTC primary--text", "cc ETH success--text", "cc LTC error--text", "cc ZEC-alt info--text"],
      cardData: [{
        name: "Bitcoin",
        viewers: "+41",
        trade: "30",
        icon: "cc BTC",
        color: "primary"
      }, {
        name: "Ethereum",
        viewers: "+4381",
        trade: "60",
        icon: "cc ETH",
        color: "success"
      }, {
        name: "Litecoin",
        viewers: "+2611",
        trade: "80",
        icon: "cc LTC",
        color: "warning"
      }, {
        name: "Zcash",
        viewers: "+611",
        trade: "40",
        icon: "cc ZEC",
        color: "error"
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/StatsCardV8/StatsCardV8.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/StatsCardV8/StatsCardV8.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatsCardV8.vue?vue&type=template&id=7969df18& */ "./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18&");
/* harmony import */ var _StatsCardV8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatsCardV8.vue?vue&type=script&lang=js& */ "./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StatsCardV8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__.render,
  _StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/StatsCardV8/StatsCardV8.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/BankDetails.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/BankDetails.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BankDetails.vue?vue&type=template&id=580227cb& */ "./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb&");
/* harmony import */ var _BankDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BankDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BankDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__.render,
  _BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/BankDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/ExpandableTableV2.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Widgets/ExpandableTableV2.vue ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableTableV2.vue?vue&type=template&id=4c36aa0a& */ "./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a&");
/* harmony import */ var _ExpandableTableV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableTableV2.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ExpandableTableV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/ExpandableTableV2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/crypto/Wallet.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/crypto/Wallet.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wallet.vue?vue&type=template&id=32371738& */ "./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738&");
/* harmony import */ var _Wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wallet.vue?vue&type=script&lang=js& */ "./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__.render,
  _Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/crypto/Wallet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCardV8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatsCardV8.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCardV8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BankDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BankDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BankDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableTableV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExpandableTableV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableTableV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wallet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCardV8_vue_vue_type_template_id_7969df18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StatsCardV8.vue?vue&type=template&id=7969df18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18&");


/***/ }),

/***/ "./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankDetails_vue_vue_type_template_id_580227cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BankDetails.vue?vue&type=template&id=580227cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb&");


/***/ }),

/***/ "./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandableTableV2_vue_vue_type_template_id_4c36aa0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExpandableTableV2.vue?vue&type=template&id=4c36aa0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a&");


/***/ }),

/***/ "./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_template_id_32371738___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Wallet.vue?vue&type=template&id=32371738& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StatsCardV8/StatsCardV8.vue?vue&type=template&id=7969df18& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-col", { class: _vm.colClasses }, [
    _c(
      "div",
      { staticClass: "app-card white--text", class: _vm.color },
      [
        _c("v-card-text", { staticClass: "wallet-stats-card" }, [
          _c("div", [
            _c(
              "div",
              {
                staticClass:
                  "mb-2 d-custom-flex justify-start align-items-center"
              },
              [
                _c("span", { staticClass: "font-md d-inline-block" }, [
                  _c("i", {
                    staticClass: "mr-2 white--text font-lg",
                    class: _vm.icon,
                    attrs: { title: "BCN" }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "d-inline-block font-md" }, [
                  _vm._v(_vm._s(_vm.heading))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-custom-flex justify-space-between align-items-start mb-4"
              },
              [
                _c("span", [_vm._v(_vm._s(_vm.viewers))]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    _vm._s(_vm.$t("message.trade")) +
                      " : " +
                      _vm._s(_vm.trade) +
                      "%"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-2" },
              [
                _c("v-progress-linear", {
                  staticClass: "my-1",
                  attrs: { value: _vm.trade, height: "3", color: "white" }
                })
              ],
              1
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BankDetails.vue?vue&type=template&id=580227cb& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", sm: "6", md: "6", lg: "8" } }, [
            _c("div", [
              _c("div", { staticClass: "bank-detail mb-4" }, [
                _c("div", { staticClass: "mb-4" }, [
                  _c("h6", { staticClass: "mb-0" }, [_vm._v("Rich Earnand")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c("h5", [
                    _c("span", { staticClass: "fw-normal" }, [
                      _c("i", {
                        staticClass:
                          "zmdi zmdi-balance primary--text mr-3 font-lg"
                      }),
                      _vm._v("Central Bank Of Lorem")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h6", [
                    _c("span", { staticClass: "success--text" }, [
                      _c("i", {
                        staticClass:
                          "zmdi zmdi-check success--text mr-3 font-lg"
                      }),
                      _vm._v("KYC Verified")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fw-bold font-sm" }, [
                _c("div", { staticClass: "mb-2" }, [
                  _vm._v("Account : "),
                  _c("span", { staticClass: "fw-normal" }, [
                    _vm._v("XXXXXXXXX73823")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v("Phone : "),
                  _c("span", { staticClass: "fw-normal" }, [
                    _vm._v("XXXXXXXX1234")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12", sm: "6", md: "6", lg: "4" } }, [
            _c("div", { staticClass: "price-wrap" }, [
              _c("div", [
                _c("div", { staticClass: "text-right" }, [
                  _c("h4", { staticClass: "price" }, [_vm._v("$9783862")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "button-wrap text-right" }, [
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c(
                        "v-btn",
                        { staticClass: "primary mx-0 mt-0 price-btn-wrap" },
                        [_vm._v("Withdraw")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-4" },
                    [
                      _c(
                        "v-btn",
                        { staticClass: "info mx-0 mt-0 price-btn-wrap" },
                        [_vm._v("Deposit")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "error mx-0 mt-0 price-btn-wrap",
                          attrs: {
                            to:
                              "/" +
                              (_vm.getCurrentAppLayoutHandler() +
                                "/ecommerce/cards")
                          }
                        },
                        [
                          _vm._v(
                            "\n                         Saved Cards\n                      "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sec-title mb-4" }, [
      _c("h4", [_vm._v("Bank Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ExpandableTableV2.vue?vue&type=template&id=4c36aa0a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-expansion-panels",
    {
      model: {
        value: _vm.panel,
        callback: function($$v) {
          _vm.panel = $$v
        },
        expression: "panel"
      }
    },
    _vm._l(_vm.walletData, function(data, index) {
      return _c(
        "v-expansion-panel",
        { key: index, attrs: { "expand-icon": "mdi-menu-down" } },
        [
          _c("v-expansion-panel-header", [
            _c("div", [
              _c("h4", { staticClass: "mb-0" }, [
                _c("span", [
                  _c("i", { staticClass: "font-lg mr-2", class: data.icon }),
                  _vm._v(
                    "\n                  " +
                      _vm._s(data.title) +
                      "\n               "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-expansion-panel-content",
            [
              _c(
                "v-container",
                { staticClass: "grid-list-xl", attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "align-items-center" },
                    [
                      _c("v-col", { attrs: { cols: "12", md: "7" } }, [
                        _c(
                          "div",
                          [
                            _c("div", { staticClass: "mb-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-custom-flex align-items-center py-2"
                                },
                                [
                                  _c("div", { staticClass: "icon-wrap" }, [
                                    _c("i", {
                                      staticClass:
                                        "zmdi zmdi-money-box mr-3 font-lg primary--text"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("h6", { staticClass: "mb-0" }, [
                                      _vm._v("Received Amount")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "font-sm" }, [
                                      _vm._v("+ 13247837654")
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-custom-flex align-items-center py-2"
                                },
                                [
                                  _c("div", { staticClass: "icon-wrap" }, [
                                    _c("i", {
                                      staticClass:
                                        "zmdi zmdi-card mr-3 font-lg success--text"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("h6", { staticClass: "mb-0" }, [
                                      _vm._v("Sent Amount")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "font-sm" }, [
                                      _vm._v("- 13247837654")
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-custom-flex align-items-center pt-2"
                                },
                                [
                                  _c("div", { staticClass: "icon-wrap" }, [
                                    _c("i", {
                                      staticClass:
                                        "zmdi zmdi-balance mr-3 font-lg warning--text"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("h6", { staticClass: "mb-0" }, [
                                      _vm._v("Total Amount")
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "font-sm" }, [
                                      _vm._v("+ 13247837654")
                                    ])
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              { staticClass: "primary ml-0 mb-sm-0 mb-3" },
                              [_vm._v("Withdraw")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              { staticClass: "info m-0 ml-4 mb-sm-0 mb-3" },
                              [_vm._v("Deposit")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "12", md: "5" } }, [
                        _c(
                          "div",
                          [
                            _c("h4", [_vm._v("Wallet Address")]),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { staticClass: "px-0", attrs: { cols: "8" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: data.title,
                                        value: "AXB35H24ISDJHCISDT",
                                        type: "text",
                                        min: "1",
                                        "prepend-inner-icon": data.iconForWallet
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("img", {
                              attrs: {
                                src: "/static/img/gene-qr.jpg",
                                width: "150",
                                height: "150"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crypto/Wallet.vue?vue&type=template&id=32371738& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0", attrs: { fluid: "" } },
        [
          _c("crypto-slider"),
          _vm._v(" "),
          _c("div", { staticClass: "currencies-available mt-4 mb-2" }, [
            _c("h4", [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("message.currenciesAvailable")) +
                  "\n         "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "icon-wrap" },
              _vm._l(_vm.icons, function(icon, index) {
                return _c("i", {
                  key: index,
                  staticClass: "mr-3 font-2x",
                  class: icon
                })
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "12", sm: "12", md: "7" } }, [
                _c(
                  "div",
                  {
                    attrs: {
                      colClasses: "col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12",
                      customClasses: "mb-0"
                    }
                  },
                  [_c("expandable-table-v2")],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "wallet-status-wrap",
                  attrs: { cols: "12", sm: "12", md: "5" }
                },
                [
                  _c(
                    "v-row",
                    {
                      attrs: {
                        colClasses: "col-xl-12 col-lg-12 col-md-12 col-12"
                      }
                    },
                    [
                      _vm._l(_vm.cardData, function(data, index) {
                        return [
                          _c("stats-card-v8", {
                            key: index,
                            attrs: {
                              colClasses:
                                "col-xl-6 col-lg-6 col-md-12 col-sm-6 col-12",
                              heading: data.name,
                              viewers: data.viewers,
                              trade: data.trade,
                              icon: data.icon,
                              color: data.color
                            }
                          })
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    {
                      attrs: {
                        colClasses: "col-xl-12 col-lg-12 col-md-12 col-12"
                      }
                    },
                    [
                      _c(
                        "app-card",
                        {
                          attrs: {
                            colClasses: "col-xl-12 col-lg-12 col-md-12 col-12",
                            customClasses: "mb-0"
                          }
                        },
                        [_c("bank-details")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);