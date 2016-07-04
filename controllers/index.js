var express = require('express');
var router = express.Router();

router.use('/gallery', require('./route'));

router.get('/', function (req, res) {
   res.sendfile('views/index.html', {'root': './'});
})

module.exports = router;
