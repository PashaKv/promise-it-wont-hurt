var q = require('q');

var d1 = q.defer(), d2 = q.defer();

q.all([d1.promise, d2.promise]).then(console.log).then(null, console.log);

setTimeout(function(){
	d1.resolve('PROMISES');
	d2.resolve('FTW');
}, 200);