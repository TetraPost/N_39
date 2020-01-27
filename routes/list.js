var express = require('express');
var router = express.Router();


router.all('/', function(req, res) {
  res.send({ title: 'Resp data' });
});

module.exports = router;
