'use restrict'
let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
var redis = require('redis');

module.exports = function () {
  let app = express();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
  app.use(expressValidator());

  /**
   * Configuracao de CROSS
   */
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  var client = redis.createClient('6379', '127.0.0.1');
  app.client = client;

  client.on('connect', function () {
    console.log('Redis client connected');
  });

  client.on('error', function (err) {
    console.log('Something went wrong ' + err);
  });
  /**
   * Inicializacao do app com consign, o mesmo carrega todos os modulos informados no ap/express
   */
  consign()
    .include('src/main/models')
    .then('src/config/mongo')
    .then('src/main/controller')
    .into(app);

  return app;
}