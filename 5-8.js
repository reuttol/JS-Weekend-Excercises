function longest(str){
    const words = str.split(' ');
    const lenArr = words.map((x) => x.length);
    const max = Math.max(...lenArr);

    const result = [];
    for (let i = 0; i != words.length; i++) {
        if (lenArr[i] == max) 
            result.push(words[i]);
    }
    return result;
 }
 
 console.log(longest("sentence This is a sentence sentence"));