import React from "react";

const ToDoList = props => {
  const { deleteTask } = props;
  return (
    <ul className="todo-list">
      {props.items.map((item, index) => (
        <li className="todo-item" key={index}>
          <p> {item.task} </p>
          <button onClick={() => deleteTask(item)}>
            <i className="far fa-times-circle" />
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ToDoList;
