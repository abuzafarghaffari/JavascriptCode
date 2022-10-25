//How to find the sum of all elements of a given array in JavaScript ?

var arr = [1,2,3,4,5];


let sum = 0;

for(let i = 0; i < arr.length; i++){

    sum += arr[i];
}

console.log(sum);

// OR

var arrs = [4, 8, 7, 13, 12]
  
// Creating variable to store the sum
var sums = 0;

// Calculation the sum using forEach
arr.forEach(x => {
    sums += x;
});
