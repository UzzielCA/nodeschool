var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
	socket.write(strftime('%F %H:%M', new Date()) + "\n");
	socket.end();
});
server.listen(Number(process.argv[2]));

