

// //Take a substitute array of size N+1 and initalize it with 0.
// Traverse the given array and increase the value of substitute[arr[i]] by one .
// Then again traverse the substitute array starting from index 1 to N.
// Since the numbers are from 1 to N in the array arr[]

// Take a substitute array of size N+1 and initalize it with 0.
// Traverse the given array and increase the value of substitute[arr[i]] by one .
// Then again traverse the substitute array starting from index 1 to N.
// If you find any index value greater than 1 that is repeating element A.

// If you find any index value = 0 then that is the missing element B.

// Dry Run: lets take the example of array[] = {3,1,2,5,3}

// The size of the array is 5

// We initialize a substitute array of size 6 with elements 0.

// Now traversing through the array 

// Found 3 at 0 indexes, increase the value of substitute array at index 3 by 1.
// Found 1 at 1 index, increase the value of substitute array at index 1 by 1.
// Found 2 at 2 indexes, increase the value of substitute array at index 2 by 1.
// Found 5 at 3 indexes, increase the value of substitute array at index 5 by 1.
// Found 3 at 4 indexes, increase the value of substitute array at index 3 by 1.

function missing(arr){

const length = arr.length;
const newArray = new Array(length+1).fill(0);
let result =[];
let a;
let b;
//console.log(newArray.length);

for(let i=0; i < arr.length; i++){

    newArray[arr[i]] +=1; //= newArray[arr[i]] +1;
}
//console.log(newArray);
for(let j=1; j < arr.length; j++){
    if (newArray[j] === 0){
        result.push({missing:j});
        
    }
    if(newArray[j] >1){
        result.push({dublicate:j});
    }
}

const sum = result.reduce((sum,num)=>{return sum+num});
console.log(result);
}

missing([1,4,3,5,3]);