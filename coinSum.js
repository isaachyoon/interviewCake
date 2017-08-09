function coinSum(amt, currency, memo){

	var combo = 0;
	if(amt === 0) {
		return 0;
	}

	for(let i = 0; i < currency.length; i++) {
		let newVal = amt - currency[i];
		if(newVal >= 0){
			if(!memo[amt]){
			 	memo[amt] = coinSum(amt - currency[i], currency, memo)
			 	console.log(memo)
			}
		}
	}
	return memo[amt] + 1;
}


// function coinSum(amt, currency, memo){

// 	var combo = 0;
// 	if(amt === 0) {
// 		return 0;
// 	}
// 	var sum = 0;
// 	for(let i = 0; i < currency.length; i++) {
// 		let newVal = amt - currency[i];
// 		if(newVal >= 0){
// 			sum = coinSum(amt - currency[i], currency, memo)

// 		}
// 	}
// 	return sum + 1;
// }

console.log(coinSum(4, [1, 2, 3], {}))
console.log(coinSum(4, [1, 2, 3], {}) === 4)
console.log(coinSum(3, [1, 2, 3], {}) === 3)
console.log(coinSum(10, [2, 5, 3, 6], {}) === 5)


/*
					 ____	  4 __
					/       |   \
				 3        2    1
			 / | \	   / \    \
      1  0  2   0   1    0
     /     / \       \
    0     0   1       0
               \
                0
   1, 2, 1
   1, 3
   1, 1, 1, 1
   2, 2
*/