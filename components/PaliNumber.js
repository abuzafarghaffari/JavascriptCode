//Find the next palindrome number
//A string is a palindrome if it is read the same from forward or backward

//Basically, the approach will be, we divide the number into two halves 
//(w.r.t. its length) and return the new number which is just the first half concatenated twice.

import {useRef, useState} from 'react';

function PaliNumber(){
const inputNumber = useRef();
const [result, setResult] = useState();


    const findNearestPalindrome = () => {
        const num = inputNumber.current.value;
        const strNum = String(num);
        const half = strNum.substring(0, Math.floor(strNum.length/2));
        const reversed = half.split("").reverse().join("");
        const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
        Math.ceil(strNum.length/2))
        const results =  +(first+reversed);
        setResult(results);
        //console.log(result);
     };

//console.log(findNearestPalindrome);     
    return(<div>
<label forhtml="input">Input Nmuber</label>
<input type="number" id="input" ref = {inputNumber} />
<h1>Out Put is : {result}</h1>
<button onClick ={findNearestPalindrome}>Calculate Palindrome</button>

    </div>)

}

export default PaliNumber;