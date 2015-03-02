var q = require('q');

var deferred = q.defer();

setTimeout(deferred.reject('REJECTED!'), 300);

deferred.promise.then(console.log, console.log);