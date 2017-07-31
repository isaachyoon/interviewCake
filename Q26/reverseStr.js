function reverseStr(str){
	str = str.split(' ');
	var newstr = ''
	for(var i = str.length-1; i > 0 ; i--){
		newstr += str[i] + " "
	}
	return newstr
}

console.log(reverseStr('hello how are you?'))