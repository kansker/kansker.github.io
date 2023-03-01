(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_editor_QuillEditor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js& ***!
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
//
//
//
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
      content: "<h2>I am Example</h2>",
      editorOption: {// some quill options
      }
    };
  },
  methods: {
    onEditorBlur: function onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus: function onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady: function onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange: function onEditorChange(_ref) {
      var editor = _ref.editor,
          html = _ref.html,
          text = _ref.text;
      console.log("editor change!", editor, html, text);
      this.content = html;
    }
  },
  computed: {
    editor: function editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/editor/QuillEditor.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/editor/QuillEditor.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=template&id=457fda4f& */ "./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f&");
/* harmony import */ var _QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditor.vue?vue&type=script&lang=js& */ "./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/editor/QuillEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuillEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditor_vue_vue_type_template_id_457fda4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuillEditor.vue?vue&type=template&id=457fda4f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/editor/QuillEditor.vue?vue&type=template&id=457fda4f& ***!
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
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0 mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.quillEditor"),
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
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