import React, { useState } from 'react';

const TodoForm = (props) =>{
const [value, setValue] = useState("")

    const changeValue = e => {
        setValue(e.target.value)
    }
    
    const onSub = e => {
        e.preventDefault();
        props.addItem(value);
        setValue("")
    }
   
return(
<form>
    <input className='subVal' type='text' placeholder='Task Name' name="itemText" value={value} onChange={changeValue}></input>
    <button onClick={onSub}>Add</button>
    <button onClick={props.onClear}>Clear</button>
</form>

)
}

export default TodoForm;