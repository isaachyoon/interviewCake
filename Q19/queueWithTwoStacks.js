//implement queue with two stacks

/*
	[1, 2, 3]

	3
	2
	1



*/
function queueWithTwoStacks() {
	this.inputStack = [];
	this.outputStack = [];

}

queueWithTwoStacks.prototype.enqueue = function(val) {
	this.inputStack.push(val);
}

queueWithTwoStacks.prototype.dequeue = function() {
	if(this.outputStack.length === 0) {
		while(this.inputStack.length !== 0) {
			this.outputStack.push(this.inputStack.pop());
		}
	}
	let returnVal = this.outputStack.pop();
	return returnVal;

}

let queue = new queueWithTwoStacks();
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue())
console.log(queue.dequeue())

