(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_crm_Projects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js& ***!
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
// import api from "Api";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['managementData'],
  data: function data() {
    return {};
  },
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // ['shahsi'],
  data: function data() {
    return {
      projectData: [],
      headers: [{
        text: 'Id',
        value: 'id',
        sortable: false
      }, {
        text: 'Project Name',
        value: 'name',
        sortable: false
      }, {
        text: 'Budget',
        value: 'budget',
        sortable: false
      }, {
        text: 'Duration',
        value: 'duration',
        sortable: false
      }, {
        text: 'Client',
        value: 'client',
        sortable: false
      }, {
        text: 'Team',
        value: 'teamImage',
        sortable: false
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }, {
        text: 'Deadline',
        value: 'deadline',
        sortable: false
      }]
    };
  },
  mounted: function mounted() {
    this.getProjectData(); // console.log(this.projectData+"mounted");
  },
  methods: {
    getProjectData: function getProjectData() {
      var _this = this;

      this.loader = true;
      Api__WEBPACK_IMPORTED_MODULE_1__.default.get("vuely/projectDetails.js").then(function (response) {
        _this.loader = false;
        _this.projectData = response.data; // console.log(this.projectData);
      })["catch"](function (error) {
        console.log("error" + error);
      });
    },
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_ProjectGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/ProjectGrid */ "./resources/js/components/Widgets/ProjectGrid.vue");
/* harmony import */ var Components_Widgets_ProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Widgets/ProjectList */ "./resources/js/components/Widgets/ProjectList.vue");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// widgets



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProjectGridView: Components_Widgets_ProjectGrid__WEBPACK_IMPORTED_MODULE_0__.default,
    ProjectListView: Components_Widgets_ProjectList__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      projectData: [],
      viewType: "projectGrid",
      selectedView: "grid",
      isActive: 'grid'
    };
  },
  mounted: function mounted() {
    this.getProjectData();
  },
  methods: {
    getProjectData: function getProjectData() {
      var _this = this;

      this.loader = true;
      Api__WEBPACK_IMPORTED_MODULE_2__.default.get("vuely/projectDetails.js").then(function (response) {
        _this.loader = false;
        _this.projectData = response.data;
      })["catch"](function (error) {
        console.log("error" + error);
      });
    },
    listView: function listView() {
      this.viewType = "projectList";
      this.selectedView = "list";
      this.isActive = 'list';
    },
    girdView: function girdView() {
      this.viewType = "projectGrid";
      this.selectedView = "grid";
      this.isActive = "grid";
    }
  }
});

/***/ }),

/***/ "./resources/js/api/index.js":
/*!***********************************!*\
  !*** ./resources/js/api/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://reactify.theironnetwork.org/data/'
}));

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectGrid.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectGrid.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectGrid.vue?vue&type=template&id=8a84fe38& */ "./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38&");
/* harmony import */ var _ProjectGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/ProjectGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectList.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=10058b88& */ "./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/ProjectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/crm/Projects.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/crm/Projects.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=95b726ac& */ "./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/views/crm/Projects.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/crm/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/crm/Projects.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/crm/Projects.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectGrid_vue_vue_type_template_id_8a84fe38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectGrid.vue?vue&type=template&id=8a84fe38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38&");


/***/ }),

/***/ "./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_10058b88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=template&id=10058b88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88&");


/***/ }),

/***/ "./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_95b726ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Projects.vue?vue&type=template&id=95b726ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectGrid.vue?vue&type=template&id=8a84fe38& ***!
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
  return _c("div", { staticClass: "app-card-content pt-0" }, [
    _c("div", { staticClass: "desc-wrap" }, [
      _c("h6", [_vm._v("Description :")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n         " + _vm._s(_vm.managementData.description) + "\n      "
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "mb-4 project-team" }, [
      _c("h6", [_vm._v("Team Members :")]),
      _vm._v(" "),
      _c(
        "div",
        _vm._l(_vm.managementData.teamImage, function(img, index) {
          return _c("img", {
            key: index,
            staticClass: "img-circle thumb-gap rounded-circle",
            attrs: { width: "30px", height: "30px", src: img }
          })
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "deadline-info mb-4" }, [
      _c("h6", [_vm._v("Deadline :")]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.managementData.deadline))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "progress-bar mb-5" }, [
      _c("h6", { staticClass: "v-input__prepend-outer mb-5" }, [
        _vm._v(
          "\n         Progress : " +
            _vm._s(_vm.managementData.progressValue) +
            " %\n      "
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex justify-space-between text-center pa-0" },
        [
          _c("v-progress-linear", {
            attrs: { color: "primary", height: "7" },
            model: {
              value: _vm.managementData.progressValue,
              callback: function($$v) {
                _vm.$set(_vm.managementData, "progressValue", $$v)
              },
              expression: "managementData.progressValue"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "button-wrap text-right" },
      [
        _c(
          "v-btn",
          {
            attrs: {
              color: "primary",
              medium: "",
              to:
                "/" +
                (_vm.getCurrentAppLayoutHandler() +
                  "/crm/projectDetails/" +
                  _vm.managementData.id)
            }
          },
          [_vm._v("\n         Learn More\n      ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ProjectList.vue?vue&type=template&id=10058b88& ***!
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
    { staticClass: "table-responsive" },
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.projectData },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.id))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-left" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "black--text",
                          attrs: {
                            to:
                              "/" +
                              (_vm.getCurrentAppLayoutHandler() +
                                "/crm/projectDetails/" +
                                item.id)
                          }
                        },
                        [_vm._v(_vm._s(item.name))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.budget))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.duration))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left text-nowrap" }, [
                    _vm._v(_vm._s(item.client))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-left text-nowrap" },
                    _vm._l(item.teamImage, function(img, index) {
                      return _c("img", {
                        key: index,
                        staticClass: "img-circle thumb-gap rounded-circle",
                        attrs: { width: "25", height: "25", src: img }
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-left" },
                    [
                      item.status == "Active"
                        ? _c(
                            "v-chip",
                            {
                              attrs: { color: "primary", "text-color": "white" }
                            },
                            [_vm._v(_vm._s(item.status))]
                          )
                        : _c(
                            "v-chip",
                            {
                              attrs: { color: "error", "text-color": "white" }
                            },
                            [_vm._v(_vm._s(item.status))]
                          )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.deadline))
                  ])
                ])
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Projects.vue?vue&type=template&id=95b726ac& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          _c(
            "v-row",
            { staticClass: "align-items-center search-wrap" },
            [
              _c(
                "v-col",
                {
                  staticClass: "align-items-center pt-0",
                  attrs: { cols: "12", md: "12", lg: "12" }
                },
                [
                  _c(
                    "app-card",
                    { attrs: { customClasses: "mb-0 py-12" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "align-center",
                              attrs: { cols: "12", md: "12", lg: "3" }
                            },
                            [
                              _c("h2", { staticClass: "mb-0" }, [
                                _vm._v("Search")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", md: "12", lg: "9" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "d-flex search-field-wrap" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "w-75" },
                                    [
                                      _c("v-text-field", {
                                        staticClass: " pt-0 pr-3",
                                        attrs: { label: "Search Projects" }
                                      })
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
                                          staticClass: "my-0 ml-0 mr-2",
                                          attrs: {
                                            color: "primary",
                                            medium: ""
                                          }
                                        },
                                        [_vm._v("Search")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary m-0",
                                            medium: ""
                                          }
                                        },
                                        [
                                          _vm._v("Add"),
                                          _c(
                                            "i",
                                            { staticClass: "material-icons" },
                                            [_vm._v("add")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
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
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-space-between align-items-center pa-6 project-grid-title"
            },
            [
              _c("div", { staticClass: "title" }, [
                _c("h3", { staticClass: "mb-0" }, [
                  _vm._v(_vm._s(_vm.$t("message" + "." + _vm.viewType)))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-right project-icon" },
                [
                  _c(
                    "v-icon",
                    {
                      staticClass: "mr-2",
                      class: { active: _vm.isActive == "grid" },
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.girdView(1)
                        }
                      }
                    },
                    [_vm._v("apps")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      class: { active: _vm.isActive == "list" },
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.listView(2)
                        }
                      }
                    },
                    [_vm._v("list")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(_vm.projectData, function(data, index) {
              return _c(
                "app-card",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.selectedView == "grid",
                      expression: "selectedView == 'grid'"
                    }
                  ],
                  key: index,
                  attrs: {
                    heading: _vm.$t("message" + "." + data.name),
                    colClasses: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12",
                    customClasses: "mb-0",
                    fullBlock: true,
                    fullScreen: true,
                    reloadable: true,
                    closeable: true
                  }
                },
                [_c("ProjectGridView", { attrs: { managementData: data } })],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedView == "list",
                  expression: "selectedView == 'list'"
                }
              ]
            },
            [
              _c(
                "app-card",
                {
                  attrs: {
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-12 col-12",
                    customClasses: "mb-0"
                  }
                },
                [_c("ProjectListView")],
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