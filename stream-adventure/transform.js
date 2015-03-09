var through = require('through2');
var stream = through(function (buffer, _, next) {
	//console.log( this.push(buffer.toString().toUpperCase()));
	this.push(buffer.toString().toUpperCase());
	next();
}, function () {
	this.push(null);
});

process.stdin.pipe(stream).pipe(process.stdout);
