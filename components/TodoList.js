//TODO list with delete function
//https://www.youtube.com/watch?v=EbnmosN64JQ

import {useState} from 'react';

function Todo(){
const[todos,setTodos] = useState([]);
const [todo,setTodo] = useState('');
// TO EDIT
const [todoEditingId,setTodoEditingId] = useState(null);
const [editingText, setEditingText] = useState("");

const inputHandler =(event)=>{

setTodo(event.target.value);
}

const sumbitHandler =(event)=>{
event.preventDefault();
const newTodo = {
    id:new Date().getTime(),
    text:todo,
    complted:false
}
setTodos([...todos,newTodo]);
setTodo('');
}

const TodoDelete =(item)=>{
const updatedTodos = [...todos].filter(todo=>todo.id !== item.id);
setTodos(updatedTodos);
    console.log(item.id);

}

const editTodo =(id)=>{
const updatedTodos =[...todos].map((todo)=>{
    if(todo.id === id){
        todo.text = editingText
    }
    return todo;
})
setTodos(updatedTodos);
setTodoEditingId(null);
setEditingText("");

}

return(<div>
<form onSubmit={sumbitHandler}>
    <input type="text" onChange={inputHandler} value={todo}/>
    <button type="submit">Add todo</button>
</form>
{todos.map(item=><div key={item.id}>

{todoEditingId ===item.id? (<input type="text" onChange ={(e)=>setEditingText(e.target.value)} value={editingText}/>)
:(<span>{item.text}</span>)}


<button onClick ={()=>TodoDelete(item)}>Delete</button>
<button onClick ={()=>setTodoEditingId(item.id)}>Editing</button>
<button onClick={()=>editTodo(item.id)}>Save Edit</button>
</div>)}

</div>
)
}

export default Todo;