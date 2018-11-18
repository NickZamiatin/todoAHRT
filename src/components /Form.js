 import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>
        <div class="form-group has-success">
          <label class="form-control-label" for="inputSuccess1">Create Todo</label>
          <input type="text"  class="form-control is-valid" id="inputValid"/>
          <br />
          <button type="button" class="btn btn-success">Success</button>
        </div>
      </div>
    )
  }
}

export default Form
