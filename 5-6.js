function maskify(str){
    if(str.length < 4)
        return str;
    const invisible = str.length-4;
    const mask = '#'.repeat(invisible);
    return mask + str.substring(invisible);
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("59347685"));