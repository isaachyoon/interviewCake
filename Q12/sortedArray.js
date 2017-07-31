//check if given integers is in a sorted array
function sortedArray(arr, k) {
	let min = 0;
	let max = arr.length-1;

	while(min < max) {
		let mid = Math.floor((min + max) / 2);
		if(arr[mid] === k) {
			return true;
		}
		if(k < arr[mid]) {
			max = mid-1;
		} else if (k > arr[mid]) {
			min = mid + 1;
		}
	}
	return false;
}

let outcome = sortedArray([1, 3, 4, 5, 7, 8, 9 , 10], 2)
console.log(outcome)