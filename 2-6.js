const findCentury = (year) =>  Math.ceil(year/100);

console.log(findCentury(1705));
console.log(findCentury(1900));
console.log(findCentury(1601));
console.log(findCentury(2000));
console.log(findCentury(101));
console.log(findCentury(99));