function temperatureTracker(){

	this.tempObj = {};
	this.minTemp = null;
	this.maxTemp = null;
	this.counter = 0;
	this.aggTemp = 0;
	this.tempModeHighest = 0;
	this.mode = null;


}

temperatureTracker.prototype.insert = function(temp) {
	if(!this.maxTemp) {
		this.maxTemp = temp;
	} else if(temp > this.maxTemp) {
		this.maxTemp = temp;
	}

	if(!this.minTemp) {
		this.minTemp = temp;
	} else if(temp < this.minTemp) {
		this.minTemp = temp;
	}

	//hash it here
	if(!this.tempObj[temp]) {
		this.tempObj[temp] = 0
	}
	this.tempObj[temp]++;
	if(this.tempObj[temp] > this.tempModeHighest) {
		this.tempModeHighest = this.tempObj[temp];
		this.mode = temp;
	}


	this.aggTemp += temp;
	this.counter++;
}

temperatureTracker.prototype.get_max = function() {
	return this.maxTemp;
}

temperatureTracker.prototype.get_min = function() {
	return this.minTemp;
}

temperatureTracker.prototype.get_mean = function() {
	return this.aggTemp / this.counter;
}

temperatureTracker.prototype.get_mode = function() {
	return this.mode;
}

let temp = new temperatureTracker();
temp.insert(89);
console.log('mode', temp.get_mode());//89
console.log('mean', temp.get_mean());//89
console.log('min', temp.get_min());//89
console.log('max', temp.get_max());//89

temp.insert(91);
console.log('mode', temp.get_mode());//89
console.log('mean', temp.get_mean());//90
console.log('min', temp.get_min());//89
console.log('max', temp.get_max());//91

temp.insert(91);
console.log('mode', temp.get_mode());//91
console.log('mean', temp.get_mean());//90.33
console.log('min', temp.get_min());//89
console.log('max', temp.get_max());//91
