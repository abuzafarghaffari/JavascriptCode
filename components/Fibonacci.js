	//Write a function fib() that takes an integer n and returns the series 
//up to nth Fibonacci number.

//A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding
// numbers.
//Fn = Fn-1 + Fn-2
import {useState,useRef} from 'react';

function Fibonacci(){
    const [fibArray, setFibArray] = useState([]);
    const inputNumber = useRef(null);
    
    const clickHandler = ()=>{
        const n = inputNumber.current.value;
        console.log(`n:${n}`);
        let f = new Array(n + 2);
        f[0]=0;
        f[1] =1;
        for(let i=2; i <= n; i++){
            f[i] = f[i-1] + f[i-2];

        }
        //console.log(f);
        setFibArray(f);
    }

    return(<div>
<label forhtml ='int'>Input The Number</label>
<input type="number" id="int" ref ={inputNumber}/>
<div>
    {fibArray.map((num,index)=><span key={index}>{num}</span>)}
</div>
<button onClick={clickHandler}>Find The series</button>
    </div>)
}

export default Fibonacci;