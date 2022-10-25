// 5= 1x2x3x4x5

const { useState } = require("react");


function primeNumber(num){
const [selectedNum, setSelectedNumber] = useState(100);

const allPrimes =[];

for(let counter =2;counter < selectedNum; counter++){
    if(isPrimitive(counter)){
        allPrimes.push(counter);
    }
}

const inputHandler =(event)=>{
let num = Math.min(100000,Number(event.target.value));
setSelectedNumber(num);
}
    
return (
    <>
        <form>
            <label htmlFor="num">Your number:-</label>
            <input type="number" value={selectedNum} onChange={inputHandler} />
        </form>
        <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:
        {' '}
        <span className="prime-list">
          {allPrimes.join(', ')}
        </span>
      </p>
    </>
);
}

// Helper function that calculates whether a given
// number is prime or not.

function isPrime(n){
const max = Math.ceil(Math.sqrt(n));
if(n ===2) {
    return true;
}
for(let counter =2; counter <= max; counter++){
    if(n % counter === 0){
        return false;
    }
}
return true;
}