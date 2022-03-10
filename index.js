const axios = require('axios');
const express = require("express");
const { Client } = require('pg');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8147;
const token = new Buffer("4da7c74aa1ff200588c80a5dd253c0e6258ff5a1:").toString('base64');

const client = new Client({
  connectionString: "postgres://yhtyldtgvzumzf:f4871ba25accfa2325581643bd5884791b4ef7bfc5e8d684afb32ee2b9d7c09c@ec2-34-231-183-74.compute-1.amazonaws.com:5432/d74vgtoqchbta2",
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

client.connect();

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}");
});

app.get("/listMethods", (req, res, next) => {
    res.json([
        "GET /owner",
        "GET /qalenium",
        "GET /sonarCloud/QAlenium",
        "GET /sonarCloud/gabs",
	    "GET /company/getCompanyByDeviceId",
	    "GET /company/getCompanyList",
	    "POST /company/createCompany",
        "POST /user/signin",
        "POST /user/signup",
	    "PUT /user/updateUser/user_id",
        "PUT /company/updateCompany/company_id"
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
