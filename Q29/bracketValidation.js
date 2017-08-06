let openBracket = {
	'(': true,
	'[': true,
	'{': true
}

let closingBracket = {
	')': '(',
	']': '[',
	'}': '{'
}

function bracketValidation(str) {
	let brackets = [];
	for(let i = 0; i < str.length; i++) {
		if(openBracket[str[i]]) {
			brackets.push(str[i]);
		}
		if(closingBracket[str[i]] && brackets[brackets.length-1] === closingBracket[str[i]]) {
			brackets.pop();
		} else if (closingBracket[str[i]]) {
			return false;
		}
	}
	if(brackets.length !== 0) {
		return false;
	}
	return true;
}

console.log(bracketValidation("{[]()}"));
console.log(bracketValidation("{ [ ( ] ) }"));
console.log(bracketValidation("{ [ }"));
