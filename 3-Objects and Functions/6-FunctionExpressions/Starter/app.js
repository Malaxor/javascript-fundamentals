
greet();

function greet() {
   console.log('hi');
}

var anonymousGreet = function() {
	console.log('hi');
}

function log(a) {
	a();
}

log(() => {
	console.log('log function');
});