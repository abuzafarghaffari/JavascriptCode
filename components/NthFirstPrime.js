// first n prime numbers (divisble by: 1 and themselves only e.g. 2,3,5,7,11)

import {useState} from 'react';

function NprimeNumber () {
const [inputNumber, setInputNumber] = useState('');
const [primeNumberList, setPrimeNumberList] = useState([]);

const inpuHandler = (event)=>{
setInputNumber(event.target.value);
}

const getPrimeNumber = ()=>{
    let primeNumber = [];
    for(let i = 2; primeNumber.length < parseInt(inputNumber); i++){
        let flag = 0;

        for(let k =2; k <=i;k++){
            if(i % k ==0 && i > k){

                flag = 1; //if i is divisible by any small number than it is not prime number
            } else if(i % k == 0 && flag != 1){
             //setPrimeNumber(preState =>[...preState,i]);
             primeNumber.push(i);
            }
        }

    }
   // console.log(primeNumber);
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

