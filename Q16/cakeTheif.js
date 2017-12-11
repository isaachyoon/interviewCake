

function cakeTheif(capacity, cakeTulples) {

	//no base case needed because forloop will automatically stop
	let maximumVal = 0;

	//create all possible combination
	for(var i=0; i < cakeTulples.length; i++) {
		let potCap = capacity - cakeTuples[i][0];
		let value = cakeTulples[i][1]
		//only enter if the value doesn't go to negative
		if(potCap >= 0) {
			let currVal = cakeTheif(potCap, cakeTuples) + value;
			//this if statement keeps track of the highest value returned
			if(currVal > maximumVal) {
				maximumVal = currVal;
			}
		}
	}
	//return the maximumVal
	return maximumVal;
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

