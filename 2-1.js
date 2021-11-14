function minSum(arr){
	let min, secondMin;
	
	if(arr[0] > arr[1]){
		min = arr[1];
		secondMin = arr[0];
	} else {
		min = arr[0];
		secondMin = arr[1];
	}
	
	for(let i=2; i<arr.length; i++){
		if(arr[i] < min){
			secondMin = min;
			min = arr[i];
		} else if(arr[i] < secondMin)
			secondMin = arr[i];
	}
	return min + secondMin;
}	

function minSum2(arr){
	arr.sort((a,b)=>a-b);
	return arr[0] +arr[1];
}

console.log("First Approach");
console.log(minSum([19,5,42,2,77]));
console.log(minSum([10, 343445353, 3453445, 3453545353453]));
console.log(minSum([10, 343445353, 0, 3453545353453]));

console.log("second Approach");
console.log(minSum2([19,5,42,2,77]));
console.log(minSum2([10, 343445353, 3453445, 3453545353453]));
console.log(minSum2([10, 343445353, 0, 3453545353453]));

