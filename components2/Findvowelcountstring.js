/*
Find vowel count in a string - 'a', 'e', 'i', 'o', 'u'
  Input 1 - DAMCO SOLUTIONS.
Input 2 – ANTHONY

*/

function FindVowel(str) {
const strLowerCase = str.toLowerCase();
const arry = strLowerCase.split('');
const vowelArry =['a', 'e', 'i', 'o', 'u'];

const result = arry.filter((chr)=>{
return vowelArry.includes(chr);
});
console.log(result);
}

FindVowel('DAMCO SOLUTIONS');

// how to count number of vowal in string

const vowelCount = str => {
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    let count = result.length;
  
    console.log(count);
  };