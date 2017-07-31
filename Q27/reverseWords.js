function reverseString(arr) {
	reverse(0, arr.length-1, arr);
	let point1 = 0;
	let point2 = 0;
	while(point2 !== arr.length-1) {
		if(arr[point2] === ' ') {
			reverse(point1, point2-1, arr);
			point1 = point2+1;
			point2 = point2+1;
		}
		point2++;
	}
	reverse(point1, point2, arr);
	return arr;
}


function reverse(ind1, ind2, arr) {

	for(var i = ind1, j = ind2; i < (ind1 + ind2) / 2; i++, j--) {
		let temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
}

let arr = ['f','i','n','d',' ', 'y','o','u',' ', 'w','i','l','l',' ', 'p','a','i','n',' ', 'o','n','l','y', ' ', 'g', 'o', ' ', 'y','o', 'u', ' ',  'r', 'e', 'c', 'o', 'r', 'd', 'i', 'n', 'g','s', ' ', 's', 'e', 'c', 'u', 'r', 'i', 't', 'y', ' ' , 't', 'h', 'e', ' ',  'i', 'n', 't', 'o', ' ', 'i','f',]
let output = reverseString(arr)
console.log(output)
//'find you will pain only go you recordings security the into if'