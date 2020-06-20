import React from 'react';
import './todo.css'
const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection">
                <div className="collection-item" key={todo.id}>
                    <span >{todo.content}  </span>
                </div>
                <i class="material-icons" onClick={() => {deleteTodo(todo.id)}}>close</i>
 
               
                </div>
            )
        })
    ) : (
        <p>Add new list </p>
    )
    return(
        <div className="todos collection">
           {todoList}
        </div>

    )
}
export default Todos