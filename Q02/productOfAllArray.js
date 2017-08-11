function productOfArray(arr) {
	let newArr = [];
	let aggregate = 1;
	for(let i = 0; i < arr.length; i++) {
		if(i === 0) {
			aggregate = 1;
		} else {
			aggregate *= arr[i-1];
		}
		newArr.push(aggregate);
	}
	let prev;
	for(let i = arr.length -1; i >= 0; i--) {
		if(i === arr.length - 1) {
			aggregate = 1;
		} else {
			aggregate *= prev;
		}
		prev = arr[i];
		arr[i] = aggregate;
	}
	console.log(arr)
	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * newArr[i];
	}
	return arr;
}

let output = productOfArray([2, 6, 3, 4])
console.log(output)
/*
Appraoch 1:

nested for loop and multiple everything except for the same index
Time complexity : O(n^2)
Space complexity: O(n)

Approach 2:
keep track of aggregate by multiplying as you go

[2, 6, 3, 4]

[2,   12, 36, 144]
[144, 72, 12, 4]

solution : [72, 24, 48, 36]
but it is mismatched. So why dont I just shift over by one

Approach 3 [optimized]:

[1, 2, 12, 36] //created a new storage
[72, 12, 4, 1]  // mutated the array itself

then multiply the numbers and store to the input array

solution
*/