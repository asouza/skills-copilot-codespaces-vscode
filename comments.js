// create a web server that can listen to requests for /comments and send back
// the contents of comments.json
// You can use the fs module's readFileSync method to read the contents of
// comments.json into a string.
// You can use JSON.parse to convert a string into a JavaScript object.
// You can use the JSON.stringify method to convert a JavaScript object to a string.

var http = require('http');
var fs = require('fs');
var port = 8080;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var obj = {nome:"Alberto",idade:40}
  res.end(JSON.stringify(obj));
});

server.listen(port, function() {
  console.log('Server listening on http://localhost:%s', port);
});