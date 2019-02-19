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
