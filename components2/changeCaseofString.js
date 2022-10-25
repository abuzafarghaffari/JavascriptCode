//Input a string and converts upper case letters to lower and vice versa
/*
Test Data:
console.log(swapcase('AaBbc'));
"aAbBC"

*/
swapcase = function swapcase(str){
    return str.replace(/[a-z]+ | [A-Z]+/g,function(match,chr){
 return chr? match.toUpperCase(): match.toLowerCase();
    })
}
swapcase('AaBbc');