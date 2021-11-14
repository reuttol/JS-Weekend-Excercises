function tribonacci(n, arr){
    for(let i=3; i<n; i++)
        arr.push(arr[i-3] + arr[i-2] + arr[i-1]);
    
    return arr;
}


console.log("First Approach");
console.log(tribonacci(6,[0, 1, 1]));
console.log(tribonacci(6, [1, 1, 1]));
console.log(tribonacci(9, [0, 1, 1]));
console.log(tribonacci(9, [1, 1, 1]));