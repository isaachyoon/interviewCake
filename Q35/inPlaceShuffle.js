//also known as the fisher yales shuffle
/*
BIG IDEA : start from the end, and choose a random number. And swap and decrement
[1, 2, 3, 4, 5, 6, 7]
			 ^					 ^
			 R
[1, 2, 7, 4, 5, 6, 3]
             ^  ^
             R
[1, 2, 7, 4, 3, 6, 5]
             ^
             ...

*/


function inPlaceShuffle(arr){
	for(let i = arr.length - 1; i >= 0; i--) {
		let int = Math.floor(Math.random() * i);
		swap(arr, i, int)
		console.log(arr)
	}
}

function swap(arr, i, randomInd) {
	let temp = arr[randomInd];
	arr[randomInd] = arr[i];
	arr[i] = temp;
}


inPlaceShuffle([1, 2, 3, 4, 5, 6, 7])