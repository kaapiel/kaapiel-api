const axios = require('axios');
const express = require("express");
const { Client } = require('pg');
const app = express();

const PORT = process.env.PORT || 8147;
const token = new Buffer("4da7c74aa1ff200588c80a5dd253c0e6258ff5a1:").toString('base64');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}");
});

app.get("/listMethods", (req, res, next) => {
    res.json(
        [
            "/owner",
            "/qalenium",
            "/sonarCloud/QAlenium",
            "/sonarCloud/gabs",
            "/circleCI/QAlenium",
            "/circleCI/gabs",
            "/slack/QAlenium",
            "/slack/gabs",
            "/blazemeter/QAlenium",
            "/blazemeter/gabs",
            "/docker/QAlenium",
            "/docker/gabs",
            "/twitter/QAlenium",
            "/twitter/gabs",
            "/instagram/QAlenium",
            "/instagram/gabs",
            "/telegram/QAlenium",
            "/telegram/gabs",
	    "GET /company/getCompanyByDeviceId",
	    "GET /company/getCompanyList",
	    "POST /company/createCompany",
	    "PUT /user/insetCompanyIntoUser"
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

    axios.get('https://sonarcloud.io/api/projects/search?organization=qalenium', {
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

app.get("/sonarCloud/gabs", (req, res, next) => {

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

app.get("/circleCI/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/circleCI/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/slack/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/slack/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/blazemeter/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/blazemeter/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/docker/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/docker/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/twitter/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/twitter/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/instagram/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/instagram/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/telegram/QAlenium", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/telegram/gabs", (req, res, next) => {
    res.json(
        {}
    );
});

app.get("/company/getCompanyByDeviceId", (req, res, next) => {
//query: SELECT 'company' from users where user.deviceId = DEVICE_ID;
//query to json

    res.json(
        {
            "company":"Dummy company name"
        }
    );
});

app.get("/company/getCompanyList", (req, res, next) => {

client.connect();

client.query('SELECT * from "users";', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

    res.json(
        {
            "companies": [
		{
			"name":"Dummy company1",
			"logo":"5na7f5abd7d7nfa5sa891b"
		}
	]
        }
    );
});

app.post("/company/createCompany", (req, res, next) => {
//query: INERT into 'companies' company.name as name, company.logo as logo;
//query to json
    res.responseCode = 200;
});

app.put("/user/insetCompanyIntoUser", (req, res, next) => {
//query: INERT into 'companies' company.name as name, company.logo as logo;
//query to json
    res.responseCode = 200;
});