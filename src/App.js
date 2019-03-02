import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import InputsAddFilterTasks from "./components/InputsAddFilterTasks";
import cuid from "cuid";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    isTask: false
  };

  onSubmit = e => {
    e.preventDefault();
    const inputValue = document.getElementById("valueInput").value;
    const idTask = cuid();
    const newTask = [{ task: inputValue, id: idTask }];
    if (inputValue) {
      this.setState({
        isTask: true,
        items: [...this.state.items, ...newTask]
      });
    }
  };

  deleteTask = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id)
    }));
  };

  filterList = e => {
    const {items} = this.state
    items.filter(item => {
      return (
        item.task.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items });
  };

  render() {
    const { isTask } = this.state;
    return (
      <div className="App">
        <InputsAddFilterTasks
          onSubmit={this.onSubmit}
          filterList={this.filterList}
        />
        {isTask ? (
          <ToDoList deleteTask={this.deleteTask} items={this.state.items} />
        ) : (
          <p className="empty-task"> No tasks</p>
        )}
      </div>
    );
  }
}

export default App;
