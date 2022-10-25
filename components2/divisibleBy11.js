/*
Given a list if integers, determine how many of them are
divisible by 11. If you encounter an integer in the list
that is greater than or equal to 111,return 0 regradless of how many number are divisible by 11.

Notes that 0 is divisible by 11
*/

function divisible_by_11 (arr){
console.log(arr[0]);
const newArr = arr.map((num)=>{
    if(num >= 111){
        return;
    }
if(num === 0 || num % 11 ===0){
return num;
}
});

const result = newArr.filter((num)=>num != undefined);

return result;
}
divisible_by_11([0,22,44,2]);