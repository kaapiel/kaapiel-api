const axios = require('axios');
var express = require("express");
var app = express();

const PORT = process.env.PORT || 8147;

app.listen(PORT, () => {
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
            "sonarCloud":"https://sonarcloud.io/organizations/gabs",
            "cirlceCI":"https://circleci.com/gh/kaapiel/<PROJECT>",
            "slack":"to be created",
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
            "sonarCloud":"https://sonarcloud.io/organizations/qalenium",
            "cirlceCI":"https://circleci.com/gh/QAlenium/<PROJECT>",
            "slack":"https://join.slack.com/t/qalenium/shared_invite/enQtOTU5MDY2MTQwOTY3LWYzNGFkMTU5MTFjMmMxYmUyNjkzY2RhYjViZDcxNWVmMzUyNjgxZWJmMGNjYTQ1MGRmMTQ2MGM4NDc5Y2E4MmQ",
            "phoneNumber":"to be created"
        }
    );
});

app.get("/sonarCloud/QAlenium", (req, res, next) => {

    //make get in the https://sonarcloud.io/api/projects/search?organization=qalenium endpoint
    //
    //retrieve all projects as (List<String> "key")
    //
    //make another call for each project found using:
    //https://sonarcloud.io/api/issues/search?organization=qalenium&componentKeys=<KEY>
    //
    // Retrieve an object for each project containing:
    // - String project_name
    // - List<Issue> issues
    // - String language
    //
    // The issue must contain:
    // - String message
    // - String status
    // - String component (file)
    // - String severity
    // - String creation_date
    // - String type
    //
    //Append all projects as a json array (List<Project> projects)
    //return a json containing all projects information

    axios.get('https://sonarcloud.io/api/projects/search?organization=qalenium')
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.set(error)
        });

});

app.get("/sonarCloud/gabs", (req, res, next) => {

    //make get in the https://sonarcloud.io/api/projects/search?organization=gabs endpoint
    //
    //retrieve all projects as (List<String> "key")
    //
    //make another call for each project found using:
    //https://sonarcloud.io/api/issues/search?organization=gabs&componentKeys=<KEY>
    //
    // Retrieve an object for each project containing:
    // - String project_name
    // - List<Issue> issues
    // - String language
    //
    // The issue must contain:
    // - String message
    // - String status
    // - String component (file)
    // - String severity
    // - String creation_date
    // - String type
    //
    //Append all projects as a json array (List<Project> projects)
    //return a json containing all projects information

    //api token 4da7c74aa1ff200588c80a5dd253c0e6258ff5a1

    const token = Buffer.from('gabriel_aguido@hotmail.com:4pee4aa@_Aguido', 'utf8').toString('base64')

    axios.get('https://sonarcloud.io/api/projects/search?organization=gabs', {
        headers: {
            'Authorization':`Basic ${token}`
        }
    })
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            res.set(error)
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