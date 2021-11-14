function shortest(str){
   const lenArr = str.split(' ').map((x) => x.length);
   return Math.min(...lenArr)
}

console.log(shortest("This is a a sentence"));