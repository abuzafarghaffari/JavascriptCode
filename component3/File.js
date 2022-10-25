
const File =()=>{

    const passwordHandler =(event)=>{
        setPassWord(event.target.value);
    }
    

    return <>
<div>
                <label htmlFor="Pass">File</label>
                <input type="file" onChange ={passwordHandler} />
            </div>
    </>
}

export default File;