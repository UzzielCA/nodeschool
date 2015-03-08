var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (error, lista) {
	if (error) {
		throw error;
	} else{
		for (var i = 0; i < lista.length; i++) {
			if (path.extname(lista[i]) === '.' + process.argv[3]) {
				console.log(lista[i]);
			};
		};
	};
});