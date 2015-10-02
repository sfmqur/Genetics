var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Genetics' });
});

//get embed page
router.get('/embed', function(req, res, next) {
  res.render('embed', { title: 'Embed' });
});

module.exports = router;
