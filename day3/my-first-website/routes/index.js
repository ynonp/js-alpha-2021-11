// routes/index.js

var express = require('express');
var router = express.Router();
const { db } = require('../lib/db');

router.get('/product2', function(req, res, next) {
  const p = req.query;
  res.send(p);
});

// http://localhost:3000/product/18
router.get('/product/:id', function(req, res, next) {
  const id = req.params.id;
  const p = db.getProductById(id);
  res.send(p);
});

router.get('/info', function(req, res, next) {  
  res.send({
    name: 'ynon',
    email: 'ynon@ynonperek.com',
    website: 'tocode.co.il'
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // file index = ./views/index.jade
  const x = Math.random();
  res.render('index', { title: 'Express', value: x });
});

module.exports = router;
