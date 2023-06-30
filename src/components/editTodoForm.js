import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) =>{

    const [value, setValue] = useState(task.task);

    //functiin that captures the value of the form
    const handleSubmit = e =>{
        e.preventDefault(); //avoid refreshing after every update
        // console.log(value);
        editTodo(value, task.id);

        setValue("");
    }

    return(
        <form className="Todoform" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value}
            className="todo-input" 
            placeholder="update tasks?"
            onChange ={(e)=>setValue(e.target.value)}
            />
            <button 
            type="submit"
            className="todo-btn">Update Task
            </button>
        </form >
    )
}