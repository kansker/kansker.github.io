(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_crm_Clients_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['clientData'],
  data: function data() {
    return {
      active: null,
      selectItemToDelete: null,
      selectedTabName: null,
      selectItemToEdit: null,
      open: false,
      editName: "",
      editEmail: "",
      editPhoneNo: "",
      editLocation: "",
      tabHead: [{
        key: "all",
        tab_name: 'allClients'
      }, {
        key: "favourite",
        tab_name: 'favourite'
      }, {
        key: "recently_added",
        tab_name: 'recentlyAdded'
      }]
    };
  },
  methods: {
    onDeleteClients: function onDeleteClients(item) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectItemToDelete = item;
    },
    deleteClientItem: function deleteClientItem() {
      this.$refs.deleteConfirmationDialog.close();
      var deletedClient = this.clientData.Clients;
      var index = deletedClient.indexOf(this.selectItemToDelete);
      deletedClient.splice(index, 1);
    },
    onEditClients: function onEditClients(item) {
      this.openDialog();
      this.editName = item.name;
      this.editEmail = item.e_mail;
      this.editPhoneNo = item.phone_number;
      this.editLocation = item.country;
      this.selectItemToEdit = item;
    },
    editClientItem: function editClientItem() {
      var editClient = this.clientData.Clients;
      var index = editClient.indexOf(this.selectItemToEdit);
      editClient[index].name = this.editName;
      editClient[index].e_mail = this.editEmail;
      editClient[index].phone_number = this.editPhoneNo;
      editClient[index].country = this.editLocation;
      this.close();
    },
    openDialog: function openDialog() {
      this.open = true;
    },
    close: function close() {
      this.open = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_ClientsDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/ClientsDetails */ "./resources/js/components/Widgets/ClientsDetails.vue");
/* harmony import */ var Views_crm_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Views/crm/data.js */ "./resources/js/views/crm/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ClientsDetails: Components_Widgets_ClientsDetails__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      clientData: Views_crm_data_js__WEBPACK_IMPORTED_MODULE_1__.clientData,
      open: false,
      editName: '',
      editEmail: '',
      editPhoneNo: '',
      editLocation: ''
    };
  },
  methods: {
    openDialog: function openDialog() {
      this.open = true;
    },
    close: function close() {
      this.open = false;
    },
    addClient: function addClient() {
      this.openDialog();
      var clientsArr = Views_crm_data_js__WEBPACK_IMPORTED_MODULE_1__.clientData.Clients;
      var newClient = {
        image: "/static/avatars/user-1.jpg",
        name: this.editName,
        e_mail: this.editEmail,
        phone_number: this.editPhoneNo,
        country: this.editLocation,
        tag: "recently_added"
      };
      clientsArr.push(newClient);
      this.editName = '';
      this.editEmail = '';
      this.editPhoneNo = '';
      this.editLocation = '';
      this.close();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/crm/data.js":
/*!****************************************!*\
  !*** ./resources/js/views/crm/data.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabsAndTableDetails": function() { return /* binding */ tabsAndTableDetails; },
/* harmony export */   "clientData": function() { return /* binding */ clientData; },
/* harmony export */   "paymentDetails": function() { return /* binding */ paymentDetails; },
/* harmony export */   "taxRatesDetails": function() { return /* binding */ taxRatesDetails; }
/* harmony export */ });
var tabsAndTableDetails = {
  'transactionListDetails': [{
    transid: "#trn001",
    date: "19 Aug 2018",
    account: "Citibank",
    type: "Saving",
    typeColor: "primary",
    amount: "$2000",
    debit: "$1,807.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn002",
    date: "22 Mar 2018",
    account: "Standard Chartered Bank",
    type: "Income",
    typeColor: "info",
    amount: "$500",
    debit: "$1,307.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn003",
    date: "30 Sep 2018",
    account: "HSBC Bank",
    type: "Expense",
    typeColor: "error",
    amount: "$1500",
    debit: "$2,307.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn004",
    date: "20 Aug 2018",
    account: "Deutsche Bank",
    type: "Income",
    typeColor: "info",
    amount: "$1700",
    debit: "$3,307.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn005",
    date: "13 Jan 2018",
    account: "Bank of Scotland",
    type: "Saving",
    typeColor: "primary",
    amount: "$1290",
    debit: "$1,000.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn006",
    date: "13 Jan 2018",
    account: "Barclays Bank",
    type: "Income",
    typeColor: "info",
    amount: "$1290",
    debit: "$1,500.00",
    credit: "$0.00",
    balance: "$0.00"
  }, {
    transid: "#trn007",
    date: "13 Jan 2018",
    account: "The Bank of America",
    type: "Expense",
    typeColor: "error",
    amount: "$1290",
    debit: "$1,709.00",
    credit: "$0.00",
    balance: "$0.00"
  }],
  'expenseCategoryDetails': [{
    itmNo: "#itm001",
    date: "19 Aug 2018",
    type: "Hotel",
    typeColor: "primary",
    description: "Hotel charges",
    amount: "$2000",
    statusColor: 'primary',
    status: "paid"
  }, {
    itmNo: "#itm002",
    date: "22 Mar 2018",
    type: "Meal",
    typeColor: "info",
    description: "food delivery charges",
    amount: "$500",
    statusColor: 'primary',
    status: "paid"
  }, {
    itmNo: "#itm003",
    date: "30 Sep 2018",
    type: "car rental",
    typeColor: "primary",
    description: "car service bill",
    amount: "$1500",
    statusColor: 'error',
    status: "not paid"
  }, {
    itmNo: "#itm004",
    date: "20 Aug 2018",
    type: "Health",
    typeColor: "info",
    description: "Hospital bill",
    amount: "$1700",
    statusColor: 'primary',
    status: "paid"
  }, {
    itmNo: "#itm005",
    date: "13 Jan 2018",
    type: "accommodation",
    typeColor: "primary",
    description: "House rent",
    amount: "$1290",
    statusColor: 'error',
    status: "Not paid"
  }, {
    itmNo: "#itm006",
    date: "24 Mar 2018",
    type: "Meal",
    typeColor: "info",
    description: "food delivery charges",
    amount: "$500",
    statusColor: 'primary',
    status: "paid"
  }, {
    itmNo: "#itm007",
    date: "30 Jan 2019",
    type: "accommodation",
    typeColor: "primary",
    description: "House rent",
    amount: "$1290",
    statusColor: 'error',
    status: "Not paid"
  }],
  'transferReport': [{
    transid: "#trn001",
    date: "19 Aug 2018",
    account: "Citibank",
    type: "Saving",
    typeColor: "primary",
    amount: "$2000",
    balance: "$1,807.00",
    statusColor: 'primary',
    status: "Send"
  }, {
    transid: "#trn002",
    date: "22 Mar 2018",
    account: "Standard Chartered Bank",
    type: "Income",
    typeColor: "info",
    amount: "$500",
    balance: "$1,807.00",
    statusColor: 'error',
    status: "Not Send"
  }, {
    transid: "#trn003",
    date: "30 Sep 2018",
    account: "HSBC Bank",
    type: "Expense",
    typeColor: "error",
    amount: "$1500",
    balance: "$1,807.00",
    statusColor: 'primary',
    status: "Send"
  }, {
    transid: "#trn004",
    date: "20 Aug 2018",
    account: "Deutsche Bank",
    type: "Income",
    typeColor: "info",
    amount: "$1700",
    balance: "$1,807.00",
    statusColor: 'primary',
    status: "Send"
  }, {
    transid: "#trn005",
    date: "13 Jan 2018",
    account: "Bank of Scotland",
    type: "Saving",
    typeColor: "primary",
    amount: "$1290",
    balance: "$1,807.00",
    statusColor: 'error',
    status: "Not Send"
  }, {
    transid: "#trn006",
    date: "13 Jan 2018",
    account: "Barclays Bank",
    type: "Income",
    typeColor: "accent",
    amount: "$1290",
    balance: "$1,807.00",
    statusColor: 'primary',
    status: "Send"
  }, {
    transid: "#trn007",
    date: "13 Jan 2018",
    account: "The Bank of America",
    type: "Expense",
    typeColor: "error",
    amount: "$1290",
    balance: "$1,807.00",
    statusColor: 'error',
    status: "Not Send"
  }]
};
var clientData = {
  'Clients': [{
    image: "/static/avatars/user-1.jpg",
    name: "Jerry Ried",
    e_mail: "JerryBRied@jourrapide.com",
    phone_number: "+1 207-589-4752",
    country: "Liberty",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-4.jpg",
    name: "Julie Reno",
    e_mail: "JulieDReno@dayrep.com",
    phone_number: "+1 956-303-4288",
    country: "Harlingen",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-2.jpg",
    name: "Gustavo Stevenson",
    e_mail: "GustavoJStevenson@rhyta.com",
    phone_number: "+1 727-709-5505",
    country: "Tampa",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-3.jpg",
    name: "David Jones",
    e_mail: "DavidDJones@jourrapide.com",
    phone_number: "+1 407-343-1604",
    country: "Kissimmee",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-3.jpg",
    name: "John Shrum",
    e_mail: "JohnLShrum@jourrapide.com ",
    phone_number: "+1 650-722-2798",
    country: "San Francisco",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-4.jpg",
    name: "Hayden Bower",
    e_mail: "HaydenMBower@armyspy.com",
    phone_number: "+1 601-298-5772",
    country: "Carthage",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-1.jpg",
    name: "Cathy Hagood",
    e_mail: "CathyWHagood@jourrapide.com",
    phone_number: "+1 325-660-7801",
    country: "Abilene",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-8.jpg",
    name: "John Shrum",
    e_mail: "JohnLShrum@jourrapide.com ",
    phone_number: "+1 650-722-2798",
    country: "San Francisco",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-2.jpg",
    name: "Anna Estes",
    e_mail: "AnnaLEstes@armyspy.com",
    phone_number: "+1 808-652-9469",
    country: "Waipahu",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-7.jpg",
    name: "Anna Estes",
    e_mail: "AnnaLEstes@armyspy.com",
    phone_number: "+1 808-652-9469",
    country: "Waipahu",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-3.jpg",
    name: "Mary Perez",
    e_mail: "MaryJPerez@teleworm.us",
    phone_number: "+1 626-374-4199",
    country: "Alhambra",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-6.jpg",
    name: "Travis Klotz",
    e_mail: "TravisMKlotz@jourrapide.com",
    phone_number: "+1 312-405-5954",
    country: "Hickory Hills",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-4.jpg",
    name: "Jerry Ried",
    e_mail: "JerryBRied@jourrapide.com",
    phone_number: "+1 207-589-4752",
    country: "Liberty",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-5.jpg",
    name: "Nancy Beck",
    e_mail: "NancyKBeck@teleworm.us",
    phone_number: "+1 423-954-4020",
    country: "Chattanooga",
    tag: "favourite"
  }, {
    image: "/static/avatars/user-2.jpg",
    name: "Gustavo Stevenson",
    e_mail: "GustavoJStevenson@rhyta.com",
    phone_number: "+1 727-709-5505",
    country: "Tampa",
    tag: "recently_added"
  }, {
    image: "/static/avatars/user-2.jpg",
    name: "Julie Reno",
    e_mail: "JulieDReno@dayrep.com",
    phone_number: "+1 956-303-4288",
    country: "Harlingen",
    tag: "favourite"
  }]
};
var paymentDetails = [{
  payid: "#pay001",
  firstName: "Leonard",
  lastName: "Gonz",
  paymentType: "Paypal",
  paymentTypeColor: "primary",
  paidDate: "19 Aug 2017",
  amount: "$2000"
}, {
  payid: "#pay002",
  firstName: "Agnes",
  lastName: "Good",
  paymentType: "Paytm",
  paymentTypeColor: "info",
  paidDate: "22 Mar 2017",
  amount: "$500"
}, {
  payid: "#pay003",
  firstName: "Bonnie",
  lastName: "Harmon",
  paymentType: "Debit Card",
  paymentTypeColor: "primary",
  paidDate: "30 Sep 2017",
  amount: "$1500"
}, {
  payid: "#pay004",
  firstName: "Virgil",
  lastName: "Good",
  paymentType: "Credit Card",
  paymentTypeColor: "info  ",
  paidDate: "20 Aug 2017",
  amount: "$1700"
}, {
  payid: "#pay005",
  firstName: "Kevin",
  lastName: "Smith",
  paymentType: "paypal",
  paymentTypeColor: "primary",
  paidDate: "13 Aug 2018",
  amount: "$1290"
}];
var taxRatesDetails = [{
  date: "4 Jan 2018",
  account: "The Bank of America",
  TypeColor: "primary",
  type: "Expense",
  amount: "$1000.00",
  credit: "$300.00",
  balance: "$200.00"
}, {
  date: "28 Feb 2019",
  account: "Barclays Bank",
  TypeColor: "info",
  type: "Income",
  amount: "$2500.00",
  credit: "$200.00",
  balance: "$150.00"
}, {
  date: "10 Mar 2018",
  account: "Bank of Scotland",
  TypeColor: "primary",
  type: "Saving",
  amount: "$500.00",
  credit: "$100.00",
  balance: "$50.00"
}, {
  date: "23 Aug 2019",
  account: "Deutsche Bank",
  TypeColor: "error",
  type: "Income",
  amount: "$700.00",
  credit: "$300.00",
  balance: "$200.00"
}, {
  date: "25 June 2018",
  account: "HSBC Bank",
  TypeColor: "info",
  type: "Saving",
  amount: "$1090.00",
  credit: "$800.00",
  balance: "$600.00"
}, {
  date: "29 Nov 2018",
  account: "HSBC Bank",
  TypeColor: "error",
  type: "Expense",
  amount: "$1900.00",
  credit: "$600.00",
  balance: "$400.00"
}];

/***/ }),

/***/ "./resources/js/components/Widgets/ClientsDetails.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Widgets/ClientsDetails.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientsDetails.vue?vue&type=template&id=212041c5& */ "./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5&");
/* harmony import */ var _ClientsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ClientsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/ClientsDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/crm/Clients.vue":
/*!********************************************!*\
  !*** ./resources/js/views/crm/Clients.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=7ec25308& */ "./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/views/crm/Clients.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__.render,
  _Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/crm/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientsDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/crm/Clients.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/crm/Clients.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientsDetails_vue_vue_type_template_id_212041c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientsDetails.vue?vue&type=template&id=212041c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5&");


/***/ }),

/***/ "./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_7ec25308___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Clients.vue?vue&type=template&id=7ec25308& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/ClientsDetails.vue?vue&type=template&id=212041c5& ***!
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
    "div",
    { staticClass: "contact-tab-wrapper" },
    [
      _c(
        "v-tabs",
        {
          attrs: { "slider-color": "primary" },
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _vm._l(_vm.tabHead, function(t) {
            return _c(
              "v-tab",
              {
                key: t.key,
                staticClass: "text-capitalize",
                attrs: { ripple: "" }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.$t("message" + "." + t.tab_name)) +
                    "\n\t\t"
                )
              ]
            )
          }),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _vm._l(_vm.clientData.Clients, function(details, index) {
                    return [
                      details.tag == "favourite" || "recently_added"
                        ? _c(
                            "app-card",
                            {
                              key: index,
                              attrs: {
                                id: index,
                                colClasses:
                                  "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { staticClass: "contact-item-info" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c("div", { staticClass: "tab-image" }, [
                                        _c("img", {
                                          attrs: { src: details.image }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center pt-0",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "primary--text" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "javascript:void(0);"
                                              }
                                            },
                                            [_vm._v(_vm._s(details.name))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block text-ellipse contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href:
                                                  "mailto:JerryBRied@jourrapide.com"
                                              }
                                            },
                                            [_vm._v(_vm._s(details.e_mail))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href: "tel:+12075894752"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(details.phone_number)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-sm grey--text" },
                                        [_vm._v(_vm._s(details.country))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                {
                                  staticClass: "icon",
                                  attrs: { "three-line": "" }
                                },
                                [
                                  _c(
                                    "v-list-item",
                                    {
                                      staticClass: "pl-0",
                                      attrs: { ripple: false }
                                    },
                                    [
                                      _c(
                                        "v-list-item-action",
                                        { staticClass: "ma-0" },
                                        [
                                          _c(
                                            "v-list-item-action-text",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mr-1",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onEditClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onDeleteClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("delete")]
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
                            ],
                            1
                          )
                        : _vm._e()
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
            "v-tab-item",
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _vm._l(_vm.clientData.Clients, function(details, key) {
                    return [
                      details.tag == "favourite"
                        ? _c(
                            "app-card",
                            {
                              key: key,
                              attrs: {
                                colClasses:
                                  "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { staticClass: "contact-item-info" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c("div", { staticClass: "tab-image" }, [
                                        _c("img", {
                                          attrs: { src: details.image }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center pt-0",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "primary--text" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              attrs: {
                                                href: "javascript:void(0);"
                                              }
                                            },
                                            [_vm._v(_vm._s(details.name))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block text-ellipse contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href:
                                                  "mailto:JerryBRied@jourrapide.com"
                                              }
                                            },
                                            [_vm._v(_vm._s(details.e_mail))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href: "tel:+12075894752"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(details.phone_number)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-sm grey--text" },
                                        [_vm._v(_vm._s(details.country))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                {
                                  staticClass: "icon",
                                  attrs: { "three-line": "" }
                                },
                                [
                                  _c(
                                    "v-list-item",
                                    {
                                      staticClass: "pl-0",
                                      attrs: { ripple: false }
                                    },
                                    [
                                      _c(
                                        "v-list-item-action",
                                        { staticClass: "ma-0" },
                                        [
                                          _c(
                                            "v-list-item-action-text",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mr-1",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onEditClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onDeleteClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("delete")]
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
                            ],
                            1
                          )
                        : _vm._e()
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
            "v-tab-item",
            [
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _vm._l(_vm.clientData.Clients, function(details, key) {
                    return [
                      details.tag == "recently_added"
                        ? _c(
                            "app-card",
                            {
                              key: key,
                              attrs: {
                                colClasses:
                                  "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                              }
                            },
                            [
                              _c(
                                "v-row",
                                { staticClass: "contact-item-info" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c("div", { staticClass: "tab-image" }, [
                                        _c("img", {
                                          attrs: { src: details.image }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "text-center pt-0",
                                      attrs: { cols: "12", md: "12" }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        { staticClass: "primary--text" },
                                        [_vm._v(_vm._s(details.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block text-ellipse contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href:
                                                  "mailto:JerryBRied@jourrapide.com"
                                              }
                                            },
                                            [_vm._v(_vm._s(details.e_mail))]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "d-block contact-links font-sm"
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "grey--text",
                                              attrs: {
                                                href: "tel:+12075894752"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(details.phone_number)
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "font-sm grey--text" },
                                        [_vm._v(_vm._s(details.country))]
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list",
                                {
                                  staticClass: "icon",
                                  attrs: { "three-line": "" }
                                },
                                [
                                  _c(
                                    "v-list-item",
                                    {
                                      staticClass: "pl-0",
                                      attrs: { ripple: false }
                                    },
                                    [
                                      _c(
                                        "v-list-item-action",
                                        { staticClass: "ma-0" },
                                        [
                                          _c(
                                            "v-list-item-action-text",
                                            { staticClass: "d-flex" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mr-1",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onEditClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("edit")]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.onDeleteClients(
                                                        details
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticClass:
                                                        "grey--text font-md"
                                                    },
                                                    [_vm._v("delete")]
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
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("delete-confirmation-dialog", {
        ref: "deleteConfirmationDialog",
        attrs: {
          heading: "Are You Sure You Want To Delete?",
          message: "Are you sure you want to delete this Client permanently?"
        },
        on: { onConfirm: _vm.deleteClientItem }
      }),
      _vm._v(" "),
      [
        _c(
          "v-dialog",
          {
            attrs: { "max-width": "600" },
            model: {
              value: _vm.open,
              callback: function($$v) {
                _vm.open = $$v
              },
              expression: "open"
            }
          },
          [
            _c(
              "v-card",
              { staticClass: "pa-6" },
              [
                _c("v-text-field", {
                  attrs: { label: "Name", required: "" },
                  model: {
                    value: _vm.editName,
                    callback: function($$v) {
                      _vm.editName = $$v
                    },
                    expression: "editName"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Email", required: "" },
                  model: {
                    value: _vm.editEmail,
                    callback: function($$v) {
                      _vm.editEmail = $$v
                    },
                    expression: "editEmail"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Phone Number", required: "" },
                  model: {
                    value: _vm.editPhoneNo,
                    callback: function($$v) {
                      _vm.editPhoneNo = $$v
                    },
                    expression: "editPhoneNo"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Location", required: "" },
                  model: {
                    value: _vm.editLocation,
                    callback: function($$v) {
                      _vm.editLocation = $$v
                    },
                    expression: "editLocation"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  { staticClass: "pa-0" },
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "px-4",
                        attrs: { color: "primary" },
                        on: {
                          click: function($event) {
                            _vm.open = false
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "px-4",
                        attrs: { color: "error" },
                        on: { click: _vm.editClientItem }
                      },
                      [_vm._v("Update")]
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
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Clients.vue?vue&type=template&id=7ec25308& ***!
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
    "div",
    { staticClass: "contact-wrapper" },
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
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.openDialog()
                                            }
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
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-12 ",
                    customClasses: "mb-0 client-wrapper"
                  }
                },
                [
                  _c("clients-details", {
                    attrs: { clientData: _vm.clientData }
                  })
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
      [
        _c(
          "v-dialog",
          {
            attrs: { "max-width": "600" },
            model: {
              value: _vm.open,
              callback: function($$v) {
                _vm.open = $$v
              },
              expression: "open"
            }
          },
          [
            _c(
              "v-card",
              { staticClass: "pa-6" },
              [
                _c("v-text-field", {
                  attrs: { label: "Name", required: "" },
                  model: {
                    value: _vm.editName,
                    callback: function($$v) {
                      _vm.editName = $$v
                    },
                    expression: "editName"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Email", required: "" },
                  model: {
                    value: _vm.editEmail,
                    callback: function($$v) {
                      _vm.editEmail = $$v
                    },
                    expression: "editEmail"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Phone Number", required: "" },
                  model: {
                    value: _vm.editPhoneNo,
                    callback: function($$v) {
                      _vm.editPhoneNo = $$v
                    },
                    expression: "editPhoneNo"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: { label: "Location", required: "" },
                  model: {
                    value: _vm.editLocation,
                    callback: function($$v) {
                      _vm.editLocation = $$v
                    },
                    expression: "editLocation"
                  }
                }),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  { staticClass: "pa-0" },
                  [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: {
                          click: function($event) {
                            _vm.open = false
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "error" },
                        on: {
                          click: function($event) {
                            return _vm.addClient()
                          }
                        }
                      },
                      [_vm._v("Add")]
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
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);