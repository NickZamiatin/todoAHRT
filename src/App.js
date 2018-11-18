import React, { Component } from 'react';
import './App.css';
import { Form } from './components /Form';


class App extends Component {
  constructor(){
    super();
    this.state = {
        message : "Hello Nick you will be working on amazing team",
        newTodo : " ",
        todos : [{
          title : 'Inveco',
          done : false
        },
        {
          title : 'AWS',
          done : false
        },
        {
          title : 'IBM',
          done : false
        }]
    }
    // this.formSubmitted = this.formSubmitted.bind(this) other way to bind 
    // or we cab use  <form onSubmit={(event) => this.formSubmitted(event)}>
    // or this onChange={(event) => this.newTodoChange(event)}
  }

  newTodoChange (event){
    this.setState({
      newTodo : event.target.value
    })
  }

  formSubmitted(event) {
    event.preventDefault();
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  togleCheckBox(event, index){
    const todos =  [...this.state.todos];
    todos[index] = {...todos[index]}
    todos[index].done = event.target.checked
    this.setState({
      todos,
    });
  }


  removeTodo(index){
    const todos =  [...this.state.todos];
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  allDone(){
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done : true
      }
    })
    this.setState({
      todos
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="zagolovok">{this.state.message}</h1>
            <main className="container"> 
              {/* <Form /> */}
              <form onSubmit={ this.formSubmitted.bind(this)}>
              <div className="form-group has-success">
                <label className="form-control-label" htmlFor="inputSuccess1">Create Todo</label>
                <input  onChange={(event) => this.newTodoChange(event)} type="text"  className="form-control is-valid" id="inputValid" value={this.state.newTodo}/>
                <br />
                <button type="submit" className="btn btn-success">Crete one todo</button>
                <span />
              <button type="button" class="btn btn-info" onClick={() => this.allDone()}>All Complete</button>
              </div>
              </form>
              <ul>
               {this.state.todos.map((todo, index) => {
                  return(<li  key={todo.title}>
                  <input type="checkbox" onChange={(event)=> this.togleCheckBox(event, index)} checked={todo.done}/>
                    <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}> {todo.title} </span>
                    <button type="button" class="btn btn-outline-danger " onClick={()=> this.removeTodo(index)}>Remove</button>
                  </li>)
                })}
              </ul>
            </main>
        </header>
      </div>
    );
  }
}

export default App;
