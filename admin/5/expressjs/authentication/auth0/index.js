var Auth0Strategy = require('passport-auth0');
var passport      = require('passport');

var strategy = new Auth0Strategy({
   domain: 'express-starter-kit.auth0.com',
   clientID: '06gakYPu7dEebKy2RDPBamB7WetqDX9P',
   clientSecret: 'Abu7SzrMm_NqbQM3kgNizYxSml27IB3mXQUtgWgEoS7bwwHdKWU1Bkxof2prIo3v', // Replace this with the client secret for your app
   callbackURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://expresspanel.herokuapp.com/callback',
   state: true
},

function(accessToken, refreshToken, extraParams, profile, done) {
   return done(null, profile);
   }
);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(strategy);