function mergeSort(arr1, arr2) {
	let resArr = [];
	let point1 = 0;
	let point2 = 0;
	while(point1 < arr1.length || point2 < arr2.length) {
		if(arr1[point1] < arr2[point2]) {
			resArr.push(arr1[point1]);
			point1++;
		} else {
			resArr.push(arr2[point2]);
			point2++;
		}
	}
	return resArr;
}

let arr1 = [3,4,6,10,11,15];
let arr2 = [1,5,8,12,14,19];
let output = mergeSort(arr1, arr2)
console.log(output)
/*
[3,4,6,10,11,15]

[1,5,8,12,14,19]
*/