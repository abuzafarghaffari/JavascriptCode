/*

Sort an array from lowest to highest

If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.
*/



function shortArry(arr){

 return arr.sort((a,b)=>a-b);
}
shortArry([2,5,3,9,6,10]);

//Use the same trick to sort an array descending:

function descendingArry(arr){

    return arr.sort((a,b)=>b-a);
   }
   descendingArry([2,5,3,9,6,10]);
   
   //The sort() method sorts an array alphabetically:

   function aLpabetArry(arr){

    return arr.sort();
   }
   aLpabetArry(["Banana", "Orange", "Apple", "Mango"]);

   /*
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

Sorting ascending:
   */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value