function LLcycle(node) {
	let node1 = node;
	let node2 = node.next;
	while(node1 !== node2) {
		if(node1 === null || node2 === null) {
			return false;
		}
		node1 = node1.next;
		node2 = node2.next.next;
	}
	return true;
}


function node(val) {
	this.val = val;
	this.next = null;
}

let a = new node('A');
let b = new node('B');
let c = new node('C');
let d = new node('D');
let e = new node('E');
let f = new node('F');
let g = new node('G');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = a;

let output = LLcycle(a);
console.log(output)

