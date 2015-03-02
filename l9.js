var q = require('q');

var d1 = q.defer(), d2 = q.defer();

function all (promise1, promise2) {
	var d = q.defer();
	var ctr = 0;
	var arr = [];
	promise1.then(addData).then(null, d.reject);

	promise2.then(addData).then(null, d.reject);

	function addData(data){
		arr.push(data);
		ctr++;
		if(ctr==2){
			d.resolve(arr);
		}
	}

	return d.promise;
};

all(d1.promise, d2.promise).then(console.log).then(null, console.log);

setTimeout(function(){
	d1.resolve('PROMISES');
	d2.resolve('FTW');
}, 200);