var fs = require('fs');

fileString = fs.readFileSync(process.argv[2]).toString();

console.log(fileString.split('\n').length-1);


