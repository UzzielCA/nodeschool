var trumpet = require('trumpet');
var through = require('through2');
var trum = trumpet();
var loud = trum.select('.loud').createStream();

	loud.pipe(through(function (buffer, _, next) {
		this.push(buffer.toString().toUpperCase());
		next();
	})).pipe(loud);

process.stdin.pipe(trum).pipe(process.stdout);