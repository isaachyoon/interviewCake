function permutationOfString(str) {
	let resArr = [];
	permHelper(str, resArr, '', 0)
	return resArr;
}

function permHelper(str, resArr, resStr, ind) {

	if(resStr.length === 3){
		resArr.push(resStr);
		return;
	}

	for(let i = 0; i < str.length; i++) {
		//cat
		swap(str)
		permHelper(str, resArr, resStr + str[ind], ind+1 )
		swap(str)
	}

}

function swap(str) {
	let newStr = str[str.length-1] + str.substring(0, str.length-1)
	console.log(newStr)
}


permutationOfString('cat')
/*
c
  c     a     t
 / \
at   ta


 */