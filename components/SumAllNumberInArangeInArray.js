//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers
// between them. The lowest number will not always come first

function sumAll(arry){
const FistNumber = arry[0];
const SecondNumber = arry[1];
let sum = 0;
if(FistNumber > SecondNumber){
    for(let i = SecondNumber; i<= FistNumber; i++){
 sum += i;
    }
    return sum;
} else {
    for(let i = FistNumber; i<= SecondNumber; i++){
        sum += i;
    }
    return sum;
}

}

sumAll([4,1])