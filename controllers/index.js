var express = require('express');
var router = express.Router();

router.use('/gallery', require('./route'));

router.get('/', function (req, res) {
   res.sendFile('/Users/rashmi/Documents/image_gallery_app/views/' + 'index.html');
})

module.exports = router;
