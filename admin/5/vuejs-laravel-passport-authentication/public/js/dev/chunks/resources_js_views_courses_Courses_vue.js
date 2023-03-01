(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_courses_Courses_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./resources/js/views/courses/data.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['data', 'cols', 'colsm', 'colmd', 'collg', 'colxl', 'width', 'height'],
  data: function data() {
    return {
      dialog: false,
      CourseData: _data__WEBPACK_IMPORTED_MODULE_0__.default
    };
  },
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./resources/js/views/courses/data.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      CourseData: _data__WEBPACK_IMPORTED_MODULE_0__.default
    };
  },
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseWidgets_CourseBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseWidgets/CourseBanner */ "./resources/js/views/courses/CourseWidgets/CourseBanner.vue");
/* harmony import */ var _CourseWidgets_InstructorCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseWidgets/InstructorCard */ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./resources/js/views/courses/data.js");
/* harmony import */ var _CourseWidgets_CourseCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseWidgets/CourseCard */ "./resources/js/views/courses/CourseWidgets/CourseCard.vue");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      CourseData: _data__WEBPACK_IMPORTED_MODULE_2__.default
    };
  },
  computed: {
    isManagement: function isManagement() {
      return this.CourseData.courses.filter(function (item) {
        return item.type == 'management';
      });
    },
    isDesign: function isDesign() {
      return this.CourseData.courses.filter(function (item) {
        return item.type == 'design';
      });
    },
    isDevelop: function isDevelop() {
      return this.CourseData.courses.filter(function (item) {
        return item.type == 'develop';
      });
    },
    isTop: function isTop() {
      return this.CourseData.courses.filter(function (item) {
        return item.popular == 'top';
      });
    },
    isNew: function isNew() {
      return this.CourseData.courses.filter(function (item) {
        return item.popular == 'new';
      });
    },
    isTrending: function isTrending() {
      return this.CourseData.courses.filter(function (item) {
        return item.popular == 'trending';
      });
    }
  },
  components: {
    CourseBanner: _CourseWidgets_CourseBanner__WEBPACK_IMPORTED_MODULE_0__.default,
    InstructorCard: _CourseWidgets_InstructorCard__WEBPACK_IMPORTED_MODULE_1__.default,
    CourseCard: _CourseWidgets_CourseCard__WEBPACK_IMPORTED_MODULE_3__.default
  },
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/courses/data.js":
/*!********************************************!*\
  !*** ./resources/js/views/courses/data.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "courses": [{
    "image": "/static/img/course1.jpg",
    "type": "management",
    "popular": "top",
    "bestseller": true,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Joanna Brew",
    "oldPrice": "900",
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 5,
    "level": "All",
    "disount": 50,
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course2.jpg",
    "type": "management",
    "popular": "top",
    "bestseller": true,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/rbTVvpHF4cU",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "John Smith Brown",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 5,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course3.jpg",
    "type": "management",
    "popular": "top",
    "bestseller": true,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Joanna Brew",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 5,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course4.jpg",
    "type": "management",
    "popular": "top",
    "bestseller": true,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Savanna South",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course5.jpg",
    "type": "management",
    "popular": "top",
    "bestseller": true,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/LywZELVl_10",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Arthur Parker",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course3.jpg",
    "type": "design",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "John Smith Brown",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course1.jpg",
    "type": "design",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Savanna South",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course2.jpg",
    "type": "design",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/DKN_vgJeOO8",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Arthur Parker",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "rating": 4,
    "hours": "11.5",
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course5.jpg",
    "type": "develop",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Savanna South",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "rating": 4,
    "hours": "11.5",
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course4.jpg",
    "type": "develop",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/-4rLLoNkLEU",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Arthur Parker",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course5.jpg",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "https://www.youtube.com/embed/rVM3kqHGVrk",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Joanna Brew",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course3.jpg",
    "popular": "top",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "John Smith Brown,Savanna South",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course4.jpg",
    "popular": "new",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Arthur Parker",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course5.jpg",
    "popular": "new",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "John Smith Brown",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course2.jpg",
    "popular": "trending",
    "bestseller": false,
    "videoDemoStatus": false,
    "demoVideoUrl": "",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Savanna South",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course3.jpg",
    "popular": "trending",
    "bestseller": false,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/Y4EOOb276gY",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Arthur Parker",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }, {
    "image": "/static/img/course4.jpg",
    "popular": "trending",
    "bestseller": false,
    "videoDemoStatus": true,
    "demoVideoUrl": "https://www.youtube.com/embed/zWtncr2UcbA",
    "name": "Lorem ipsum dolor sit amet sit amet sit amet",
    "content": "Joanna Brew",
    "oldPrice": "900",
    "disount": 50,
    "lastUpdates": "09/2018",
    "bestSell": " C++ | Development",
    "lectures": "483",
    "hours": "11.5",
    "rating": 4,
    "level": "All",
    "describe": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
    "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vivamus non ipsum in nisi porttitor suscipit.", "Aliquam ut dolor in lorem accumsan porta."]
  }],
  "instructors": [{
    "image": "/static/avatars/user-6.jpg",
    "profile": "C++",
    "place": "Iron Network",
    "name": "John Smith Brown",
    "courses": "5",
    "number": "36247",
    "type": "students"
  }, {
    "image": "/static/avatars/user-13.jpg",
    "profile": "Marketing",
    "place": "Iron Network",
    "name": "Jonathan Red",
    "courses": "11",
    "number": "7464",
    "type": "students"
  }, {
    "image": "/static/avatars/user-8.jpg",
    "profile": "Designer",
    "place": "Iron Network",
    "name": "Arthur Parker",
    "courses": "3",
    "number": "36",
    "type": "students"
  }, {
    "image": "/static/avatars/user-35.jpg",
    "profile": "Python",
    "place": "Iron Network",
    "name": "Joanna Brew",
    "courses": "15",
    "number": "150",
    "type": "students"
  }, {
    "image": "/static/avatars/user-31.jpg",
    "profile": "Angular",
    "place": "Iron Network",
    "name": "Savanna South",
    "courses": "19",
    "number": "45793",
    "type": "students"
  }],
  "courseDetail": {
    "heading": "Quisque hendrerit ex quis dui eleifend, dapibus vehicula lacus semper.",
    "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "bestSeller": "2367532",
    "createdBy": "Sahil Goyal, Girija Bansal by James Brown",
    "lastUpdates": "11/2018",
    "language": "English",
    "demoVideoUrl": "https://www.youtube.com/embed/GKHTSJT9kdM",
    "learn": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Vestibulum at mauris semper, tristique nulla et, tristique nulla.", "Proin sit amet ex in quam vehicula maximus sit amet vel mauris.", "Proin sit amet ex in quam vehicula maximus sit amet vel mauris", "Quisque hendrerit ex quis dui eleifend, dapibus vehicula lacus semper.", "Fusce ut libero consectetur, aliquet velit sed, hendrerit sem.", "Maecenas eget urna sagittis, efficitur arcu posuere, pellentesque metus", "Donec sit amet nisi ac tellus mattis venenatis volutpat sit amet mi"],
    "description": {
      "title": "Integer pharetra mi eu libero convallis ultricies",
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "features": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Donec auctor sapien eget sem blandit pharetra.", "In sed tellus congue, rhoncus mi quis, iaculis magna.", "Vestibulum at mauris semper, tristique nulla et, tristique nulla.", "Vestibulum at mauris semper, tristique nulla et, tristique nulla."]
    },
    "topics": [{
      "name": "Course Overview",
      "courseDetail": [{
        "demoVideoUrl": "https://www.youtube.com/embed/iY6qSRdMtZQ",
        "name": "Introduction",
        "time": "11.4"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/A4coW3B8V2c",
        "name": "Applications",
        "time": "11.4"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/1NpisqyBoI0",
        "name": "Installing",
        "time": "11.4"
      }]
    }, {
      "name": "Basic Programming",
      "courseDetail": [{
        "demoVideoUrl": "https://www.youtube.com/embed/yJMtLhvDfe4",
        "name": "Welcome to Section 2",
        "time": "3.24"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/D7MudYw1Fhg",
        "name": "Basics",
        "time": "7.14"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/0uAPzJVDVEo",
        "name": "Solo Practice",
        "time": "5.72"
      }]
    }, {
      "name": "Advance Topics",
      "courseDetail": [{
        "demoVideoUrl": "https://www.youtube.com/embed/Q2AOSQmV7w4",
        "name": "Advance Programming",
        "time": "10.66"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/LESBbhL1TRw",
        "name": "Difference between Topics",
        "time": "11.4"
      }, {
        "demoVideoUrl": "https://www.youtube.com/embed/prXvKdPeDNU",
        "name": "Wrap Up",
        "time": "7.72"
      }]
    }],
    "instructorInformation": {
      "image": "/static/avatars/user-9.jpg",
      "name": "James Colt",
      "features": [{
        "icon": "video_library",
        "feature": "Lorem ipsum dolor sit amet."
      }, {
        "icon": "book",
        "feature": "Fusce ut libero consectetur."
      }, {
        "icon": "code",
        "feature": "Proin sit amet ex in quam."
      }, {
        "icon": "phone_iphone",
        "feature": "Donec sit amet nisi ac."
      }],
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    "billingDetails": {
      "totalPrice": 1000,
      "discountPercent": 94,
      "discountTime": "2 Day",
      "guarntee": "30",
      "includes": [{
        "icon": "video_library",
        "feature": "Lorem ipsum dolor sit amet."
      }, {
        "icon": "book",
        "feature": "Fusce ut libero consectetur."
      }, {
        "icon": "code",
        "feature": "Proin sit amet ex in quam."
      }, {
        "icon": "phone_iphone",
        "feature": "Donec sit amet nisi ac."
      }]
    },
    "moreCourses": [{
      "image": "/static/img/course1.jpg",
      "bestseller": true,
      "videoDemoStatus": false,
      "demoVideoUrl": "",
      "name": "Lorem ipsum dolor sit amet sit amesdfffffft sit amet",
      "content": "Lorem ipsum",
      "oldPrice": "900",
      "rating": 5,
      "disount": 50
    }, {
      "image": "/static/img/course2.jpg",
      "bestseller": true,
      "videoDemoStatus": false,
      "demoVideoUrl": "",
      "name": "Lorem ipsum dosdaalor sit amet sit sfddddddamet sit amet",
      "content": "Lorem ipsum",
      "oldPrice": "900",
      "disount": 50,
      "rating": 5
    }, {
      "image": "/static/img/course3.jpg",
      "bestseller": true,
      "videoDemoStatus": true,
      "demoVideoUrl": "https://www.youtube.com/embed/kfgOX1Uh04M",
      "name": "Loadsrem ipsum dolor sit amet sit amet sit amet",
      "content": "Lorem ipsum",
      "oldPrice": "900",
      "disount": 50,
      "rating": 5
    }]
  }
});

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/CourseBanner.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/CourseBanner.vue ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseBanner.vue?vue&type=template&id=601a10f8& */ "./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courses/CourseWidgets/CourseBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/CourseCard.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/CourseCard.vue ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseCard.vue?vue&type=template&id=9bd39048& */ "./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048&");
/* harmony import */ var _CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseCard.vue?vue&type=script&lang=js& */ "./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__.render,
  _CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courses/CourseWidgets/CourseCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/InstructorCard.vue ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InstructorCard.vue?vue&type=template&id=7775a1de& */ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de&");
/* harmony import */ var _InstructorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstructorCard.vue?vue&type=script&lang=js& */ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InstructorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__.render,
  _InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courses/CourseWidgets/InstructorCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/courses/Courses.vue":
/*!************************************************!*\
  !*** ./resources/js/views/courses/Courses.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Courses.vue?vue&type=template&id=84a801dc& */ "./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc&");
/* harmony import */ var _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses.vue?vue&type=script&lang=js& */ "./resources/js/views/courses/Courses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/courses/Courses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstructorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InstructorCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstructorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/courses/Courses.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/courses/Courses.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseBanner_vue_vue_type_template_id_601a10f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseBanner.vue?vue&type=template&id=601a10f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8&");


/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048& ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseCard_vue_vue_type_template_id_9bd39048___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseCard.vue?vue&type=template&id=9bd39048& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048&");


/***/ }),

/***/ "./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InstructorCard_vue_vue_type_template_id_7775a1de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InstructorCard.vue?vue&type=template&id=7775a1de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de&");


/***/ }),

/***/ "./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_84a801dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=template&id=84a801dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseBanner.vue?vue&type=template&id=601a10f8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "banner-image-wrap courses-bg-img" }, [
    _c(
      "div",
      { staticClass: "banner-content-wrap fill-height bg-warn-overlay" },
      [
        _c(
          "v-row",
          { staticClass: "align-center justify-center row fill-height" },
          [
            _c(
              "v-col",
              { attrs: { cols: "11", sm: "11", md: "10", lg: "10", xl: "10" } },
              [
                _c("h2", { staticClass: "white--text" }, [
                  _vm._v("Learn With Your Convenience")
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "white--text" }, [
                  _vm._v(
                    "Learn any Course anywhere anytime from our 200 courses starting from $60 USD."
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "ma-0" },
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "pa-0",
                        attrs: {
                          cols: "12",
                          sm: "10",
                          md: "3",
                          lg: "3",
                          xl: "3"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "search" },
                          [
                            _c(
                              "v-form",
                              { staticClass: "search-form" },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    dark: "",
                                    color: "white",
                                    placeholder: "Find Your Course"
                                  }
                                })
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
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/CourseCard.vue?vue&type=template&id=9bd39048& ***!
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
  return _c("v-container", [
    _c(
      "div",
      { staticClass: "course-card layout row wrap" },
      _vm._l(_vm.data, function(list, key) {
        return _c(
          "app-card",
          {
            key: key,
            attrs: {
              customClasses: "course-item-wrap",
              colClasses:
                "col-" +
                _vm.cols +
                " col-sm-" +
                _vm.colsm +
                " col-md-" +
                _vm.colmd +
                " col-lg-" +
                _vm.collg +
                " col-xl-" +
                _vm.colxl
            }
          },
          [
            _c(
              "div",
              { staticClass: "image-wrap" },
              [
                list.videoDemoStatus == false
                  ? [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to:
                              "/" +
                              (_vm.getCurrentAppLayoutHandler() +
                                "/courses/courses-detail")
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: list.image, alt: "image" }
                          })
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                list.videoDemoStatus == true
                  ? [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to:
                              "/" +
                              (_vm.getCurrentAppLayoutHandler() +
                                "/courses/courses-detail")
                          }
                        },
                        [
                          _c("img", {
                            attrs: { src: list.image, alt: "image" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { width: "500" },
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
                                      [
                                        _c("v-icon", [
                                          _vm._v("play_circle_filled")
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          ),
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
                          _c("iframe", {
                            attrs: {
                              src: list.demoVideoUrl,
                              frameborder: "0",
                              allowfullscreen: ""
                            }
                          })
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                list.bestseller == true
                  ? [
                      _c(
                        "span",
                        {
                          staticClass:
                            "best-seller bestseller-tag d-inline-block"
                        },
                        [_vm._v(_vm._s(_vm.$t("message.bestseller")))]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to:
                    "/" +
                    (_vm.getCurrentAppLayoutHandler() +
                      "/courses/courses-detail")
                }
              },
              [
                _c("h4", { staticClass: "make-ellipse" }, [
                  _vm._v(_vm._s(list.name))
                ])
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "fs-12 mb-4 d-block" }, [
              _vm._v(_vm._s(list.content))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "rating-text layout row wrap ma-0" },
              [
                _c("v-rating", {
                  attrs: {
                    value: list.rating,
                    color: "warning",
                    "background-color": "warning"
                  }
                }),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(list.rating) + " Stars")])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "price" }, [
              _c("h4", { attrs: { color: "primary" } }, [
                _vm._v(
                  "$" + _vm._s((list.oldPrice * (100 - list.disount)) / 100)
                )
              ]),
              _vm._v(" "),
              _c("del", [_vm._v("$" + _vm._s(list.oldPrice))])
            ]),
            _vm._v(" "),
            _c(
              "app-card",
              { attrs: { customClasses: "course-hover-item" } },
              [
                _c("div", { staticClass: "header" }, [
                  _c("div", { staticClass: "meta-info" }, [
                    _c("span", { staticClass: "date-info fs-12 fw-normal" }, [
                      _vm._v("Last updated: " + _vm._s(list.lastUpdates))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-header" }, [
                    _c("h4", [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v(_vm._s(list.name))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meta-info mb-1" }, [
                    list.bestseller == true
                      ? _c("div", { staticClass: "mb-1" }, [
                          _c(
                            "span",
                            { staticClass: "category fs-12 fw-normal" },
                            [
                              _c("span", { staticClass: "bestseller-tag" }, [
                                _vm._v("bestseller")
                              ]),
                              _vm._v(" " + _vm._s(list.bestSell))
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "meta-info-block" }, [
                      _c(
                        "span",
                        { staticClass: "lectures fs-12 fw-normal" },
                        [
                          _c("v-icon", { staticClass: "cmr-8" }, [
                            _vm._v("play_circle_filled")
                          ]),
                          _vm._v(_vm._s(list.lectures) + " lectures")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "durations fs-12 fw-normal" },
                        [
                          _c("v-icon", { staticClass: "cmr-8" }, [
                            _vm._v("access_time")
                          ]),
                          _vm._v(_vm._s(list.hours) + " hours")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "durations fs-12 fw-normal" },
                        [
                          _c("v-icon", { staticClass: "cmr-8" }, [
                            _vm._v("show_chart")
                          ]),
                          _vm._v(_vm._s(list.level) + " Levels")
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "short-desc" }, [
                  _c("span", [_vm._v(_vm._s(list.describe))]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "course-list  my-3" },
                    _vm._l(list.features, function(feature, key) {
                      return _c("li", { key: key }, [_vm._v(_vm._s(feature))])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "error",
                    attrs: {
                      block: "",
                      to:
                        "/" +
                        (_vm.getCurrentAppLayoutHandler() + "/courses/sign-in")
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("message.addToCart")))]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/CourseWidgets/InstructorCard.vue?vue&type=template&id=7775a1de& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "instructor-card-wrap layout wrap row" },
    _vm._l(_vm.CourseData.instructors, function(instruct, key) {
      return _c(
        "app-card",
        {
          key: key,
          attrs: {
            colClasses: "col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12",
            customClasses: "h-100 text-center"
          }
        },
        [
          _c(
            "a",
            { staticClass: "instructor-card", attrs: { href: "#" } },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to:
                      "/" +
                      (_vm.getCurrentAppLayoutHandler() +
                        "/dashboard/ecommerce")
                  }
                },
                [
                  _c("img", {
                    attrs: {
                      src: instruct.image,
                      width: "75",
                      height: "75",
                      alt: "instructer"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "instructor-details" }, [
                _c("span", { staticClass: "desig d-block fs-12 fw-normal" }, [
                  _vm._v(
                    _vm._s(instruct.profile) + ", " + _vm._s(instruct.place)
                  )
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "name font-weight-bold d-block" }, [
                  _vm._v(_vm._s(instruct.name))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "instructor-counts" }, [
                _c(
                  "span",
                  { staticClass: "course-count d-block fs-12 fw-normal" },
                  [_vm._v(_vm._s(instruct.courses) + " courses")]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "student-count d-block fs-12 fw-normal" },
                  [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v(_vm._s(instruct.number))
                    ]),
                    _vm._v(" " + _vm._s(instruct.type))
                  ]
                )
              ])
            ],
            1
          )
        ]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/courses/Courses.vue?vue&type=template&id=84a801dc& ***!
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
    "div",
    { staticClass: "courses-wrap" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl", attrs: { fluid: "" } },
        [
          _c("course-banner"),
          _vm._v(" "),
          _c(
            "v-row",
            {
              staticClass:
                "align-center justify-center fill-height courses-inner"
            },
            [
              _c(
                "v-col",
                {
                  attrs: { sm: "12", cols: "12", md: "12", lg: "12", xl: "12" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "courses-grid-sec" },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass:
                            "custom-align-stretch fill-heigh course-grid-layout"
                        },
                        [
                          _c(
                            "app-card",
                            {
                              attrs: {
                                fullScreen: true,
                                closeable: true,
                                colClasses:
                                  "col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4",
                                customClasses:
                                  "custom-grey collection-group px-0 pb-0"
                              }
                            },
                            [
                              _c("h2", [
                                _vm._v(
                                  "Best collection from best tutors from around the globe"
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "app-card",
                            {
                              attrs: {
                                fullScreen: true,
                                closeable: true,
                                colClasses:
                                  "col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8",
                                customClasses: "tab-wrap pa-0",
                                content: ""
                              }
                            },
                            [
                              _vm.CourseData.courses
                                ? _c(
                                    "v-tabs",
                                    { attrs: { "slider-color": "primary" } },
                                    [
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.management
                                        ? _c(
                                            "v-tab",
                                            { attrs: { ripple: "" } },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    _vm.$t("message.management")
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.design
                                        ? _c(
                                            "v-tab",
                                            { attrs: { ripple: "" } },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    _vm.$t("message.design")
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.development
                                        ? _c(
                                            "v-tab",
                                            { attrs: { ripple: "" } },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "message.development"
                                                    )
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.management
                                        ? _c(
                                            "v-tab-item",
                                            [
                                              _c("course-card", {
                                                attrs: {
                                                  data: _vm.isManagement.slice(
                                                    0,
                                                    3
                                                  ),
                                                  colxl: 4,
                                                  collg: 4,
                                                  colmd: 4,
                                                  colsm: 6,
                                                  cols: 12
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.design
                                        ? _c(
                                            "v-tab-item",
                                            [
                                              _c("course-card", {
                                                attrs: {
                                                  data: _vm.isDesign,
                                                  colxl: 4,
                                                  collg: 4,
                                                  colmd: 4,
                                                  colsm: 6,
                                                  cols: 12
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.CourseData.courses.type ==
                                      _vm.CourseData.courses.development
                                        ? _c(
                                            "v-tab-item",
                                            [
                                              _c("course-card", {
                                                attrs: {
                                                  data: _vm.isDevelop,
                                                  colxl: 4,
                                                  collg: 4,
                                                  colmd: 4,
                                                  colsm: 6,
                                                  cols: 12
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "view-all-link" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to:
                                          "/" +
                                          (_vm.getCurrentAppLayoutHandler() +
                                            "/courses/courses-list")
                                      }
                                    },
                                    [_vm._v("View All\n\t\t\t\t\t\t\t\t")]
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
                    { staticClass: "courses-grid" },
                    [
                      _c(
                        "v-row",
                        {
                          staticClass:
                            "align-start justify-start fill-height mb-0"
                        },
                        [
                          _c(
                            "v-col",
                            {
                              attrs: {
                                sm: "12",
                                s: "12",
                                md: "12",
                                lg: "12",
                                xl: "12"
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "popularity tab-wrap" },
                                [
                                  _vm.CourseData.courses
                                    ? _c(
                                        "v-tabs",
                                        {
                                          attrs: { "slider-color": "primary" }
                                        },
                                        [
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.top
                                            ? _c(
                                                "v-tab",
                                                { attrs: { ripple: "" } },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        _vm.$t("message.top")
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.new
                                            ? _c(
                                                "v-tab",
                                                { attrs: { ripple: "" } },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        _vm.$t("message.new")
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.trending
                                            ? _c(
                                                "v-tab",
                                                { attrs: { ripple: "" } },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "message.trending"
                                                        )
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.top
                                            ? _c(
                                                "v-tab-item",
                                                [
                                                  _c("course-card", {
                                                    attrs: {
                                                      data: _vm.isTop,
                                                      colxl: 3,
                                                      collg: 3,
                                                      colmd: 4,
                                                      colsm: 6,
                                                      cols: 12
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.new
                                            ? _c(
                                                "v-tab-item",
                                                [
                                                  _c("course-card", {
                                                    attrs: {
                                                      data: _vm.isNew,
                                                      colxl: 3,
                                                      collg: 3,
                                                      colmd: 4,
                                                      colsm: 6,
                                                      cols: 12
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.CourseData.courses.popular ==
                                          _vm.CourseData.courses.trending
                                            ? _c(
                                                "v-tab-item",
                                                [
                                                  _c("course-card", {
                                                    attrs: {
                                                      data: _vm.isTrending,
                                                      colxl: 3,
                                                      collg: 3,
                                                      colmd: 4,
                                                      colsm: 6,
                                                      cols: 12
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
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
                  _c(
                    "div",
                    { staticClass: "instructor-card-wrap" },
                    [
                      _c("h3", [
                        _vm._v(_vm._s(_vm.$t("message.popularInstructors")))
                      ]),
                      _vm._v(" "),
                      _c("instructor-card")
                    ],
                    1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);