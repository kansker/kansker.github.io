(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_crm_Reports_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { addtickets } from "Views/crm/data.js";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loader: true,
      addTickets: [],
      headers: [{
        text: "Sr.No",
        sortable: false,
        value: "Sr.No"
      }, {
        text: "Tickets Code",
        sortable: false,
        value: "Tickets Code"
      }, {
        text: "Subject",
        sortable: false,
        value: "Subject"
      }, {
        text: "Date",
        sortable: false,
        value: "Date"
      }, {
        text: "Department",
        sortable: false,
        value: "Department"
      }, {
        text: "Status",
        sortable: false,
        value: "Status"
      }]
    };
  },
  mounted: function mounted() {
    var self = this;
    self.getTickets();
  },
  methods: {
    getTickets: function getTickets() {
      var self = this;
      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/addTickets.js").then(function (response) {
        self.loader = false;
        self.addTickets = response.data; // console.log("self.addTickets =" + self.addTickets);
      })["catch"](function (error) {
        console.log("error" + error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: true,
      invoice: [],
      headers: [{
        text: "#",
        sortable: false,
        value: "#"
      }, {
        text: "Buyer",
        sortable: false,
        value: "Buyer"
      }, {
        text: "Date",
        sortable: false,
        value: "Date"
      }, {
        text: "Status",
        sortable: false,
        value: "status"
      }, {
        text: "Amount",
        sortable: false,
        value: "amount"
      }]
    };
  },
  mounted: function mounted() {
    this.getInvoice();
  },
  methods: {
    getInvoice: function getInvoice() {
      var self = this;
      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/invoice.js").then(function (response) {
        self.loader = false;
        self.invoice = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Views/crm/data.js */ "./resources/js/views/crm/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: false,
      invoice: [],
      paymentDetails: Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__.paymentDetails,
      headers: [{
        text: "Payment Id",
        sortable: false,
        value: "Payment Id"
      }, {
        text: "Client Name	",
        sortable: false,
        value: "Client Name	"
      }, {
        text: "Payment Type",
        sortable: false,
        value: "Payment Type"
      }, {
        text: "Paid Date",
        sortable: false,
        value: "Paid Date"
      }, {
        text: "Amount",
        sortable: false,
        value: "Amount"
      }]
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Views/crm/data.js */ "./resources/js/views/crm/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: false,
      invoice: [],
      headersForTransactionList: [{
        text: "Transaction Id",
        sortable: false,
        value: "transaction Id"
      }, {
        text: "Date",
        sortable: false,
        value: "date"
      }, {
        text: "Account",
        sortable: false,
        value: "account"
      }, {
        text: "Type",
        sortable: false,
        value: "type"
      }, {
        text: "Amount",
        sortable: false,
        value: "amount"
      }, {
        text: "Debit",
        sortable: false,
        value: "debit"
      }, {
        text: "Credit",
        sortable: false,
        value: "credit"
      }, {
        text: "Balance",
        sortable: false,
        value: "balance"
      }],
      headersForTransferReport: [{
        text: "Transfer Id",
        sortable: false,
        value: "transfer Id"
      }, {
        text: "Date",
        sortable: false,
        value: "date"
      }, {
        text: "Account",
        sortable: false,
        value: "account"
      }, {
        text: "Type",
        sortable: false,
        value: "type"
      }, {
        text: "Amount",
        sortable: false,
        value: "amount"
      }, {
        text: "Balance",
        sortable: false,
        value: "balance"
      }, {
        text: "Status",
        sortable: false,
        value: "status"
      }],
      headersForExpenseCategory: [{
        text: "Item No",
        sortable: false,
        value: "item No"
      }, {
        text: "Date",
        sortable: false,
        value: "date"
      }, {
        text: "Type",
        sortable: false,
        value: "type"
      }, {
        text: "Description",
        sortable: false,
        value: "description"
      }, {
        text: "Amount",
        sortable: false,
        value: "Amount"
      }, {
        text: "Status",
        sortable: false,
        value: "info"
      }],
      tabsAndTableDetails: Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__.tabsAndTableDetails,
      active: null,
      tabs: [{
        title: "transactionList"
      }, {
        title: "transferReport"
      }, {
        title: "expenseCategory"
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    next: function next() {
      var active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Views/crm/data.js */ "./resources/js/views/crm/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: false,
      invoice: [],
      taxRatesDetails: Views_crm_data_js__WEBPACK_IMPORTED_MODULE_0__.taxRatesDetails,
      headers: [{
        text: "Date",
        sortable: false,
        value: "Date"
      }, {
        text: "Account",
        sortable: false,
        value: "Account"
      }, {
        text: "Type",
        sortable: false,
        value: "Type"
      }, {
        text: "Amount	",
        sortable: false,
        value: "Amount	"
      }, {
        text: "Credit	",
        sortable: false,
        value: "Credit	"
      }, {
        text: "Balance	",
        sortable: false,
        value: "Balance	"
      }]
    };
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_TabsAndTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/TabsAndTable */ "./resources/js/components/Widgets/TabsAndTable.vue");
/* harmony import */ var Components_Widgets_Invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Widgets/Invoice */ "./resources/js/components/Widgets/Invoice.vue");
/* harmony import */ var Components_Widgets_Payments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/Widgets/Payments */ "./resources/js/components/Widgets/Payments.vue");
/* harmony import */ var Components_Widgets_TaxRates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/Widgets/TaxRates */ "./resources/js/components/Widgets/TaxRates.vue");
/* harmony import */ var Components_Widgets_AddTickets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/Widgets/AddTickets */ "./resources/js/components/Widgets/AddTickets.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TabsAndTable: Components_Widgets_TabsAndTable__WEBPACK_IMPORTED_MODULE_0__.default,
    Invoice: Components_Widgets_Invoice__WEBPACK_IMPORTED_MODULE_1__.default,
    Payments: Components_Widgets_Payments__WEBPACK_IMPORTED_MODULE_2__.default,
    TaxRates: Components_Widgets_TaxRates__WEBPACK_IMPORTED_MODULE_3__.default,
    AddTickets: Components_Widgets_AddTickets__WEBPACK_IMPORTED_MODULE_4__.default
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

/***/ "./resources/js/components/Widgets/AddTickets.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Widgets/AddTickets.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTickets.vue?vue&type=template&id=6b039131& */ "./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131&");
/* harmony import */ var _AddTickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTickets.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddTickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/AddTickets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=8fcb54dc& */ "./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/Payments.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/Payments.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payments.vue?vue&type=template&id=69666e98& */ "./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98&");
/* harmony import */ var _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payments.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__.render,
  _Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/Payments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/TabsAndTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Widgets/TabsAndTable.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabsAndTable.vue?vue&type=template&id=620883c0& */ "./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0&");
/* harmony import */ var _TabsAndTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabsAndTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TabsAndTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/TabsAndTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/TaxRates.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/TaxRates.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxRates.vue?vue&type=template&id=74f3dc93& */ "./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93&");
/* harmony import */ var _TaxRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxRates.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaxRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/TaxRates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/crm/Reports.vue":
/*!********************************************!*\
  !*** ./resources/js/views/crm/Reports.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reports.vue?vue&type=template&id=7a6a6b3f& */ "./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f&");
/* harmony import */ var _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.vue?vue&type=script&lang=js& */ "./resources/js/views/crm/Reports.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/crm/Reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTickets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsAndTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabsAndTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsAndTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/crm/Reports.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/crm/Reports.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTickets_vue_vue_type_template_id_6b039131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddTickets.vue?vue&type=template&id=6b039131& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131&");


/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=template&id=8fcb54dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&");


/***/ }),

/***/ "./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_69666e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payments.vue?vue&type=template&id=69666e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98&");


/***/ }),

/***/ "./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsAndTable_vue_vue_type_template_id_620883c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabsAndTable.vue?vue&type=template&id=620883c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0&");


/***/ }),

/***/ "./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRates_vue_vue_type_template_id_74f3dc93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRates.vue?vue&type=template&id=74f3dc93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93&");


/***/ }),

/***/ "./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_7a6a6b3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Reports.vue?vue&type=template&id=7a6a6b3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/AddTickets.vue?vue&type=template&id=6b039131& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.addTickets,
          "hide-default-footer": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.srno))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.ticketCode))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.subject))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v(_vm._s(item.date))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.department))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "v-badge",
                        { class: item.statusColor, attrs: { value: false } },
                        [_vm._v(_vm._s(item.status))]
                      )
                    ],
                    1
                  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.invoice,
          "hide-default-footer": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.id))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v("\n\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.date))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "v-badge",
                        { class: item.labelClasses, attrs: { value: false } },
                        [_vm._v(_vm._s(item.status))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.amount))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Payments.vue?vue&type=template&id=69666e98& ***!
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
    "div",
    { staticClass: "table-responsive" },
    [
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.paymentDetails,
          "hide-default-footer": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.payid))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(item.firstName) +
                        " " +
                        _vm._s(item.lastName) +
                        "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "v-badge",
                        {
                          class: item.paymentTypeColor,
                          attrs: { value: false }
                        },
                        [_vm._v(_vm._s(item.paymentType))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v(_vm._s(item.paidDate))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.amount))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TabsAndTable.vue?vue&type=template&id=620883c0& ***!
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
    [
      _c(
        "v-tabs",
        {
          staticClass: "reports-table-tab",
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
          _vm._l(_vm.tabs, function(tab, index) {
            return _c(
              "v-tab",
              {
                key: index,
                staticClass: "text-capitalize",
                attrs: { ripple: "" }
              },
              [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(_vm.$t("message" + "." + tab.title)) +
                    "\n\t\t"
                )
              ]
            )
          }),
          _vm._v(" "),
          _vm._l(3, function(n) {
            return _c(
              "v-tab-item",
              { key: n },
              [
                n == 1
                  ? _c("v-card", { attrs: { flat: "" } }, [
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c("app-section-loader", {
                            attrs: { status: _vm.loader }
                          }),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headersForTransactionList,
                              items:
                                _vm.tabsAndTableDetails.transactionListDetails,
                              "hide-default-footer": ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c("tr", [
                                        _c("td", [
                                          _vm._v(_vm._s(item.transid))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-nowrap" },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(item.date) +
                                                "\n\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-nowrap" },
                                          [_vm._v(_vm._s(item.account))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-badge",
                                              {
                                                class: item.typeColor,
                                                attrs: { value: false }
                                              },
                                              [_vm._v(_vm._s(item.type))]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.amount))]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.debit))]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.credit))]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.balance))])
                                      ])
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                n == 2
                  ? _c("v-card", { attrs: { flat: "" } }, [
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c("app-section-loader", {
                            attrs: { status: _vm.loader }
                          }),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headersForTransferReport,
                              items: _vm.tabsAndTableDetails.transferReport,
                              "hide-default-footer": ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c("tr", [
                                        _c("td", [
                                          _vm._v(_vm._s(item.transid))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-nowrap" },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(item.date) +
                                                "\n\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-nowrap" },
                                          [_vm._v(_vm._s(item.account))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-badge",
                                              {
                                                class: item.typeColor,
                                                attrs: { value: false }
                                              },
                                              [_vm._v(_vm._s(item.type))]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.amount))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.balance))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-badge",
                                              {
                                                class: item.statusColor,
                                                attrs: { value: false }
                                              },
                                              [_vm._v(_vm._s(item.status))]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                n == 3
                  ? _c("v-card", { attrs: { flat: "" } }, [
                      _c(
                        "div",
                        { staticClass: "table-responsive" },
                        [
                          _c("app-section-loader", {
                            attrs: { status: _vm.loader }
                          }),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headersForExpenseCategory,
                              items:
                                _vm.tabsAndTableDetails.expenseCategoryDetails,
                              "hide-default-footer": ""
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c("tr", [
                                        _c("td", [_vm._v(_vm._s(item.itmNo))]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-nowrap" },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(item.date) +
                                                "\n\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-badge",
                                              {
                                                class: item.typeColor,
                                                attrs: { value: false }
                                              },
                                              [_vm._v(_vm._s(item.type))]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(item.description))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [_vm._v(_vm._s(item.amount))]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _c(
                                              "v-badge",
                                              {
                                                class: item.statusColor,
                                                attrs: { value: false }
                                              },
                                              [_vm._v(_vm._s(item.status))]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ],
              1
            )
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/TaxRates.vue?vue&type=template&id=74f3dc93& ***!
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
    "div",
    { staticClass: "table-responsive" },
    [
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.taxRatesDetails,
          "hide-default-footer": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v(_vm._s(item.date))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-nowrap" }, [
                    _vm._v(
                      "\n            " + _vm._s(item.account) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-nowrap" },
                    [
                      _c(
                        "v-badge",
                        { class: item.TypeColor, attrs: { value: false } },
                        [_vm._v(_vm._s(item.type))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.amount))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.credit))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.balance))])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/crm/Reports.vue?vue&type=template&id=7a6a6b3f& ***!
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
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.invoices"),
                    colClasses:
                      "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-0",
                    customClasses: "mb-0"
                  }
                },
                [_c("invoice")],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.payments"),
                    colClasses:
                      "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-0",
                    customClasses: "mb-0"
                  }
                },
                [_c("payments")],
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
                    colClasses:
                      "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12",
                    customClasses: "mb-0"
                  }
                },
                [_c("TabsAndTable")],
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
                    heading: _vm.$t("message.taxRates"),
                    colClasses: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
                    customClasses: "mb-0"
                  }
                },
                [_c("TaxRates")],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.addTickets"),
                    colClasses: "col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12",
                    customClasses: "mb-0"
                  }
                },
                [_c("add-tickets")],
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