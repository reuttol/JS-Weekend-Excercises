function findNextSquare(number){
	let sqrtNum = Math.sqrt(number);
	if(!Number.isInteger(sqrtNum)) 
		return -1;
	
	return (sqrtNum+1) ** 2;
}

function findNextSquare2(number){
	let sqrtNum = Math.sqrt(number);

	return Number.isInteger(sqrtNum) ? (sqrtNum+1)**2 : -1;
}

console.log("First Approach");
console.log(findNextSquare(625));
console.log(findNextSquare(114));

console.log("Second Approach");
console.log(findNextSquare2(625));
console.log(findNextSquare2(114));