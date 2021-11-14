function peopleOnTheBus(arr){
    let total = 0;
    for(station of arr){
        total += (station[0] - station[1]);
    }
    return total;
}

const peopleOnTheBus2 = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue[0] - currentValue[1], 0);

console.log("First Approach");
console.log(peopleOnTheBus([[5,0],[2,3],[5,2]]));
console.log("Second Approach");
console.log(peopleOnTheBus2([[5,0],[2,3],[5,2]]));