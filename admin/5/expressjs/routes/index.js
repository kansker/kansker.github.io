var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function(req, res, next) {
  res.redirect('/default');
});

var defaultRouting = require('./default/ecommerce');
var sessionRouting 	 = require('./session/session');

router.use('/default',defaultRouting);
router.use('/',sessionRouting);


module.exports = router;