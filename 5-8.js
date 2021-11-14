function longest(str){
    const lenArr = str.split(' ').map((x) => x.length);
    return Math.max(...lenArr)
 }
 
 console.log(longest("This is a a sentence"));