function highestPossibleScore(unsortArr, highestScore) {

}

/*
[3, 1, 2] , 6

6 / 3 = average  2
1: 3
2:

*/

// for(var i = 1; i <= 5; i++) {
// 	setInterval(function(i){
// 		console.log('yo')
// 	},1000)
// }

for(var i = 0; i < 5; i++) {
	(function(i){
		setInterval(function() {console.log(i)}, 1000)
	})(i)
}