import React, { Component } from "react";
import Todos from "./Todos";
import Addtodo from "./Addtodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Submit asssignments" },
      { id: 2, content: "learn react" }
    ]
  };

  componentDidMount() {
    console.log("component mounted");
  }
  deletetodo = id => {
    console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };
  addtodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo container">
        <h1 className="center black-text">Todo's</h1>
        <Todos todos={this.state.todos} deletetodo={this.deletetodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
