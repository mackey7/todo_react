import React from 'react'

const InputsAddFilterTasks = props => {
  const {onSubmit, filterList} = props
  return (
    <div>
      <h2 className="headline">Add your task</h2>
      <form onSubmit={onSubmit}>
        <input
          id="valueInput"
          className="todo_input"
          placeholder="Your task"
        />
        <button className="todo-add-item">+Add</button>
      </form>
      <input
        className="todo-search"
        type="text"
        placeholder="Search task..."
        onChange={filterList}
      />
    </div>
  );
}

export default InputsAddFilterTasks