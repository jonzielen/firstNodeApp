var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'The best website ever!',
      jom: 'jom',
      second: 'test 33333'
     });
});

module.exports = router;
