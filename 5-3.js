function toCamelCase(str){

    for(let i = 0, indx = str.indexOf('_', i); indx !== -1; i = indx, indx = str.indexOf('_', i)){
        const a = str.substring(0, indx)
        const b = str.charAt(++indx).toUpperCase();
        const c = str.substring(indx+1)
        str =  a+b+c;
    }

    return str;
}

function toCamelCase2(str){

   const words = str.split("_");
   const temp = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));
   temp.unshift(words[0]);

   return temp.join('');
}

console.log("First Approach");
console.log(toCamelCase("java_script_is_fun"));

console.log("Second Approach");
console.log(toCamelCase2("java_script_is_fun"));