var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Genetics' });
});

//get conceptProof page
router.get('/conceptProof/index', function(req, res, next) {
  res.render('conceptProof/index');
});

//get conceptProof/embed page
router.get('/conceptProof/embed', function(req, res, next) {
  res.render('conceptProof/embed');
});

module.exports = router;
