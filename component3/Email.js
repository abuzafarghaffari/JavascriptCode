import {useState} from 'react';

const Email =(props)=>{
   

    const inputHandler =(event)=>{
        props.setInput(event.target.value);

    }
    

    return<>
        <div>
                <label htmlFor="input">Enter Email</label>
                <input type="email" onChange ={inputHandler} value={props.input}/>
            </div>
    </>
}

export default Email;