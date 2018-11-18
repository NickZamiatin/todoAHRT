import  React from 'react'

const TodoList = (props) => {
    return (
      <div>
        <ul>
          {props.todos.map((todo, index) => {
            return(<li  key={todo.title}>
            <input type="checkbox" onChange={(event)=> props.togleCheckBox(event, index)} checked={todo.done}/>
              <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit'}}> {todo.title} </span>
              <button type="button" class="btn btn-outline-danger " onClick={()=> props.removeTodo(index)}>Remove</button>
            </li>)
          })}
          </ul>
      </div>
    )
  }
 export default TodoList