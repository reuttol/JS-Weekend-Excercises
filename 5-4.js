const toWeirdCase = (str) => {
    const arr = [...str]
    const a = arr.map((char, i) => (i % 2 ? char : char.toUpperCase()));
    return a.join('');
}

console.log(toWeirdCase("weird string case"));