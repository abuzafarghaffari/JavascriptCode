//Write an algorithm which will tell if a group of characters can be a probable palindrome string with its different combination
//all character even = true
//all character even and one odd = true
//all character more than 1 odd = false
//https://www.youtube.com/watch?v=coheR5WXVuk



function palindromeRearranging(inputString){
    const array = inputString.split('');
    var tally =[];

array.map(element =>{
    if(tally[element]){
        tally[element]++;
    } else {
        tally[element] =1
    }
})

console.log(tally);

let oddCount =0;
for(const props in tally){
    const value = tally[props];

    if(oddCount > 1) break;
    if(value%2===1){
        oddCount +=1
    }
//console.log(ossCount);
}
return oddCount <=1;
}
palindromeRearranging("madam");