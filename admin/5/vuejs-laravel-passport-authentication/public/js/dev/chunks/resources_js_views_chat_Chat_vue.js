(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_chat_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ChatArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ChatArea */ "./resources/js/views/chat/components/ChatArea.vue");
/* harmony import */ var _components_ChatSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ChatSidebar */ "./resources/js/views/chat/components/ChatSidebar.vue");
/* harmony import */ var _components_ChatModuleLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChatModuleLoader */ "./resources/js/views/chat/components/ChatModuleLoader.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  beforeMount: function beforeMount() {
    this.$store.dispatch("getUsers");
  },
  mounted: function mounted() {
    document.querySelector("html").style.overflow = "hidden";
    var defaultLayout = document.querySelector(".app-default-layout .v-main__wrap");
    var miniLayout = document.querySelector(".app-mini-layout .v-main__wrap");
    var boxLayout = document.querySelector(".app-boxed-layout .app-content");

    if (defaultLayout) {
      defaultLayout.style.overflow = "hidden";
    } else if (miniLayout) {
      miniLayout.style.overflow = "hidden";
    } else if (boxLayout) {
      boxLayout.style.overflow = "hidden";
    } else {
      document.querySelector(".app-horizontal-layout .v-main__wrap").style.overflow = "hidden";
    }
  },
  destroyed: function destroyed() {
    document.querySelector("html").style.overflow = "hidden";
    var defaultLayout = document.querySelector(".app-default-layout .v-main__wrap");
    var miniLayout = document.querySelector(".app-mini-layout .v-main__wrap");
    var boxLayout = document.querySelector(".app-boxed-layout .app-content");
    var horizontallayout = document.querySelector(".app-horizontal-layout .v-main__wrap");

    if (defaultLayout) {
      defaultLayout.style.overflow = "auto";
    }

    if (miniLayout) {
      miniLayout.style.overflow = "auto";
    }

    if (boxLayout) {
      boxLayout.style.overflow = "auto";
    }

    if (horizontallayout) {
      horizontallayout.style.overflow = "auto";
    }
  },
  components: {
    ChatArea: _components_ChatArea__WEBPACK_IMPORTED_MODULE_0__.default,
    ChatSidebar: _components_ChatSidebar__WEBPACK_IMPORTED_MODULE_1__.default,
    ChatModuleLoader: _components_ChatModuleLoader__WEBPACK_IMPORTED_MODULE_2__.default
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["loadingChatModule", "selectedUser"])), {}, {
    chatSidebar: {
      get: function get() {
        return this.$store.getters.chatSidebar;
      },
      set: function set(val) {
        this.$store.dispatch("toggleChatSidebar", val);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _SingleChatLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleChatLoader */ "./resources/js/views/chat/components/SingleChatLoader.vue");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["selectedUser", "loadingChat"])),
  data: function data() {
    return {
      settings: {
        maxScrollbarLength: 260
      },
      newMessage: ""
    };
  },
  components: {
    SingleChatLoader: _SingleChatLoader__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.scrollToEnd();
  },
  updated: function updated() {
    if (this.newMessage == '') {
      this.scrollToEnd();
    }
  },
  methods: {
    sendMessage: function sendMessage() {
      if (this.newMessage !== "") {
        this.$store.dispatch("sendMessage", this.newMessage);
        this.newMessage = "";
        this.scrollToEnd();
      }
    },
    toggleChatSidebar: function toggleChatSidebar() {
      this.$store.dispatch("toggleChatSidebar", true);
    },
    getScrollHeight: function getScrollHeight() {
      var layout = (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentAppLayout)(this.$router);

      switch (layout) {
        case "default":
          return "height: calc(100vh - 200px)";

        case "horizontal":
          return "height: calc(100vh - 250px)";

        case "boxed":
          return "height: calc(100vh - 380px)";

        case "boxed-v2":
          return "height: calc(100vh - 380px)";

        default:
          return "height: calc(100vh - 200px)";
      }
    },
    scrollToEnd: function scrollToEnd() {
      var container = document.querySelector(".chat-area-scroll");

      if (container !== null) {
        var scrollHeight = container.scrollHeight;
        container.scrollTop = scrollHeight;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["users", "selectedUser"])),
  data: function data() {
    return {
      settings: {
        maxScrollbarLength: 160
      }
    };
  },
  methods: {
    openChat: function openChat(user) {
      this.$store.dispatch("openChat", user);
    },
    getScrollHeight: function getScrollHeight() {
      var layout = (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);

      switch (layout) {
        case "default":
          return "height: calc(100vh - 130px)";

        case "horizontal":
          return "height: calc(100vh - 180px)";

        case "boxed":
          return "height: calc(100vh - 305px)";

        case "boxed-v2":
          return "height: calc(100vh - 305px)";

        default:
          return "height: calc(100vh - 130px)";
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/chat/Chat.vue":
/*!******************************************!*\
  !*** ./resources/js/views/chat/Chat.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=15a40340& */ "./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/views/chat/Chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/chat/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/chat/components/ChatArea.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/chat/components/ChatArea.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatArea.vue?vue&type=template&id=77926046& */ "./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046&");
/* harmony import */ var _ChatArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatArea.vue?vue&type=script&lang=js& */ "./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ChatArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/chat/components/ChatArea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/chat/components/ChatModuleLoader.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatModuleLoader.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatModuleLoader.vue?vue&type=template&id=c57a7150& */ "./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/chat/components/ChatModuleLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/chat/components/ChatSidebar.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatSidebar.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatSidebar.vue?vue&type=template&id=3a5e14b3& */ "./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3&");
/* harmony import */ var _ChatSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatSidebar.vue?vue&type=script&lang=js& */ "./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ChatSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/chat/components/ChatSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/chat/components/SingleChatLoader.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/chat/components/SingleChatLoader.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleChatLoader.vue?vue&type=template&id=7f1eef98& */ "./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__.render,
  _SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/chat/components/SingleChatLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/chat/Chat.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/chat/Chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_15a40340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=15a40340& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340&");


/***/ }),

/***/ "./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatArea_vue_vue_type_template_id_77926046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatArea.vue?vue&type=template&id=77926046& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046&");


/***/ }),

/***/ "./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatModuleLoader_vue_vue_type_template_id_c57a7150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatModuleLoader.vue?vue&type=template&id=c57a7150& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150&");


/***/ }),

/***/ "./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatSidebar_vue_vue_type_template_id_3a5e14b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatSidebar.vue?vue&type=template&id=3a5e14b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3&");


/***/ }),

/***/ "./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleChatLoader_vue_vue_type_template_id_7f1eef98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SingleChatLoader.vue?vue&type=template&id=7f1eef98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/Chat.vue?vue&type=template&id=15a40340& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: " py-0 px-0", attrs: { fluid: "" } },
    [
      !_vm.loadingChatModule
        ? [
            _c(
              "v-navigation-drawer",
              {
                attrs: { temporary: "", absolute: "", width: 250 },
                model: {
                  value: _vm.chatSidebar,
                  callback: function($$v) {
                    _vm.chatSidebar = $$v
                  },
                  expression: "chatSidebar"
                }
              },
              [_c("chat-sidebar")],
              1
            ),
            _vm._v(" "),
            _c(
              "v-row",
              { staticClass: "chat-layout" },
              [
                _c(
                  "v-col",
                  {
                    staticClass: "chat-sidebar pa-0 pl-3",
                    attrs: { xl: "2", lg: "3", md: "3", sm: "0", cols: "0" }
                  },
                  [_c("chat-sidebar")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  {
                    staticClass: "chat-main pa-0",
                    attrs: { xl: "10", lg: "9", md: "9", sm: "12", cols: "12" }
                  },
                  [_c("chat-area")],
                  1
                )
              ],
              1
            )
          ]
        : [
            _c(
              "div",
              { staticClass: "app-flex justify-center align-center h-vh-100" },
              [_c("chat-module-loader")],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatArea.vue?vue&type=template&id=77926046& ***!
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
    { staticClass: "chat-wrapper" },
    [
      _vm.loadingChat
        ? _c(
            "div",
            { staticClass: "app-flex justify-center align-center h-vh-100" },
            [_c("single-chat-loader")],
            1
          )
        : [
            _vm.selectedUser
              ? [
                  _c("v-toolbar", { staticClass: "chat-head" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "chat-head-left d-custom-flex align-items-center"
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 ham-menu-icon d-none gray--text",
                            attrs: { text: "", icon: "", small: "" },
                            on: { click: _vm.toggleChatSidebar }
                          },
                          [
                            _c("v-icon", { attrs: { dark: "" } }, [
                              _vm._v("menu")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "media align-items-center" }, [
                          _c(
                            "div",
                            { staticClass: "media-left mr-4 pos-relative" },
                            [
                              _c("img", {
                                staticClass: "rounded-circle pos-relative",
                                attrs: {
                                  src: _vm.selectedUser.avatar,
                                  alt: "user-profile",
                                  width: "40",
                                  height: "40"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                class: {
                                  "v-badge success rounded floating":
                                    _vm.selectedUser.status === 1
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("h6", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.selectedUser.name))
                            ]),
                            _vm._v(" "),
                            _vm.selectedUser.status === 1
                              ? _c(
                                  "span",
                                  {
                                    staticClass:
                                      "grey--text fs-12 d-inline-block fw-normal"
                                  },
                                  [_vm._v("online")]
                                )
                              : _c(
                                  "span",
                                  {
                                    staticClass:
                                      "grey--text fs-12 d-inline-block fw-normal"
                                  },
                                  [
                                    _vm._v(
                                      "Last seen " +
                                        _vm._s(_vm.selectedUser.lastSeen)
                                    )
                                  ]
                                )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "chat-head-right" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "video-icon primary mr-3",
                            attrs: { icon: "", color: "white" }
                          },
                          [_c("v-icon", [_vm._v("videocam")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "video-icon primary mr-3",
                            attrs: { icon: "", color: "white" }
                          },
                          [_c("v-icon", [_vm._v("phone")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-menu",
                          {
                            attrs: {
                              "offset-y": "",
                              origin: "left left",
                              transition: "scale-transition",
                              left: ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g({ attrs: { icon: "" } }, on),
                                        [_c("v-icon", [_vm._v("more_vert")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3491234933
                            )
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-list",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.console.log("clear chat")
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Clear Chat")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.console.log(
                                          "mute notifications"
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v("Mute Notifications")
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.console.log("block")
                                      }
                                    }
                                  },
                                  [_c("v-list-item-title", [_vm._v("Block")])],
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass: "chat-area-scroll",
                      style: _vm.getScrollHeight(),
                      attrs: { settings: _vm.settings }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "chat-body" },
                        [
                          _vm._l(_vm.selectedUser.chats, function(chat, index) {
                            return [
                              _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "chat-block mb-4",
                                  class: { "flex-row-reverse": chat.isAdmin }
                                },
                                [
                                  !chat.isAdmin
                                    ? [
                                        _c(
                                          "div",
                                          { staticClass: "avatar-wrap mr-4" },
                                          [
                                            _c("img", {
                                              staticClass: "rounded-circle",
                                              attrs: {
                                                src: _vm.selectedUser.avatar,
                                                alt: "user-profile",
                                                width: "40",
                                                height: "40"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "chat-bubble-wrap" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "chat-bubble even aqua-bg px-4 d-custom-flex align-items-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "d-inline-block fs-14"
                                                  },
                                                  [_vm._v(_vm._s(chat.body))]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "fs-12 grey--text text-left d-block mt-1 fw-normal"
                                              },
                                              [_vm._v(_vm._s(chat.time))]
                                            )
                                          ]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "div",
                                          { staticClass: "avatar-wrap ml-4" },
                                          [
                                            _c("img", {
                                              staticClass: "rounded-circle",
                                              attrs: {
                                                src:
                                                  "/static/avatars/user-5.jpg",
                                                alt: "user-profile",
                                                width: "40",
                                                height: "40"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "chat-bubble-wrap" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "chat-bubble odd primary px-4 d-custom-flex align-items-center"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "d-inline-block fs-14 white--text"
                                                  },
                                                  [_vm._v(_vm._s(chat.body))]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "fs-12 grey--text text-right d-block mt-1 fw-normal"
                                              },
                                              [_vm._v(_vm._s(chat.time))]
                                            )
                                          ]
                                        )
                                      ]
                                ],
                                2
                              )
                            ]
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "chat-footer px-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-custom-flex" },
                      [
                        _c("v-text-field", {
                          staticClass: "mr-4",
                          attrs: {
                            "hide-details": "",
                            name: "input-1-3",
                            label: "Send Message...",
                            "single-line": "",
                            value: _vm.newMessage
                          },
                          on: {
                            keyup: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.sendMessage.apply(null, arguments)
                            }
                          },
                          model: {
                            value: _vm.newMessage,
                            callback: function($$v) {
                              _vm.newMessage = $$v
                            },
                            expression: "newMessage"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { fab: "", small: "" } },
                          [
                            _c("v-icon", { attrs: { dark: "" } }, [
                              _vm._v("attachment")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "chat-send-btn ml-4",
                            attrs: {
                              fab: "",
                              dark: "",
                              small: "",
                              color: "primary"
                            },
                            on: { click: _vm.sendMessage }
                          },
                          [
                            _c("v-icon", { attrs: { dark: "" } }, [
                              _vm._v("send")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              : _c("div", { staticClass: "chat-box-main" }, [
                  _c(
                    "div",
                    { staticClass: "centered" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "select-user d-none",
                          attrs: { text: "", color: "primary" },
                          on: { click: _vm.toggleChatSidebar }
                        },
                        [_vm._v("\n\t\t\t\t\tSelect User\n\t\t\t\t")]
                      )
                    ],
                    1
                  )
                ])
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "zmdi zmdi-comments font-3x primary--text" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatModuleLoader.vue?vue&type=template&id=c57a7150& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-progress-circular", {
    attrs: { indeterminate: "", color: "primary" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/ChatSidebar.vue?vue&type=template&id=3a5e14b3& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "chat-content" },
    [
      _c(
        "v-toolbar",
        { attrs: { color: "primary", dark: "" } },
        [
          _c("v-toolbar-title", [_vm._v("Chat")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("search")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        [
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "chat-sidebar-scroll",
              style: _vm.getScrollHeight(),
              attrs: { settings: _vm.settings }
            },
            [
              _vm._l(_vm.users, function(item, index) {
                return [
                  _c(
                    "v-list-item",
                    {
                      key: index,
                      class: { "grayish-blue": item.selected },
                      on: {
                        click: function($event) {
                          return _vm.openChat(item)
                        }
                      }
                    },
                    [
                      _c("v-list-item-avatar", { staticClass: "my-0 mr-4" }, [
                        _c("img", { attrs: { src: item.avatar } })
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-content", { staticClass: "py-0" }, [
                        _c("h6", {
                          staticClass: "mb-1",
                          domProps: { innerHTML: _vm._s(item.name) }
                        }),
                        _vm._v(" "),
                        item.chats.length > 0
                          ? _c("span", {
                              staticClass: "fs-12 grey--text fw-normal",
                              domProps: {
                                innerHTML: _vm._s(
                                  item.chats[item.chats.length - 1].body
                                )
                              }
                            })
                          : _vm._e()
                      ])
                    ],
                    1
                  )
                ]
              })
            ],
            2
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/chat/components/SingleChatLoader.vue?vue&type=template&id=7f1eef98& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-progress-circular", {
    attrs: { indeterminate: "", color: "primary" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);