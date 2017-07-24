function balanceBinaryTree(node) {
	if(balancedBinaryTreeHelper(node) === -1) {
		return false;
	}
	return true;
}

function balancedBinaryTreeHelper(node){
	if(!node) {
		return 0;
	}
	console.log(node.val)
	let left = balancedBinaryTreeHelper(node.left) + 1;
	let right = balancedBinaryTreeHelper(node.right) + 1;

	console.log('left', left)
	console.log('right', right)
	if(!right || !left) {
		return -1
	}

	if(Math.abs(left - right) <= 1) {
		console.log('abs: ' , Math.abs(left - right))
		return Math.max(left, right)
	}
}

///////////////////////////////////////////
//helper function///////////
function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

let tree = new node(1);
let tree2 = tree.left = new node(2)
let tree3 = tree.right = new node(3)
let tree4 = tree2.left = new node(4)
let tree5 = tree2.right = new node(5)
let tree6 = tree3.left = new node(6)
let tree7 = tree3.right = new node(7)
let tree8 = tree4.left = new node(8)
let tree9 = tree8.left = new node(9)
///////////////////////////////////////////


console.log(balanceBinaryTree(tree))