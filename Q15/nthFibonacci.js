/*
time complexity:

fibonacci2 would take time complexity of (2 ^ n) n being the input number. Because it creates addition two calls for every n.

but if you cache this, then the time complexity reduces to O(n);
*/
//naive solution
function fibonacci2(n){
	if(n === 0) {
		return 0;
	}
	if(n === 1) {
		return 1;
	}
	return fibonacci2(n-1) + fibonacci2(n-2) ;
}



function fibonacci(n, memo={}) {
	if(n === 0) {
		return 0;
	}
	if(n === 1) {
		return 1;
	}
	if(!memo[n]) {
		memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
	} else {
		return memo[n]
	}
	return memo[n]
}

let output = fibonacci(60);
console.log(output);