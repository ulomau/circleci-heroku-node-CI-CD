var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hey! this is Uloma, trying out CI/CD on my deployed Node app on Heroku' });
});

module.exports = router;
