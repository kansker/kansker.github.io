var firebase     = require("firebase");
var config = {
   apiKey: "AIzaSyA1Zkq746Ffif98qJkmtN5vZMjtjKaSjT4",
	authDomain: "xpress1-0.firebaseapp.com",
	databaseURL: "https://xpress1-0.firebaseio.com",
	projectId: "xpress1-0",
	storageBucket: "xpress1-0.appspot.com",
	messagingSenderId: "343115423877"
};

firebase.initializeApp(config);
var db = firebase.firestore();