function strPermutation(str) {
	var resArr = [];
	strPermutationHelper(str, resArr, '', '')
	return resArr;
}

function strPermutationHelper(str, resArr, curr, remain){

	if(str.length === 0) {
		resArr.push(curr);
		return;
	}

	for(let i = 0; i < str.length; i++) {
		var str = swap(str);
		strPermutationHelper(str.slice(1), resArr, curr + str[0]);
	}
}

function swap(str) {
	str = str[str.length-1] + str.substring(0, str.length-1)
	return str;
}

let output = strPermutation('cat')
console.log(output)

// let i = 1;


/*
  	c    a    t
   / \
 ca   ct
 /
cat

*/