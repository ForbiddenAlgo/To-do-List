import React, { useState } from "react";

export const TodoForm = ({addTodo}) =>{

    const [value, setValue] = useState("");

    //functiin that captures the value of the form
    const handleSubmit = e =>{
        e.preventDefault(); //avoid refreshing after every update
        // console.log(value);
        addTodo(value);

        setValue("");
    }

    return(
        <form className="Todoform" onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value}
            className="todo-input" 
            placeholder="tasks?"
            onChange ={(e)=>setValue(e.target.value)}
            />
            <button 
            type="submit"
            className="todo-btn">Add Task
            </button>
        </form >
    )
}