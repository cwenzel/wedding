var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Bryan and Melinda'
  });
});

module.exports = router;
