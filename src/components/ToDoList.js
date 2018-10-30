import React, { Component } from "react";

class ToDoList extends Component {
  delete(id) {
    this.props.delete(id);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.items.map((item, index) => (
          <li className="todo-item" key={index}>
            <p> {item} </p>
            <button onClick={this.delete.bind(this, item)}>
              <i className="far fa-times-circle" />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ToDoList;
