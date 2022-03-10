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
