var express = require('express');
var app = express();
var session = require('express-session');

app.set('views', '../client/www')

app.use(express.static(__dirname + '/../client/www'));

app.get('/', function (req, res) {
  
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
