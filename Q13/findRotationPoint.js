function findRotation(arr) {
	let start = 0;
	let end = arr.length - 1;
	while(start + 1 !== end) {
		var mid = Math.floor((start + end) / 2);
		console.log(mid)
		//if the first letter is less than the mid
		if(arr[0][0] < arr[mid][0]) {
			start = mid;
		} else {
			end = mid;
		}
	}
	return arr[mid+1]
}

let arr = ['ptolemaic','retrograde', 'supplant', 'undulate', 'xenoepist','asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage']

let output = findRotation(arr);
console.log(output)