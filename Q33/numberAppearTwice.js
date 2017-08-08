function numberAppearTwice(arr){
	let expected = 0;
	for(let i = 1; i <= arr.length; i++) {
		expected += i;
	}
	let actual = arr.reduce((x,y) => x + y);

	let difference = expected - actual;
	let num = arr.length - difference;
	return num;
}

// let output = numberAppearTwice([1, 2, 3, 2]);

/*

function numberAppearTwice2(arr) {
	let tri = (arr.length * arr.length + arr.length) / 2
	console.log(tri)
	let actual = arr.reduce((x,y) => x + y);

	return tri - actual;
}

let output = numberAppearTwice2([1, 2, 3, 1]);
console.log(output)
*/

/*
	1, 2, 3, 3 = 9   40 - 32 = 9
	1, 2, 3, 4 = 10           10
*/