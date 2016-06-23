var express = require('express');
var app = express();
var config = require('./config/config.js');

app.use(require('./controllers/'));
app.use(express.static(__dirname + '/public'));

app.listen(config.port);
