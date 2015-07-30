var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

app.use(express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/html/index.html'));
});

server.listen(3000, function() {
    console.log("Server listening to port 3000")
});

module.exports = server;