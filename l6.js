var q = require('q');
var json = process.argv[2];

function parsePromised () {
	var deferred = q.defer();
	try{
		var j = JSON.parse(json);
		deferred.resolve(j);
	}catch(e){
		deferred.reject(e);
	}
	return deferred.promise;
}

parsePromised().then(console.log).then(null, console.log);