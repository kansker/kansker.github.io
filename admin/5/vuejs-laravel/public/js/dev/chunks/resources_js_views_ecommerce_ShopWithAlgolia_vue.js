(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_ecommerce_ShopWithAlgolia_vue"],{

/***/ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js":
/*!*******************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js ***!
  \*******************************************************************/
/***/ (function(module) {

/*! algoliasearch-lite.umd.js | 4.10.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e){var t,r="algoliasearch-client-js-".concat(e.key),n=function(){return void 0===t&&(t=e.localStorage||window.localStorage),t},a=function(){return JSON.parse(n().getItem(r)||"{}")};return{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var r=JSON.stringify(e),n=a()[r];return Promise.all([n||t(),void 0!==n])})).then((function(e){var t=o(e,2),n=t[0],a=t[1];return Promise.all([n,a||r.miss(n)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var o=a();return o[JSON.stringify(e)]=t,n().setItem(r,JSON.stringify(o)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=a();delete t[JSON.stringify(e)],n().setItem(r,JSON.stringify(t))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function i(e){var t=a(e.caches),r=t.shift();return void 0===r?{get:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=t();return n.then((function(e){return Promise.all([e,r.miss(e)])})).then((function(e){return o(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(e,n,o).catch((function(){return i({caches:t}).get(e,n,o)}))},set:function(e,n){return r.set(e,n).catch((function(){return i({caches:t}).set(e,n)}))},delete:function(e){return r.delete(e).catch((function(){return i({caches:t}).delete(e)}))},clear:function(){return r.clear().catch((function(){return i({caches:t}).clear()}))}}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return{get:function(r,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);var u=n(),i=o&&o.miss||function(){return Promise.resolve()};return u.then((function(e){return i(e)})).then((function(){return u}))},set:function(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function c(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function l(e,t){return t?(Object.keys(t).forEach((function(r){e[r]=t[r](e)})),e):e}function f(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0;return e.replace(/%s/g,(function(){return encodeURIComponent(r[o++])}))}var h={WithinQueryParameters:0,WithinHeaders:1};function d(e,t){var r=e||{},n=r.data||{};return Object.keys(r).forEach((function(e){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(n[e]=r[e])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var m={Read:1,Write:2,Any:3},p=1,v=2,y=3;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return r(r({},e),{},{status:t,lastUpdate:Date.now()})}function b(e){return"string"==typeof e?{protocol:"https",url:e,accept:m.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||m.Any}}var O="GET",P="POST";function q(e,t){return Promise.all(t.map((function(t){return e.get(t,(function(){return Promise.resolve(g(t))}))}))).then((function(e){var r=e.filter((function(e){return function(e){return e.status===p||Date.now()-e.lastUpdate>12e4}(e)})),n=e.filter((function(e){return function(e){return e.status===y&&Date.now()-e.lastUpdate<=12e4}(e)})),o=[].concat(a(r),a(n));return{getTimeout:function(e,t){return(0===n.length&&0===e?1:n.length+3+e)*t},statelessHosts:o.length>0?o.map((function(e){return b(e)})):t}}))}function j(e,t,n,o){var u=[],i=function(e,t){if(e.method===O||void 0===e.data&&void 0===t.data)return;var n=Array.isArray(e.data)?e.data:r(r({},e.data),t.data);return JSON.stringify(n)}(n,o),s=function(e,t){var n=r(r({},e.headers),t.headers),o={};return Object.keys(n).forEach((function(e){var t=n[e];o[e.toLowerCase()]=t})),o}(e,o),c=n.method,l=n.method!==O?{}:r(r({},n.data),o.data),f=r(r(r({"x-algolia-agent":e.userAgent.value},e.queryParameters),l),o.queryParameters),h=0,d=function t(r,a){var l=r.pop();if(void 0===l)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:A(u)};var d={data:i,headers:s,method:c,url:S(l,n.path,f),connectTimeout:a(h,e.timeouts.connect),responseTimeout:a(h,o.timeout)},m=function(e){var t={request:d,response:e,host:l,triesLeft:r.length};return u.push(t),t},p={onSuccess:function(e){return function(e){try{return JSON.parse(e.content)}catch(t){throw function(e,t){return{name:"DeserializationError",message:e,response:t}}(t.message,e)}}(e)},onRetry:function(n){var o=m(n);return n.isTimedOut&&h++,Promise.all([e.logger.info("Retryable failure",x(o)),e.hostsCache.set(l,g(l,n.isTimedOut?y:v))]).then((function(){return t(r,a)}))},onFail:function(e){throw m(e),function(e,t){var r=e.content,n=e.status,o=r;try{o=JSON.parse(r).message}catch(e){}return function(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}(o,n,t)}(e,A(u))}};return e.requester.send(d).then((function(e){return function(e,t){return function(e){var t=e.status;return e.isTimedOut||function(e){var t=e.isTimedOut,r=e.status;return!t&&0==~~r}(e)||2!=~~(t/100)&&4!=~~(t/100)}(e)?t.onRetry(e):2==~~(e.status/100)?t.onSuccess(e):t.onFail(e)}(e,p)}))};return q(e.hostsCache,t).then((function(e){return d(a(e.statelessHosts).reverse(),e.getTimeout)}))}function w(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var r="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return-1===t.value.indexOf(r)&&(t.value="".concat(t.value).concat(r)),t}};return t}function S(e,t,r){var n=T(r),o="".concat(e.protocol,"://").concat(e.url,"/").concat("/"===t.charAt(0)?t.substr(1):t);return n.length&&(o+="?".concat(n)),o}function T(e){return Object.keys(e).map((function(t){return f("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function A(e){return e.map((function(e){return x(e)}))}function x(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},e),{},{request:r(r({},e.request),{},{headers:r(r({},e.request.headers),t)})})}var N=function(e){var t=e.appId,n=function(e,t,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:function(){return e===h.WithinHeaders?n:{}},queryParameters:function(){return e===h.WithinQueryParameters?n:{}}}}(void 0!==e.authMode?e.authMode:h.WithinHeaders,t,e.apiKey),a=function(e){var t=e.hostsCache,r=e.logger,n=e.requester,a=e.requestsCache,u=e.responsesCache,i=e.timeouts,s=e.userAgent,c=e.hosts,l=e.queryParameters,f={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:u,timeouts:i,userAgent:s,headers:e.headers,queryParameters:l,hosts:c.map((function(e){return b(e)})),read:function(e,t){var r=d(t,f.timeouts.read),n=function(){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Read)})),e,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return n();var a={request:e,mappedRequestOptions:r,transporter:{queryParameters:f.queryParameters,headers:f.headers}};return f.responsesCache.get(a,(function(){return f.requestsCache.get(a,(function(){return f.requestsCache.set(a,n()).then((function(e){return Promise.all([f.requestsCache.delete(a),e])}),(function(e){return Promise.all([f.requestsCache.delete(a),Promise.reject(e)])})).then((function(e){var t=o(e,2);t[0];return t[1]}))}))}),{miss:function(e){return f.responsesCache.set(a,e)}})},write:function(e,t){return j(f,f.hosts.filter((function(e){return 0!=(e.accept&m.Write)})),e,d(t,f.timeouts.write))}};return f}(r(r({hosts:[{url:"".concat(t,"-dsn.algolia.net"),accept:m.Read},{url:"".concat(t,".algolia.net"),accept:m.Write}].concat(c([{url:"".concat(t,"-1.algolianet.com")},{url:"".concat(t,"-2.algolianet.com")},{url:"".concat(t,"-3.algolianet.com")}]))},e),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),e.headers),queryParameters:r(r({},n.queryParameters()),e.queryParameters)}));return l({transporter:a,appId:t,addAlgoliaAgent:function(e,t){a.userAgent.add({segment:e,version:t})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},e.methods)},C=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:e.transporter,appId:e.appId,indexName:t};return l(n,r.methods)}},k=function(e){return function(t,n){var o=t.map((function(e){return r(r({},e),{},{params:T(e.params||{})})}));return e.transporter.read({method:P,path:"1/indexes/*/queries",data:{requests:o},cacheable:!0},n)}},J=function(e){return function(t,o){return Promise.all(t.map((function(t){var a=t.params,u=a.facetName,i=a.facetQuery,s=n(a,["facetName","facetQuery"]);return C(e)(t.indexName,{methods:{searchForFacetValues:F}}).searchForFacetValues(u,i,r(r({},o),s))})))}},E=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n)}},I=function(e){return function(t,r){return e.transporter.read({method:P,path:f("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r)}},F=function(e){return function(t,r,n){return e.transporter.read({method:P,path:f("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n)}},R=1,D=2,W=3;function H(e,t,n){var o,a={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:{send:function(e){return new Promise((function(t){var r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return r.setRequestHeader(t,e.headers[t])}));var n,o=function(e,n){return setTimeout((function(){r.abort(),t({status:0,content:n,isTimedOut:!0})}),1e3*e)},a=o(e.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(a),n=o(e.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(a),clearTimeout(n),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(a),clearTimeout(n),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)}))}},logger:(o=W,{debug:function(e,t){return R>=o&&console.debug(e,t),Promise.resolve()},info:function(e,t){return D>=o&&console.info(e,t),Promise.resolve()},error:function(e,t){return console.error(e,t),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:i({caches:[u({key:"".concat("4.10.2","-").concat(e)}),s()]}),userAgent:w("4.10.2").add({segment:"Browser",version:"lite"}),authMode:h.WithinQueryParameters};return N(r(r(r({},a),n),{},{methods:{search:k,searchForFacetValues:J,multipleQueries:k,multipleSearchForFacetValues:J,initIndex:function(e){return function(t){return C(e)(t,{methods:{search:I,searchForFacetValues:F,findAnswers:E}})}}}}))}return H.version="4.10.2",H}));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      loading: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["cart"])),
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    },
    textTruncate: function textTruncate(text) {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.textTruncate)(text, 100);
    },

    /*
       * Function to add product in cart
      */
    addProductToCart: function addProductToCart(item) {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        _this.loading = false;

        _this.$store.dispatch("addProductToCart", item);
      }, 2000);
      console.log(item);
    },

    /**
     * Find item exists or not in cart
     */
    ifItemExistInCart: function ifItemExistInCart(result) {
      var exists = false;

      var _iterator = _createForOfIteratorHelper(this.cart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.id == result.objectID) {
            exists = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return exists;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem */ "./resources/js/components/Shop/ProductItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductItem: _ProductItem__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    onPageChange: function onPageChange() {
      window.scrollTo(0, 0);
    },
    toggleEcommerceSidebar: function toggleEcommerceSidebar() {
      this.$store.dispatch("toggleEcommerceSidebarFilter", true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox */ "./resources/js/components/Shop/SearchBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SearchBox: _SearchBox__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Shop_ProductItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Shop/ProductItems */ "./resources/js/components/Shop/ProductItems.vue");
/* harmony import */ var Components_Shop_SidebarFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Shop/SidebarFilters */ "./resources/js/components/Shop/SidebarFilters.vue");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var instantsearch_css_themes_algolia_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! instantsearch.css/themes/algolia-min.css */ "./node_modules/instantsearch.css/themes/algolia-min.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()('latency', '6be0576ff61c053d5f9a3225e2a90f76');
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductItems: Components_Shop_ProductItems__WEBPACK_IMPORTED_MODULE_0__.default,
    SidebarFilters: Components_Shop_SidebarFilters__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      searchClient: searchClient
    };
  },
  computed: {
    ecommerceSidebarFilter: {
      get: function get() {
        return this.$store.getters.ecommerceSidebarFilter;
      },
      set: function set(val) {
        this.$store.dispatch("toggleEcommerceSidebarFilter", val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/instantsearch.css/themes/algolia-min.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/instantsearch.css/themes/algolia-min.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".ais-Breadcrumb-list,.ais-CurrentRefinements-list,.ais-HierarchicalMenu-list,.ais-Hits-list,.ais-InfiniteHits-list,.ais-InfiniteResults-list,.ais-Menu-list,.ais-NumericMenu-list,.ais-Pagination-list,.ais-RatingMenu-list,.ais-RefinementList-list,.ais-Results-list,.ais-ToggleRefinement-list{margin:0;padding:0;list-style:none}.ais-ClearRefinements-button,.ais-CurrentRefinements-delete,.ais-CurrentRefinements-reset,.ais-GeoSearch-redo,.ais-GeoSearch-reset,.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-InfiniteResults-loadMore,.ais-Menu-showMore,.ais-RangeInput-submit,.ais-RefinementList-showMore,.ais-SearchBox-reset,.ais-SearchBox-submit,.ais-VoiceSearch-button{padding:0;overflow:visible;font:inherit;line-height:normal;color:inherit;background:none;border:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ais-ClearRefinements-button::-moz-focus-inner,.ais-CurrentRefinements-delete::-moz-focus-inner,.ais-CurrentRefinements-reset::-moz-focus-inner,.ais-GeoSearch-redo::-moz-focus-inner,.ais-GeoSearch-reset::-moz-focus-inner,.ais-HierarchicalMenu-showMore::-moz-focus-inner,.ais-InfiniteHits-loadMore::-moz-focus-inner,.ais-InfiniteHits-loadPrevious::-moz-focus-inner,.ais-InfiniteResults-loadMore::-moz-focus-inner,.ais-Menu-showMore::-moz-focus-inner,.ais-RangeInput-submit::-moz-focus-inner,.ais-RefinementList-showMore::-moz-focus-inner,.ais-SearchBox-reset::-moz-focus-inner,.ais-SearchBox-submit::-moz-focus-inner,.ais-VoiceSearch-button::-moz-focus-inner{padding:0;border:0}.ais-ClearRefinements-button[disabled],.ais-CurrentRefinements-delete[disabled],.ais-CurrentRefinements-reset[disabled],.ais-GeoSearch-redo[disabled],.ais-GeoSearch-reset[disabled],.ais-HierarchicalMenu-showMore[disabled],.ais-InfiniteHits-loadMore[disabled],.ais-InfiniteHits-loadPrevious[disabled],.ais-InfiniteResults-loadMore[disabled],.ais-Menu-showMore[disabled],.ais-RangeInput-submit[disabled],.ais-RefinementList-showMore[disabled],.ais-SearchBox-reset[disabled],.ais-SearchBox-submit[disabled],.ais-VoiceSearch-button[disabled]{cursor:default}.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-Menu-showMore,.ais-RefinementList-showMore{overflow-anchor:none}.ais-Breadcrumb-item,.ais-Breadcrumb-list,.ais-Pagination-list,.ais-PoweredBy,.ais-RangeInput-form,.ais-RatingMenu-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ais-GeoSearch,.ais-GeoSearch-map{height:100%}.ais-HierarchicalMenu-list .ais-HierarchicalMenu-list{margin-left:1em}.ais-PoweredBy-logo{display:block;height:1.2em;width:auto}.ais-RatingMenu-starIcon{display:block;width:20px;height:20px}.ais-SearchBox-input::-ms-clear,.ais-SearchBox-input::-ms-reveal{display:none;width:0;height:0}.ais-SearchBox-input::-webkit-search-cancel-button,.ais-SearchBox-input::-webkit-search-decoration,.ais-SearchBox-input::-webkit-search-results-button,.ais-SearchBox-input::-webkit-search-results-decoration{display:none}.ais-RangeSlider .rheostat{overflow:visible;margin-top:40px;margin-bottom:40px}.ais-RangeSlider .rheostat-background{height:6px;top:0;width:100%}.ais-RangeSlider .rheostat-handle{margin-left:-12px;top:-7px}.ais-RangeSlider .rheostat-background{position:relative;background-color:#fff;border:1px solid #aaa}.ais-RangeSlider .rheostat-progress{position:absolute;top:1px;height:4px;background-color:#333}.rheostat-handle{position:relative;z-index:1;width:20px;height:20px;background-color:#fff;border:1px solid #333;border-radius:50%;cursor:-webkit-grab;cursor:grab}.rheostat-marker{margin-left:-1px;position:absolute;width:1px;height:5px;background-color:#aaa}.rheostat-marker--large{height:9px}.rheostat-value{padding-top:15px}.rheostat-tooltip,.rheostat-value{margin-left:50%;position:absolute;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.rheostat-tooltip{top:-22px}[class^=ais-]{font-size:1rem;box-sizing:border-box}a[class^=ais-]{text-decoration:none}.ais-Breadcrumb,.ais-ClearRefinements,.ais-CurrentRefinements,.ais-GeoSearch,.ais-HierarchicalMenu,.ais-Hits,.ais-HitsPerPage,.ais-InfiniteHits,.ais-InfiniteResults,.ais-Menu,.ais-MenuSelect,.ais-NumericMenu,.ais-NumericSelector,.ais-Pagination,.ais-Panel,.ais-PoweredBy,.ais-RangeInput,.ais-RangeSlider,.ais-RatingMenu,.ais-RefinementList,.ais-Results,.ais-ResultsPerPage,.ais-SearchBox,.ais-SortBy,.ais-Stats,.ais-ToggleRefinement{color:#3a4570}.ais-Breadcrumb-item--selected,.ais-HierarchicalMenu-item--selected,.ais-Menu-item--selected{font-weight:700}.ais-Breadcrumb-separator{margin:0 .3em;font-weight:400}.ais-Breadcrumb-link,.ais-HierarchicalMenu-link,.ais-Menu-link,.ais-Pagination-link,.ais-RatingMenu-link{color:#0096db;transition:color .2s ease-out}.ais-Breadcrumb-link:focus,.ais-Breadcrumb-link:hover,.ais-HierarchicalMenu-link:focus,.ais-HierarchicalMenu-link:hover,.ais-Menu-link:focus,.ais-Menu-link:hover,.ais-Pagination-link:focus,.ais-Pagination-link:hover,.ais-RatingMenu-link:focus,.ais-RatingMenu-link:hover{color:#0073a8}.ais-ClearRefinements-button,.ais-CurrentRefinements-reset,.ais-GeoSearch-redo,.ais-GeoSearch-reset,.ais-HierarchicalMenu-showMore,.ais-InfiniteHits-loadMore,.ais-InfiniteHits-loadPrevious,.ais-InfiniteResults-loadMore,.ais-Menu-showMore,.ais-RefinementList-showMore{padding:.3rem .5rem;font-size:.8rem;color:#fff;background-color:#0096db;border-radius:5px;transition:background-color .2s ease-out;outline:none}.ais-ClearRefinements-button:focus,.ais-ClearRefinements-button:hover,.ais-CurrentRefinements-reset:focus,.ais-CurrentRefinements-reset:hover,.ais-GeoSearch-redo:focus,.ais-GeoSearch-redo:hover,.ais-GeoSearch-reset:focus,.ais-GeoSearch-reset:hover,.ais-HierarchicalMenu-showMore:focus,.ais-HierarchicalMenu-showMore:hover,.ais-InfiniteHits-loadMore:focus,.ais-InfiniteHits-loadMore:hover,.ais-InfiniteHits-loadPrevious:focus,.ais-InfiniteHits-loadPrevious:hover,.ais-InfiniteResults-loadMore:focus,.ais-InfiniteResults-loadMore:hover,.ais-Menu-showMore:focus,.ais-Menu-showMore:hover,.ais-RefinementList-showMore:focus,.ais-RefinementList-showMore:hover{background-color:#0073a8}.ais-ClearRefinements-button--disabled,.ais-GeoSearch-redo--disabled,.ais-GeoSearch-reset--disabled,.ais-HierarchicalMenu-showMore--disabled,.ais-InfiniteHits-loadMore--disabled,.ais-InfiniteResults-loadMore--disabled,.ais-Menu-showMore--disabled,.ais-RefinementList-showMore--disabled{opacity:.6;cursor:not-allowed}.ais-ClearRefinements-button--disabled:focus,.ais-ClearRefinements-button--disabled:hover,.ais-GeoSearch-redo--disabled:focus,.ais-GeoSearch-redo--disabled:hover,.ais-GeoSearch-reset--disabled:focus,.ais-GeoSearch-reset--disabled:hover,.ais-HierarchicalMenu-showMore--disabled:focus,.ais-HierarchicalMenu-showMore--disabled:hover,.ais-InfiniteHits-loadMore--disabled:focus,.ais-InfiniteHits-loadMore--disabled:hover,.ais-InfiniteResults-loadMore--disabled:focus,.ais-InfiniteResults-loadMore--disabled:hover,.ais-Menu-showMore--disabled:focus,.ais-Menu-showMore--disabled:hover,.ais-RefinementList-showMore--disabled:focus,.ais-RefinementList-showMore--disabled:hover{background-color:#0096db}.ais-InfiniteHits-loadPrevious--disabled{display:none}.ais-CurrentRefinements{margin-top:-.3rem}.ais-CurrentRefinements,.ais-CurrentRefinements-list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.ais-CurrentRefinements-item{margin-right:.3rem;margin-top:.3rem;padding:.3rem .5rem;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#495588;border-radius:5px}.ais-CurrentRefinements-category{margin-left:.3em;display:-webkit-box;display:-ms-flexbox;display:flex}.ais-CurrentRefinements-delete{margin-left:.3rem}.ais-CurrentRefinements-categoryLabel,.ais-CurrentRefinements-delete,.ais-CurrentRefinements-label{white-space:nowrap;font-size:.8rem;color:#fff}.ais-CurrentRefinements-reset{margin-top:.3rem;white-space:nowrap}.ais-CurrentRefinements-reset+.ais-CurrentRefinements-list{margin-left:.3rem}.ais-GeoSearch{position:relative}.ais-GeoSearch-control{position:absolute;top:.8rem;left:3.75rem}.ais-GeoSearch-label{display:block;padding:.3rem .5rem;font-size:.8rem;background-color:#fff;border-radius:5px;transition:background-color .2s ease-out;box-shadow:0 1px 1px rgba(0,0,0,.1);outline:none}.ais-GeoSearch-input{margin:0 .25rem 0 0}.ais-GeoSearch-label,.ais-GeoSearch-redo,.ais-GeoSearch-reset{white-space:nowrap}.ais-GeoSearch-reset{position:absolute;bottom:1.25rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ais-HierarchicalMenu-link,.ais-Menu-link{display:block;line-height:1.5}.ais-HierarchicalMenu-list,.ais-Menu-list,.ais-NumericMenu-list,.ais-RatingMenu-list,.ais-RefinementList-list{font-weight:400;line-height:1.5}.ais-HierarchicalMenu-link:after{margin-left:.3em;content:\"\";width:10px;height:10px;display:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7.3 24l-2.8-2.8 9.3-9.2-9.3-9.2L7.3 0l12.2 12z' fill='%233A4570'/%3E%3C/svg%3E\");background-size:100% 100%}.ais-HierarchicalMenu-item--parent>.ais-HierarchicalMenu-link:after{display:inline-block}.ais-HierarchicalMenu-item--selected>.ais-HierarchicalMenu-link:after{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ais-CurrentRefinements-count,.ais-RatingMenu-count{font-size:.8rem}.ais-CurrentRefinements-count:before,.ais-RatingMenu-count:before{content:\"(\"}.ais-CurrentRefinements-count:after,.ais-RatingMenu-count:after{content:\")\"}.ais-HierarchicalMenu-count,.ais-Menu-count,.ais-RefinementList-count,.ais-ToggleRefinement-count{padding:.1rem .4rem;font-size:.8rem;color:#3a4570;background-color:#dfe2ee;border-radius:8px}.ais-HierarchicalMenu-showMore,.ais-Menu-showMore,.ais-RefinementList-showMore{margin-top:.5rem}.ais-Highlight-highlighted,.ais-Snippet-highlighted{background-color:#ffc168}.ais-Hits-list,.ais-InfiniteHits-list,.ais-InfiniteResults-list,.ais-Results-list{margin-top:-1rem;margin-left:-1rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.ais-Panel-body .ais-Hits-list,.ais-Panel-body .ais-InfiniteHits-list,.ais-Panel-body .ais-InfiniteResults-list,.ais-Panel-body .ais-Results-list{margin:.5rem 0 0 -1rem}.ais-Hits-item,.ais-InfiniteHits-item,.ais-InfiniteResults-item,.ais-Results-item{margin-top:1rem;margin-left:1rem;padding:1rem;width:calc(25% - 1rem);border:1px solid #c4c8d8;box-shadow:0 2px 5px 0 #e3e5ec}.ais-Panel-body .ais-Hits-item,.ais-Panel-body .ais-InfiniteHits-item,.ais-Panel-body .ais-InfiniteResults-item,.ais-Panel-body .ais-Results-item{margin:.5rem 0 .5rem 1rem}.ais-InfiniteHits-loadMore,.ais-InfiniteResults-loadMore{margin-top:1rem}.ais-InfiniteHits-loadPrevious{margin-bottom:1rem}.ais-HitsPerPage-select,.ais-MenuSelect-select,.ais-NumericSelector-select,.ais-ResultsPerPage-select,.ais-SortBy-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:.3rem 2rem .3rem .3rem;max-width:100%;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.3l2.8-2.8 9.2 9.3 9.2-9.3L24 7.3 12 19.5z' fill='%233A4570'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:10px 10px;background-position:92% 50%;border:1px solid #c4c8d8;border-radius:5px}.ais-Panel--collapsible{position:relative}.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-body,.ais-Panel--collapsible.ais-Panel--collapsed .ais-Panel-footer{display:none}.ais-Panel--collapsible .ais-Panel-collapseButton{position:absolute;top:0;right:0;padding:0;border:none;background:none}.ais-Panel-header{margin-bottom:.5rem;padding-bottom:.5rem;font-size:.8rem;font-weight:700;text-transform:uppercase;border-bottom:1px solid #c4c8d8}.ais-Panel-footer{margin-top:.5rem;font-size:.8rem}.ais-RangeInput-input{padding:0 .2rem;width:5rem;height:1.5rem;line-height:1.5rem}.ais-RangeInput-separator{margin:0 .3rem}.ais-RangeInput-submit{margin-left:.3rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 .5rem;height:1.5rem;line-height:1.5rem;font-size:.8rem;color:#fff;background-color:#0096db;border:none;border-radius:5px;transition:.2s ease-out;outline:none}.ais-RangeInput-submit:focus,.ais-RangeInput-submit:hover{background-color:#0073a8}.ais-RatingMenu-count{color:#3a4570}.ais-Pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ais-Pagination-item+.ais-Pagination-item{margin-left:.3rem}.ais-Pagination-link{padding:.3rem .6rem;display:block;border:1px solid #c4c8d8;border-radius:5px;transition:background-color .2s ease-out}.ais-Pagination-link:focus,.ais-Pagination-link:hover{background-color:#e3e5ec}.ais-Pagination-item--disabled .ais-Pagination-link{opacity:.6;cursor:not-allowed;color:#a5abc4}.ais-Pagination-item--disabled .ais-Pagination-link:focus,.ais-Pagination-item--disabled .ais-Pagination-link:hover{color:#a5abc4;background-color:#fff}.ais-Pagination-item--selected .ais-Pagination-link{color:#fff;background-color:#0096db;border-color:#0096db}.ais-Pagination-item--selected .ais-Pagination-link:focus,.ais-Pagination-item--selected .ais-Pagination-link:hover{color:#fff}.ais-PoweredBy-text,.ais-Stats-text,.rheostat-tooltip,.rheostat-value{font-size:.8rem}.ais-PoweredBy-logo{margin-left:.3rem}.ais-RangeSlider .rheostat-progress{background-color:#495588}.ais-RangeSlider .rheostat-background{border-color:#878faf;box-sizing:border-box}.ais-RangeSlider .rheostat-handle{border-color:#878faf}.ais-RangeSlider .rheostat-marker{background-color:#878faf}.ais-Panel-body .ais-RangeSlider{margin:2rem 0}.ais-RangeSlider-handle{width:20px;height:20px;position:relative;z-index:1;background:#fff;border:1px solid #46aeda;border-radius:50%;cursor:pointer}.ais-RangeSlider-tooltip{position:absolute;background:#fff;top:-22px;font-size:.8em}.ais-RangeSlider-value{width:40px;position:absolute;text-align:center;margin-left:-20px;padding-top:15px;font-size:.8em}.ais-RangeSlider-marker{position:absolute;background:#ddd;margin-left:-1px;width:1px;height:5px}.ais-RatingMenu-item--disabled .ais-RatingMenu-count,.ais-RatingMenu-item--disabled .ais-RatingMenu-label{color:#c4c8d8}.ais-RatingMenu-item--selected{font-weight:700}.ais-RatingMenu-link{line-height:1.5}.ais-RatingMenu-link>*+*{margin-left:.3rem}.ais-RatingMenu-starIcon{position:relative;top:-1px;width:15px;fill:#ffc168}.ais-RatingMenu-item--disabled .ais-RatingMenu-starIcon{fill:#c4c8d8}.ais-HierarchicalMenu-searchBox>*,.ais-Menu-searchBox>*,.ais-RefinementList-searchBox>*{margin-bottom:.5rem}.ais-SearchBox-form{display:block;position:relative}.ais-SearchBox-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:.3rem 1.7rem;width:100%;position:relative;background-color:#fff;border:1px solid #c4c8d8;border-radius:5px}.ais-SearchBox-input::-webkit-input-placeholder{color:#a5aed1}.ais-SearchBox-input::-moz-placeholder{color:#a5aed1}.ais-SearchBox-input:-ms-input-placeholder{color:#a5aed1}.ais-SearchBox-input:-moz-placeholder{color:#a5aed1}.ais-SearchBox-loadingIndicator,.ais-SearchBox-reset,.ais-SearchBox-submit{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;z-index:1;width:20px;height:20px;top:50%;right:.3rem;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ais-SearchBox-submit{left:.3rem}.ais-SearchBox-reset{right:.3rem}.ais-SearchBox-loadingIcon,.ais-SearchBox-resetIcon,.ais-SearchBox-submitIcon{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.ais-SearchBox-resetIcon path,.ais-SearchBox-submitIcon path{fill:#495588}.ais-SearchBox-submitIcon{width:14px;height:14px}.ais-SearchBox-resetIcon{width:12px;height:12px}.ais-SearchBox-loadingIcon{width:16px;height:16px}.ais-VoiceSearch-button{border:none;width:24px;height:24px;padding:4px;border-radius:50%;color:#3a4570;background-color:transparent}.ais-VoiceSearch-button svg{color:currentColor}.ais-VoiceSearch-button:hover{cursor:pointer;background-color:#a5aed1;color:#fff}.ais-VoiceSearch-button:disabled{color:#a5aed1}.ais-VoiceSearch-button:disabled:hover{color:#a5aed1;cursor:not-allowed;background:inherit}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/instantsearch.css/themes/algolia-min.css":
/*!***************************************************************!*\
  !*** ./node_modules/instantsearch.css/themes/algolia-min.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_algolia_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./algolia-min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/instantsearch.css/themes/algolia-min.css");
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_algolia_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_algolia_min_css__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_algolia_min_css__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ __webpack_exports__["default"] = ((_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_algolia_min_css__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./resources/js/components/Shop/ProductItem.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Shop/ProductItem.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=template&id=42487e58& */ "./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58&");
/* harmony import */ var _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/ProductItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/ProductItems.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Shop/ProductItems.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItems.vue?vue&type=template&id=0047facf& */ "./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf&");
/* harmony import */ var _ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItems.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/ProductItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/SearchBox.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Shop/SearchBox.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox.vue?vue&type=template&id=5187b935& */ "./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/SearchBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/SidebarFilters.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Shop/SidebarFilters.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarFilters.vue?vue&type=template&id=95fb6986& */ "./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986&");
/* harmony import */ var _SidebarFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarFilters.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SidebarFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/SidebarFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ecommerce/ShopWithAlgolia.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/ecommerce/ShopWithAlgolia.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopWithAlgolia.vue?vue&type=template&id=6cfae412& */ "./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412&");
/* harmony import */ var _ShopWithAlgolia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopWithAlgolia.vue?vue&type=script&lang=js& */ "./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShopWithAlgolia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ecommerce/ShopWithAlgolia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopWithAlgolia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShopWithAlgolia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopWithAlgolia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_42487e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItem.vue?vue&type=template&id=42487e58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58&");


/***/ }),

/***/ "./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_0047facf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItems.vue?vue&type=template&id=0047facf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf&");


/***/ }),

/***/ "./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_5187b935___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBox.vue?vue&type=template&id=5187b935& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935&");


/***/ }),

/***/ "./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarFilters_vue_vue_type_template_id_95fb6986___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarFilters.vue?vue&type=template&id=95fb6986& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986&");


/***/ }),

/***/ "./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopWithAlgolia_vue_vue_type_template_id_6cfae412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShopWithAlgolia.vue?vue&type=template&id=6cfae412& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItem.vue?vue&type=template&id=42487e58& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "app-card",
    { attrs: { customClasses: "product-item", footer: true } },
    [
      _c("h5", { staticClass: "mb-2" }, [_vm._v(_vm._s(_vm.data.name))]),
      _vm._v(" "),
      _c("div", { staticClass: "overlay-wrap pos-relative mb-5" }, [
        _c("img", {
          staticClass: "img-responsive",
          attrs: { src: _vm.data.image, height: "220", width: "220" }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "overlay-content primary lighten-2 d-custom-flex justify-center align-items-center"
          },
          [
            _vm.ifItemExistInCart(_vm.data)
              ? _c(
                  "v-btn",
                  {
                    staticClass: "ma-0 warning",
                    attrs: {
                      to:
                        "/" +
                        (_vm.getCurrentAppLayoutHandler() + "/ecommerce/cart"),
                      small: ""
                    }
                  },
                  [_vm._v("\n\t\t\t\t\tView Cart\n\t\t\t\t")]
                )
              : _c(
                  "v-btn",
                  {
                    staticClass: "ma-0 light",
                    attrs: {
                      loading: _vm.loading,
                      disabled: _vm.loading,
                      small: ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.addProductToCart(_vm.data)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\tAdd To Cart\n\t\t\t\t")]
                )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "product-info" }, [
        _c("span", { staticClass: "error--text fw-semi-bold d-block mb-2" }, [
          _vm._v("$" + _vm._s(_vm.data.price))
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "fs-12 fw-normal grey--text d-block mb-2" }, [
          _vm._v(_vm._s(_vm.data.category))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "fs-14 mb-0" }, [
          _vm._v(_vm._s(_vm.textTruncate(_vm.data.description)))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "justify-space-between d-custom-flex align-items-center",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "a",
            {
              staticClass: "primary--text fs-14",
              attrs: { href: "javascript:void(0)" }
            },
            [_vm._v("Show details")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            { staticClass: "ma-0", attrs: { icon: "" } },
            [
              _c("v-icon", { staticClass: "grey--text" }, [_vm._v("more_vert")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/ProductItems.vue?vue&type=template&id=0047facf& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shop-content-wrap px-2" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-custom-flex justify-space-between align-items-center mb-1"
        },
        [
          _c("div", { staticClass: "shop-header d-custom-flex" }, [
            _c(
              "div",
              { staticClass: "ham-menu-sm d-none" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-3 my-0",
                    attrs: { text: "", icon: "" },
                    on: { click: _vm.toggleEcommerceSidebar }
                  },
                  [
                    _c("v-icon", { staticClass: "grey--text" }, [
                      _vm._v("menu")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "app-selectbox-sm" },
              [
                _c("ais-sort-by", {
                  attrs: {
                    items: [
                      { value: "ikea", label: "Default" },
                      { value: "ikea_price_asc", label: "Lowest price" },
                      { value: "ikea_price_desc", label: "Highest price" }
                    ]
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "app-selectbox-sm ml-4" },
              [
                _c("ais-hits-per-page", {
                  attrs: {
                    items: [
                      { label: "9 hits per page", value: 8 },
                      { label: "12 hits per page", value: 12, default: true },
                      { label: "15 hits per page", value: 16 }
                    ]
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("ais-stats")
        ],
        1
      ),
      _vm._v(" "),
      _c("ais-hits", {
        staticClass: "layout row wrap mb-12",
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [_c("product-item", { attrs: { data: item } })]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pagination-wrap" },
        [
          _c("ais-pagination", {
            staticClass: "mb-5",
            attrs: {
              classNames: {
                "ais-pagination": "pagination",
                "ais-pagination__item": "pagination__item",
                "ais-pagination__item--active":
                  "pagination__item--active primary",
                "ais-pagination__item--previous": "pagination__navigation",
                "ais-pagination__item--next": "pagination__navigation",
                "ais-pagination__item--disabled": "disabled"
              }
            },
            on: { "page-change": _vm.onPageChange }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SearchBox.vue?vue&type=template&id=5187b935& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("ais-search-box", {
        staticClass: "border input-group",
        attrs: { placeholder: "Search product" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/SidebarFilters.vue?vue&type=template&id=95fb6986& ***!
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
    { staticClass: "sidebar-filter-wrap" },
    [
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [_c("SearchBox")],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [
          _c("h6", [_vm._v("CATEGORY")]),
          _vm._v(" "),
          _c("ais-refinement-list", {
            attrs: { attribute: "category", limit: 5 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [
          _c("h6", [_vm._v("PRICE")]),
          _vm._v(" "),
          _c("ais-range-input", {
            attrs: { attribute: "price", min: 10, max: 50 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [
          _c("h6", [_vm._v("MATERIAL")]),
          _vm._v(" "),
          _c("ais-refinement-list", {
            attrs: { attribute: "materials", limit: 5 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [
          _c("h6", [_vm._v("COLOR")]),
          _vm._v(" "),
          _c("ais-refinement-list", {
            attrs: { attribute: "colors", limit: 5 }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [
          _c("h6", [_vm._v("RATING")]),
          _vm._v(" "),
          _c("ais-rating-menu", { attrs: { attribute: "rating" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-card",
        { attrs: { customClasses: "mb-5" } },
        [_c("ais-clear-refinements")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/ShopWithAlgolia.vue?vue&type=template&id=6cfae412& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shop-wrapper" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "px-4 py-0 grid-list-xl mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "ais-instant-search",
            {
              attrs: { "search-client": _vm.searchClient, "index-name": "ikea" }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { xl: "9", lg: "9", md: "9", sm: "12", cols: "12" }
                    },
                    [_c("product-items")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "shop-filter",
                      attrs: { xl: "3", lg: "3", md: "3", sm: "0", xs: "0" }
                    },
                    [_c("sidebar-filters")],
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