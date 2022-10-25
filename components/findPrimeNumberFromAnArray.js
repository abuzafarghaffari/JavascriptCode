
// to check given number is prime or not





function CheckPrime(num){

if( num <= 1){
    return false;
} else {
    for(let i = 2;i <num; i++){
      if(num % i ==0){
        return false;
      }
    }
}

return true;
}

// find prime number in array

function FindPrimeInArr(arr){

    const newArr = arr.filter((number)=>{

        

   return CheckPrime(number);
    });
    return newArr;
}
FindPrimeInArr([3, 12, 50, 23, 0]);