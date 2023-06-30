import React from "react";

//all the todos inserted(added tasks)
export const Todo =({task, toggleComplete, deleteTodo, editTodo}) =>{
    return(
        <div className="Todo">
            <p 
            onClick={() => toggleComplete(task.id)}
            className={`${task.completed?'completed': ""}`}
            >{task.task}</p>
            
            <div className="btn">
                <button type="button" className="delete"
                onClick={()=>deleteTodo(task.id)}>delete</button>

                <button type="button" className="edit"
                onClick={()=>editTodo(task.id)}>edit</button>
            </div>
        </div>
    )
}