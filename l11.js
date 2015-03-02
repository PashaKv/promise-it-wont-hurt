var q = require('q');
var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000").then(function(buf){
	return buf.toString();
}).then(function (id) {
	return qhttp.read('http://localhost:7001/'+id);
}).then(function(buf){
	return console.log(JSON.parse(buf.toString()));
}).then(null, console.error).done();