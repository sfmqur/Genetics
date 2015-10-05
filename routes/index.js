var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Genetics' });
});

//get embed page
router.get('/embed', function(req, res, next) {
  res.render('embed');
});

//get mom page
router.get('/mom', function(req, res, next) {
  res.render('mom');
});

//get dad page
router.get('/dad', function(req, res, next) {
  res.render('dad');
});

//get child1 page
router.get('/child1', function(req, res, next) {
  res.render('child1');
});

//get child2 page
router.get('/child2', function(req, res, next) {
  res.render('child2');
});

//get child3 page
router.get('/child3', function(req, res, next) {
  res.render('child3');
});


module.exports = router;
