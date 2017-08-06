/*

because we don't know where the head/tail is, we can just copy over the next node information over and readjust the pointer.
Time complexity: O(1) Space Complexity O(1);
*/

function Node(val) {
	this.val = val
	this.next = null;
}

function deleteNode(node) {
	node.val = node.next.val;
	node.next = node.next.next;
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
a.next = b;
b.next = c;

console.log(a);
deleteNode(b);
console.log(a);