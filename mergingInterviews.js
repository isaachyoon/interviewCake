function mergingInterviews(arr){
	// let newSchedule = [];
	arr.sort((x,y) => x[0] - y[0])

	for(let i = 0; i < arr.length-1; i++) {
		if(arr[i][1] >= arr[i+1][0]) {
			arr[i+1][0] = arr[i][0]
			arr.splice(i, 1);
		}
	}
	return arr;
}

let output = mergingInterviews([[0,1], [3,5], [4,8], [10,12], [9,10]])
console.log(output)


/*
input = [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
             ^
				compare upper value against lower
					if(start > end) then merge

output = [(0, 1), (3, 8), (9, 12)]


*/