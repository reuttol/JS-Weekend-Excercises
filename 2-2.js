function makeBinary(arr){
	arr.reverse();
	let base = 1;
	let result = 0;
	
	
	for(let digit of arr){
		result += (digit * base);
		base *=2;
	}
	return result;
}

const makeBinary2 = (arr) =>{
	arr.reverse();
	const powers = arr.map((num, i) => num * (2**i));

	return powers.reduce((a,b) => a+b)
}

console.log("First Approach");
console.log(makeBinary([0,0,0,1])); //1
console.log(makeBinary([0,1,0,1])); //5
console.log(makeBinary([0,0,1,1])); //3
console.log(makeBinary([1,0,0,1])); //9
console.log(makeBinary([1,1,1,1])); //15

console.log("Second Approach");
console.log(makeBinary2([0,0,0,1])); //1
console.log(makeBinary2([0,1,0,1])); //5
console.log(makeBinary2([0,0,1,1])); //3
console.log(makeBinary2([1,0,0,1])); //9
console.log(makeBinary2([1,1,1,1])); //15