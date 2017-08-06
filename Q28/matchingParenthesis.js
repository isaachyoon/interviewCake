//interviewCake28

function parenthesisMatch(str, ind){
	let openParenAfterIndex = 0;
	for(let i = 0; i < str.length; i++) {
		if(str[i] === '(' && i > ind) {
			openParenAfterIndex++;
		} else if(str[i] === ')' && openParenAfterIndex ===0) {
			return i;
		} else if(str[i] === ')') {
			openParenAfterIndex--;
		}
	}
	throw error('no matching parenthesis');
}

let str = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
let output = parenthesisMatch(str, 10);
console.log(output);
/*
	(hello)
	^
*/