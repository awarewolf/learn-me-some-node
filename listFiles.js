var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {

	results = [];

	function logFolderFiles(element, index, array) {
		// console.log("here");

		if (path.extname(element) === ('.' + ext)) {
			results[index] = element;
		}
	}

	fs.readdir(dir, function (err, list) {

		if (err) return callback(err);

		// console.log(list.forEach(logFolderFiles));

		list.forEach(logFolderFiles);

		callback(null, results);
	});
}

