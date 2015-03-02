var q = require('q');

var deferred = q.defer();

setTimeout(deferred.resolve('RESOLVED!'), 300);

deferred.promise.then(console.log);