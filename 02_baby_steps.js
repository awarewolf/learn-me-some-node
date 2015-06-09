var sum = 0;
var i = process.argv.length;
while(i-- > 2) {
	sum += Number(process.argv[i]);
}

console.log(sum);