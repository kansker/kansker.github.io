var axios = require('axios')

axios.get('http://reactify.theironnetwork.org/data/vuely/supportRequests.js')
	.then(function(response){
	 	exports.supportRequests = (response.data);
	});

axios.get('http://reactify.theironnetwork.org/data/vuely/todo.js')
	.then(function(response){
	 	exports.todo = (response.data);
	});

// axios.get('http://reactify.theironnetwork.org/data/testimonials.js')
//   .then(function(response){
//     exports.testimonials = (response.data);
//   });


axios.get('http://reactify.theironnetwork.org/data/express/cartdata.js')
   .then(function(response){
      exports.cartdata = (response.data);
   });

axios.get('http://reactify.theironnetwork.org/data/vuely/invoice.js')
	.then(function(response){
	 	exports.invoice = (response.data);
	});

axios.get('http://reactify.theironnetwork.org/data/vuely/recentOrders.js')
	.then(function(response){
	 	exports.recentOrders = (response.data);
	});

axios.get('http://reactify.theironnetwork.org/data/vuely/reviews.js')
	.then(function(response){
	 	exports.reviews = (response.data);
	});

axios.get('http://reactify.theironnetwork.org/data/galleryImages.js')
   .then(function(response){
      exports.gallery = (response.data);
   });   

axios.get('http://reactify.theironnetwork.org/data/vuely/users.js')
   .then(function(response){
      exports.users = (response.data);
   }); 

axios.get('http://reactify.theironnetwork.org/data/vuely/connections.js')
   .then(function(response){
      exports.connections = (response.data);
   });    

axios.get('http://reactify.theironnetwork.org/data/faqs.js')
   .then(function(response){
      exports.faqs = (response.data);
   });

exports.testimonials = [{
                            "id": 1,
                            "name": "Mia Mabanta",
                            "avatar": "/images/user-1.jpg",
                            "profile": "/images/client-1.png",
                            "designation": "UI Developer",
                            "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                        },
                        {
                            "id": 2,
                            "name": "Emmy Loren",
                            "avatar": "/images/user-2.jpg",
                            "profile": "/images/client-2.png",
                            "designation": "UX Developer",
                            "body": "Sed consequat lobortis risus, vitae congue nulla tempor id. Curabitur eu augue id nibh tristique tristique. Phasellus vel est nisi"
                        },
                        {
                            "id": 3,
                            "name": "Astell Mercell",
                            "avatar": "/images/user-3.jpg",
                            "profile": "/images/client-3.png",
                            "designation": "Director of Brand Development at Quartz",
                            "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                        }]
exports.newEmail = [{
                       "id": 1,
                       "from": "john@example.com",
                       "subject": "Lorem ipsum is simply dummy text",
                       "message": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
                       "sender_name": "John Doe",
                       "date": "10:30 PM",
                       "sender_avatar": "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                       "replyTextBox": false
                   },
                   {
                       "id": 2,
                       "from": "lisa@example.com",
                       "subject": "Contrary to popular belief, Lorem Ipsum",
                       "message": "Lorem ipsum is simply dummy random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable.",
                       "sender_name": "Lisa Roy",
                       "date": "10:50 PM",
                       "sender_avatar": "http://reactify.theironnetwork.org/data/images/user-2.jpg",
                       "replyTextBox": false
                   },
                   {
                       "id": 3,
                       "from": "zara@example.com",
                       "subject": "Popular belief, Lorem Ipsum Pessages",
                       "message": "Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                       "sender_name": "Zara",
                       "date": "Yesterday",
                       "sender_avatar": "http://reactify.theironnetwork.org/data/images/user-3.jpg",
                       "replyTextBox": false
                   },
                   {
                       "id": 4,
                       "from": "mayare@example.com",
                       "subject": "It has roots in a piece of classical Latin literature",
                       "message": "Contrary to popular belief, Lorem Ipsum Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                       "sender_name": "Mayare Amr",
                       "date": "Yesterday",
                       "sender_avatar": "http://reactify.theironnetwork.org/data/images/user-4.jpg",
                       "replyTextBox": false
                   },
                   {
                       "id": 5,
                       "from": "brom@example.com",
                       "subject": "Lorem ipsum is simply dummy text for prrinting new tycasting",
                       "message": "Popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
                       "sender_name": "Brom Tay",
                       "date": "Yesterday",
                       "sender_avatar": "http://reactify.theironnetwork.org/data/images/user-5.jpg",
                       "replyTextBox": false
                   }
               ]

exports.topSelling = [{
                        "id": "1",
                        "name": "Bluetooth Speakers",
                        "price": "$255",
                        "thumbnail": "/images/product-1.png"
                     },
                     {
                        "id": "2",
                        "name": "Jbm Headphones",
                        "price": "$340",
                        "thumbnail": "/images/product-2.png"
                     },
                     {
                        "id": "3",
                        "name": "AT Jack Radio",
                        "price": "$340",
                        "thumbnail": "/images/product-3.png"
                     }];	

exports.bloggrid = [{
                         "id": "1",
                         "thumbnail": "/images/blog-3.jpg",
                         "title": "lorem ipsum is simply dummy text",
                         "body":
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum.",
                         "date": "1-jun-2018"
                       }];


exports.bloggrids = [{
                         id: 1,
                         thumbnail: "/images/blog-1.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       },
                       {
                         id: 2,
                         thumbnail: "/images/blog-2.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       },
                       {
                         id: 3,
                         thumbnail: "/images/blog-3.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       },
                       {
                         id: 4,
                         thumbnail: "/images/blog-4.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       },
                       {
                         id: 5,
                         thumbnail: "/images/blog-5.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       },
                       {
                         id: 6,
                         thumbnail: "/images/blog-6.jpg",
                         title: "lorem ipsum is simply dummy text",
                         body:
                           "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
                         date: "1-jun-2018"
                       }];                      
exports.features = {
                 basic: [
                   "Granular access and controls",
                   "Desktop sync",
                   "Mobile access",
                   "Version history",
                   "SSL and at-rest encryption",
                   "Two-factor authentication",
                   "Standard business support",
                   "User management",
                   "25,000 API calls per month"
                 ],
                 pro: [
                   "Includes all Starter features plus",
                   "Advanced user and security reporting",
                   "Custom branding",
                   "Mobile security controls",
                   "Integrations with EMM providers",
                   "Data Loss Prevention (DLP)",
                   "Standard business support",
                   "50,000 API calls per month",
                   "25,000 API calls per month"
                 ],
                 advanced: [
                   "Includes all Business features plus",
                   "Unlimited external collaborators",
                   "Full content visibility and management",
                   "Unlimited integrations",
                   "Workflow automations",
                   "Document watermarking",
                   "Device trust (advanced mobile requirements)",
                   "Password policy enforcement",
                   "Metadata and custom templates"
                 ]
               };    

exports.recentChat = [ {
                           "id": 1,
                           "active": true,
                           "userName": "Jason Oner",
                           "avatar": "/images/avatars/user-28.jpg"
                        },
                        {
                           "id": 2,
                           "active": true,
                           "userName": "Ranee Carlson",
                           "avatar": "/images/avatars/user-29.jpg"
                        },
                        {
                           "id": 3,
                           "userName": "Cindy Baker",
                           "avatar": "/images/avatars/user-30.jpg"
                        },
                        {
                           "id": 4,
                           "userName": "Ali Connors",
                           "avatar": "/images/avatars/user-31.jpg"
                        },
                        {
                           "id": 5,
                           "userName": "Harrison Hartman",
                           "avatar": "/images/avatars/user-35.jpg"
                        }
                     ]                                  
exports.populerBlogs= [{
                         id: 1,
                         title: "7 Things You Need To Know About Consulting Today",
                         thumbnail: "/images/gallery1.jpg",
                         likes: 220,
                         comments: 50
                       },
                       {
                         id: 2,
                         title: "7 Things You Need To Know About Consulting Today",
                         thumbnail: "/images/gallery2.jpg",
                         likes: 200,
                         comments: 40
                       },
                       {
                         id: 3,
                         title: "7 Things You Need To Know About Consulting Today",
                         thumbnail: "/images/gallery3.jpg",
                         likes: 180,
                         comments: 20
                       },
                       {
                         id: 4,
                         title: "7 Things You Need To Know About Consulting Today",
                         thumbnail: "/images/gallery4.jpg",
                         likes: 50,
                         comments: 2
                       }
                     ];
exports.recentSales= [{
                        "title": "Aadi",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon1.jpeg"
                     },
                     {
                        "title": "Event Promo",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon2.jpeg"
                     },
                     {
                        "title": "Lawking",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon3.jpeg"
                     },
                     {
                        "title": "Adminify",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon4.jpeg"
                     },
                     {
                        "title": "Reactify",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon1.jpeg"
                     },
                     {
                        "title": "Adminify",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon2.jpeg"
                     },
                     {
                        "title": "Reactify",
                        "sale": "225 Sale",
                        "views": "280 Views",
                        "price": "$59",
                        "img": "/images/icon3.jpeg"
                     }
                  ]
exports.categories = [
                    "Trending",
                    "Sports",
                    "News",
                    "Travel",
                    "Social",
                    "Adventure"
                  ];
exports.tags = [
                 "Consulting",
                 "Finance",
                 "Ideas",
                 "Market",
                 "Online Service",
                 "Planning",
                 "Tips"
               ]
exports.cartProducts = [{
                           id: 1,
                           productImg: "/images/product2.png",
                           name: "3DR - Solo Smart Rechargeable Battery - Black",
                           price: 9,
                           quantity: 5,
                           total: 45
                        },
                        {
                           id: 2,
                           productImg: "/images/product3.png",
                           name: "JÄRA Lamp shade, white",
                           price: 15,
                           quantity: 2,
                           total: 30
                        },
                        {
                           id: 3,
                           productImg: "/images/product4.png",
                           name: "LEGITIM-Chopping board, white",
                           price: 23,
                           quantity: 1,
                           total: 23
                        },
                        {
                           id: 4,
                           productImg: "/images/product5.png",
                           name: "Sour cream and onion potato chips",
                           price: 21,
                           quantity: 4,
                           total: 84
                        }
                     ]               
exports.creditCard = [
                        {
                           id: 0,
                           last4Digit: '**** **** **** 8549',
                           cvv: 465,
                           cardHolderName: 'John Brown'
                        },
                        {
                           id: 1,
                           last4Digit: '**** **** **** 6526',
                           cvv: 123,
                           cardHolderName: 'Jennifer Mernada'
                        },
                        {
                           id: 2,
                           last4Digit: '**** **** **** 9645',
                           cvv: 789,
                           cardHolderName: 'Johnson'
                        }
                     ]              
exports.themifyIcons = {
               arrowsDirectionIcons : [
                          "ti-arrow-up",
                          "ti-arrow-right",
                          "ti-arrow-left",
                          "ti-arrow-down",
                          "ti-arrows-vertical",
                          "ti-arrows-horizontal",
                          "ti-angle-up",
                          "ti-angle-right",
                          "ti-angle-left",
                          "ti-angle-down",
                          "ti-angle-double-up",
                          "ti-angle-double-right",
                          "ti-angle-double-left",
                          "ti-angle-double-down",
                          "ti-move",
                          "ti-fullscreen",
                          "ti-arrow-top-right",
                          "ti-arrow-top-left",
                          "ti-arrow-circle-up",
                          "ti-arrow-circle-right",
                          "ti-arrow-circle-left",
                          "ti-arrow-circle-down",
                          "ti-arrows-corner",
                          "ti-split-v",
                          "ti-split-v-alt",
                          "ti-split-h",
                          "ti-hand-point-up",
                          "ti-hand-point-right",
                          "ti-hand-point-left",
                          "ti-hand-point-down",
                          "ti-back-right",
                          "ti-back-left",
                          "ti-exchange-vertical",
                        ],
                        webAppIcons : [
                          "ti-wand",
                          "ti-save",
                          "ti-save-alt",
                          "ti-direction",
                          "ti-direction-alt",
                          "ti-user",
                          "ti-link",
                          "ti-unlink",
                          "ti-trash",
                          "ti-target",
                          "ti-tag",
                          "ti-desktop",
                          "ti-tablet",
                          "ti-mobile",
                          "ti-email",
                          "ti-star",
                          "ti-spray",
                          "ti-signal",
                          "ti-shopping-cart",
                          "ti-shopping-cart-full",
                          "ti-settings",
                          "ti-search",
                          "ti-zoom-in",
                          "ti-zoom-out",
                          "ti-cut",
                          "ti-ruler",
                          "ti-ruler-alt-2",
                          "ti-ruler-pencil",
                          "ti-ruler-alt",
                          "ti-bookmark",
                          "ti-bookmark-alt",
                          "ti-reload",
                          "ti-plus",
                          "ti-minus",
                          "ti-close",
                          "ti-pin",
                          "ti-pencil",
                          "ti-pencil-alt",
                          "ti-paint-roller",
                          "ti-paint-bucket",
                          "ti-na",
                          "ti-medall",
                          "ti-medall-alt",
                          "ti-marker",
                          "ti-marker-alt",
                          "ti-lock",
                          "ti-unlock",
                          "ti-location-arrow",
                          "ti-layout",
                          "ti-layers",
                          "ti-layers-alt",
                          "ti-key",
                          "ti-image",
                          "ti-heart",
                          "ti-heart-broken",
                          "ti-hand-stop",
                          "ti-hand-open",
                          "ti-hand-drag",
                          "ti-flag",
                          "ti-flag-alt",
                          "ti-flag-alt-2",
                          "ti-eye",
                          "ti-import",
                          "ti-export",
                          "ti-cup",
                          "ti-crown",
                          "ti-comments",
                          "ti-comment",
                          "ti-comment-alt",
                          "ti-thought",
                          "ti-clip",
                          "ti-check",
                          "ti-check-box",
                          "ti-camera",
                          "ti-announcement",
                          "ti-brush",
                          "ti-brush-alt",
                          "ti-palette",
                          "ti-briefcase",
                          "ti-bolt",
                          "ti-bolt-alt",
                          "ti-blackboard",
                          "ti-bag",
                          "ti-world",
                          "ti-wheelchair",
                          "ti-car",
                          "ti-truck",
                          "ti-timer",
                          "ti-ticket",
                          "ti-thumb-up",
                          "ti-thumb-down",
                          "ti-stats-up",
                          "ti-stats-down",
                          "ti-shine",
                          "ti-shift-right",
                          "ti-shift-left",
                          "ti-shift-right-alt",
                          "ti-shift-left-alt",
                          "ti-shield",
                          "ti-notepad",
                          "ti-server",
                          "ti-pulse",
                          "ti-printer",
                          "ti-power-off",
                          "ti-plug",
                          "ti-pie-chart",
                          "ti-panel",
                          "ti-package",
                          "ti-music",
                          "ti-music-alt",
                          "ti-mouse",
                          "ti-mouse-alt",
                          "ti-money",
                          "ti-microphone",
                          "ti-menu",
                          "ti-menu-alt",
                          "ti-map",
                          "ti-map-alt",
                          "ti-location-pin",
                          "ti-light-bulb",
                          "ti-info",
                          "ti-infinite",
                          "ti-id-badge",
                          "ti-hummer",
                          "ti-home",
                          "ti-help",
                          "ti-headphone",
                          "ti-harddrives",
                          "ti-harddrive",
                          "ti-gift",
                          "ti-game",
                          "ti-filter",
                          "ti-files",
                          "ti-file",
                          "ti-zip",
                          "ti-folder",
                          "ti-envelope",
                          "ti-dashboard",
                          "ti-cloud",
                          "ti-cloud-up",
                          "ti-cloud-down",
                          "ti-clipboard",
                          "ti-calendar",
                          "ti-book",
                          "ti-bell",
                          "ti-basketball",
                          "ti-bar-chart",
                          "ti-bar-chart-alt",
                          "ti-archive",
                          "ti-anchor",
                          "ti-alert",
                          "ti-alarm-clock",
                          "ti-agenda",
                          "ti-write",
                          "ti-wallet",
                          "ti-video-clapper",
                          "ti-video-camera",
                          "ti-vector",
                          "ti-support",
                          "ti-stamp",
                          "ti-slice",
                          "ti-shortcode",
                          "ti-receipt",
                          "ti-pin2",
                          "ti-pin-alt",
                          "ti-pencil-alt2",
                          "ti-eraser",
                          "ti-more",
                          "ti-more-alt",
                          "ti-microphone-alt",
                          "ti-magnet",
                          "ti-line-double",
                          "ti-line-dotted",
                          "ti-line-dashed",
                          "ti-ink-pen",
                          "ti-info-alt",
                          "ti-help-alt",
                          "ti-headphone-alt",
                          "ti-gallery",
                          "ti-face-smile",
                          "ti-face-sad",
                          "ti-credit-card",
                          "ti-comments-smiley",
                          "ti-time",
                          "ti-share",
                          "ti-share-alt",
                          "ti-rocket",
                          "ti-new-window",
                          "ti-rss",
                          "ti-rss-alt",
                          ""
                        ],
                        controlIcons : [
                          "ti-control-stop",
                          "ti-control-shuffle",
                          "ti-control-play",
                          "ti-control-pause",
                          "ti-control-forward",
                          "ti-control-backward",
                          "ti-volume",
                          "ti-control-skip-forward",
                          "ti-control-skip-backward",
                          "ti-control-record",
                          "ti-control-eject"
                        ],
                        textEditorIcons : [
                          "ti-paragraph",
                          "ti-uppercase",
                          "ti-underline",
                          "ti-text",
                          "ti-Italic",
                          "ti-smallcap",
                          "ti-list",
                          "ti-list-ol",
                          "ti-align-right",
                          "ti-align-left",
                          "ti-align-justify",
                          "ti-align-center",
                          "ti-quote-right",
                          "ti-quote-left"
                        ],
                        layoutIcons : [
                          "ti-layout-width-full",
                          "ti-layout-width-default",
                          "ti-layout-width-default-alt",
                          "ti-layout-tab",
                          "ti-layout-tab-window",
                          "ti-layout-tab-v",
                          "ti-layout-tab-min",
                          "ti-layout-slider",
                          "ti-layout-slider-alt",
                          "ti-layout-sidebar-right",
                          "ti-layout-sidebar-none",
                          "ti-layout-sidebar-left",
                          "ti-layout-placeholder",
                          "ti-layout-menu",
                          "ti-layout-menu-v",
                          "ti-layout-menu-separated",
                          "ti-layout-menu-full",
                          "ti-layout-media-right",
                          "ti-layout-media-right-alt",
                          "ti-layout-media-overlay",
                          "ti-layout-media-overlay-alt",
                          "ti-layout-media-overlay-alt-2",
                          "ti-layout-media-left",
                          "ti-layout-media-left-alt",
                          "ti-layout-media-center",
                          "ti-layout-media-center-alt",
                          "ti-layout-list-thumb",
                          "ti-layout-list-thumb-alt",
                          "ti-layout-list-post",
                          "ti-layout-list-large-image",
                          "ti-layout-line-solid",
                          "ti-layout-grid4",
                          "ti-layout-grid3",
                          "ti-layout-grid2",
                          "ti-layout-grid2-thumb",
                          "ti-layout-cta-right",
                          "ti-layout-cta-left",
                          "ti-layout-cta-center",
                          "ti-layout-cta-btn-right",
                          "ti-layout-cta-btn-left",
                          "ti-layout-column4",
                          "ti-layout-column3",
                          "ti-layout-column2",
                          "ti-layout-accordion-separated",
                          "ti-layout-accordion-merged",
                          "ti-layout-accordion-list",
                          "ti-widgetized",
                          "ti-widget",
                          "ti-widget-alt",
                          "ti-view-list",
                          "ti-view-list-alt",
                          "ti-view-grid",
                          "ti-upload",
                          "ti-download",
                          "ti-loop",
                          "ti-layout-sidebar-2",
                          "ti-layout-grid4-alt",
                          "ti-layout-grid3-alt",
                          "ti-layout-grid2-alt",
                          "ti-layout-column4-alt",
                          "ti-layout-column3-alt",
                          "ti-layout-column2-alt"
                        ],
                        brandIcons : [
                          "ti-flickr",
                          "ti-flickr-alt",
                          "ti-instagram",
                          "ti-google",
                          "ti-github",
                          "ti-facebook",
                          "ti-dropbox",
                          "ti-dropbox-alt",
                          "ti-dribbble",
                          "ti-apple",
                          "ti-android",
                          "ti-yahoo",
                          "ti-trello",
                          "ti-stack-overflow",
                          "ti-soundcloud",
                          "ti-sharethis",
                          "ti-sharethis-alt",
                          "ti-reddit",
                          "ti-microsoft",
                          "ti-microsoft-alt",
                          "ti-linux",
                          "ti-jsfiddle",
                          "ti-joomla",
                          "ti-html5",
                          "ti-css3",
                          "ti-drupal",
                          "ti-wordpress",
                          "ti-tumblr",
                          "ti-tumblr-alt",
                          "ti-skype",
                          "ti-youtube",
                          "ti-vimeo",
                          "ti-vimeo-alt",
                          "ti-twitter",
                          "ti-twitter-alt",
                          "ti-linkedin",
                          "ti-pinterest",
                          "ti-pinterest-alt",
                          "ti-themify-logo",
                          "ti-themify-favicon",
                          "ti-themify-favicon-alt"
                        ] };              

exports.materialIcons = { 
                           newIcons: [
                              "group",
                              "rss",
                              "shape",
                              "spinner",
                              "ungroup",
                              "500px",
                              "8tracks",
                              "amazon",
                              "blogger",
                              "delicious",
                              "disqus",
                              "flattr",
                              "flickr",
                              "github-alt",
                              "google-old",
                              "linkedin",
                              "odnoklassniki",
                              "outlook",
                              "paypal-alt",
                              "pinterest",
                              "playstation",
                              "reddit",
                              "skype",
                              "slideshare",
                              "soundcloud",
                              "tumblr",
                              "twitch",
                              "vimeo",
                              "whatsapp",
                              "xbox",
                              "yahoo",
                              "youtube-play",
                              "youtube"
                           ],
                           webApplication:  [
                              "3d-rotation",
                              "airplane-off",
                              "airplane",
                              "album",
                              "archive",
                              "assignment-account",
                              "assignment-alert",
                              "assignment-check",
                              "assignment-o",
                              "assignment-return",
                              "assignment-returned",
                              "assignment",
                              "attachment-alt",
                              "attachment",
                              "audio",
                              "badge-check",
                              "balance-wallet",
                              "balance",
                              "battery-alert",
                              "battery-flash",
                              "battery-unknown",
                              "battery",
                              "bike",
                              "block-alt",
                              "block",
                              "boat",
                              "book-image",
                              "book",
                              "bookmark-outline",
                              "bookmark",
                              "brush",
                              "bug",
                              "bus",
                              "cake",
                              "car-taxi",
                              "car-wash",
                              "car",
                              "card-giftcard",
                              "card-membership",
                              "card-travel",
                              "card",
                              "case-check",
                              "case-download",
                              "case-play",
                              "case",
                              "cast-connected",
                              "cast",
                              "chart-donut",
                              "chart",
                              "city-alt",
                              "city",
                              "close-circle-o",
                              "close-circle",
                              "close",
                              "cocktail",
                              "code-setting",
                              "code-smartphone",
                              "code",
                              "coffee",
                              "collection-bookmark",
                              "collection-case-play",
                              "collection-folder-image",
                              "collection-image-o",
                              "collection-image",
                              "collection-item-1",
                              "collection-item-2",
                              "collection-item-3",
                              "collection-item-4",
                              "collection-item-5",
                              "collection-item-6",
                              "collection-item-7",
                              "collection-item-8",
                              "collection-item-9-plus",
                              "collection-item-9",
                              "collection-item",
                              "collection-music",
                              "collection-pdf",
                              "collection-plus",
                              "collection-speaker",
                              "collection-text",
                              "collection-video",
                              "compass",
                              "cutlery",
                              "delete",
                              "dialpad",
                              "dns",
                              "drink",
                              "edit",
                              "email-open",
                              "email",
                              "eye-off",
                              "eye",
                              "eyedropper",
                              "favorite-outline",
                              "favorite",
                              "filter-list",
                              "fire",
                              "flag",
                              "flare",
                              "flash-auto",
                              "flash-off",
                              "flash",
                              "flip",
                              "flower-alt",
                              "flower",
                              "font",
                              "fullscreen-alt",
                              "fullscreen-exit",
                              "fullscreen",
                              "functions",
                              "gas-station",
                              "gesture",
                              "globe-alt",
                              "globe-lock",
                              "globe",
                              "graduation-cap",
                              "group",
                              "home",
                              "hospital-alt",
                              "hospital",
                              "hotel",
                              "hourglass-alt",
                              "hourglass-outline",
                              "hourglass",
                              "http",
                              "image-alt",
                              "image-o",
                              "image",
                              "inbox",
                              "truck",
                              "turning-sign",
                              "ungroup",
                              "wallpaper",
                              "washing-machine",
                              "window-maximize",
                              "window-minimize",
                              "window-restore",
                              "wrench",
                              "zoom-in",
                              "zoom-out"
                           ],
                           notifications: [
                              "alert-circle-o",
                              "alert-circle",
                              "alert-octagon",
                              "alert-polygon",
                              "alert-triangle",
                              "help-outline",
                              "help",
                              "info-outline",
                              "info",
                              "notifications-active", 
                              "notifications-add",
                              "notifications-none",
                              "notifications-off",
                              "notifications-paused",
                              "notifications"
                           ],
                           person : [
                              "account-add",
                              "account-box-mail",
                              "account-box-o",
                              "account-box-phone",
                              "account-box",
                              "account-calendar",
                              "account-circle",
                              "account-o",
                              "account",
                              "accounts-add",
                              "accounts-alt",
                              "accounts-list-alt",
                              "accounts-list",
                              "accounts-outline",
                              "accounts",
                              "face",
                              "female",
                              "male-alt",
                              "male-female",
                              "male",
                              "mood-bad",
                              "mood",
                              "run",
                              "walk"
                           ],
                           file: [
                              "cloud-box",
                              "cloud-circle",
                              "cloud-done",
                              "cloud-download",
                              "cloud-off",
                              "cloud-outline-alt",
                              "cloud-outline",
                              "cloud-upload",
                              "cloud",
                              "download",
                              "file-plus",
                              "file-text",
                              "file",
                              "folder-outline",
                              "folder-person",
                              "folder-star-alt",
                              "folder-star",
                              "folder",
                              "gif",
                              "upload"            
                          ],
                           editor: [
                              "border-all",
                              "border-bottom",
                              "border-clear",
                              "border-color",
                              "border-horizontal",
                              "border-inner",
                              "border-left",
                              "border-outer",
                              "border-right",
                              "border-style",
                              "border-top",
                              "border-vertical",
                              "copy",
                              "crop",
                              "format-align-center",
                              "format-align-justify",
                              "format-align-left",
                              "format-align-right",
                              "format-bold",
                              "format-clear-all",
                              "format-clear",
                              "format-color-fill",
                              "format-color-reset",
                              "format-color-text",
                              "format-indent-decrease",
                              "format-indent-increase",
                              "format-italic",
                              "format-line-spacing",
                              "format-list-bulleted",
                              "format-list-numbered",
                              "format-ltr",
                              "format-rtl",
                              "format-size",
                              "format-strikethrough-s",
                              "format-strikethrough",
                              "format-subject",
                              "format-underlined",
                              "format-valign-bottom",
                              "format-valign-center",
                              "format-valign-top",
                              "redo",
                              "select-all",
                              "space-bar",
                              "text-format",
                              "transform",
                              "undo",
                              "wrap-text"
                           ],
                           comment: [
                              "comment-alert",
                              "comment-alt-text",
                              "comment-alt",
                              "comment-edit",
                              "comment-image",
                              "comment-list",
                              "comment-more",
                              "comment-outline",
                              "comment-text-alt",
                              "comment-text",
                              "comment-video",
                              "comment",
                              "comments"
                           ],
                           form: [
                              "check-all",
                              "check-circle-u",
                              "check-circle",
                              "check-square",
                              "check",
                              "circle-o",
                              "circle",
                              "dot-circle-alt",
                              "dot-circle",
                              "minus-circle-outline",
                              "minus-circle",
                              "minus-square",
                              "minus",
                              "plus-circle-o-duplicate",
                              "plus-circle-o",
                              "plus-circle",
                              "plus-square",
                              "plus",
                              "square-o",
                              "star-circle",
                              "star-half",
                              "star-outline",
                              "star"
                           ],
                           hardware: [
                              "bluetooth-connected",
                              "bluetooth-off",
                              "bluetooth-search",
                              "bluetooth-setting",
                              "bluetooth",
                              "camera-add",
                              "camera-alt",
                              "camera-bw",
                              "camera-front",
                              "camera-mic",
                              "camera-party-mode",
                              "camera-rear",
                              "camera-roll",
                              "camera-switch",
                              "camera",
                              "card-alert",
                              "card-off",
                              "card-sd",
                              "card-sim",
                              "desktop-mac",
                              "desktop-windows",
                              "device-hub",
                              "devices-off",
                              "devices",
                              "dock",
                              "floppy",
                              "gamepad",
                              "gps-dot",
                              "gps-off",
                              "gps",
                              "headset-mic",
                              "headset",
                              "input-antenna",
                              "input-composite",
                              "input-hdmi",
                              "input-power",
                              "input-svideo",
                              "keyboard-hide",
                              "keyboard",
                              "laptop-chromebook",
                              "laptop-mac",
                              "laptop",
                              "mic-off",
                              "mic-outline",
                              "mic-setting",
                              "mic",
                              "mouse",
                              "network-alert",
                              "network-locked",
                              "network-off",
                              "network-outline",
                              "network-setting",
                              "network",
                              "phone-bluetooth",
                              "phone-end",
                              "phone-forwarded",
                              "phone-in-talk",
                              "phone-locked",
                              "phone-missed",
                              "phone-msg",
                              "phone-paused",
                              "phone-ring",
                              "phone-setting",
                              "phone-sip",
                              "phone",
                              "portable-wifi-changes",
                              "portable-wifi-off",
                              "portable-wifi",
                              "usb",
                              "videocam-off",
                              "videocam-switch",
                              "videocam",
                              "watch",
                              "wifi-alt-2",
                              "wifi-alt",
                              "wifi-info",
                              "wifi-lock",
                              "wifi-off",
                              "wifi-outline",
                              "wifi"
                           ],
                           directional : [
                              "arrow-left-bottom",
                              "arrow-left",
                              "arrow-merge",
                              "arrow-missed",
                              "arrow-right-top",
                              "arrow-right",
                              "arrow-split",
                              "arrows",
                              "caret-down-circle",
                              "caret-down",
                              "caret-left-circle",
                              "caret-left",
                              "caret-right-circle",
                              "caret-right",
                              "caret-up-circle",
                              "caret-up",
                              "chevron-down",
                              "chevron-left",
                              "chevron-right",
                              "chevron-up",
                              "forward",
                              "long-arrow-down",
                              "long-arrow-left",
                              "long-arrow-return",
                              "long-arrow-right",
                              "long-arrow-tab",
                              "long-arrow-up",
                              "rotate-ccw",
                              "rotate-cw",
                              "rotate-left",
                              "rotate-right",
                              "square-down",
                              "square-right",
                              "swap-alt",
                              "swap-vertical-circle",
                              "swap-vertical",
                              "swap",
                              "trending-down",
                              "trending-flat",
                              "trending-up",
                              "unfold-less",
                              "unfold-more"
                           ],
                           mapAliases : [
                              "subway",
                              "layers-off",
                              "layers",
                              "airplane",
                              "money-box",
                              "store-24",
                              "flower-alt",
                              "shopping-cart",
                              "washing-machine",
                              "library",
                              "mall",
                              "movie-alt",
                              "label",
                              "parking",
                              "pizza",
                              "ticket-star",
                              "print",
                              "store",
                              "car-taxi",
                              "map",
                              "gps-dot",
                              "nature-people",
                              "nature",
                              "navigation",
                              "pin-account",
                              "pin-assistant",
                              "pin-drop",
                              "pin-help",
                              "pin-off",
                              "pin",
                              "traffic"
                           ],
                           dateAndTime : [
                              "alarm-check",
                              "alarm-off",
                              "alarm-plus",
                              "alarm-snooze",
                              "alarm",
                              "calendar-alt",
                              "calendar-check",
                              "calendar-close",
                              "calendar-note",
                              "calendar",
                              "time-countdown",
                              "time-interval",
                              "time-restore-setting",
                              "time-restore",
                              "time",
                              "timer-off",
                              "timer"
                           ]
                        };                        
exports.languages = [
                     {
                        name: "English",
                        icon: "en"
                     },
                     {
                        name: "French",
                        icon: "fr"
                     },
                     {
                        name: "Hebrew",
                        icon: "he"
                     },
                     {
                        name: "Russian",
                        icon: "ru"
                     },
                     {
                        name: "Arabic",
                        icon: "ar"
                     },
                     {
                        name: "Chinese",
                        icon: "cn"
                     },
                     {
                        name: "German",
                        icon: "ge"
                     },
                     {
                        name: "Spanish",
                        icon: "es"
                     },
                     {
                        name: "Japanese",
                        icon: "ja"
                     },
                     {
                        name: "Korean",
                        icon: "ko"
                     },
                     {
                        name: "Italian",
                        icon: "it"
                     },
                     {
                        name: "Hungarian",
                        icon: "hu"
                     }
                  ]        
exports.sidebarFilters = [
                     {
                        id: 1,
                        class: 'sidebar-overlay-dark',
                        name: 'message.dark'
                     },
                     {
                        id: 2,
                        class: 'sidebar-overlay-light',
                        name: 'message.light'
                     },
                     {
                        id: 3,
                        class: 'sidebar-overlay-pink',
                        name: 'message.danger'
                     },
                     {
                        id: 4,
                        class: 'sidebar-overlay-primary',
                        name: 'message.primary'
                     },
                     {
                        id: 5,
                        class: 'sidebar-overlay-warning',
                        name: 'message.warning'
                     },
                     {
                        id: 6,
                        class: 'sidebar-overlay-success',
                        name: 'message.success'
                     },
                     {
                        id: 7,
                        class: 'sidebar-overlay-purple',
                        name: 'message.info'
                     }
                  ]
// header filter
exports.headerFilters = [
            {
               id: 1,
               class: "header-color-light"
            },
            {
               id: 2,
               class: "header-color-primary"
            },
             {
                id: 3,
                class: "header-color-warning"
             },
             {
                id: 4,
                class: "header-color-success"
             },
             {
                id: 5,
                class: "header-color-error"
             },
             {
                id: 6,
                class: "header-color-info"
             }
          ]    
exports.sidebarBackgroundImages = [
   {
      id: 1,
      imageurl: '/images/side1.jpg'
   },
   {
      id: 2,
      imageurl: '/images/side2.jpg'
   },
]                       