var q = require('q');
var qhttp = require('q-io/http');
var _ = require('lodash');

var boundCcat = _.bind(String.prototype.concat, 'http://localhost:7001/');

qhttp.read("http://localhost:7000").then(_.compose(qhttp.read, boundCcat)).then(_.compose(console.log, JSON.parse)).then(null, console.error).done();