function summation(number){
	let result = 0;
	while(number>0){
		result += number;
		number--;
	}
	return result;
}

function summation2(number){
	let v = [...Array(number+1).keys()];
	return v.reduce((previousValue, currentValue) => previousValue + currentValue);

}

console.log("First Approach");
console.log(summation(5));
console.log(summation(8));

console.log("Second Approach");
console.log(summation2(5));
console.log(summation2(8));