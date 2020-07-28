const express = require('express');
const routes = express.Router();
const pesquisa = require('./pesquisa');

routes.get('/', pesquisa);

module.exports = routes;