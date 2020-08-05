const axios = require('axios');
var express = require("express");
var app = express();

const PORT = process.env.PORT || 8147;

app.listen(8888, () => {
    console.log("Server running on port ${PORT}}");
});

app.get("/listMethods", (req, res, next) => {
    res.json(
        [
            "/owner",
            "/qalenium",
            "/sonarCloud",
            "/circleCI",
            "/slack",
            "/blazemeter",
            "/docker",
            "/twitter",
            "/instagram",
            "/telegram"
        ]
    );
});

app.get("/owner", (req, res, next) => {
    res.json(
        {
            "name":"Gabriel Aguido Fraga",
            "gitHub":"https://github.com/kaapiel",
            "linkedIn":"https://www.linkedin.com/in/gabriel-aguido-fraga/",
            "instagram":"https://www.instagram.com/gabrielaguidofraga/",
            "phoneNumber":"+1(514)621-2440"
        }
    );
});

app.get("/qalenium", (req, res, next) => {
    res.json(
        {
            "community":"QAlenium",
            "gitHub":"https://github.com/QAlenium",
            "linkedIn":"https://www.linkedin.com/company/qalenium",
            "instagram":"to be created",
            "phoneNumber":"to be created"
        }
    );
});

app.get("/sonarCloud", (req, res, next) => {

    let resp;

    axios.get('https://sonarcloud.io/api/issues/search?organization=qalenium&languages=java&f=name')
        .then(response => {
            resp = response;
            res.json(resp.data)
        })
        .catch(error => {
            res.json(error)
        });
});

app.get("/circleCI", (req, res, next) => {
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

app.get("/telegram", (req, res, next) => {
    res.json(
        {}
    );
});