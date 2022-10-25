//print all Prime Numbers Between 1 to N

import {useState} from 'react';

function NprimeNumber () {
const [inputNumber, setInputNumber] = useState('');
const [primeNumberList, setPrimeNumberList] = useState([]);

const inpuHandler = (event)=>{
setInputNumber(event.target.value);
}


const getPrimeNumber = ()=>{
    let primeNumber = [];
    for(let i = 2; i < parseInt(inputNumber); i++){
        let isPrime = 1;

        for(let k =2; k <=i/2;k++){
            if(i % k ==0){

                isPrime = 0//if i is divisible by any  number than it is not prime number
            } 
        }
if(isPrime == 1){
primeNumber.push(i);
}

    }
   console.log(primeNumber);
    setPrimeNumberList(primeNumber);
};

let printPrimeNumber = primeNumberList.map((num,index) =><li key={index}>{num}</li>);

return(<div>
<label forhtml ="input">Inter Number</label> 
    <input id="input" type="number" onChange={inpuHandler}/>

{printPrimeNumber}

<button onClick={getPrimeNumber}>FindPrime Number</button>
</div>)

}


export default NprimeNumber;