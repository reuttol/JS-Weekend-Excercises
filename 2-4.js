function unique(arr){
	let uni;
	
	for(let i=0; i<arr.length-1; i++){
		if(arr[i] !== arr[i+1]){
			let j;
			if(i>0) j = i-1;
			else j = i+2;

			if(arr[j] === arr[i]) 
                uni = arr[i+1];
			else uni = arr[i]
			break;
		}
	}
	return uni;
}

const compareNums = (a,b) => a - b;

const unique2 = (arr) => {
	arr.sort(compareNums);

	return arr[0] === arr[1] ? arr[arr.length-1] : arr[0];
}

console.log("First Approach");
console.log(unique([0.5,1,1,1]));
console.log(unique([1,1,1,2]));
console.log(unique([1,1,0.5,1,1]));
console.log(unique([1,2,1,1]));

console.log("Second Approach");
console.log(unique2([0.5,1,1,1]));
console.log(unique2([1,1,1,2]));
console.log(unique2([1,1,0.5,1,1]));
console.log(unique2([1,2,1,1]));
