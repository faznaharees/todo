import React, { Component } from 'react';
import Todos from'./Todos';
import AddTodo from './AddTodo';
import './todo.css';


class App extends Component{ 
  state = {
    todos:[{
      id:1,content:"Make a new todolist :P"
    }
      
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=> {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo]
      this.setState({
        todos : todos
      })
    }
  render(){
    return (
     <div className="todo-app container">
      <h1 className="center green1">Todos</h1>
      <h5 className="center gray1">Create your own To-do List</h5>
      <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      <AddTodo addTodo={this.addTodo}/>
      <footer>Project by <i>faznaharees@cet.ac.in</i><br></br>Copyright &copy; 2020</footer>
  </div>
  )
}}

export default App;
