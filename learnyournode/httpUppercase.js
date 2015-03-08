var http = require('http');
var map = require('through2-map');
var server = http.createServer(function (request, response) {
	if (request.method === 'POST') {
		request.pipe(map(function (chunk){
			return chunk.toString().toUpperCase();
		})).pipe(response)
	} else{
		return response.end('I need a POST request');
	};
});
server.listen(Number(process.argv[2]));