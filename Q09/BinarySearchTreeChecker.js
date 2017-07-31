//interview cake #9


//checking to see if the binary search tree is balanced is confusing because you could have a scenario that can have a bigger value on the left sie

/*
	  6
	 / \
	5   7
 / \
4   8
*/
function binarySearchTreeChecker(node) {
	let min = Number.NEGATIVE_INFINITY;
	let max = Number.POSITIVE_INFINITY;
	return checkBT(node, min, max)
}

function checkBT(node, min, max){
	//base case
	console.log('min', min)
	if(!node) {
		return true;
	}
	console.log(node.val)

	// if(!checkBT(node.left, min, node.val) || !checkBT(node.right, node.val, max)){
	// 	return false;
	// }


	let left = checkBT(node.left, min, node.val)
	let right = checkBT(node.right, node.val, max)

	if(min < node.val || node.val < max) {
		return true;
	}
	if(!left || !right) {
		return false;
	}
	return true;

}


///////////////////////////////////////////
//helper function///////////
function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

let tree = new node(50);
let tree2 = tree.left = new node(30)
let tree3 = tree.right = new node(80)
let tree4 = tree2.left = new node(20)
let tree5 = tree2.right = new node(60)
let tree6 = tree3.left = new node(70)
let tree7 = tree3.right = new node(90)
// let tree8 = tree4.left = new node(8)
// let tree9 = tree8.left = new node(9)
///////////////////////////////////////////

let output = binarySearchTreeChecker(tree)
// console.log(output)
console.log('function (a, b) { \n     //An internal comment\n      return a * b;\n }')
