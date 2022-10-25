import {useState} from 'react';
import Email from './Email';
import  File from "./File";
const Form = ()=>{
    const [enteredInput, setEnteredInput] = useState("");
const [password, setPassWord] = useState("");
const [isinputValid, setInputValid] = useState(true);





const submitHandler =(event)=>{
event.preventDefault();

if(enteredInput.trim() === ""){
    setInputValid(false);
    return;
}
console.log(enteredInput);

}
    return <>
        <form onSubmit ={submitHandler}>
            <Email setInput ={setEnteredInput} input ={enteredInput} />
            {!isinputValid && <p>Input is blank</p>}
            <File setFile ={setPassWord} file ={password}/>
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Form;