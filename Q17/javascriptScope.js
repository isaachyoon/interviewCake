//if we execute this Javascript, what will the browser's console show?

var text = 'outside';
function logIt(){
		console.log(text);
		var text = 'inside';
}

logIt();

/*
this is a typical hoisting problem:
and will hoist variables to the top


var text = 'outside';
function logIt(){
	var text;
	console.log(text) // will return undefined;
	text = 'inside'
}

*/
