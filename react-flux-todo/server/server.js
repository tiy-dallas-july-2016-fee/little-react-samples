var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

//plain bodyParser() is deprecated
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);



var todoApi = require('./todo-api.js');
todoApi.register(app);

var port = process.env.PORT || 3763;


app.listen(5000, function() {
  console.log('listening on port 5000.');
});
