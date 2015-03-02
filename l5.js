	var q = require('q');

var deferred = q.defer();

function attachTitle (arg) {
	return "DR. "+arg;
}

deferred.promise.then(attachTitle).then(console.log);

deferred.resolve('MANHATTAN');