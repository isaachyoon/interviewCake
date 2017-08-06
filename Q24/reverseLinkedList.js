
function node(val) {
	this.val = val;
	this.next = null;
}

function linkedList(val){
	this.head = new node(val)
	this.tail = this.head;
}

linkedList.prototype.add = function(val){
	let temp = this.tail;
	this.tail = new node(val);
	temp.next = this.tail;
}

/*
->  1 -> 2 -> 3
<-  1

*/



let ll = new linkedList(3);
ll.add(4);
ll.add(5);
// console.log(ll.head)


function reverseLinkedList(node){

	let prev = null;
	let curr = node.head;
	let next = node.head;

	while(curr){
		next = curr.next;
		curr.next = prev;
		prev = curr;;
		curr = next;
	}
	return node
}

let output = reverseLinkedList(ll);
console.log(ll)

