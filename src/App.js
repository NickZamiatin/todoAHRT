import React, { Component } from 'react';
import './App.css';
import Form from './components /Form';
import TodoList from './components /TodoList';


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
              <Form 
              // here we need bind all our this 
              formSubmitted={this.formSubmitted.bind(this)}
               newTodoChange={this.newTodoChange.bind(this)} 
                newTodo={this.state.newTodo}
                allDone={this.allDone.bind(this)} 
               />
              <TodoList 
                todos={this.state.todos}
                togleCheckBox={this.togleCheckBox.bind(this)}
                removeTodo={this.removeTodo.bind(this)}
              />
            </main>
        </header>
      </div>
    );
  }
}

export default App;
