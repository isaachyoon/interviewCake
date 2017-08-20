//be aware. If we were to pop(), then we lose track of the highest;

class Stack {
	constructor() {
		this.items = [];
		this.highest = [];
	}

	push(val) {
		if(val > this.highest) {

		}
		this.items.push(val);
	}

	pop() {
		if(this.items.length === 0) {
			return null;
		} else {
			let val = this.items.pop();
			return val;
		}
	}

	peek() {
		if(this.items.length === 0)	{
			return null;
		}
		let val = this.items[this.items.length-1];
		return val;
	}

	get_max() {
		return this.highest;
	}

}

let stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(3);
stack.push(8);
stack.push(1);
console.log(stack.get_max())

