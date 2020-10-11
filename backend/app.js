const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use('/', (req, res, next) => {
    res.send('<h1>Hello</h1>');
});

app.listen(5000);