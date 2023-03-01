(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_ecommerce_EditProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['productsData'],
  data: function data() {
    return {
      products: this.productsData.men.concat(this.productsData.women, this.productsData.accessories, this.productsData.gadgets),
      currentPage: '',
      selectItemToDelete: '',
      open: false,
      headers: [{
        text: 'Id',
        value: 'id',
        sortable: false
      }, {
        text: 'Image',
        value: 'image',
        sortable: false
      }, {
        text: 'Name',
        value: 'name',
        sortable: false
      }, {
        text: 'Brand',
        value: 'brand',
        sortable: false
      }, {
        text: 'Category',
        value: 'category',
        sortable: false
      }, {
        text: 'Product Code',
        value: 'product_code',
        sortable: false
      }, {
        text: 'Discount Price',
        value: 'discount_price',
        sortable: false
      }, {
        text: 'Price',
        value: 'price',
        sortable: false
      }, {
        text: 'Action',
        value: 'deadline',
        sortable: false
      }]
    };
  },
  created: function created() {
    var currentRoute = this.$route.path;
    var splitRoute = currentRoute.split("/");
    console.log(splitRoute[3]);
    this.currentPage = splitRoute[3];
    console.log;
  },
  methods: {
    deleteDialog: function deleteDialog(item) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectItemToDelete = item;
    },
    DeleteProduct: function DeleteProduct() {
      this.$refs.deleteConfirmationDialog.close();
      var index = this.products.indexOf(this.selectItemToDelete);
      this.products.splice(index, 1);
      console.log(index);
    },
    openDialog: function openDialog() {
      this.open = true;
    },
    close: function close() {
      this.open = false;
    },
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  props: ['productsData'],
  data: function data() {
    return {
      products: this.productsData.men.concat(this.productsData.women, this.productsData.accessories, this.productsData.gadgets),
      currentPage: '',
      selectItemToDelete: '',
      open: false
    };
  },
  created: function created() {
    var currentRoute = this.$route.path;
    var splitRoute = currentRoute.split("/");
    this.currentPage = splitRoute[3];
  },
  methods: {
    deleteDialog: function deleteDialog(item) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectItemToDelete = item;
    },
    DeleteProduct: function DeleteProduct() {
      this.$refs.deleteConfirmationDialog.close();
      var index = this.products.indexOf(this.selectItemToDelete);
      this.products.splice(index, 1);
    },
    openDialog: function openDialog() {
      this.open = true;
    },
    close: function close() {
      this.open = false;
    },
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/Products */ "./resources/js/components/Widgets/Products.vue");
/* harmony import */ var Components_Widgets_EditProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Widgets/EditProductList */ "./resources/js/components/Widgets/EditProductList.vue");
/* harmony import */ var Views_ecommerce_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Views/ecommerce/data.js */ "./resources/js/views/ecommerce/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Products: Components_Widgets_Products__WEBPACK_IMPORTED_MODULE_0__.default,
    Edit: Components_Widgets_EditProductList__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      productsData: Views_ecommerce_data_js__WEBPACK_IMPORTED_MODULE_2__.productsData,
      type: ['Men', 'Women', 'Gadgets', 'Accessories'],
      recent: ['This Week', 'This Month', 'Past Month'],
      noOfItems: ['10', '20', '30'],
      viewType: "projectGrid",
      selectedView: "grid",
      isActive: 'grid'
    };
  },
  methods: {
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

/***/ "./resources/js/views/ecommerce/data.js":
/*!**********************************************!*\
  !*** ./resources/js/views/ecommerce/data.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsData": function() { return /* binding */ productsData; }
/* harmony export */ });
var productsData = {
  "accessories": [{
    availablity: true,
    brand: "Liod Marcos",
    category: "Laptop",
    category_type: "accessories",
    color: "Black",
    discountPriceValue: "85.75",
    description: "Adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolor sit amet consectetur",
    discount_price: 88.0,
    features: ["Dell/Mac/Acer Laptop Bag", "Pure Leather", "20 Kg Capacity"],
    id: 16,
    image: "/static/img/accessroies/a-1-a.jpg",
    image_gallery: ["/static/img/accessroies/a-1-a.jpg", "/static/img/accessroies/a-1-b.jpg", "/static/img/accessroies/a-1-c.jpg", "/static/img/accessroies/a-1-d.jpg"],
    name: "Laptop Backpack",
    popular: true,
    price: 92.75,
    product_code: "#EM1215",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Black", "Laptop", "Bags"],
    type: "accessories"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    "category": "Belts",
    "category_type": "accessories",
    "color": "Black",
    "discountPriceValue": "28.31",
    description: "Uorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 44.0,
    features: ["Pure Leather", "Water Proof", "Steel Buckle"],
    id: 17,
    image: "/static/img/accessroies/a-2-a.jpg",
    image_gallery: ["/static/img/accessroies/a-2-a.jpg", "/static/img/accessroies/a-2-b.jpg", "/static/img/accessroies/a-2-c.jpg", "/static/img/accessroies/a-2-d.jpg"],
    name: "Men Belts",
    popular: false,
    price: 38.31,
    product_code: "#EM1216",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Tan", "Belts", "Leather"],
    type: "accessories"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Jewellery",
    category_type: "accessories",
    color: "Black",
    discountPriceValue: "48.75",
    description: "Ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 78.0,
    features: ["Slim Fit", "Pure Steel", "Free Shipping and delivery in 7 Days"],
    id: 18,
    image: "/static/img/accessroies/a-3-a.jpg",
    image_gallery: ["/static/img/accessroies/a-3-a.jpg", "/static/img/accessroies/a-3-b.jpg", "/static/img/accessroies/a-3-c.jpg", "/static/img/accessroies/a-3-d.jpg"],
    name: "Steel Chain",
    popular: false,
    price: 56.75,
    product_code: "#EM1217",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Chain", "Long Chain", "Accessories"],
    type: "accessories"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Purse",
    category_type: "accessories",
    color: "Brown",
    discountPriceValue: "13.75",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 14.0,
    features: ["Slim Designed", "Pure Leather", "Credit/Debit Cards Pockets"],
    id: 19,
    image: "/static/img/accessroies/a-4-a.jpg",
    image_gallery: ["/static/img/accessroies/a-4-a.jpg", "/static/img/accessroies/a-4-b.jpg", "/static/img/accessroies/a-4-c.jpg", "/static/img/accessroies/a-4-d.jpg"],
    name: "Men Purse",
    popular: false,
    price: 15.75,
    product_code: "#EM1218",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Tan", "Men", "Money"],
    type: "accessories"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Goggles",
    category_type: "Accessories",
    color: "Black",
    discountPriceValue: "13.75",
    description: "Iit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 14.0,
    features: ["Smooth Finishing", "Soft", "Free Shipping and delivery in 4 Days"],
    id: 20,
    image: "/static/img/accessroies/a-5-a.jpg",
    image_gallery: ["/static/img/accessroies/a-5-a.jpg", "/static/img/accessroies/a-5-b.jpg", "/static/img/accessroies/a-5-c.jpg", "/static/img/accessroies/a-5-d.jpg"],
    name: "Summer Goggles",
    popular: true,
    price: 15.75,
    product_code: "#EM1219",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Black", "Men", "Shape"],
    type: "accessories"
  }],
  "gadgets": [{
    availablity: true,
    brand: "Liod Marcos",
    category: "Headphone",
    category_type: "gadgets",
    color: "Black",
    discountPriceValue: "110.75",
    description: "Ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 90.0,
    features: ["Bass Boosted ", "Start/Pause Button ", "Skype/Video Call Compatible"],
    id: 11,
    image: "/static/img/gadgets/g-1-a.jpg",
    image_gallery: ["/static/img/gadgets/g-1-a.jpg", "/static/img/gadgets/g-1-b.jpg", "/static/img/gadgets/g-1-c.jpg", "/static/img/gadgets/g-1-d.jpg"],
    name: "Wired Headphone",
    popular: false,
    price: 125.75,
    product_code: "#EM1209",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Headphone", "Gadgets", "Electronic"],
    type: "gadgets"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Smartphone",
    category_type: "gadgets",
    color: "Black",
    discountPriceValue: "800.63",
    description: "Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 655.0,
    features: ["Full Screen Touch", "6GB Ram and 128 Gb Memory", "Wireless Headphone"],
    id: 12,
    image: "/static/img/gadgets/g-2-a.jpg",
    image_gallery: ["/static/img/gadgets/g-2-a.jpg", "/static/img/gadgets/g-2-b.jpg", "/static/img/gadgets/g-2-c.jpg", "/static/img/gadgets/g-2-d.jpg"],
    name: "Black Smartphone",
    popular: false,
    price: 847.63,
    product_code: "#EM1210",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Phone ", "Smartphone ", "New"],
    type: "gadgets"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Watch",
    category_type: "gadgets",
    color: "Black",
    discountPriceValue: "310.75",
    description: "Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 225.56,
    features: ["Soft Leather", "Chargable", "Delivery in 4 Days"],
    id: 13,
    image: "/static/img/gadgets/g-3-a.jpg",
    image_gallery: ["/static/img/gadgets/g-3-a.jpg", "/static/img/gadgets/g-3-b.jpg", "/static/img/gadgets/g-3-c.jpg", "/static/img/gadgets/g-3-d.jpg"],
    name: "Digial Watch",
    popular: true,
    price: 357.75,
    product_code: "#EM12012",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Analog/Digital ", "Men/Women ", "Black"],
    type: "gadgets"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Watch",
    category_type: "gadgets",
    color: "Black",
    discountPriceValue: "510.75",
    description: "Opsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 458.0,
    features: ["Touch Screen", "Bluetooth", "Free Shipping and delivery in 4 Days"],
    id: 14,
    image: "/static/img/gadgets/g-4-a.jpg",
    image_gallery: ["/static/img/gadgets/g-4-a.jpg", "/static/img/gadgets/g-4-b.jpg", "/static/img/gadgets/g-4-c.jpg", "/static/img/gadgets/g-4-d.jpg", "/static/img/gadgets/g-4-e.jpg"],
    name: "Digital Watch",
    popular: false,
    price: 568.75,
    product_code: "#EM1213",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Analog/Digital ", "Men/Women ", "Black"],
    type: "gadgets"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Speaker",
    category_type: "gadgets",
    color: "Black",
    discountPriceValue: "900",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 698.45,
    features: ["Woofer", "Wireless", "Free Shipping and delivery in 4 Days"],
    id: 15,
    image: "/static/img/gadgets/g-5-a.jpg",
    image_gallery: ["/static/img/gadgets/g-5-a.jpg", "/static/img/gadgets/g-5-b.jpg", "/static/img/gadgets/g-5-c.jpg", "/static/img/gadgets/g-5-d.jpg"],
    name: "Circular Speaker",
    popular: false,
    price: 989,
    product_code: "#EM1214",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Speaker", "Smart", "Circular"],
    type: "gadgets"
  }],
  "men": [{
    availablity: true,
    brand: "Liod Marcos",
    category: "Jeans",
    category_type: "clothing",
    color: "Blue",
    discountPriceValue: "16.75",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 13.3,
    features: ["Slim Fit", "Stretchable", "Free Shipping and delivery in 4 Days"],
    id: 1,
    image: "/static/img/men/3-item-a.jpg",
    image_gallery: ["/static/img/men/3-item-a.jpg", "/static/img/men/3-item-b.jpg", "/static/img/men/3-item-c.jpg", "/static/img/men/3-item-d.jpg", "/static/img/men/3-item-e.jpg"],
    name: "Vintage Jean",
    popular: false,
    price: 18.75,
    product_code: "#EM1201",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Jean ", "Men ", "Outwear"],
    type: "men"
  }, {
    availablity: true,
    brand: "Bull Riders",
    category: "Jackets",
    category_type: "clothing",
    color: "Black",
    discountPriceValue: "70.75",
    description: "Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae! Lorem ipsum dolor",
    discount_price: 67.0,
    features: ["Loose Fit", "Pure Leather", "Free Shipping and delivery in 2 Days"],
    id: 2,
    image: "/static/img/men/2-item-a.jpg",
    image_gallery: ["/static/img/men/2-item-a.jpg", "/static/img/men/2-item-b.jpg", "/static/img/men/2-item-c.jpg", "/static/img/men/2-item-d.jpg", "/static/img/men/2-item-e.jpg"],
    name: "Super Jacket",
    popular: false,
    price: 82.75,
    product_code: "#EM1202",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Winter ", "Men ", "Jacket"],
    type: "men"
  }, {
    availablity: true,
    brand: "Jeno Karla",
    category: "Shirt",
    category_type: "clothing",
    color: "Blue",
    discountPriceValue: "34.75",
    description: "Suspendisse porttitor ornare ligula. Nam massa erat, fermentum dolor quis, maximus ultrices diam. Aenean pellentesque auctor elementum. Nunc vitae tortor iaculis, mollis odio at, lacinia sapien. Mauris et leo sem. Curabitur sit amet enim nisi. Nunc placerat commodo sem, sed maximus purus",
    discount_price: 36.0,
    features: ["Slim Fit", "Denim Made", "Free Shipping in some areas and delivery in 4 Days"],
    id: 3,
    image: "/static/img/men/1-item-a.jpg",
    image_gallery: ["/static/img/men/1-item-a.jpg", "/static/img/men/1-item-b.jpg", "/static/img/men/1-item-c.jpg", "/static/img/men/1-item-d.jpg", "/static/img/men/1-item-e.jpg"],
    name: "Denim Pullover",
    popular: false,
    price: 42.75,
    product_code: "#EM1203",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Men ", "Pullover", "Denim"],
    type: "men"
  }, {
    availablity: true,
    brand: "The Capressi",
    category: "Jeans",
    category_type: "clothing",
    color: "Blue",
    discountPriceValue: "36.75",
    description: "Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 32.0,
    features: ["Slim Fit", "Relaxed", "Free Shipping and delivery in 1 Days"],
    id: 4,
    image: "/static/img/men/4-item-a.jpg",
    image_gallery: ["/static/img/men/4-item-a.jpg", "/static/img/men/4-item-b.jpg", "/static/img/men/4-item-c.jpg", "/static/img/men/4-item-d.jpg", "/static/img/men/4-item-e.jpg"],
    name: "Blue Jean",
    popular: false,
    price: 40.82,
    product_code: "#EM1204",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Blue", "Men", "Jean"],
    type: "men"
  }, {
    availablity: true,
    brand: "JK CK",
    category: "T-Shirt",
    category_type: "clothing",
    color: "Black",
    discountPriceValue: "20.75",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 17.0,
    features: ["Slim Fit", "Pure Cotton", "Free Shipping and delivery in 4 Days"],
    id: 5,
    image: "/static/img/men/5-item-a.jpg",
    image_gallery: ["/static/img/men/5-item-a.jpg", "/static/img/men/5-item-b.jpg", "/static/img/men/5-item-c.jpg", "/static/img/men/5-item-d.jpg", "/static/img/men/5-item-e.jpg"],
    name: "Black T-Shirt",
    popular: false,
    price: 22.75,
    product_code: "#EM1205",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Black ", "Men ", "Summer"],
    type: "men"
  }, {
    availablity: true,
    brand: "Nike",
    category: "Shoes",
    category_type: "shoes",
    color: "Black",
    discountPriceValue: "50.75",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 55.0,
    features: ["Leather", "Wipe with a clean, dry cloth to remove dust"],
    id: 6,
    image: "/static/img/men/cat-shoes.jpg",
    image_gallery: ["/static/img/men/cat-shoes.jpg"],
    name: "Men White AIR",
    popular: true,
    price: 65.75,
    product_code: "#4330899",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Black ", "White"],
    type: "men"
  }],
  "women": [{
    availablity: true,
    brand: "Liod Marcos",
    category: "Dresses",
    category_type: "clothing",
    color: "Red",
    discountPriceValue: "85.75",
    description: "Amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 75.0,
    features: ["Regular Fit ", "Pure Cotton ", "Delivery in 3 Days"],
    id: 7,
    image: "/static/img/women/6-item-a.jpg",
    image_gallery: ["/static/img/women/6-item-a.jpg", "/static/img/women/6-item-b.jpg", "/static/img/women/6-item-c.jpg", "/static/img/women/6-item-d.jpg", "/static/img/women/6-item-e.jpg"],
    name: "Red Strip Dress",
    popular: false,
    price: 97.75,
    product_code: "#EM1205",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Red ", "Women ", "Outwear"],
    type: "women"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Shirt",
    category_type: "clothing",
    color: "Blue",
    discountPriceValue: "39.75",
    description: "Dolor sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 45.0,
    features: ["Loose Fit", "Pure Denim", "Free Shipping and delivery in 2 Days"],
    id: 8,
    image: "/static/img/women/7-item-a.jpg",
    image_gallery: ["/static/img/women/7-item-a.jpg", "/static/img/women/7-item-b.jpg", "/static/img/women/7-item-c.jpg", "/static/img/women/7-item-d.jpg", "/static/img/women/7-item-e.jpg"],
    name: "Blue Denim",
    popular: false,
    price: 49.75,
    product_code: "#EM1206",
    quantity: 1,
    rating: 4,
    status: 0,
    tags: ["Blue ", "Outwear ", "Denim"],
    type: "women"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "Dresses",
    category_type: "clothing",
    color: "Black",
    discountPriceValue: "10.75",
    description: "Consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 12.0,
    features: ["Slim Fit", "Pure Cotton", "Free Shipping and delivery in 4 Days"],
    id: 9,
    image: "/static/img/women/8-item-a.jpg",
    image_gallery: ["/static/img/women/8-item-a.jpg", "/static/img/women/8-item-b.jpg", "/static/img/women/8-item-c.jpg", "/static/img/women/8-item-d.jpg", "/static/img/women/8-item-e.jpg"],
    name: "Black Dress",
    popular: false,
    price: 15.75,
    product_code: "#EM1207",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["Red ", "Women ", "Outwear"],
    type: "women"
  }, {
    availablity: true,
    brand: "Liod Marcos",
    category: "T-Shirt",
    category_type: "clothing",
    color: "White",
    discountPriceValue: "15.45",
    description: "Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!",
    discount_price: 15.0,
    features: ["Slim Fit ", "100% Cotton ", "Free Shipping and delivery in 4 Days"],
    id: 10,
    image: "/static/img/women/9-item-a.jpg",
    image_gallery: ["/static/img/women/9-item-b.jpg", "/static/img/women/9-item-c.jpg", "/static/img/women/9-item-d.jpg", "/static/img/women/9-item-e.jpg"],
    name: "White T-Shirt",
    popular: false,
    price: 19.45,
    product_code: "#EM1208",
    quantity: 1,
    rating: 5,
    status: 0,
    tags: ["White ", "Graphic ", "Women"],
    type: "women"
  }]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.delete-btn[data-v-58f40c28],.edit-btn[data-v-58f40c28]{\n\tfont-size:1.25rem;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "\n.delete-btn[data-v-79038562]{\n\tposition: absolute;\n\tright:38px; \n\ttop: 32px; \n\tcursor: pointer;\n}\n.edit-btn[data-v-79038562]{\n\tposition: absolute;\n\tright:30px; \n\ttop: 65px;\n}\n.shoppingCart-btn[data-v-79038562]{\n\tposition: absolute;\n\tright:30px;\n\ttop:22px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ __webpack_exports__["default"] = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ __webpack_exports__["default"] = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./resources/js/components/Widgets/EditProductList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Widgets/EditProductList.vue ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProductList.vue?vue&type=template&id=58f40c28&scoped=true& */ "./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true&");
/* harmony import */ var _EditProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& */ "./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EditProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58f40c28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/EditProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/Products.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Widgets/Products.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=79038562&scoped=true& */ "./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& */ "./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79038562",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ecommerce/EditProduct.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/ecommerce/EditProduct.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=20df4ba7& */ "./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7&");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js& */ "./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ecommerce/EditProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_style_index_0_id_58f40c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=style&index=0&id=58f40c28&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_79038562_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=style&index=0&id=79038562&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProductList_vue_vue_type_template_id_58f40c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProductList.vue?vue&type=template&id=58f40c28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true& ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_79038562_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=79038562&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true&");


/***/ }),

/***/ "./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_20df4ba7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=template&id=20df4ba7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/EditProductList.vue?vue&type=template&id=58f40c28&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
        attrs: { headers: _vm.headers, items: _vm.products },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.id))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _c("img", {
                      attrs: { width: "35", height: "50", src: item.image }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.brand))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.category))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v(_vm._s(item.product_code))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v("$ " + _vm._s(item.discount_price))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _vm._v("$ " + _vm._s(item.price))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-left" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex" },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "delete-btn",
                                attrs: { dark: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteDialog(item)
                                  }
                                }
                              },
                              [_vm._v("delete")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to:
                                "/" +
                                (_vm.getCurrentAppLayoutHandler() +
                                  "/ecommerce/edit-detail/" +
                                  item.type +
                                  "/" +
                                  item.id)
                            }
                          },
                          [
                            _c(
                              "v-icon",
                              {
                                staticClass: "edit-btn ml-3",
                                staticStyle: { cursor: "pointer" },
                                attrs: { dark: "" }
                              },
                              [_vm._v("edit")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("delete-confirmation-dialog", {
        ref: "deleteConfirmationDialog",
        attrs: {
          heading: "Are You Sure You Want To Delete?",
          message: "Are you sure you want to delete this Product permanently?"
        },
        on: { onConfirm: _vm.DeleteProduct }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Products.vue?vue&type=template&id=79038562&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _vm._l(_vm.products, function(details, index) {
            return [
              _c(
                "app-card",
                {
                  key: index,
                  attrs: {
                    id: index,
                    colClasses: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
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
                          attrs: { cols: "12", lg: "12", md: "12", sm: "12" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "tab-image" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to:
                                      "/" +
                                      (_vm.getCurrentAppLayoutHandler() +
                                        "/ecommerce/product-detail/" +
                                        details.type +
                                        "/" +
                                        details.id)
                                  }
                                },
                                [
                                  _c("img", {
                                    staticStyle: { width: "100%" },
                                    attrs: { src: details.image }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _vm.currentPage == "shop"
                                ? [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "shoppingCart-btn mt-2",
                                        attrs: {
                                          fab: "",
                                          dark: "",
                                          small: "",
                                          color: "primary"
                                        }
                                      },
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v("shopping_cart")
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.currentPage == "edit-product"
                                ? [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass: "delete-btn",
                                        attrs: { dark: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteDialog(details)
                                          }
                                        }
                                      },
                                      [_vm._v("delete")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "edit-btn",
                                        attrs: {
                                          fab: "",
                                          dark: "",
                                          small: "",
                                          color: "primary",
                                          to:
                                            "/" +
                                            (_vm.getCurrentAppLayoutHandler() +
                                              "/ecommerce/edit-detail/" +
                                              details.type +
                                              "/" +
                                              details.id)
                                        }
                                      },
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v("edit")
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0",
                          attrs: { cols: "12", lg: "12", md: "12", sm: "12" }
                        },
                        [
                          _c("p", { staticClass: "fs-14 mb-3" }, [
                            _vm._v(_vm._s(details.category))
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "mb-3" }, [
                            _vm._v(_vm._s(details.name))
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "fs-14 d-inline-flex" }, [
                            _c("del", [_vm._v("$ " + _vm._s(details.price))]),
                            _vm._v(" "),
                            _c("span", { staticClass: "primary--text pl-3" }, [
                              _vm._v("$" + _vm._s(details.discountPriceValue))
                            ])
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("delete-confirmation-dialog", {
        ref: "deleteConfirmationDialog",
        attrs: {
          heading: "Are You Sure You Want To Delete?",
          message: "Are you sure you want to delete this Product permanently?"
        },
        on: { onConfirm: _vm.DeleteProduct }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/EditProduct.vue?vue&type=template&id=20df4ba7& ***!
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
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "pt-0": "", "grid-list-xl": "" } },
        [
          _c(
            "v-row",
            { staticClass: "align-center search-wrap" },
            [
              _c(
                "v-col",
                {
                  staticClass: "align-items-center pt-0",
                  attrs: { cols: "12", sm: "12", md: "12", lg: "12" }
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
                              staticClass: "align-items-center",
                              attrs: { cols: "12", sm: "12", md: "12", lg: "3" }
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
                              attrs: { cols: "12", sm: "12", md: "12", lg: "9" }
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
                                        staticClass: " pt-0 pr-4",
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
            { staticClass: "pa-3 align-center justify-space-between" },
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
                          return _vm.girdView()
                        }
                      }
                    },
                    [_vm._v("\n\t\t\t\t\tapps")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-icon",
                    {
                      class: { active: _vm.isActive == "list" },
                      staticStyle: { cursor: "pointer" },
                      on: {
                        click: function($event) {
                          return _vm.listView()
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
            "div",
            { staticClass: "d-sm-inline-flex mb-5" },
            [
              _c("v-select", {
                staticClass: "mr-sm-5 select-width-150",
                attrs: { items: _vm.type, label: "Type" }
              }),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "mr-sm-5 select-width-150",
                attrs: { items: _vm.recent, label: "Recent" }
              }),
              _vm._v(" "),
              _c("v-select", {
                staticClass: "select-width-150",
                attrs: { items: _vm.noOfItems, label: "No of Items" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectedView == "grid",
                  expression: "selectedView == 'grid'"
                }
              ]
            },
            [_c("products", { attrs: { productsData: _vm.productsData } })],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
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
            [_c("edit", { attrs: { productsData: _vm.productsData } })],
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