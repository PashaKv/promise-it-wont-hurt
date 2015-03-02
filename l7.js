var q = require('q');
var json = process.argv[2];

q.fcall(JSON.parse, json).then(console.log).then(null, console.log);