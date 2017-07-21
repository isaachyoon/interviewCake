function makingChange(amt, denom){

	return makingChangeHelper(amt, denom, 0)

}

function makingChangeHelper(amt, denom, subtotal) {

	let counter = 0;
	if(subtotal > amt) {
		return 0;
	}
	if(subtotal === amt) {
		console.log('entered')
		return 1;
	}

	for(let i = 0; i < denom.length; i++) {
		counter += makingChangeHelper(amt, denom, subtotal + denom[i])
	}

	return counter;

}
let amount = 4;
let denomination = [1, 2, 3]

let output = makingChange(amount, denomination)
console.log(output)
/*

1, 1, 1, 1
1, 1, 2
1, 2, 1
1, 3
2, 1, 1
2, 2
3, 1

my code is currently returning 7, because it's returning all unique values

amount=4 (4¢) and denominations=[1, 2, 3] (1¢, 2¢ and 3¢),
input: amount , denomination
output: 4
	- 1, 1, 1, 1
	- 1, 2, 1
	- 1, 3
	- 2, 2
*/