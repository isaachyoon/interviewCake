function permutationPalindrome(str){
	let onlySingleOdd = 0;
	let obj = {};
	for(let i = 0; i < str.length; i++) {
		if(!obj[str[i]]) {
			obj[str[i]] = 0;
		}
		obj[str[i]]++;
	}

	for(let key in obj) {
		if(obj[key] % 2 !== 0) {
			onlySingleOdd++;
		}
	}
	if(onlySingleOdd > 1) {
		return false;
	}
	return true;

}

let output = permutationPalindrome("livci")
console.log(output)