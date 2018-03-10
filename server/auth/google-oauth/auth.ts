'use strict';
/**
 * var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
 */

 import * as passport from 'passport';
 import { OAuth2Strategy } from 'passport-google-oauth';

 export class GoolgeAuth {
     constructor(){
        passport.use(new OAuth2Strategy({
            clientID: "883057234172-58jg8a31lltvs3fs4u7ukdaka3cl0khg.apps.googleusercontent.com",
            clientSecret: "uHY3RKrECXWPlKaeQYSWmc35",
            callbackURL: "http://www.example.com/auth/google/callback"
          },
          function(accessToken, refreshToken, profile, done) {
               User.findOrCreate({ googleId: profile.id }, function (err, user) {
                 return done(err, user);
               });
          }
        ));
     }
     public static authenticate () {
        
         
     }

     
 }