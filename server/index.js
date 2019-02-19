require('dotenv').config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(console.log)

app.use(json());
app.use(cors());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 525600 * 60 * 1000
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new Auth0Strategy(
        {
            domain: process.env.AUTH_DOMAIN,
            clientSecret: process.env.CLIENT_SECRET,
            clientID: process.env.CLIENT_ID, 
            callbackURL: '/login'
        },
        (accessToken, refreshToken, extraParams, profile, done) => {
            return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get(
    '/login', 
    passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login"
}));

app.get('/api/me', (req, res, next) => {
    if(req.user) res.json(req.user);
    else res.redirect('/login');
});

app.get('/api/test', (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance.test
        .find({})
        .then(response => {
            res.json(response);
        })
        .catch(console.log);
    });

app.listen(process.env.PORT || 3001, () => {
    console.log(`${process.env.PORT || 3001} is working properly.`);
});
