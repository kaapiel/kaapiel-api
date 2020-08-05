var express = require("express");
var app = express();

const PORT = process.env.PORT || 8147;

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}}");
});

app.get("/owner", (req, res, next) => {
    res.json({"name":"Gabriel Aguido Fraga"});
});