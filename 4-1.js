function fibonacci(n, arr){
    for(let i=2; i<n; i++)
        arr.push(arr[i-2] + arr[i-1]);
    
    return arr;
}


console.log("First Approach");
console.log(fibonacci(5,[0, 1]));
console.log(fibonacci(5, [1, 1]));
console.log(fibonacci(8, [0, 1]));
console.log(fibonacci(8, [1, 1]));
