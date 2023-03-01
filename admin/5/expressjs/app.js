var createError  = require('http-errors');
var express		   = require('express');
var path 		     = require('path');
var cookieParser = require('cookie-parser');
var logger 		   = require('morgan');
var Handlebar    = require('handlebars');
var bodyParser   = require('body-parser');
var favicon      = require('express-favicon');
var session 	   = require('express-session');
var i18n         = require("i18n-express");
var minify       = require('express-minify');
var passport     = require('passport');
var compression  = require('compression');
var dotenv       = require('dotenv').config();
var Handlebars   = require('./config/handlebars.config');
var helpers      = require('./helpers/loadHelpers');
var firebaseDetails = require('./authentication/firebase/index');
var auth0Details    = require('./authentication/auth0/index');
var app = express();

app.use(compression());

var indexRouter = require('./routes/index');

app.use(logger('dev'));

app.use(cookieParser());

app.use(cookieParser());
app.use(
   session({
      secret: 'shhhhhhhhh',
      resave: true,
      saveUninitialized: true
   })
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(function(req, res, next) {
   fullUrl = req.originalUrl;
   split_path = fullUrl.split("/");
   next();
});

// Handlebar URL helper
Handlebar.registerHelper('url', function(link){
	return '/'+split_path[1]+link;
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(minify({
   jsMatch: /javascript/,
   jsMatch: /plugins/,
   cssMatch: /css/,
   cssMatch: /plugins/,
}));

app.use(i18n({
   translationsPath: path.join(__dirname, 'lang'), // use here. Specify translations files path.
   siteLangs: ["ar","en","cn","fr","he","es","ru","ge","ja","ko","it","hu"], // add new locales 
   cookieLangName : 'ulang',
   browserEnable : 'true',
   textsVarName: 'translation'  
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

// Config Handlebars
Handlebars(app, __dirname + '/views');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error', { 
      title: 'Node Xpress App',
      layout: 'auth'
   });
});

module.exports = app;