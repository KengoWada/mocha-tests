const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const response = {
        message: "We have launched"
    };
    return res.status(200).json(response);
});

module.exports = app;