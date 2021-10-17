import React, { useState } from 'react'
import TodoForm from './TodoForm'


const Todolist = () => {
    const [todoItem, setTodoItem] = useState([])
    const [todo, setTodo] = useState("")

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodoItem((item)=>{
            return [...item,todo];
        })
        
    }

    const onChange = (e)=>{
        setTodo(e.target.value)

    }
    return (
        <div className="container my-3">
            <h1>Your Todo App</h1>
            <form className="d-flex my-4">
                <input onChange={onChange} className="form-control me-2" type="text" name="goal" value={todo.goal} placeholder="Enter Your To Do" aria-label="Search" />
                <button onClick={handleSubmit} className="btn btn-primary" >Submit</button>
            </form>
            {todoItem.map((g)=>{
                return <TodoForm goal={g}/>
            })}
        </div>
    )
}

export default Todolist

