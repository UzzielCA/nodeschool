var concat = require('concat-stream');

process.stdin.pipe(concat(function (line) {
	console.log(line.toString().split('').reverse().join(''));
}));