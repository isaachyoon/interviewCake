/*
//This approach doesn't work, because we aren't counting the number of instance like the coins. We are checking the overall total amount.

function cakeTheif(capacity, cakeTulples) {

	let maximumWeight = 0;

	for(var i=0; i < cakeTulples.length; i++) {
		let potCap = capacity - cakeTuples[i][0];
		let value = cakeTulples[i][1]
		if(potCap >= 0) {
			let currVal = cakeTheif(potCap, cakeTuples) + value;
			console.log(currVal)
			console.log('max', maximumWeight)
			if(currVal > maximumWeight) {
				maximumWeight = currVal;
			}
		} else {
			return 0;
		}
	}
	return maximumWeight;
}

let cakeTuples = [[7, 160], [3, 90], [2, 15]];
let capacity = 20

let output = cakeTheif(capacity, cakeTuples)
console.log('output', output)
*/

function cakeTheif(capacity, cakeTulples) {

	//no base case needed because forloop will automatically stop
	let maximumWeight = 0;

	//create all possible combination
	for(var i=0; i < cakeTulples.length; i++) {
		let potCap = capacity - cakeTuples[i][0];
		let value = cakeTulples[i][1]
		//only enter if the value doesn't go to negative
		if(potCap >= 0) {
			let currVal = cakeTheif(potCap, cakeTuples) + value;
			//this if statement keeps track of the highest value returned
			if(currVal > maximumWeight) {
				maximumWeight = currVal;
			}
		}
	}
	//return the maximumWeight
	return maximumWeight;
}


function cakeTheifMemo(capacity, cakeTulples, memo) {
	if(memo[capacity]) {
		return memo[capacity];
	} else {
		let maximumVal = 0;

		for(var i=0; i < cakeTulples.length; i++) {
			let potCap = capacity - cakeTuples[i][0];
			let value = cakeTulples[i][1]
			if(potCap >= 0) {
				let currVal = cakeTheifMemo(potCap, cakeTuples, memo) + value;

				if(currVal > maximumVal) {
					maximumVal = currVal;
				}
			}
		}
		memo[capacity] = maximumVal;
		return memo[capacity];
	}
}


let cakeTuples = [[7, 160], [3, 90], [2, 15]];
let capacity = 20

let output = cakeTheifMemo(capacity, cakeTuples, {})
console.log('output', output)

