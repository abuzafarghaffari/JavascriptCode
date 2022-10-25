/*
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

*/

function addTogether() {
const [first,second] = arguments;
if(typeof(first) !== 'number')
return undefined;

if(arguments.length ===1)
return (second) => addTogether(first,second);

if(typeof(second) !== 'number')
return undefined;

return first + second;

}
  
  addTogether(2);