var express = require('express');
var exphbs  = require('express-handlebars');
var app     = express();
var blocks  = [];
function configHandlebars(expressApp, viewsPath) {
   var Handlebars = exphbs.create({
      defaultLayout: 'main',
      extname: 'hbs',
      layoutsDir: viewsPath + '/layouts/',
      partialsDir: viewsPath + '/partials/',
      helpers: {
         block: function(name) {
             var val = (blocks[name] || []).join('\n');

             // clear the block
             blocks[name] = [];
             return val;
         },
         extend: function(name, context) {
             var block = blocks[name];
             if (!block) {
                 block = blocks[name] = [];
             }

             block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
         },
      }    
   });
    // View engine setup
   expressApp.engine('hbs', Handlebars.engine);
   expressApp.set('view engine', 'hbs');
   expressApp.set('views', viewsPath);
}

module.exports = (app, viewsPath) => {
   configHandlebars(app, viewsPath);
};