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
          title : 'Bla',
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
              </div>
              </form>
              <ul>
               {this.state.todos.map(todo => {
                  return<li  key={todo.title}>{todo.title}</li>
                })}
              </ul>
            </main>
        </header>
      </div>
    );
  }
}

export default App;
