//Factorialize a Number
//4!= 1x2x3x4
import {useRef,useState,UseState} from 'react';
function Factorialize (){
const inputNumber = useRef();
const [factorial, setFactorial] = useState("");

const clickHandler = ()=>{
    setFactorial(1);
const num = inputNumber.current.value;

for(let i = 1; i <= num;i++){
    setFactorial(preState => preState*i);
}
//console.log(factorial);

}

    return(
    <div>
<label forhtml="inptu">Input Number</label>
<input type="number" id="inptu" ref = {inputNumber}/>
<h1>{factorial}</h1>
<button onClick ={clickHandler}>Calculate Factorial</button>
    </div>
    );
}

export default Factorialize;