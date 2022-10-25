//“find duplicate characters in a string in javascript

/*
Input:
S = "geeksforgeeks"
Output: g
Explanation: g, e, k and s are the repeating
characters. Out of these, g occurs first.
link:-https://www.codegrepper.com/code-examples/javascript/find+duplicate+characters+in+a+string+in+javascript
*/

const repeatedCharacter = (str) =>{
for(let i = 0;i <str.length -1;i++){
for(let j =i+1; j <str.length;j++){
    if(str[i] === str[j]){
        return str[i]
    }
}
}
return -1;

}

//Check if there are Duplicate Characters in the input

const repeatedCharacters = (str) =>{
    for(let i = 0;i <str.length -1;i++){
    for(let j =i+1; j <str.length;j++){
        if(str[i] === str[j]){
            return true;
        }
    }
    }
    return false;
    
    }

// count repeating letters
function count (){

    const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

    const count = {};
    
    arr.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });
    
    // 👇️ {one: 3, two: 2, three: 1}
    console.log(count);
}

