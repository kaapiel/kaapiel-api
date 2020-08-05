const request = require('request');
var express = require("express");
var app = express();

const PORT = process.env.PORT || 8147;
const QALENEIUM_GROUPID = "-1001241726927L";
const QALENEIUM_BOT = "1339813179:AAH6Y3bKGhSnafpzTdiDK7Yq-hYhVbdPsKU";

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}}");
});

app.get("/owner", (req, res, next) => {
    res.json(
        {"name":"Gabriel Aguido Fraga",
            "gitHub":"https://github.com/kaapiel",
            "linkedIn":"https://www.linkedin.com/in/gabriel-aguido-fraga/",
            "instagram":"https://www.instagram.com/gabrielaguidofraga/",
            "phoneNumber":"+1(514)621-2440"
        }
    );
});

app.get("/qalenium", (req, res, next) => {
    res.json(
        {"community":"QAlenium",
            "gitHub":"https://github.com/QAlenium",
            "linkedIn":"https://www.linkedin.com/company/qalenium",
            "instagram":"to be created",
            "phoneNumber":"to be created"
        }
    );
});

app.get("/circleCI", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/sonarcloud", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/slack", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/blazemeter", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/docker", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/twitter", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/instagram", (req, res, next) => {
    res.json(
        {}
    );
});