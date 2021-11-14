const initials = (str) => {
    const arr = str.split(' ');
    const temp = arr.map(a => a[0].toUpperCase());
    return temp.join('.');
}

console.log(initials("reut farkash"));