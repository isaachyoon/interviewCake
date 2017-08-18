function missingDrone() {
	//
	this.array = [];
	//when one of the company's 100 drones takes off with a delivery, the delivery's ID is added to an array
	this.delivery_id_confirmations = [];
	this.dronObj = {};

}

missingDrone.prototype.findDrone = function(arr, dronObj){
	for(var i = 0; i < arr.length; i++) {
		if(!droneObj[arr[i]]) {
			droneObj[arr[i]] = 0;
		}
		droneObj[arr[i]]++;
	}

	for(var key in droneObj) {
		if(droneObj[key] === 1) {
			return key;
		}
	}
}





