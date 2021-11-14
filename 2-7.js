function fourBasic(operator, num1, num2){
	let result;
	switch(operator){
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			if(num2 === 0)
				return "Cannot divide by zero!";
			result = num1 / num2;
			break;
	}
	return result
}

console.log(fourBasic('/', 5, 0));
console.log(fourBasic('/', 55, 11));
console.log(fourBasic('-', 5, 2));
console.log(fourBasic('-', 200, 1000));
console.log(fourBasic('+', 5, 0));
console.log(fourBasic('+', 5, 100));
console.log(fourBasic('*', 5, 9));
console.log(fourBasic('*', 5, 0));
