var express = require('express');
var router = express.Router();
// get year
var year = new Date();
year = year.getFullYear()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'The best website ever!',
      jom: 'jom',
      second: 'test 33333',
      year: year
     });
});

module.exports = router;
