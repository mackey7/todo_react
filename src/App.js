import React, { Component } from "react";
import ToDoList from "./components/ToDoList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      tasks: [],
      isTask: false
    };
  }
  onChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.term) {
      this.setState({
        isTask: true,
        term: "",
        items: [...this.state.items, this.state.term]
      });
    }
  };

  delete = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id)
    }));
  };

  filterList = e => {
    let items = this.state.items;
    items = items.filter(function(item) {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items });
  };
  componentWillMount() {
    this.setState({ tasks: this.state.items });
  }
  render() {
    const isTask = this.state.isTask;
    return (
      <div className="App">
        <h2 className="headline">Add your task</h2>
        <form onSubmit={this.onSubmit}>
          <input
            className="todo_input"
            value={this.state.term}
            onChange={this.onChange}
            placeholder="Your task"
          />
          <button className="todo-add-item">+Add</button>
        </form>
        <input
          className="todo-search"
          type="text"
          placeholder="Search task..."
          onChange={this.filterList}
        />
        {isTask ? (
          <ToDoList delete={this.delete} items={this.state.items} />
        ) : (
          <p className="empty-task"> No tasks</p>
        )}
      </div>
    );
  }
}

export default App;
