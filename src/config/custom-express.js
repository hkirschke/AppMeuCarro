const express = require('express');
const consign = require('consign');

const app = express();

consign()
        .include('src/app/controllers')
        .into(app);

module.exports = app;