var duplexer = require('duplexer');
var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
	var singleStream = spawn(cmd, args);
	return duplexer(singleStream.stdin, singleStream.stdout);
}