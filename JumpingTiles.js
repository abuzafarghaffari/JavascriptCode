// There are a number of tiles on the floor, each numbered with a different 
//non-negative integer.Treat this set of tiles as an array. 
// You are initially standing on the first tile. Each tile in the set represents your 
// maximum jumping distance at that position. (For example, if you are standing on 3,
// you can jump up to 3 tiles forward). Find out if you can reach the last tile.

function can_reach_end(nums){
    let n= nums.length -1;
    for(let i = n-1; i >=-1;i--){
if(nums[i] +i >= n) n =i

    }
    return n == 0;
}

console.log(can_reach_end([1, 5, 10, 15]))