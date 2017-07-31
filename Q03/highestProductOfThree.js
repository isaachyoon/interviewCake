//interviewCake #3
function highestProductOfThree(arr) {
	let highest = Math.max(arr[0], arr[1]);
	let highestProductOfTwo = arr[0] * arr[1];
	let lowestProductOfTwo = arr[0] * arr[1];
	let lowest = Math.max(arr[0], arr[1]);
	let productOfThree = Number.NEGATIVE_INFINITY;

	for(var i = 2; i < arr.length; i++) {
		productOfThree = Math.max(lowestProductOfTwo * arr[i], highestProductOfTwo * arr[i], productOfThree);
		if(arr[i] < lowest) {
			lowestProductOfTwo = lowest * arr[i];
			lowest = arr[i];
		} else if(arr[i] > highest) {
			highestProductOfTwo = highest * arr[i];
			highest = arr[i]
		}
	}
	return productOfThree;
}

let output = highestProductOfThree([1, 10, -5, 1, -100])
console.log(output)

/*
sorting doesn't work because we could mutliply negative numbers to make positive number
approach1: [brute force]
-use n^3 to generate all combinations and return the highest

approach 1:
-create all possible combinations and return the max

approach 2: Greedy solution
	- keep track of the lowest
	- keep track of the highest
	- keep track of the lowestProductOfTwo
	- keep track of the highestProductOfTwo
	- reevaluate the highestProductofThree


Goal: O(1) Space O(n) Time

HOW DO WE EMURATE THROUGH THIS HIGHEST PRODUCT OF 4? HIGHEST PRODUCT OF K?
[1, 10, -5, 1, -100, 2, 4, 6]

 proudctOfFour =  -50

 lowest = -5
 highest = 10
 highestTwo = ...
 lowestTwo = ...
 highestThree =  -50
 lowestThree = -50

How can we do this better?
KEY QUESTION:
1. What if we wanted the highest product of 4 items?
2. What if we wanted the highest product of k items?
3. If our highest product is really big, it could overflow↴ . How should we protect against this?
*/