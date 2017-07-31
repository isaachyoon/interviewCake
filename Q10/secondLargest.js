//
/*
 	  5
   / \
  4   8
 /   / \
3   6   9
     \   \
      7   10

 = 9
find the largest by going to the right most side
	-go up
		-if the parent doesnt have any left children, then you've found the value
		-if the parent does have left child, go to the right most tree

 	  7
   /
  4
 / \
3   5
 = 4
 if right subtree doesn't exist, then

 	  5
   / \
  4   8 *
 /   /
3   6
     \
      7

	  5
   / \
  4   8 *
 /
3
if no children found, then the parent is it.


	  5
   /
  4
 /
3

*/

function secondLargest(node) {
	//go all the way to the right
	if(!node) {
		return null;
	}

	while(node.right !== null) {
		node = node.right;
	}

	//check if left child exists,
	if(node.left) {
		node = node.left;
		while(node) {
			node = node.right;
		}
		return node.val;
	}

	//no children exist
	if(!node.left && !node.right) {
		console.log(node)
		return node.parent.val;
	}
}

///////////////////////////////////////////
//helper function///////////
function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
	this.parent = null;
}

let tree = new node(5);
let tree2 = tree.left = new node(4)
let tree3 = tree.right = new node(8)
tree2.parent = tree;
tree3.parent = tree;
let tree4 = tree2.left = new node(3)
// let tree5 = tree2.right = new node(60)
tree4.parent = tree2;
// tree5.parent = tree2;
let tree6 = tree3.left = new node(6)
let tree7 = tree3.right = new node(9)
tree6.parent = tree3;
tree7.parent = tree3;
// let tree8 = tree4.left = new node(8)
// let tree9 = tree4.left = new node(9)
// let tree10 = tree5.left = new node(6)
let tree11 = tree6.right = new node(7)
// tree10.parent = tree5;
tree11.parent = tree6;
// let tree12 = tree6.left = new node(6)
let tree13 = tree7.right = new node(10)
// tree12.parent = tree6;
tree13.parent = tree7;
///////////////////////////////////////////

let tree = new node(5);
let tree2 = tree.left = new node(4)
let tree3 = tree.right = new node(8)
tree2.parent = tree;
tree3.parent = tree;
let tree4 = tree2.left = new node(3)
// let tree5 = tree2.right = new node(60)
tree4.parent = tree2;
// tree5.parent = tree2;
let tree6 = tree3.left = new node(6)
let tree7 = tree3.right = new node(9)
tree6.parent = tree3;
tree7.parent = tree3;
// let tree8 = tree4.left = new node(8)
// let tree9 = tree4.left = new node(9)
// let tree10 = tree5.left = new node(6)
let tree11 = tree6.right = new node(7)
// tree10.parent = tree5;
tree11.parent = tree6;
// let tree12 = tree6.left = new node(6)
let tree13 = tree7.right = new node(10)
// tree12.parent = tree6;
tree13.parent = tree7;
///////////////////////////////////////////

let tree = new node(5);
let tree2 = tree.left = new node(4)
let tree3 = tree.right = new node(8)
tree2.parent = tree;
tree3.parent = tree;
let tree4 = tree2.left = new node(3)
// let tree5 = tree2.right = new node(60)
tree4.parent = tree2;
// tree5.parent = tree2;
let tree6 = tree3.left = new node(6)
let tree7 = tree3.right = new node(9)
tree6.parent = tree3;
tree7.parent = tree3;
// let tree8 = tree4.left = new node(8)
// let tree9 = tree4.left = new node(9)
// let tree10 = tree5.left = new node(6)
let tree11 = tree6.right = new node(7)
// tree10.parent = tree5;
tree11.parent = tree6;
// let tree12 = tree6.left = new node(6)
let tree13 = tree7.right = new node(10)
// tree12.parent = tree6;
tree13.parent = tree7;
///////////////////////////////////////////


console.log(secondLargest(tree) === 9)