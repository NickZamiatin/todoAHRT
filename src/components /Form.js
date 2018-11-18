import React  from 'react'


const Form = (props) => {
  return (
      <div>
        <form onSubmit={ props.formSubmitted}>
         <div className="form-group has-success">
           <label className="form-control-label" htmlFor="inputSuccess1">Create Todo</label>
            <input  onChange={props.newTodoChange} type="text"  className="form-control is-valid" id="inputValid" value={props.newTodo}/>
              <br />
              <button type="submit" className="btn btn-success">Crete one todo</button>
              <span />
              <button type="button" class="btn btn-info" onClick={() => props.allDone()}>All Complete</button>
         </div>
        </form>
      </div>
  )
}

export default Form
