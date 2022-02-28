var express = require("express");
var app = express();
require("dotenv").config();

app.listen(3000, () => console.log('running on 3000'));

const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.json({ message: 'Prueba' + process.env.ENVIRONMENT_TEST, mesageDev: process.env.ENVIRONMENT == 'dev' ? process.env.ENVIRONMENT_TEST : process.env.ENVIRONMENT_PRODUCTION });
});

app.get('/message-test', function (req, res) {
    res.json({ message: 'message-test' });
});
