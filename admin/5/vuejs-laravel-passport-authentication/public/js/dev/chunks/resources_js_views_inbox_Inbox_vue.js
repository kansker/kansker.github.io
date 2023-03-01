(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_inbox_Inbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: '<h4><i>Insert text here....</h4></i>',
      editorOption: {// some quill options
      }
    };
  },
  methods: {
    onEditorBlur: function onEditorBlur(editor) {
      console.log('editor blur!', editor);
    },
    onEditorFocus: function onEditorFocus(editor) {
      console.log('editor focus!', editor);
    },
    onEditorReady: function onEditorReady(editor) {
      console.log('editor ready!', editor);
    },
    onEditorChange: function onEditorChange(_ref) {
      var editor = _ref.editor,
          html = _ref.html,
          text = _ref.text;
      console.log('editor change!', editor, html, text);
      this.content = html;
    }
  },
  computed: {
    editor: function editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted: function mounted() {
    // you can use current editor object to do something(quill methods)
    console.log('this is current quill instance object', this.editor);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["selectedEmail"])),
  methods: {
    backToEmails: function backToEmails() {
      this.$store.dispatch("backToEmails");
    },
    getScrollHeight: function getScrollHeight() {
      var layout = (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);

      switch (layout) {
        case "default":
          return "height:calc(100vh - 220px)";

        case "mini":
          return "height:calc(100vh - 220px)";

        case "horizontal":
          return "height:calc(100vh - 220px)";

        case "boxed":
          return "height:calc(100vh - 391px)";

        case "boxed-v2":
          return "height:calc(100vh - 391px)";

        default:
          return "height:calc(100vh - 220px)";
      }
    },
    onDeleteEmail: function onDeleteEmail() {
      this.$store.dispatch("onDeleteEmail");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["emails", "loadingEmails"])),
  mounted: function mounted() {
    this.$store.dispatch("getEmails");
  },
  methods: {
    onSelectEmail: function onSelectEmail(email) {
      this.$store.dispatch("onSelectEmail", email);
    },
    markAsStarEmail: function markAsStarEmail(email) {
      this.$store.dispatch("markAsStarEmail", email);
    },
    onViewEmail: function onViewEmail(email) {
      this.$store.dispatch("onViewEmail", email);
    },
    getScrollHeight: function getScrollHeight() {
      var layout = (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);

      switch (layout) {
        case "default":
          return "height:calc(100vh - 220px)";

        case "mini":
          return "height:calc(100vh - 220px)";

        case "horizontal":
          return "height:calc(100vh - 268px)";

        case "boxed":
          return "height:calc(100vh - 390px)";

        case "boxed-v2":
          return "height:calc(100vh - 390px)";

        default:
          return "height:calc(100vh - 220px)";
      }
    }
  },
  data: function data() {
    return {
      notifications: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailListing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailListing */ "./resources/js/views/inbox/EmailListing.vue");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./resources/js/views/inbox/Sidebar.vue");
/* harmony import */ var _EmailDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailDetail */ "./resources/js/views/inbox/EmailDetail.vue");
/* harmony import */ var _SearchEmails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchEmails */ "./resources/js/views/inbox/SearchEmails.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var contentWrapper = document.querySelector('.v-main__wrap');

    if (contentWrapper) {
      contentWrapper.style.overflow = "hidden";
    }

    var selector = document.querySelector('.app-boxed-layout .app-content');

    if (selector) {
      selector.style.overflow = "hidden";
    }
  },
  destroyed: function destroyed() {
    var contentWrapper = document.querySelector('.v-main__wrap');

    if (contentWrapper !== null) {
      if ((0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.getCurrentAppLayout)(this.$router) === "boxed" || (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.getCurrentAppLayout)(this.$router) === "boxed-v2") {
        if (contentWrapper) {
          contentWrapper.style.overflow = "";
        }
      } else {
        contentWrapper.style.overflow = "auto";
      }
    }

    var selector = document.querySelector('.app-boxed-layout .app-content');

    if (selector) {
      selector.style.overflow = "auto";
    }
  },
  components: {
    EmailListing: _EmailListing__WEBPACK_IMPORTED_MODULE_0__.default,
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_1__.default,
    EmailDetail: _EmailDetail__WEBPACK_IMPORTED_MODULE_2__.default,
    SearchEmails: _SearchEmails__WEBPACK_IMPORTED_MODULE_3__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["selectedEmail"])),
  data: function data() {
    return {
      reload: false,
      previous: false,
      next: false,
      inboxSidebar: false
    };
  },
  methods: {
    toggleInboxSidebar: function toggleInboxSidebar() {
      this.inboxSidebar = !this.inboxSidebar;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EmailBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailBox */ "./resources/js/views/inbox/EmailBox.vue");
/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBlock */ "./resources/js/views/inbox/UserBlock.vue");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["mailboxes"])),
  methods: {
    filterEmails: function filterEmails(filter) {
      this.$store.dispatch("filterEmails", filter);
    },
    getScrollHeight: function getScrollHeight() {
      var layout = (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getCurrentAppLayout)(this.$router);

      switch (layout) {
        case "default":
          return "height:calc(100vh - 220px)";

        case "mini":
          return "height:calc(100vh - 220px)";

        case "horizontal":
          return "height:calc(100vh - 265px)";

        case "boxed":
          return "height:calc(100vh - 390px)";

        case "boxed-v2":
          return "height:calc(100vh - 390px)";

        default:
          return "height:calc(100vh - 220px)";
      }
    }
  },
  data: function data() {
    return {
      dialog: false,
      folder_items: [{
        action: "zmdi zmdi-folder",
        title: "message.work",
        "class": "primary--text"
      }, {
        action: "zmdi zmdi-folder-person",
        title: "message.personal",
        "class": "error--text"
      }],
      settings_items: [{
        action: "zmdi zmdi-folder",
        title: "message.manageFolders"
      }, {
        action: "zmdi zmdi-account-box-mail",
        title: "message.contacts"
      }, {
        action: "zmdi zmdi-settings",
        title: "message.settings"
      }]
    };
  },
  components: {
    EmailBox: _EmailBox__WEBPACK_IMPORTED_MODULE_0__.default,
    UserBlock: _UserBlock__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./resources/js/views/inbox/EmailBox.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/inbox/EmailBox.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailBox.vue?vue&type=template&id=2e3cd8d7& */ "./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7&");
/* harmony import */ var _EmailBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailBox.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmailBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/EmailBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/EmailDetail.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/inbox/EmailDetail.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailDetail.vue?vue&type=template&id=a75f0016& */ "./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016&");
/* harmony import */ var _EmailDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmailDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/EmailDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/EmailListing.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/inbox/EmailListing.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailListing.vue?vue&type=template&id=7de8f710& */ "./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710&");
/* harmony import */ var _EmailListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailListing.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmailListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/EmailListing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/Inbox.vue":
/*!********************************************!*\
  !*** ./resources/js/views/inbox/Inbox.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox.vue?vue&type=template&id=0f3e2224& */ "./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224&");
/* harmony import */ var _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/Inbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/SearchEmails.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/inbox/SearchEmails.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchEmails.vue?vue&type=template&id=41fb5f32& */ "./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32&");
/* harmony import */ var _SearchEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchEmails.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SearchEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/SearchEmails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/Sidebar.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/inbox/Sidebar.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=540388c4& */ "./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/UserBlock.vue":
/*!************************************************!*\
  !*** ./resources/js/views/inbox/UserBlock.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=template&id=30fc95ea& */ "./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/inbox/UserBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailListing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailListing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchEmails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailBox_vue_vue_type_template_id_2e3cd8d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailBox.vue?vue&type=template&id=2e3cd8d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7&");


/***/ }),

/***/ "./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailDetail_vue_vue_type_template_id_a75f0016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailDetail.vue?vue&type=template&id=a75f0016& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016&");


/***/ }),

/***/ "./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailListing_vue_vue_type_template_id_7de8f710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailListing.vue?vue&type=template&id=7de8f710& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710&");


/***/ }),

/***/ "./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_0f3e2224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=template&id=0f3e2224& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224&");


/***/ }),

/***/ "./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchEmails_vue_vue_type_template_id_41fb5f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchEmails.vue?vue&type=template&id=41fb5f32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32&");


/***/ }),

/***/ "./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_540388c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=540388c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4&");


/***/ }),

/***/ "./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_30fc95ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserBlock.vue?vue&type=template&id=30fc95ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailBox.vue?vue&type=template&id=2e3cd8d7& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "", "grid-list-xl": "", "py-0": "" } },
    [
      _c(
        "div",
        { staticClass: "app-card-content" },
        [
          _c("quill-editor", {
            ref: "myQuillEditor",
            attrs: { options: _vm.editorOption },
            on: {
              blur: function($event) {
                return _vm.onEditorBlur($event)
              },
              focus: function($event) {
                return _vm.onEditorFocus($event)
              },
              ready: function($event) {
                return _vm.onEditorReady($event)
              }
            },
            model: {
              value: _vm.content,
              callback: function($$v) {
                _vm.content = $$v
              },
              expression: "content"
            }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailDetail.vue?vue&type=template&id=a75f0016& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _vm.selectedEmail != null
    ? _c(
        "div",
        { staticClass: "email-detail-wrap" },
        [
          _c(
            "div",
            {
              staticClass:
                "mail-action-wrap d-custom-flex justify-space-between"
            },
            [
              _c(
                "ul",
                { staticClass: "list-unstyled primary action-list-wrap" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: { click: _vm.onDeleteEmail }
                      },
                      [
                        _c("i", { staticClass: "material-icons" }, [
                          _vm._v("delete")
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "detail-head d-custom-flex justify-space-between" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "grey--text ma-0",
                  attrs: { fab: "", icon: "", small: "" },
                  on: { click: _vm.backToEmails }
                },
                [_c("v-icon", [_vm._v("keyboard_backspace")])],
                1
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c(
                  "li",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "grey--text ma-0",
                        attrs: { fab: "", icon: "", small: "" }
                      },
                      [_c("v-icon", [_vm._v("reply")])],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "grey--text ma-0",
                        attrs: { fab: "", icon: "", small: "" }
                      },
                      [_c("v-icon", [_vm._v("local_printshop")])],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "inbox-detail-scroll",
              style: _vm.getScrollHeight()
            },
            [
              _c("div", { staticClass: "mail-subject-wrap" }, [
                _c("h5", { staticClass: "mb-0" }, [
                  _vm._v(_vm._s(_vm.selectedEmail.subject))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "user-detail d-custom-flex justify-content-between"
                },
                [
                  _c("div", { staticClass: "media w-80" }, [
                    _c("img", {
                      staticClass: "rounded mr-3",
                      attrs: {
                        src: _vm.selectedEmail.avatarSrc,
                        alt: "user profile",
                        width: "50",
                        height: "50"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(_vm.selectedEmail.userName))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0 fs-14" }, [
                        _vm._v("From "),
                        _c(
                          "span",
                          { staticClass: "fs-12 grey--text fw-normal" },
                          [
                            _vm._v(
                              "<" + _vm._s(_vm.selectedEmail.userEmail) + ">"
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-0 fs-14" }, [
                        _vm._v("To: "),
                        _c(
                          "span",
                          { staticClass: "fs-12 grey--text fw-normal" },
                          [_vm._v("Me")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "align-items-center fs-12 fw-normal d-custom-flex grey--text w-20 justify-end"
                    },
                    [_vm._v(_vm._s(_vm.selectedEmail.time) + " Hour Ago")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mail-detail" }, [
                _c("div", [
                  _c("p", { staticClass: "fs-14" }, [
                    _vm._v(_vm._s(_vm.selectedEmail.body))
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0 fs-14 fw-semi-bold" }, [
                  _vm._v("Regards,")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0 fs-12 fw-normal" }, [
                  _vm._v(_vm._s(_vm.selectedEmail.userName))
                ])
              ]),
              _vm._v(" "),
              _vm.selectedEmail.attachments != null
                ? _c("div", { staticClass: "mail-attachment-wrap" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-custom-flex justify-space-between attachment-head align-items-center"
                      },
                      [
                        _c("h6", { staticClass: "mb-0" }, [
                          _vm._v(
                            _vm._s(_vm.selectedEmail.attachments.length) +
                              " Attachments"
                          )
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "list-inline" }, [
                          _c(
                            "li",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "grey--text ma-0",
                                  attrs: { fab: "", icon: "", small: "" }
                                },
                                [_c("v-icon", [_vm._v("insert_drive_file")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "grey--text ma-0",
                                  attrs: { fab: "", icon: "", small: "" }
                                },
                                [_c("v-icon", [_vm._v("cloud_circle")])],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        staticClass:
                          "d-custom-flex align-items-center attachment-list list-unstyled"
                      },
                      _vm._l(_vm.selectedEmail.attachments, function(
                        attachment
                      ) {
                        return _c("li", { key: attachment.id }, [
                          _c("div", { staticClass: "overlay-wrapper" }, [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: attachment.src,
                                height: "140",
                                width: "180",
                                alt: "attachment"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "overlay-content",
                                attrs: { href: "javascript:void(0)" }
                              },
                              [
                                _c("i", { staticClass: "material-icons" }, [
                                  _vm._v("get_app")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "fs-12 d-block fw-normal" },
                            [_vm._v(_vm._s(attachment.name))]
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mail-reply d-custom-flex align-items-center" },
                [
                  _c("v-text-field", {
                    staticClass: "mr-4",
                    attrs: { label: "Reply", solo: "" }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "ma-0 white--text",
                      attrs: { color: "primary", large: "" }
                    },
                    [
                      _vm._v("\n               Send\n               "),
                      _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v("send")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:void(0)" } }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("archive")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "javascript:void(0)" } }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("error")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navigate-page primary list-unstyled" }, [
      _c("li", [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _c("i", { staticClass: "material-icons" }, [_vm._v("arrow_back")])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { href: "javascript:void(0)" } }, [
          _c("i", { staticClass: "material-icons" }, [_vm._v("arrow_forward")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/EmailListing.vue?vue&type=template&id=7de8f710& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "inbox-listing" },
    [
      _c(
        "vue-perfect-scrollbar",
        { staticClass: "inbox-content-scroll", style: _vm.getScrollHeight() },
        [
          _vm.loadingEmails
            ? _c(
                "div",
                {
                  staticClass: "d-custom-flex align-center justify-center h-100"
                },
                [
                  _c("v-progress-circular", {
                    attrs: { indeterminate: "", color: "primary" }
                  })
                ],
                1
              )
            : [
                _vm.emails && _vm.emails.length > 0
                  ? _c(
                      "v-list",
                      { staticClass: "list-aqua-ripple" },
                      _vm._l(_vm.emails, function(item, key) {
                        return _c(
                          "v-list-item",
                          {
                            key: key,
                            attrs: { ripple: "" },
                            on: {
                              click: function($event) {
                                return _vm.onViewEmail(item)
                              }
                            }
                          },
                          [
                            _c(
                              "v-list-item-content",
                              { staticClass: "py-0" },
                              [
                                _c("v-checkbox", {
                                  attrs: {
                                    color: "primary",
                                    "input-value": item.value
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.onSelectEmail(item)
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2",
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.markAsStarEmail(item)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "zmdi zmdi-star font-lg",
                                      class: {
                                        "warning--text": item.starred,
                                        "grey--text": !item.starred
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "media" },
                                  [
                                    _c(
                                      "v-list-item-avatar",
                                      { staticClass: "media-left mr-10" },
                                      [
                                        _c("img", {
                                          staticClass: "img-responsive",
                                          attrs: {
                                            src: item.avatarSrc,
                                            alt: "avatar",
                                            height: "40",
                                            width: "40"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "media-body d-custom-flex align-items-center"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "d-inline-block" },
                                          [
                                            _c("h6", { staticClass: "mb-1" }, [
                                              _vm._v(_vm._s(item.userName))
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "fs-12 d-inline-block fw-normal"
                                              },
                                              [_vm._v(_vm._s(item.subject))]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "fs-12 grey--text w-75 d-inline-block mb-0 mx-6 fw-normal"
                                          },
                                          [_vm._v(_vm._s(item.body))]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-action", { staticClass: "my-0" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "ml-auto fs-12 grey--text fw-normal"
                                },
                                [_vm._v(_vm._s(item.time) + " hour ago ")]
                              )
                            ])
                          ],
                          1
                        )
                      }),
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass:
                          "h-100 d-flex align-items-center justify-center"
                      },
                      [_c("h3", [_vm._v("No Emails Found In Selected Folder")])]
                    )
              ]
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Inbox.vue?vue&type=template&id=0f3e2224& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "", "grid-list-xl": "", "pa-0": "" } },
    [
      _c(
        "div",
        { staticClass: "app-card inbox" },
        [
          _c(
            "v-navigation-drawer",
            {
              attrs: { temporary: "", absolute: "", width: 225 },
              model: {
                value: _vm.inboxSidebar,
                callback: function($$v) {
                  _vm.inboxSidebar = $$v
                },
                expression: "inboxSidebar"
              }
            },
            [_c("sidebar")],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticClass: "inbox-sidebar",
                  attrs: { cols: "12", sm: "4", md: "3", lg: "3", xl: "2" }
                },
                [_c("sidebar")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "inbox-content",
                  attrs: { cols: "12", sm: "12", md: "9", lg: "9", xl: "10" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "inbox-content-wrap" },
                    [
                      _vm.selectedEmail === null
                        ? [
                            _c(
                              "div",
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "inbox-page-list d-custom-flex justify-space-between align-items-center"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-custom-flex align-items-center"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "ham-menu-sm d-none" },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-3 my-0",
                                                attrs: { text: "", icon: "" },
                                                on: {
                                                  click: _vm.toggleInboxSidebar
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { staticClass: "grey--text" },
                                                  [_vm._v("menu")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "mail-count" },
                                          [_vm._v("1-10 from 23")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("ul", { staticClass: "list-inline" }, [
                                      _c(
                                        "li",
                                        [
                                          _c(
                                            "v-tooltip",
                                            {
                                              attrs: { top: "" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "a",
                                                          _vm._g(
                                                            {
                                                              attrs: {
                                                                href:
                                                                  "javascript:void(0);"
                                                              }
                                                            },
                                                            on
                                                          ),
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "ti-reload"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                2512448044
                                              ),
                                              model: {
                                                value: _vm.reload,
                                                callback: function($$v) {
                                                  _vm.reload = $$v
                                                },
                                                expression: "reload"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Reload")])
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        [
                                          _c(
                                            "v-tooltip",
                                            {
                                              attrs: { top: "" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "a",
                                                          _vm._g(
                                                            {
                                                              attrs: {
                                                                href:
                                                                  "javascript:void(0);"
                                                              }
                                                            },
                                                            on
                                                          ),
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "ti-arrow-left"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                1909957586
                                              ),
                                              model: {
                                                value: _vm.previous,
                                                callback: function($$v) {
                                                  _vm.previous = $$v
                                                },
                                                expression: "previous"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Previous")])
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        [
                                          _c(
                                            "v-tooltip",
                                            {
                                              attrs: { top: "" },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "activator",
                                                    fn: function(ref) {
                                                      var on = ref.on
                                                      return [
                                                        _c(
                                                          "a",
                                                          _vm._g(
                                                            {
                                                              attrs: {
                                                                href:
                                                                  "javascript:void(0);"
                                                              }
                                                            },
                                                            on
                                                          ),
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "ti-arrow-right"
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ],
                                                null,
                                                false,
                                                311352649
                                              ),
                                              model: {
                                                value: _vm.next,
                                                callback: function($$v) {
                                                  _vm.next = $$v
                                                },
                                                expression: "next"
                                              }
                                            },
                                            [
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Next")])
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("search-emails"),
                                _vm._v(" "),
                                _c("email-listing")
                              ],
                              1
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      [_c("email-detail")]
                    ],
                    2
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/SearchEmails.vue?vue&type=template&id=41fb5f32& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "search-mail" },
    [
      _c("v-text-field", {
        attrs: {
          label: "Search Email",
          placeholder: "Search Email",
          solo: "",
          "append-icon": "search"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/Sidebar.vue?vue&type=template&id=540388c4& ***!
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
    { staticClass: "inbox-head" },
    [
      _c("user-block"),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        { staticClass: "inbox-sidebar-scroll", style: _vm.getScrollHeight() },
        [
          _c(
            "div",
            { staticClass: "inbox-inner pa-6" },
            [
              _c(
                "v-dialog",
                {
                  staticClass: "mb-5 d-block",
                  attrs: { "max-width": "1000px" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              {
                                staticClass: "btn-icon ma-0",
                                attrs: { color: "error", dark: "", block: "" }
                              },
                              on
                            ),
                            [
                              _c("i", { staticClass: "zmdi zmdi-edit" }),
                              _vm._v(" "),
                              _c("span", { staticClass: "mt-1" }, [
                                _vm._v(_vm._s(_vm.$t("message.composeEmail")))
                              ])
                            ]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", [
                        _c("h3", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.$t("message.newEmail")))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c(
                          "div",
                          { staticClass: "mail-top px-4" },
                          [
                            _c("v-text-field", { attrs: { label: "To" } }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              attrs: {
                                label: "From",
                                value: "Vuely@examples.com",
                                disabled: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", { attrs: { label: "Title" } })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mail-body" },
                          [_c("email-box")],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-right px-4 pb-3" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "ml-4",
                              attrs: { color: "error" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mailbox-items-warp" },
                [
                  _c(
                    "span",
                    { staticClass: "fs-12 fw-semi-bold px-4 mb-1 d-block" },
                    [_vm._v(_vm._s(_vm.$t("message.mailboxes")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _vm._l(_vm.mailboxes, function(filter) {
                        return [
                          _c(
                            "v-list-item",
                            {
                              key: filter.id,
                              on: {
                                click: function($event) {
                                  return _vm.filterEmails(filter)
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-item-action",
                                { staticClass: "my-0" },
                                [_c("v-icon", [_vm._v(_vm._s(filter.action))])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                { staticClass: "py-0" },
                                [_c("span", [_vm._v(_vm._s(filter.name))])]
                              )
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
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mailbox-items-warp" },
                [
                  _c(
                    "span",
                    { staticClass: "fs-12 fw-semi-bold  px-4 mb-1 d-block" },
                    [_vm._v(_vm._s(_vm.$t("message.folders")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    _vm._l(_vm.folder_items, function(item, key) {
                      return _c(
                        "v-list-item",
                        { key: key },
                        [
                          _c(
                            "v-list-item-action",
                            { staticClass: "my-0" },
                            [_c("v-icon", { class: item.action })],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-content", { staticClass: "py-0" }, [
                            _c("span", [_vm._v(_vm._s(_vm.$t(item.title)))])
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-icon", { class: item.class }, [
                            _vm._v("fiber_manual_record")
                          ])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mailbox-items-warp" },
                [
                  _c(
                    "span",
                    { staticClass: "fs-12 fw-semi-bold px-4 mb-1 d-block" },
                    [_vm._v(_vm._s(_vm.$t("message.settings")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    _vm._l(_vm.settings_items, function(item, key) {
                      return _c(
                        "v-list-item",
                        { key: key },
                        [
                          _c(
                            "v-list-item-action",
                            { staticClass: "my-0" },
                            [_c("v-icon", { class: item.action })],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-content", { staticClass: "py-0" }, [
                            _c("span", [_vm._v(_vm._s(_vm.$t(item.title)))])
                          ])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/inbox/UserBlock.vue?vue&type=template&id=30fc95ea& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-img",
    {
      staticClass: "white--text",
      attrs: { height: "150px", src: "/static/img/blog-1.jpg" }
    },
    [
      _c("div", { staticClass: "media align-items-center pa-4 w-100" }, [
        _c("div", { staticClass: "media-left mr-6" }, [
          _c("img", {
            staticClass: "rounded-circle img-responsive",
            attrs: {
              src: "/static/avatars/user-9.jpg",
              width: "70",
              height: "70"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "media-body" }, [
          _c("h5", { staticClass: "mb-0" }, [_vm._v("Gregory A.")]),
          _vm._v(" "),
          _c("span", { staticClass: "fs-12 fw-normal" }, [
            _vm._v("gregory@example.com")
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);