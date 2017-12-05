function infographicHash(str) {
	let resObj = {};
	let mutStr = str.replace(/[.,:;'"]/ig, '' )
	mutStr = mutStr.split(' ');
	for(let i = 0; i < mutStr.length; i++) {
		resObj[mutStr[i]] = !resObj[mutStr[i]] ? 1 : resObj[mutStr[i]]++
	}
	return resObj;
}

infographicHash('After beating the eggs, Dana read the next step:')