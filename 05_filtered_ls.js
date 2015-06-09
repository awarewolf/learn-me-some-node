var fs = require('fs');
var path = require('path');

function logFolderFiles(element, index, array) {
	if (path.extname(element) === ('.' + process.argv[3])) {
		console.log(element);
	}
}

fs.readdir(process.argv[2], function (err, list) {
	if (err) throw err;
  list.forEach(logFolderFiles);
});