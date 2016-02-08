var restify = require('restify');
var jsonfile = require('jsonfile');

var file = 'data.json'
var data

function readData() {
  jsonfile.readFile(file, function(err, obj) {
    data = obj
  });
};

function saveData() {
  jsonfile.writeFile(file, obj, function(err) {
    console.log(err);
  });
};

var server = restify.createServer();

server.post('/register', function(req, res, next) {

});

server.get('/signin/:id', function(req, res, next) {

});

server.get('/signout/:id', function(req, res, next) {

});

server.get('/profile/:id', function(req, res, next) {

});

server.get('/status', function(req, res, next) {

});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});