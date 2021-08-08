import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content !== "") {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
      });
    } else {
    }
  };

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input
                id="todo"
                placeholder="Create Report"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.content}></input>
              <label htmlFor="todo">Add ToDo</label>
            </div>
            <div className="input-field col s2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddToDo;
