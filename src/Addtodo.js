import React, { Component } from "react";

class Addtodo extends Component {
  state = {
    todos: [{ content: "" }]
  };
  handlesubmit = e => {
    e.preventDefault();
    this.props.addtodo(this.state);
    this.setState({
      content: ""
    });
  };
  handlechange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <label>Add TODO:</label>
          <input
            type="text"
            onChange={this.handlechange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default Addtodo;
