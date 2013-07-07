var express = require('express');

var app = express.createServer(express.logger());

// read file
var fs = require('fs');
var data = fs.readFileSync("./index.html");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Data is " + data);
  console.log("Listening on " + port);
});
