function Node(val){
	this.val = val;
	this.next = null;
}


function kthLastElement(node, k) {
	let counter = k;
	let point1 = node;
	let point2 = null;

	while(point1) {
		if(counter === 0) {
			point2 = node;
		}
		if(point2 !== null) {
			point2 = point2.next;
		}
		point1 = point1.next;
		counter --;
	}
	return point2;
}

let a = new Node("Angel Food");
let b = new Node("Bundt");
let c = new Node("Cheese");
let d = new Node("Devil's Food");
let e = new Node("Eccles");
a.next = b;
b.next = c;
c.next = d;
d.next = e;

let output = kthLastElement(a, 2);
console.log(output);
/*
 1 -> 2 -> 3 -> 4 -> 5 -> 6 ->
                     ^    ^

 counter = 0
*/