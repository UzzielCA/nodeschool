var combiner = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
	var grouper = through(write, end);
	var current;
	
	function write (buffer, _, next) {
		if (buffer.length === 0) {
			return next();
		};
		var row = JSON.parse(buffer);

		if (row.type =='genre') {
			if (current) {
				this.push(JSON.stringify(current) + '\n');
			};
			current = {name: row.name, books: []};
		} else if (row.type === 'book'){
			current.books.push(row.name);
		};
		next();
	}

	function end (next) {
		if (current) {
			this.push(JSON.stringify(current) + '\n');
		};
		next();
	}

	return combiner (split(), grouper, zlib.createGzip());
};