var express = require("express");
var app = express();

const PORT = process.env.PORT || 8147;

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}}");
});

app.get("/owner", (req, res, next) => {
    res.json(
        {"name":"Gabriel Aguido Fraga",
            "gitHub":"https://github.com/kaapiel",
            "linkedIn":"https://www.linkedin.com/in/gabriel-aguido-fraga/",
            "instagram":"https://www.instagram.com/gabrielaguidofraga/"
        }
    );
});

app.get("/qalenium", (req, res, next) => {
    res.json(
        {"community":"QAlenium",
            "gitHub":"https://github.com/QAlenium",
            "linkedIn":"https://www.linkedin.com/company/qalenium",
            "instagram":"to be created"
        }
    );
});