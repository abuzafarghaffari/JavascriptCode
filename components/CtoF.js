//Convert Celsius to Fahrenheit
//F= 9/5xC+32

import {useRef,useState} from 'react';
function ConvertCtoF(){
const inputTemp = useRef();
const [tempFahrenheit, setTempFahrenheit] = useState('');

const clickHandler = ()=>{
    const InputTepInCelsius = inputTemp.current.value;

    const TempInFahrenhiet = 9/5*InputTepInCelsius + 32;
    console.log(TempInFahrenhiet);
    setTempFahrenheit(TempInFahrenhiet);
}

    return (<div>
        <label forhtml="inpu">Enter Tep in Celsius</label>
        <input id="inpu" type="number" ref ={inputTemp}/>
<h1>Temp In Fahrenheit: {tempFahrenheit}</h1>
        <button onClick ={clickHandler}>Calculate Tep FahrenHite</button>
    </div>);
}

export default ConvertCtoF;