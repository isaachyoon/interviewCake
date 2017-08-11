

function inflightEntertainment(n, movie){
	let hash = {};
	for(let i = 0; i < movie.length; i++) {
		hash[movie[i]] = false;
	}
	for(let key in hash) {
		hash[key] = true;
		let movieRemaining = n - key;
		if(hash[movieRemaining] === false) {
			return true
		}
		hash[key] = false;
	}
	return false;
}

let movieLength = [10, 20, 30, 40, 50];
let output = inflightEntertainment(30, movieLength);
console.log(output);

/*
	Approach 1:
	nested for loop
	[10, 20, 30, 40, 50]
	 ^
	      ^

	Approach 2:
	Sort
	[10, 20, 30, 40, 50]
	 ^                ^
	 use two pointers and dictate

*/