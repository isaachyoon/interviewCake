/*
The Problem:
A robot is located at the top-left corner of a nxn grid. The robot can move either up, down, left, or right, but can not visit the same spot twice. The robot is trying to reach the bottom-right corner of the grid. The number of ways it can reach the bottom-right corner of the grid is?
Make your solution work for a grid of any size.

*/

function robotPath(n) {
	let grid = createGrid(n);
	return robotPathHelper(grid, n-1, n-1)
}

function robotPathHelper(grid, r, c) {
	if(r < 0 || c < 0) {
		return 0;
	} else if(r === 0 || c === 0) {
		grid[r][c] = 1;
		return grid[r][c];
	}

	grid[r][c] = robotPathHelper(grid, r-1, c) + robotPathHelper(grid, r, c-1);
	return grid[r][c];
}


function createGrid(n) {
	var arr = [];
	for(let i = 0; i < n; i++) {
		arr[i] = [];
		for(let j = 0; j < n; j++) {
			arr[i][j] = -1
		}
	}
	return arr;
}


let output = robotPath(15)
console.log(output)
/*
  1 1 1 1
  1
  1
  1

*/




