//Sum All Odd Fibonacci Numbers 
// 4th fibonacci is 1,1,2,3
function sumFib(num) {
const fibonacci = new Array(num);
let sum =0;
fibonacci[0] =1;
fibonacci[1] = 1;

//find finacci number
for(let i =2; i < num; i++){
fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

//to find odd number in fibonacci which is less than given number
const oddNumber = fibonacci.filter(item =>{
if(item %2 !==0 && item <=num){
    return item;
}
});
// sum odd fibonacci number

sum = oddNumber.reduce((prevNumber,currentNumber)=> prevNumber+currentNumber);

console.log(oddNumber);
console.log(fibonacci);
return sum;

}
sumFib(10);